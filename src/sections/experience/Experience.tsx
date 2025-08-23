import { Accordion, AccordionDetails, AccordionSummary, Box, List, ListItem, ListItemIcon, ListItemText, Radio, Typography } from "@mui/material";
import { NeonCard } from "../../components/NeonCard";
import { Experience as ExperienceProps } from "../../data";
import ExpandMore from "@mui/icons-material/ExpandMore";
import RadioButton from '@mui/icons-material/RadioButtonChecked';


export const Experience = (props: ExperienceProps) => {

    const { title, company, start, end, highlights } = props;

    return (<NeonCard key={`${company}-${start}`}>
        <Typography variant="h6" sx={{ mb: 0.5 }}>
            {company}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 1 }}>
            {title}
        </Typography>
        <Typography variant="body2">
            {start} — {end}
        </Typography>

        <Accordion sx={{ background: 'transparent', p: 0 }} >


            <AccordionSummary expandIcon={<ExpandMore />} sx={{ p: 0, flexDirection: 'row-reverse' }}>
                <Typography variant="body2">Work Highlights</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ px: 0 }}>
                <List sx={{ px: 0, maxHeight: '240px', overflow: 'auto' }}>
                    {highlights.map((highlight, index) => (
                        <ListItem key={index}>
                            <ListItemIcon><RadioButton /></ListItemIcon>
                            <ListItemText secondary={highlight} />
                        </ListItem>
                    ))}
                </List>
            </AccordionDetails>

        </Accordion>

    </NeonCard>)

}