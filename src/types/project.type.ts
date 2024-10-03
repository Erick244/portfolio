import { Locales } from "@/enums/locales.enum";

export type Project = {
    name: string;
    description: {
        [key in Locales]: string;
    };
    desktopImageUrl: string;
    mobileImageUrl: string;
    color: string;
    githubUrl: string;
    websiteUrl?: string;
    technologies: ProjectTechnology[];
};

type ProjectTechnology = {
    name: string;
    imageUrl: string;
};
