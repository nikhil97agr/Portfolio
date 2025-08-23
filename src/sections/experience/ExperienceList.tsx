import React from "react";
import { Box } from "@mui/material";
import { Section } from "../../components/Section";
import { EXPERIENCES } from "../../data";
import { Experience } from "./Experience";


export const ExperienceList = () => (
    <Section id="experience" title="Experience">
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: 2 }}>
            {EXPERIENCES.map((exp) => (
                <Experience {...exp} key={`${exp.company}`} />
            ))}
        </Box>
    </Section>
);