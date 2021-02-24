import { About } from "../containers/about/about";
import { Contact } from "../containers/contact/contact";
import { Experience } from "../containers/experience/experience";
import { Interests } from "../containers/interests/interests";
import { Personal } from "../containers/personalProjects/personal";
export type Section = {
    header: string
    navigationId?: string
    content: React.FC
}

export const sections_collection: Section[] = [
    {
        header: "About me 👦",
        navigationId: "section_about",
        content: About
    },
    {
        header: "Profesional Experience 👨‍💻",
        navigationId: "section_experience",
        content: Experience
    },
    {
        header: "Personal projects 👨🏻‍🔬🚀",
        navigationId: "section_projects",
        content: Personal
    },
    {
        header: "Interests 🧗‍♂️",
        content: Interests,
        navigationId: "",
    },
    {
        header: "Contact 📧",
        navigationId: "section_contact",
        content: Contact
    }
]