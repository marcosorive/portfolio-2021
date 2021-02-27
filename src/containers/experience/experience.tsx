import { experience_collection } from '../../content/experience'
import { freelance_collection } from '../../content/experience'
import { DateCard } from "../../components/card/dateCard";

export const Experience = () => {
    const expCards = experience_collection.map((exp) => {
        return <DateCard experience={exp} key={exp.title}/>
    }) 
    const freelanceCards = freelance_collection.map((exp) => {
        return <DateCard experience={exp} key={exp.title}/>
    }) 
    return <>{expCards}
    <h2>Freelance projects</h2>
    {freelanceCards}
    </>

}
