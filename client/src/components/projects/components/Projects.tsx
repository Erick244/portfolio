import { cn } from "@/lib/utils";
import { Github, Globe } from "lucide-react";
import { HTMLAttributes } from "react";
import { Project } from "../templates/project";

// TEMP
const projectsData = [
    {
        id: 1,
        color: "from-purple-700",
        title: "BanQ",
        description:
            "This project represents the best possible solution for creating new projects for developers and developers to.",
        imageUrl:
            "https://i.pinimg.com/736x/8b/98/b0/8b98b0a6d28bbbdeda21e88e6acdc3b5.jpg",
        repoUrl: "present",
        siteUrl: "present",
    },
    {
        id: 2,
        color: "from-sky-300",
        title: "Stats",
        description:
            "This project represents the be projects for developers and developers to. This project includes information.",
        imageUrl: null,
        repoUrl: "present",
        siteUrl: null,
    },
    {
        id: 3,
        color: "from-yellow-700",
        title: "Life",
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
                    <Project.Root className={project.color} key={project.id}>
                        <Project.Informations
                            title={project.title}
                            description={project.description}
                        />
                        <Project.Image
                            imageUrl={
                                project.imageUrl ? project.imageUrl : undefined
                            }
                        />
                        <Project.Links>
                            <Project.Link
                                Icon={Github}
                                href={project.repoUrl}
                            />

                            {project.siteUrl && (
                                <Project.Link
                                    Icon={Globe}
                                    href={project.siteUrl}
                                />
                            )}
                        </Project.Links>
                    </Project.Root>
                ))}
        </div>
    );
}
