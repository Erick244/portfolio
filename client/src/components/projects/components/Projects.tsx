import { Project as ProjectData } from "@/components/admin/management/projects/table/ProjectsTableColumns";
import { getData } from "@/functions/api";
import { fetchDataWithRetry } from "@/functions/data";
import { cn } from "@/lib/utils";
import { ExternalLink, Github } from "lucide-react";
import { HTMLAttributes } from "react";
import { Project } from "../templates/project";

export async function Projects(props: HTMLAttributes<HTMLDivElement>) {
    const projects: ProjectData[] = await fetchDataWithRetry(async () => {
        return await getData("/projects", {
            next: {
                revalidate: 3600, // 1h
            },
        });
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
                        <Project.Image
                            imageUrl={project.imageUrl}
                            siteUrl={project.siteUrl}
                        />
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
