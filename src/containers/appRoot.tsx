
import { Presentation } from "../containers/presentation/presentation";
import { Navbar } from "../containers/navbar/navbar";
import { sections_collection } from "../content/sections";
import { Section } from "../components/section/section";

export function AppRoot(){

    const Sections = sections_collection.map((s): JSX.Element => {
        const Content = s.content
        return <Section header={s.header} navigationId={s.navigationId} key={s.header}>
            <Content/>
        </Section>
    } )    

    return <>
        <Navbar/>
        <Presentation/>
        {Sections}
    </>
}

