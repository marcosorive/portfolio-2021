import { featuredProjects } from "../../content/projects";
import { SimpleCard } from "../../components/simpleCard/simpleCard";

export const Personal = () => {
    const featured = featuredProjects.map((e) => {
        return <SimpleCard experience={e} key={e.title}/>
    })
    return <>
        {featured}
    </>
}

