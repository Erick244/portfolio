import { Project } from "@/types/project.type";
import { ProjectCard } from "../cards/project-card";

import { ServerMotion } from "../framer-motion-server";

const projectsTemp: Project[] = [
    {
        name: "Crypto File",
        description: "A website for encrypting and decrypting files {📄}.",
        color: "#222",
        githubUrl: "https://github.com/Erick244",
        desktopImageUrl:
            "https://media.discordapp.net/attachments/905481123172339722/1290356574908321822/Captura_de_tela_2024-09-30_135447.png?ex=66fc29b5&is=66fad835&hm=561a93bba4bea2769cf8ea047e81869986a0a4bb7dbf796c44dec13b851bc258&=&format=webp&quality=lossless&width=1246&height=700",
        mobileImageUrl:
            "https://media.discordapp.net/attachments/905481123172339722/1290357760298455162/crypto-file.vercel.app_iPhone_SE.png?ex=66fc2acf&is=66fad94f&hm=d0cc4d7230cd86c4d4190d1cb79d857c690c58e1300524ce2a28450b792ccd06&=&format=webp&quality=lossless&width=393&height=700",
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
        color: "#ccc",
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
        <section className="space-y-10 py-10 overflow-hidden">
            {projectsTemp.map((project, i) => {
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
