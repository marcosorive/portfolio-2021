import './navbar.scss';

export function Navbar(){
    return <nav className="navbar--wrapper">
        <div className="navbar--logo">MO</div>
        <div className="navbar--links">
            <a href="#section_about">About</a>
            <a href="#section_experience">Experiece</a>
            <a href="#section_projects">Projects</a>
            <a href="#section_contact">Contact</a>
        </div>
    </nav>
}