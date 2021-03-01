import './dateCard.scss'
import { CardContentType } from "../../content/types";
import { ArrowDate } from "../arrowDate/arroDate";
import { CardBody } from "../card/simpleCard";

interface Props {
    experience: CardContentType
}

export const DateCard: React.FC<Props> = (props: Props) => {
    const {experience} = props
    return <div className="date-card--container">
                <div className="date-card--date-arrow">
                    <ArrowDate dateText={experience.dates ?? ""}/>
                </div>
                <div className="date-card--content">
                    <CardBody experience={experience}/>
                </div>
            </div>
}