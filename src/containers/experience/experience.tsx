import { experience_collection } from '../../content/experience'
import { freelance_collection } from '../../content/freelance'
import { ExperienceCard } from "../../components/experienceCard/experienceCard";

export const Experience = () => {
    const expCards = experience_collection.map((exp) => {
        return <ExperienceCard experience={exp}/>
    }) 
    const freelanceCards = freelance_collection.map((exp) => {
        return <ExperienceCard experience={exp}/>
    }) 
    return <>{expCards}
    <h2>Freelance projects</h2>
    {freelanceCards}
    </>

}
