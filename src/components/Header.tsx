import { AppBar, Box, Drawer, IconButton, Stack, Toolbar, useMediaQuery, } from "@mui/material";
import { alpha, SxProps } from "@mui/material/styles";
import { NavLink } from "./NavLink";
import { ReactComponent as Logo } from '../assets/logo.svg';
import MenuIcon from '@mui/icons-material/Menu';
import React, { useEffect, useState } from "react";

const SECTION_IDS = ["about", "experience", "skills", "cp", "education"];

const fullScreenSelected: SxProps = {
    position: "relative",
    color: "#ffffff",                // white text for dark theme
    fontWeight: 500,
    px: 2,
    py: 1,
    "&::after": {
        content: '""',
        position: "absolute",
        bottom: 4,                     // adjust distance from text
        left: "50%",
        transform: "translateX(-50%)",
        width: 6,                      // size of the dot
        height: 6,
        borderRadius: "50%",
        backgroundColor: "#ffffff",   // color of the dot
    },
}

const smallScreenSelected: SxProps = {
    position: "relative",
    color: "#ffffff",
    fontWeight: 500,
    px: 2,
    py: 1.5,
    display: "inline-block",
    textDecoration: "none",
    "&::after": {
        content: '""',
        position: "absolute",
        bottom: -6, // adjust spacing below text
        left: "50%",
        transform: "translateX(-50%)",
        width: 6,
        height: 6,
        borderRadius: "50%",
        backgroundColor: "#ffffff",
    },
}

export const Header = () => {
    const isMobile = useMediaQuery('(max-width:700px)')
    const [open, setOpen] = React.useState(false);

    const [activeId, setActiveId] = useState("about");

    useEffect(() => {
        const handleScroll = () => {
            let currentId = activeId;

            for (const id of SECTION_IDS) {
                const el = document.getElementById(id);
                if (!el) continue;
                const rect = el.getBoundingClientRect();

                // Check if top of section is above middle of screen
                if (rect.top <= window.outerHeight / 2) {
                    currentId = id;
                }
            }

            setActiveId(currentId);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // run once on mount
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <AppBar
            position="sticky"
            color="transparent"
            elevation={0}
            sx={{
                borderBottom: `1px solid ${alpha("#9b8cff", 0.2)}`,
                backdropFilter: "blur(8px)",
                background: (t) => alpha(t.palette.background.default, 0.6),
            }}
        >
            <Toolbar sx={{ py: 1.5 }}>
                <Box flexGrow={1}>
                    <Logo height="80px" width="80px" />
                </Box>
                {
                    isMobile && (
                        <IconButton sx={{ fontSize: '50px' }} onClick={() => setOpen((prev) => !prev)}>
                            <MenuIcon fontSize="inherit" />
                        </IconButton>
                    )
                }

                {!isMobile && <><Box sx={activeId === "about" ? fullScreenSelected : {}}><NavLink href="#about"  >About</NavLink></Box>
                    <Box sx={activeId === "experience" ? fullScreenSelected : {}}><NavLink href="#experience" >Experience</NavLink></Box>
                    <Box sx={activeId === "skills" ? fullScreenSelected : {}}><NavLink href='#skills' >Skills</NavLink></Box>
                    <Box sx={activeId === "cp" ? fullScreenSelected : {}}><NavLink href="#cp" >Competitive Programming</NavLink></Box>
                    <Box sx={activeId === "education" ? fullScreenSelected : {}}><NavLink href="#education" >Education</NavLink></Box></>}


                <Drawer
                    anchor="right"
                    open={open && isMobile}
                    onClose={() => setOpen(false)}
                >
                    <Box
                        sx={{ width: 250 }}
                        role="presentation"
                        onClick={() => setOpen(false)}
                        onKeyDown={() => setOpen(false)}
                    >
                        <Stack spacing={2} sx={{ p: 2, textAlign: 'center' }} >
                            <Box sx={activeId === "about" ? smallScreenSelected : {}}><NavLink href="#about"  >About</NavLink></Box>
                            <Box sx={activeId === "experience" ? smallScreenSelected : {}}><NavLink href="#experience" >Experience</NavLink></Box>
                            <Box sx={activeId === "skills" ? smallScreenSelected : {}}><NavLink href='#skills' >Skills</NavLink></Box>
                            <Box sx={activeId === "cp" ? smallScreenSelected : {}}><NavLink href="#cp" >Competitive Programming</NavLink></Box>
                            <Box sx={activeId === "education" ? smallScreenSelected : {}}><NavLink href="#education" >Education</NavLink></Box>
                        </Stack>
                    </Box>
                </Drawer>
            </Toolbar>
        </AppBar>)
};