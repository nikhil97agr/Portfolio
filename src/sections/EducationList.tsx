import React from "react";
import { Box, Typography } from "@mui/material";
import { NeonCard } from "../components/NeonCard";
import { Section } from "../components/Section";
import { EDUCATIONS } from "../data";


export const EducationList = () => (
    <Section id="education" title="Education">
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: 2 }}>
            {EDUCATIONS.map((ed) => (
                <NeonCard key={`${ed.school}-${ed.start}`}>
                    <Typography variant="h6" sx={{ mb: 0.5 }}>
                        {ed.school}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 1 }}>
                        {ed.degree}
                    </Typography>
                    <Typography variant="body2">
                        {ed.start} — {ed.end}
                    </Typography>
                </NeonCard>
            ))}
        </Box>
    </Section>
);