import './experienceCard.scss'
import { ExperienceType } from "../../content/experience";
import { ArrowDate } from "../arrowDate/arroDate";
import { Button } from "../button/button";

interface Props {
    experience: ExperienceType}

export const ExperienceCard: React.FC<Props> = (props: Props) => {
    const {experience} = props
    return <div className="exp-card--container">
                <ArrowDate dateText={experience.dates}/>
                <div className="exp-card--wrapper"> 
                    <div className="exp-card--title">{experience.title}</div>
                    <div className="exp-card--subtitle">{experience.stack}</div>
                    <div className="exp-card--description">{experience.description}</div>
                    <Button button={experience.buttons[0]}/>
                </div>
            </div>
}