import './header.scss'

interface Props {
    children: React.ReactChild
}

export const Header: React.FC<Props> = (props: Props) => <h1 className="header--text">{props.children}</h1>