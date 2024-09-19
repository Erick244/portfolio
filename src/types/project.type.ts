export type Project = {
    name: string;
    description: string;
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
