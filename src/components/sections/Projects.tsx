import { ProjectCard } from "../cards/project-card";

import { projects } from "@/data/projects.data";
import { ServerMotion } from "../framer-motion-server";

export function Projects() {
    return (
        <section className="space-y-10 py-10 overflow-hidden">
            {projects.map((project, i) => {
                const isEven = i % 2 !== 0;

                return (
                    <ServerMotion.div
                        initial={{
                            opacity: 0,
                            x: isEven ? "-100px" : "100px",
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                        }}
                        transition={{
                            duration: 1,
                            ease: "easeInOut",
                        }}
                        viewport={{ once: true }}
                        key={i}
                    >
                        <ProjectCard.Root
                            key={i}
                            isEven={isEven}
                            color={project.color}
                        >
                            <ProjectCard.Links
                                githubUrl={project.githubUrl}
                                websiteUrl={project.websiteUrl}
                            />

                            <ProjectCard.Title className="md:hidden">
                                {project.name}
                            </ProjectCard.Title>
                            <ProjectCard.Preview.Root>
                                <ProjectCard.Preview.Desktop
                                    alt={project.name}
                                    imageUrl={project.desktopImageUrl}
                                />

                                <ProjectCard.Preview.Mobile
                                    alt={project.name}
                                    imageUrl={project.mobileImageUrl}
                                />

                                <ProjectCard.Preview.Technologies>
                                    {project.technologies.map(
                                        (technology, i) => (
                                            <ProjectCard.Preview.Technology
                                                key={i}
                                                imageUrl={technology.imageUrl}
                                                alt={technology.name}
                                            />
                                        )
                                    )}
                                </ProjectCard.Preview.Technologies>
                            </ProjectCard.Preview.Root>
                            <ProjectCard.Description title={project.name}>
                                {project.description}
                            </ProjectCard.Description>
                        </ProjectCard.Root>
                    </ServerMotion.div>
                );
            })}
        </section>
    );
}
