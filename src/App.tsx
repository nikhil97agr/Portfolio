import React from "react";
import { Box, Container, CssBaseline, Divider, ThemeProvider, Typography } from "@mui/material";
import { theme } from "./theme";
import { Header } from "./components/Header";
import { About } from "./sections/About";
import { ExperienceList } from "./sections/experience/ExperienceList";
import { EducationList } from "./sections/EducationList";
import { CompetitiveProgrammingList } from "./sections/competitive-programming/CompetitiveProgrammingList";
import { SkillList } from "./sections/skill/SkillList";


const BackgroundGlow: React.FC = () => (
  <Box
    aria-hidden
    sx={{
      position: "fixed",
      inset: 0,
      pointerEvents: "none",
      zIndex: 0,
      background:
        "radial-gradient(800px 300px at 10% 0%, rgba(155,140,255,0.18), transparent 50%), " +
        "radial-gradient(700px 260px at 100% 10%, rgba(255,94,166,0.15), transparent 55%)",
      filter: "blur(10px)",
    }}
  />
);


export const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <BackgroundGlow />
    <Header />
    <Box component="main" sx={{ position: "relative", zIndex: 1 }}>
      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 } }}>
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: 42, sm: 56, md: 72 },
            mb: 2,
            background: "linear-gradient(90deg, #b9b2ff, #ff7abf)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            letterSpacing: -1.2,
          }}
        >
          Nikhil Agrawal
        </Typography>



        <About />
        <ExperienceList />
        <SkillList />
        <CompetitiveProgrammingList />
        <EducationList />


        <Box sx={{ mt: 8, opacity: 0.7 }}>
          <Divider sx={{ mb: 2 }} />
          <Typography variant="body2">
            © {new Date().getFullYear()} Nikhil Agrawal • Built with React, TypeScript & MUI
          </Typography>
        </Box>
      </Container>
    </Box>
  </ThemeProvider>
);