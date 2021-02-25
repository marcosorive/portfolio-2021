import { ButtonType } from "../../content/types";
import './button.scss'

interface Props {
    button: ButtonType
}

export const Button: React.FC<Props> = (props: Props) => {
    return <a className="button--link" href={props.button.url} rel="noopener noreferrer" target="_blank">{props.button.text}</a>
}