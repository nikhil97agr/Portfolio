import { Accordion, AccordionDetails, AccordionSummary, Box, Chip, Typography } from "@mui/material";
import { NeonCard } from "../../components/NeonCard";
import { Skill as SkillProps } from "../../data";
import { alpha } from "@mui/material/styles";
import ExpandMore from '@mui/icons-material/ExpandMore';

export const Skill = (props: SkillProps) => {

    const { title, skills } = props;

    return (<NeonCard>

        <Accordion sx={{ background: 'transparent' }} defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMore />} sx={{ flexDirection: 'row-reverse', }}>
                <Typography variant="h6">
                    {title}
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                    {skills.map(({ title, image }) => (
                        <Chip key={title} label={title} variant="outlined" sx={{ px: 1, borderColor: alpha("#9b8cff", 0.5) }} icon={image ? <img src={image} alt={title} style={{ width: 16, height: 16 }} /> : undefined} />
                    ))}
                </Box>
            </AccordionDetails>

        </Accordion>



    </NeonCard>)

}