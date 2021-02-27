import { featuredProjects, contributingProjects, otherProjects } from "../../content/projects";
import { ContainedCardWithFooter } from "../../components/card/simpleCard";

import './personal.scss'

export const Personal = () => {
    const featured = featuredProjects.map((e) => {
        return <ContainedCardWithFooter experience={e} key={e.title} />
    })
    const contributing = contributingProjects.map((e) => {
        return <ContainedCardWithFooter experience={e} key={e.title} />
    })
    const other = otherProjects.map((e) => {
        return <ContainedCardWithFooter experience={e} key={e.title} />
    })
    return <>
        <div className="personal-projects--project-list">
            {featured}
        </div>
        <h3>I contribute to</h3>
        <div className="personal-projects--project-list">
            {contributing}
        </div>
        <h3>Other projects</h3>
        <div className="personal-projects--project-list">
            {other}
        </div>
    </>
}

