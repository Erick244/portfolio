import { Project } from "@/types/project.type";
import { ProjectCard } from "../project-card";

const projectsTemp: Project[] = [
    {
        name: "Project 1",
        description:
            "Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 ",
        color: "#ff0000",
        githubUrl: "https://github.com/Erick244",
        desktopImageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkfZINyTKhajKNn4gHCazn7p7D7rXTMOC2PQ&s",
        mobileImageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkfZINyTKhajKNn4gHCazn7p7D7rXTMOC2PQ&s",
        technologies: [
            {
                name: "HTML5",
                imageUrl:
                    "https://bognarjunior.wordpress.com/wp-content/uploads/2014/12/1417589451_html-256.png",
            },
            {
                name: "CSS3",
                imageUrl:
                    "https://bognarjunior.wordpress.com/wp-content/uploads/2014/12/1417589451_html-256.png",
            },
            {
                name: "JavaScript",
                imageUrl:
                    "https://bognarjunior.wordpress.com/wp-content/uploads/2014/12/1417589451_html-256.png",
            },
            {
                name: "React",
                imageUrl:
                    "https://bognarjunior.wordpress.com/wp-content/uploads/2014/12/1417589451_html-256.png",
            },
        ],
    },
    {
        name: "Project 2",
        description:
            "Description 2 Description 2 Description 2 Description 2 Description 2 Description 2 Description 2 Description 2 Description 2 Description 2 Description 2 ",
        color: "#0000ff",
        githubUrl: "https://github.com/Erick244",
        websiteUrl: "https://github.com/Erick244",
        desktopImageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkfZINyTKhajKNn4gHCazn7p7D7rXTMOC2PQ&s",
        mobileImageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkfZINyTKhajKNn4gHCazn7p7D7rXTMOC2PQ&s",
        technologies: [
            {
                name: "HTML5",
                imageUrl:
                    "https://bognarjunior.wordpress.com/wp-content/uploads/2014/12/1417589451_html-256.png",
            },
            {
                name: "CSS3",
                imageUrl:
                    "https://bognarjunior.wordpress.com/wp-content/uploads/2014/12/1417589451_html-256.png",
            },
            {
                name: "JavaScript",
                imageUrl:
                    "https://bognarjunior.wordpress.com/wp-content/uploads/2014/12/1417589451_html-256.png",
            },
            {
                name: "React",
                imageUrl:
                    "https://bognarjunior.wordpress.com/wp-content/uploads/2014/12/1417589451_html-256.png",
            },
        ],
    },
    {
        name: "Project 3",
        description:
            "Description 3 Description 3 Description 3 Description 3 Description 3 Description 3 Description 3 Description 3 Description 3 Description 3 Description 3 ",
        color: "#19f04b",
        githubUrl: "https://github.com/Erick244",
        websiteUrl: "https://github.com/Erick244",
        desktopImageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkfZINyTKhajKNn4gHCazn7p7D7rXTMOC2PQ&s",
        mobileImageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkfZINyTKhajKNn4gHCazn7p7D7rXTMOC2PQ&s",
        technologies: [
            {
                name: "HTML5",
                imageUrl:
                    "https://bognarjunior.wordpress.com/wp-content/uploads/2014/12/1417589451_html-256.png",
            },
            {
                name: "CSS3",
                imageUrl:
                    "https://bognarjunior.wordpress.com/wp-content/uploads/2014/12/1417589451_html-256.png",
            },
            {
                name: "JavaScript",
                imageUrl:
                    "https://bognarjunior.wordpress.com/wp-content/uploads/2014/12/1417589451_html-256.png",
            },
            {
                name: "React",
                imageUrl:
                    "https://bognarjunior.wordpress.com/wp-content/uploads/2014/12/1417589451_html-256.png",
            },
        ],
    },
];

export function Projects() {
    return (
        <section className="space-y-10">
            {projectsTemp.map((project, i) => (
                <ProjectCard.Root key={i} className="even:md:flex-row-reverse">
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
                            {project.technologies.map((technology, i) => (
                                <ProjectCard.Preview.Technology
                                    key={i}
                                    imageUrl={technology.imageUrl}
                                    alt={technology.name}
                                />
                            ))}
                        </ProjectCard.Preview.Technologies>
                    </ProjectCard.Preview.Root>
                    <ProjectCard.Description title={project.name}>
                        {project.description}
                    </ProjectCard.Description>
                </ProjectCard.Root>
            ))}
        </section>
    );
}
