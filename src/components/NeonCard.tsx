import React from "react";
import { Card, CardContent } from "@mui/material";
import { alpha, SxProps } from "@mui/material/styles";
import { Theme } from "@emotion/react";

interface NeonCardProps {
    children: React.ReactNode;
    glow?: string;
}

export const NeonCard = (props: NeonCardProps) => {
    const { children, glow = "#9b8cff" } = props;
    return < Card
        elevation={0}
        sx={{
            background: (t) => `linear-gradient(180deg, ${alpha("#11131a", 0.7)}, ${alpha("#0b0d13", 0.9)})`,
            border: `1px solid ${alpha("#9b8cff", 0.25)}`,
            position: "relative",
            overflow: "hidden",
            maxHeight: 'max-content',
            "&:before": {
                content: '""',
                position: "absolute",
                inset: -2,
                background: `radial-gradient(1200px 200px at -10% -10%, ${alpha(glow, 0.35)}, transparent 40%), radial-gradient(800px 160px at 110% 0%, ${alpha(
                    "#ff5ea6",
                    0.25
                )}, transparent 50%)`,
                filter: "blur(40px)",
                zIndex: 0,
            },

            "& > *": { position: "relative", zIndex: 1 },
        }}
    >
        <CardContent>{children}</CardContent>
    </Card >
};
