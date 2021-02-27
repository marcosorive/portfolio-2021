export type ButtonType = {
    text: string,
    url: string
}

export type CardContentType = {
    title:string,
    stack: string,
    description: string,
    buttons: ButtonType[]
    dates?: string,
    imagePath?: string;
    imageAlt?: string;
    status?: ProjectStatus;
}

export enum ProjectStatus {
    completed = "completed",
    maintenance = "maintenance",
    development = "development",
    abandoned = "abandoned"  
}