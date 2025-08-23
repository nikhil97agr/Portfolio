import { alpha, createTheme } from "@mui/material/styles";


export const theme = createTheme({
    palette: {
        mode: "dark",
        primary: { main: "#9b8cff" },
        secondary: { main: "#ff5ea6" },
        background: { default: "#0a0c12", paper: "#0d0f17" },
        text: { primary: "#f2f3f7", secondary: alpha("#f2f3f7", 0.75) },
    },
    typography: {
        fontFamily:
            "Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial",
        h1: { fontWeight: 700, letterSpacing: -0.5 },
        h2: { fontWeight: 700 },
        h3: { fontWeight: 700 },
        subtitle1: { opacity: 0.9 },
    },
    shape: { borderRadius: 16 },
});

