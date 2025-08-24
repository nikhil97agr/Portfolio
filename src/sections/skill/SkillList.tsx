import { Box } from "@mui/material"
import { SKILLS } from "../../data"
import { Skill } from "./Skill"
import { Section } from "../../components/Section"


export const SkillList = () => {

    return <Section id="skills" title="Skills">
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: 2 }}>

            {SKILLS.map((skill) => {
                return <Skill {...skill} key={skill.title} />
            })}
        </Box>
    </Section>




}