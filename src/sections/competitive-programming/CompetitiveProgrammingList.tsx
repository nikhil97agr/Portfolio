import { Stack } from "@mui/material";
import { Section } from "../../components/Section";
import { COMPETITIVE_BADGES } from "../../data";
import { CompetitiveProgramming } from "./CompetitiveProgramming";


export const CompetitiveProgrammingList = () => (
    <Section id="cp" title="Competitive Programming">
        <Stack gap={2}>
            {COMPETITIVE_BADGES.map((cp) => {
                return <CompetitiveProgramming key={cp.platform} {...cp} />;
            })}
        </Stack>
    </Section>
);