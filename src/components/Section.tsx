import React from "react";
import { Box, Typography } from "@mui/material";


interface SectionProps {
    id: string;
    title: string;
    children: React.ReactNode;
}


export const Section = (props: SectionProps) => {
    const { id, title, children } = props;
    return (
        <Box id={id} sx={{ my: { xs: 6, md: 10 } }}>
            <Typography variant="h3" sx={{ mb: 3, textShadow: "0 0 30px rgba(155,140,255,0.35)" }}>
                {title}
            </Typography>
            {children}
        </Box>
    );
};
