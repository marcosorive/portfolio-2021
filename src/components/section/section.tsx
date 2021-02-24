import { Header } from "../header/header";

import './section.scss'

interface Props {
    header: string
    navigationId?: string
    children: React.ReactChild
}

export const Section: React.FC<Props> = (props: Props) => 
<section className="section--wrapper" id={props.navigationId}>
    <hr className="section--bar"/>
    <Header>{props.header}</Header>
    <div className="section--body">{props.children}</div>
</section>