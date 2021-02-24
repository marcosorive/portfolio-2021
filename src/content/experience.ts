import { Button } from "./Button";

export type ExperienceType = {
    title:string,
    stack: string,
    description: string,
    dates: string,
    buttons: Button[]
}

export const experience_collection = [
    {
        title:"Adidas",
        stack: "Software developer",
        description: "Working on Content delivery. Node.js and React.",
        dates:"June 2020 - Now",
        buttons: [
            {
                "text": "Visit",
                "url": "https://adidas.com"
            }
        ]
    },
    {
        title:"HP SCDS",
        stack:"Software engineer.",
        description: "Developing software for large format printers.",
        dates:"March 2019 - May 2020",
        buttons: [
            {
                "text": "Visit",
                "url": "https://hpscds.com/ "
            }
        ]
    },
    {
        title:"CSA",
        stack: "Software developer (Internship)",
        description: "Worked in a legacy ticketing system.",
        dates:"Sept. 2018 - March 2019",
        buttons: [
            {
                "text": "Visit",
                "url": "https://www.csa.es/"
            }
        ]
    }
]