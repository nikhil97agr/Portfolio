import { Accordion, AccordionDetails, AccordionSummary, Link, Typography } from "@mui/material";
import { CompetitiveProgramming as CompetitiveProgrammingProps } from "../../data";
import { NeonCard } from "../../components/NeonCard";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { BestPerformanceList } from "./BestPerformanceList";

export const CompetitiveProgramming = (props: CompetitiveProgrammingProps) => {
    const { platform, url, currentRating, maxRating, currentRank, maxRank, problems, bestPerformance } = props;
    return (
        <NeonCard>
            <Typography variant="h6" sx={{ mb: 1 }}>
                {platform}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                <Link href={url} target="_blank" sx={{ textDecoration: "none" }} rel="noopener">
                    Profile
                </Link>
            </Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
                Current Rating: {currentRating}, {currentRank}
            </Typography>
            <Typography variant="body2">
                Max Rating: {maxRating}, {maxRank}
            </Typography>
            {
                bestPerformance && bestPerformance.length > 0 && (
                    <Accordion sx={{ background: 'transparent', p: 0 }}>
                        <AccordionSummary expandIcon={<ExpandMore />} sx={{ p: 0, flexDirection: 'row-reverse' }}>Best Performance</AccordionSummary>
                        <AccordionDetails sx={{ p: 0 }}>
                            <BestPerformanceList performances={bestPerformance} />
                        </AccordionDetails>
                    </Accordion>
                )
            }
        </NeonCard>
    );
};
