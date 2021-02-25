import './simpleCard.scss'
import { CardContentType } from "../../content/types";
import { ArrowDate } from "../arrowDate/arroDate";
import { Button } from "../button/button";

interface Props {
    experience: CardContentType
}

export const SimpleCard: React.FC<Props> = (props: Props) => {
    const {experience} = props
    return <div className="exp-card--container">
                <ArrowDate dateText={experience.dates ?? ""}/>
                <div className="exp-card--wrapper"> 
                    <img  src={experience.imagePath} alt={experience.imageAlt}/>
                    <div className="exp-card--title">{experience.title}</div>
                    <div className="exp-card--subtitle">{experience.stack}</div>
                    <hr className="exp-card--bar"/>
                    <div className="exp-card--description">{experience.description}</div>
                    <Button button={experience.buttons[0]}/>
                </div>
            </div>
}