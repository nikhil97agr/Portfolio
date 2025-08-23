import React from "react";
import { Box, Chip, Divider, Typography } from "@mui/material";
import { NeonCard } from "../components/NeonCard";
import { Section } from "../components/Section";
import { alpha } from "@mui/material/styles";


export const About = () => (
    <Section id="about" title="About Me">
        <NeonCard>
            <Typography variant="h5" sx={{ mb: 1.5 }}>
                Software Engineer • Backend
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
                Software engineer with 5 years of experience in building scalable backend solutions, UI, automation tools, and customer-facing monitoring solutions. I specialize in Java development and delivering high-impact backend services with a strong focus on code quality, reusability, scalability, and performance.
            </Typography>
            {/* <Divider sx={{ my: 2 }} />
            <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                {["React", "TypeScript", "Java", "Spring Boot", "Redis", "PostgreSQL", "AWS"].map((k) => (
                    <Chip key={k} label={k} variant="outlined" sx={{ borderColor: alpha("#9b8cff", 0.5) }} />
                ))}
            </Box> */}
        </NeonCard>
    </Section>
);