import { Project as ProjectData } from "@/components/admin/management/projects/table/ProjectsTableColumns";
import { cn } from "@/lib/utils";
import { ExternalLink, Github } from "lucide-react";
import { HTMLAttributes } from "react";
import { Project } from "../templates/project";

// TEMP
const projectsData: ProjectData[] = [
    {
        id: 1,
        color: "#6105ff",
        name: "BanQ",
        description:
            "This project represents the best possible solution for creating new projects for developers and developers to.",
        imageUrl:
            "https://i.pinimg.com/736x/8b/98/b0/8b98b0a6d28bbbdeda21e88e6acdc3b5.jpg",
        repoUrl: "present",
        siteUrl: "present",
    },
    {
        id: 2,
        color: "#05b4ff",
        name: "Stats",
        description:
            "This project represents the be projects for developers and developers to. This project includes information.",
        imageUrl: null,
        repoUrl: "present",
        siteUrl: null,
    },
    {
        id: 3,
        color: "#ffbc05",
        name: "Life",
        description: "This project represents developers and developers to.",
        imageUrl:
            "https://sujeitoprogramador.com/wp-content/uploads/2020/12/Screenshot_1.png",
        repoUrl: "present",
        siteUrl: "present",
    },
];

export function Projects(props: HTMLAttributes<HTMLDivElement>) {
    return (
        <div {...props} className={cn("space-y-10", props.className)}>
            {projectsData &&
                projectsData.map((project) => (
                    <Project.Root color={project.color} key={project.id}>
                        <Project.Informations
                            title={project.name}
                            description={project.description}
                        />
                        <Project.Image imageUrl={project.imageUrl} />
                        <Project.Links>
                            <Project.Link
                                Icon={Github}
                                href={project.repoUrl}
                            />

                            {project.siteUrl && (
                                <Project.Link
                                    Icon={ExternalLink}
                                    href={project.siteUrl}
                                />
                            )}
                        </Project.Links>
                    </Project.Root>
                ))}
        </div>
    );
}
