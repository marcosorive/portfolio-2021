import './experienceCard.scss'
import { ExperienceType } from "../../content/experience";
import { ArrowDate } from "../arrowDate/arroDate";

interface Props {
    experience: ExperienceType}

export const ExperienceCard: React.FC<Props> = (props: Props) => {
    const {experience} = props
    return <div className="exp-card--container">
                <ArrowDate dateText={experience.dates}/>
                <div className="exp-card--wrapper"> 
                    <div className="exp-card--header">{experience.title}</div>
                    <div>{experience.description}</div>
                    <div>{experience.stack}</div>
                    <div>{experience.buttons[0].url}</div>
                </div>
            </div>
}