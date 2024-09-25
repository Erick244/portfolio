import { Skill } from "@/types/skill.type";
import { DynamicSkillCard } from "../client-components/DynamicSkillCard";

export function Skills() {
    return (
        <section className="space-y-10 py-10">
            <DynamicSkillCard skills={skills} title="FRONTEND" />
        </section>
    );
}

export const skills: Skill[] = [
    // FRONTEND Skills
    {
        name: "HTML5",
        knowledge: "ADVANCED",
        category: "FRONTEND",
        imageUrl: "https://cdn.worldvectorlogo.com/logos/html-1.svg",
        about: "Markup language for structuring web pages.",
        color: "#E34F26",
    },
    {
        name: "CSS3",
        knowledge: "ADVANCED",
        category: "FRONTEND",
        imageUrl: "https://cdn.worldvectorlogo.com/logos/css-3.svg",
        about: "Stylesheet language used for describing the presentation of a web page.",
        color: "#1572B6",
    },
    {
        name: "JavaScript",
        knowledge: "ADVANCED",
        category: "FRONTEND",
        imageUrl: "https://cdn.worldvectorlogo.com/logos/javascript-1.svg",
        about: "Programming language that allows you to implement complex features on web pages.",
        color: "#F7DF1E",
    },
    {
        name: "ReactJS",
        knowledge: "ADVANCED",
        category: "FRONTEND",
        imageUrl: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
        about: "JavaScript library for building user interfaces.",
        color: "#61DAFB",
    },
    {
        name: "VueJS",
        knowledge: "INTERMEDIATE",
        category: "FRONTEND",
        imageUrl: "https://cdn.worldvectorlogo.com/logos/vue-9.svg",
        about: "JavaScript framework for building user interfaces and single-page applications.",
        color: "#42b883",
    },

    // BACKEND Skills
    {
        name: "NodeJS",
        knowledge: "ADVANCED",
        category: "BACKEND",
        imageUrl: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg",
        about: "JavaScript runtime built on Chrome's V8 JavaScript engine.",
        color: "#339933",
    },
    {
        name: "NestJS",
        knowledge: "ADVANCED",
        category: "BACKEND",
        imageUrl: "https://cdn.worldvectorlogo.com/logos/nestjs.svg",
        about: "A progressive Node.js framework for building efficient and scalable server-side applications.",
        color: "#E0234E",
    },
    {
        name: "PostgreSQL",
        knowledge: "ADVANCED",
        category: "BACKEND",
        imageUrl: "https://cdn.worldvectorlogo.com/logos/postgresql.svg",
        about: "Advanced open-source relational database management system.",
        color: "#336791",
    },
    {
        name: "MongoDB",
        knowledge: "BASIC",
        category: "BACKEND",
        imageUrl: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg",
        about: "NoSQL database for modern applications.",
        color: "#47A248",
    },
    {
        name: "Redis",
        knowledge: "BASIC",
        category: "BACKEND",
        imageUrl: "https://cdn.worldvectorlogo.com/logos/redis.svg",
        about: "Open-source, in-memory data structure store used as a database, cache, and message broker.",
        color: "#DC382D",
    },

    // FULLSTACK Skills
    {
        name: "TypeScript",
        knowledge: "ADVANCED",
        category: "FULLSTACK",
        imageUrl: "https://cdn.worldvectorlogo.com/logos/typescript.svg",
        about: "A strongly typed programming language that builds on JavaScript.",
        color: "#3178C6",
    },
    {
        name: "GraphQL",
        knowledge: "INTERMEDIATE",
        category: "FULLSTACK",
        imageUrl: "https://cdn.worldvectorlogo.com/logos/graphql.svg",
        about: "A query language for your API and a server-side runtime for executing queries.",
        color: "#E10098",
    },
    {
        name: "REST API",
        knowledge: "ADVANCED",
        category: "FULLSTACK",
        imageUrl: "https://cdn.worldvectorlogo.com/logos/rest-api-1.svg",
        about: "An architectural style for distributed hypermedia systems.",
        color: "#00CED1",
    },
    {
        name: "Prisma ORM",
        knowledge: "ADVANCED",
        category: "FULLSTACK",
        imageUrl: "https://cdn.worldvectorlogo.com/logos/prisma-3.svg",
        about: "A next-generation ORM for Node.js and TypeScript.",
        color: "#2D3748",
    },
    {
        name: "Docker",
        knowledge: "INTERMEDIATE",
        category: "FULLSTACK",
        imageUrl: "https://cdn.worldvectorlogo.com/logos/docker.svg",
        about: "A platform for developing, shipping, and running applications inside containers.",
        color: "#2496ED",
    },
];
