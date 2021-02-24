import './arrowDate.scss'

interface Props {
    dateText: string
}

export const ArrowDate: React.FC<Props> = (props: Props) => {
    return <>
    <div className="arrow--wrapper">
        {props.dateText}
    </div></>
}   