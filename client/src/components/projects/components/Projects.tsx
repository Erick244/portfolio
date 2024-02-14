import { Project as ProjectData } from "@/components/admin/management/projects/table/ProjectsTableColumns";
import { getData } from "@/functions/api";
import { cn } from "@/lib/utils";
import { ExternalLink, Github } from "lucide-react";
import { HTMLAttributes } from "react";
import { Project } from "../templates/project";

export async function Projects(props: HTMLAttributes<HTMLDivElement>) {
    const projects = await getData<ProjectData[]>("/projects", {
        cache: "no-store",
    });

    return (
        <div {...props} className={cn("space-y-10", props.className)}>
            {projects &&
                projects.map((project) => (
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
