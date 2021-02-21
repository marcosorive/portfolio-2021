import { About } from '../components/about/about'
import { Contact } from "../components/contact/contact";
import { Experience } from "../components/experience/experience";
import { Interests } from "../components/interests/interests";
import { Personal } from "../components/personalProjects/personal";
import { Presentation } from "../components/presentation/presentation";

export function AppRoot(){
    return <>
        <Presentation/>
        <About/>
        <Experience/>
        <Personal/>
        <Interests/>
        <Contact/>
    </>
}