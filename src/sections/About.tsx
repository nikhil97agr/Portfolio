import { Typography } from "@mui/material";
import { NeonCard } from "../components/NeonCard";
import { Section } from "../components/Section";


export const About = () => (
    <Section id="about" title="About Me">
        <NeonCard>
            <Typography variant="h5" sx={{ mb: 1.5 }}>
                Software Engineer • Backend
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
                Backend Software Engineer with 4+ years of experience building scalable solutions using Java, Spring Boot, and
                MySQL databases. Built REST APIs, automated server monitoring by saving 100% manual effort, and
                maintained 80%+ test coverage via SonarQube in CI/CD pipelines. Building React.js dashboards for real time observability used
                by linode, database and other Akamai cloud service customers. Strong problem solver with 2400+ LeetCode
                problems, Guardian badge (Top 1%), and top-350 global ranks in contests on LeetCode, CodeChef, and Codeforces.
            </Typography>

        </NeonCard>
    </Section>
);