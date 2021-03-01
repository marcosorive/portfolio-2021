import './simpleCard.scss'
import { CardContentType } from "../../content/types";
import { Button } from "../button/button";

interface Props {
    experience: CardContentType
}

export const CardBody: React.FC<Props> = (props: Props) => {
    const { experience } = props
    const buttons = experience.buttons.map((button) => {
        return <Button button={button} key={button.url} />
    });
    return <div className="simple-card--body">
        <img className="simple-card--image" src={experience.imagePath} alt={experience.imageAlt} />
        <div className="simple-card--title">{experience.title}</div>
        <div className="simple-card--subtitle">{experience.stack}</div>
        <hr className="simple-card--bar" />
        <div className="simple-card--description" dangerouslySetInnerHTML={{ __html: experience.description }}></div>
        {buttons}
    </div>
}


export const SimpleCard: React.FC<Props> = (props: Props) => {
    return  <div className="simple-card--wrapper">
                <CardBody experience={props.experience} />
            </div>
}


export const SimpleCardWithFooter: React.FC<Props> = (props: Props) => {
    const { experience } = props
    const statusClassname: string = experience.status ? "simple-card--status__".concat(experience.status.toString()) : "";
    const statusText: string = experience.status ?? "";

    return <div className="simple-card--wrapper">
        <CardBody experience={experience} />
        <div className="simple-card--footer">
            <span className={statusClassname}>{statusText}</span>
        </div>
    </div>
}


export const ContainedCardWithFooter: React.FC<Props> = (props: Props) => {
    return <div className="simple-card--container">
        <SimpleCardWithFooter experience={props.experience} />
    </div>
}

export const ContainedCard: React.FC<Props> = (props: Props) => {
    return  <div className="simple-card--container">
                <div className="simple-card--wrapper">
                <CardBody experience={props.experience} />
                </div>
            </div>
}