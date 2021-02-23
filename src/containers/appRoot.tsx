import { About } from '../components/about/about'
import { Contact } from "../components/contact/contact";
import { Experience } from "../components/experience/experience";
import { Interests } from "../components/interests/interests";
import { Personal } from "../components/personalProjects/personal";
import { Presentation } from "../components/presentation/presentation";
import { Navbar } from "../components/navbar/navbar";
export function AppRoot(){
    return <>
        <Navbar/>
        <Presentation/>
        <About/>
        <Experience/>
        <Personal/>
        <Interests/>
        <Contact/>
    </>
}