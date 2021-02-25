import { experience_collection } from '../../content/experience'
import { freelance_collection } from '../../content/experience'
import { SimpleCard } from "../../components/simpleCard/simpleCard";

export const Experience = () => {
    const expCards = experience_collection.map((exp) => {
        return <SimpleCard experience={exp}/>
    }) 
    const freelanceCards = freelance_collection.map((exp) => {
        return <SimpleCard experience={exp}/>
    }) 
    return <>{expCards}
    <h2>Freelance projects</h2>
    {freelanceCards}
    </>

}
