import { AppBar, Box, Toolbar, } from "@mui/material";
import { alpha } from "@mui/material/styles";
import { NavLink } from "./NavLink";
import { ReactComponent as Logo } from '../assets/logo.svg';

export const Header = () => (
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

            <NavLink href="#about">About</NavLink>
            <NavLink href="#experience">Experience</NavLink>
            <NavLink href="#education">Education</NavLink>
            <NavLink href="#cp">Competitive Programming</NavLink>
        </Toolbar>
    </AppBar>
);