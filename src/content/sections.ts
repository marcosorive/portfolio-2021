import { About } from "../components/about/about";
import { Contact } from "../components/contact/contact";
import { Experience } from "../components/experience/experience";
import { Interests } from "../components/interests/interests";
import { Personal } from "../components/personalProjects/personal";
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
        navigationId: "section_experiencet",
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