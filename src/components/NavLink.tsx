import React from "react";
import { Button } from "@mui/material";
import { alpha } from "@mui/material/styles";


interface NavLinkProps {
    href: string;
    children: React.ReactNode;
}


export const NavLink = (props: NavLinkProps) => {
    const { href, children } = props;
    return (
        <Button
            variant="text"
            href={href}
            sx={{
                color: "text.primary",
                textTransform: "none",
                fontWeight: 600,
                mx: 0.5,
                "&:hover": {
                    backgroundColor: alpha("#9b8cff", 0.08),
                    boxShadow: `0 0 0 1px ${alpha("#9b8cff", 0.2)} inset`,
                },
            }}
        >
            {children}
        </Button>
    )
};