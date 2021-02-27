import { CardContentType, ProjectStatus } from "./types";

export const featuredProjects: CardContentType[] = [
    {
        title:"Athos",
        stack: "Python, Telegram Bot API.",
        description: "Telegram bot that notifies the user when the price of an item changes.",
        buttons: [
            {
                "url": "https://github.com/marcosorive/torky-api",
                "text": "Code"
            },
            {
                "url": "https://marcosorive.github.io/torky/",
                "text": "Try it!"
            }
        ],
        status: ProjectStatus.development
    },
    {
        title:"Torky",
        stack: "Python, Flask, ReactJS, Bootstrap.",
        description: "Videogame price comparator for Spanish stores. Uses webscrapping and Amazon API.",
        imagePath: "/img/torky.png",
        imageAlt: "Torky screenshot",
        buttons: [
            {
                "url": "https://github.com/marcosorive/torky-api",
                "text": "Code"
            },
            {
                "url": "https://marcosorive.github.io/torky/",
                "text": "Try it!"
            }
        ],
        status: ProjectStatus.maintenance
    },
    {
        title:"Torky Native",
        stack: "React native",
        description: "Smartphone app for Torky, made with React Native. It's available on Google play! ",
        imagePath: "/img/torkynative.jpg",
        imageAlt: "Torky native screenshot",
        buttons: [
            {
                "url": "https://github.com/marcosorive/torky-native",
                "text": "Code"
            },
            {
                "url": "https://play.google.com/store/apps/details?id=me.orive.marcos.torkynative",
                "text": "Google Play"
            }
        ],
        status: ProjectStatus.maintenance
    },
    {
        title:"Animal Crossin Daily Tasks",
        stack: "Angular, Node.js, MongoDB",
        description: "A web app that helps Animal Crossing players organize their daily tasks when playing the game.",
        imagePath: "/img/actasks.png",
        imageAlt: "Animal crossing daily tasks screenshot",
        buttons: [
            {
                "url": "https://gitlab.com/marcosorive/acnh-daily-tasks",
                "text": "Code"
            },
            {
                "url": "https://acdailytasks.herokuapp.com",
                "text": "Try it!"
            }
        ],
        status: ProjectStatus.maintenance
    }
]

export const contributingProjects: CardContentType[] = [
    {
        title: "Data Visualizer",
        stack: "Angular, Electron",
        description: "A Desktop application that enables data visualization in a simple yet powerful way.",
        buttons: [
            {
                url:"https://github.com/Panicida/data-visualizer",
                text: "Code"
            }
        ],
        status: ProjectStatus.development
    }
];


export const otherProjects: CardContentType[] = [
    {
        title:"Responsive navbar with overlay",
        stack: "React, CSS",
        description: "A React component that consists of a customizable navbar that mutates into an overlay menu when the screen is smaller than 600px. Available in NPM.",
        buttons: [
            {
                url: "https://github.com/marcosorive/react-responsive-navbar-overlay",
                text: "Code"
            },
            {
                url: "https://www.npmjs.com/package/react-responsive-navbar-overlay",
                text: "NPM"
            }
        ],
        status: ProjectStatus.maintenance
    },
    {
        title:"Switch Calendar",
        stack: "Python, Django, MySQL, MDBootstrap.",
        description: "Web app to keep track the Nintendo Switch games releases. Users can register/log in and create their own calendar.",
        buttons: [
            {
                url: "https://github.com/marcosorive/switchcalendar",
                text: "Code"
            },
            {
                url: "https://switchcalendar.pythonanywhere.com",
                text: "Try it!"
            }
        ],
        status: ProjectStatus.completed
    },
    {
        title:"UBU ReactVR",
        stack: "Node.js with typescript, React, React Native, React360.",
        description: "My final degree project. Web, smartphone and VR/300 apps with a Node.js server. Manage and inspect 3D models in VR. Made in colaboration with <a href=\"https://hpscds.com/\" rel=\"noopener noreferrer\" target=\"_blank\">HP SCDS</a>.",
        buttons: [
            {
                url: "https://hpscds.com/observatorio_proyectos/reactvr/",
                text: "More info"
            }
        ],
        status: ProjectStatus.completed
    },
    {
        title:"HotFeet",
        stack: "C#, Unity",
        description: "Smartphones and PC videogame I'm developing with some friends.",
        buttons: [
            {
                url: "https://javiropos.visualstudio.com/_git/HotFeet",
                text: "Code"
            }
        ],
        status: ProjectStatus.abandoned
    },
    {
        title:"Astronomic picture of the day",
        stack: "ReactJS, Bootstrap",
        description: "React project that displays NASA's Astronomic picture of the day",
        buttons: [
            {
                "url": "https://github.com/marcosorive/apod-react",
                "text": "Code"
            },
            {
                "url": "https://marcosorive.github.io/apod-react/",
                "text": "Try it!"
            }
        ],
        status: ProjectStatus.completed
    },
    {
        title:"Another taco, please!",
        stack: "ReactJS, MDBootstrap.",
        description: "Frontend project for tacofancy-api, displays random taco recipes.",
        buttons: [
            {
                "url": "https://github.com/marcosorive/anothertacoplease",
                "text": "Code"
            },
            {
                "url": "https://marcosorive.github.io/anothertacoplease/",
                "text": "Try it!"
            }
        ],
        status: ProjectStatus.completed
    }
];