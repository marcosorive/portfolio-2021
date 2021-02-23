import './presentation.scss'
export function Presentation() {
    return <section className="presentation--container">
        <div className="presentation--text-wrapper">
            <h1>Hello! 👋 I'm <b>Marcos Orive</b></h1>
            <h2>I'm a software developer based in Spain</h2>
            <div className="presentation--logos-wrapper">
                <img src="/img/Github-32px.png" alt="Github logo"/>
                <img src="/img/Twitter-32px.png" alt="Twitter logo"/>
                <img src="/img/Linkedin-32px.png" alt="LinkedIn logo"/>
            </div>
        </div>
    </section>
}