import { Skill, SkillCategory } from "@/types/skill.type";
import { DynamicSkillCard } from "../client-components/DynamicSkillCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

export function Skills() {
    function filterByCategory(skills: Skill[], category: SkillCategory) {
        return skills.filter((skill) => skill.category === category);
    }

    return (
        <section className="py-10">
            <Tabs defaultValue="FULLSTACK">
                <TabsList className="bg-transparent flex justify-center items-center">
                    <TabsTrigger value="FRONTEND">Frontend</TabsTrigger>
                    <TabsTrigger value="FULLSTACK">Fullstack</TabsTrigger>
                    <TabsTrigger value="BACKEND">Backend</TabsTrigger>
                </TabsList>
                <TabsContent value="FULLSTACK">
                    <DynamicSkillCard
                        skills={filterByCategory(skills, "FULLSTACK")}
                        title="FULLSTACK"
                    />
                </TabsContent>
                <TabsContent value="FRONTEND">
                    <DynamicSkillCard
                        skills={filterByCategory(skills, "FRONTEND")}
                        title="FRONTEND"
                    />
                </TabsContent>
                <TabsContent value="BACKEND">
                    <DynamicSkillCard
                        skills={filterByCategory(skills, "BACKEND")}
                        title="BACKEND"
                    />
                </TabsContent>
            </Tabs>
        </section>
    );
}

export const skills: Skill[] = [
    {
        name: "HTML5",
        category: "FRONTEND",
        about: "HTML5 is the latest version of HTML and supports new markup language features, such as multimedia, new tags, elements, and new APIs.",
        color: "#E5532D",
        imageUrl:
            "https://cdn.iconscout.com/icon/free/png-512/free-html-3628838-3030115.png?f=webp&w=256",
        knowledge: "ADVANCED",
    },
    {
        name: "CSS3",
        category: "FRONTEND",
        about: "CSS3 is the third newest version of the famous Cascading Style Sheets (or simply CSS), where you define styles for your web project.",
        color: "#1C76B8",
        imageUrl:
            "https://cdn.iconscout.com/icon/free/png-256/free-css3-logo-icon-download-in-svg-png-gif-file-formats--css-programming-langugae-language-pack-logos-icons-1175237.png",
        knowledge: "ADVANCED",
    },
    {
        name: "JavaScript",
        category: "FULLSTACK",
        about: "JavaScript is an interpreted, structured, high-level scripting language with weak dynamic typing and multi-paradigm.",
        color: "#EFD91F",
        imageUrl:
            "https://cdn.iconscout.com/icon/free/png-512/free-javascript-3521515-2945018.png?f=webp&w=256",
        knowledge: "ADVANCED",
    },
    {
        name: "TypeScript",
        category: "FULLSTACK",
        about: "TypeScript is a strict syntactical superset of JavaScript, adding static types and making it easier to develop large-scale applications.",
        color: "#3178C6",
        imageUrl:
            "https://cdn.iconscout.com/icon/free/png-512/free-typescript-1174965.png?f=webp&w=256",
        knowledge: "ADVANCED",
    },
    {
        name: "ReactJS",
        category: "FRONTEND",
        about: "React is a JavaScript library for building user interfaces or UI components, maintained by Facebook and a community of individual developers.",
        color: "#61DAFB",
        imageUrl:
            "https://cdn.iconscout.com/icon/free/png-512/free-react-1-282599.png?f=webp&w=256",
        knowledge: "ADVANCED",
    },
    {
        name: "NextJS",
        category: "FRONTEND",
        about: "Next.js is a React-based framework that enables functionality like server-side rendering and generating static websites for React applications.",
        color: "#FFFFFF",
        imageUrl:
            "https://pulkitgangwar.gallerycdn.vsassets.io/extensions/pulkitgangwar/nextjs-snippets/1.0.2/1713018281951/Microsoft.VisualStudio.Services.Icons.Default",
        knowledge: "ADVANCED",
    },
    {
        name: "VueJS",
        category: "FRONTEND",
        about: "Vue.js is a progressive JavaScript framework used to build user interfaces and single-page applications with a focus on ease of integration.",
        color: "#4FC08D",
        imageUrl:
            "https://cdn.iconscout.com/icon/free/png-512/free-vuejs-1175052.png?f=webp&w=256",
        knowledge: "INTERMEDIATE",
    },
    {
        name: "AngularJS",
        category: "FRONTEND",
        about: "AngularJS is a structural framework for dynamic web apps, allowing you to use HTML as your template language.",
        color: "#DD1B16",
        imageUrl:
            "https://cdn.iconscout.com/icon/free/png-512/free-angular-3-226070.png?f=webp&w=256",
        knowledge: "INTERMEDIATE",
    },
    {
        name: "GraphQL",
        category: "FULLSTACK",
        about: "GraphQL is a query language for your API, and a server-side runtime for executing queries by using a type system you define for your data.",
        color: "#E10098",
        imageUrl:
            "https://cdn.iconscout.com/icon/free/png-512/free-graficoql-3521468-2944912.png?f=webp&w=256",
        knowledge: "INTERMEDIATE",
    },
    {
        name: "REST API",
        category: "FULLSTACK",
        about: "REST is an architectural style for distributed systems, often used to build APIs that interact with web services and applications.",
        color: "#0095C1",
        imageUrl:
            "https://res.cloudinary.com/practicaldev/image/fetch/s--sNAAeZbY--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_800/https://thepracticaldev.s3.amazonaws.com/i/452qob0efqpz249wrvnm.png",
        knowledge: "ADVANCED",
    },
    {
        name: "Zod",
        category: "FULLSTACK",
        about: "Zod is a TypeScript-first schema declaration and validation library, ideal for defining types and validating data across projects.",
        color: "#242938",
        imageUrl:
            "https://raw.githubusercontent.com/Edanriell/Edanriell/main/assets/icons/Zod-Dark.svg",
        knowledge: "ADVANCED",
    },
    {
        name: "Axios",
        category: "FULLSTACK",
        about: "Axios is a promise-based HTTP client for making asynchronous requests to a backend, often used in frontend and server-side applications.",
        color: "#854195",
        imageUrl:
            "https://user-images.githubusercontent.com/8939680/57233882-20344080-6fe5-11e9-9086-d20a955bed59.png",
        knowledge: "ADVANCED",
    },
    {
        name: "Tailwind CSS",
        category: "FRONTEND",
        about: "Tailwind CSS is a utility-first CSS framework that allows you to build responsive designs without writing any CSS.",
        color: "#14B4C6",
        imageUrl:
            "https://sudoaugustin.gallerycdn.vsassets.io/extensions/sudoaugustin/tailwindcss-transpiler/0.0.8/1637868312894/Microsoft.VisualStudio.Services.Icons.Default",
        knowledge: "ADVANCED",
    },
    {
        name: "Jotai",
        category: "FRONTEND",
        about: "Jotai takes an atomic approach to global React state management.",
        color: "#DFDFDF",
        imageUrl: "https://lenguajejs.com/assets/sprites/logos/jotai.webp",
        knowledge: "ADVANCED",
    },
    {
        name: "Webpack",
        category: "FRONTEND",
        about: "Webpack is a free and open-source module bundler for JavaScript.",
        color: "#1C78C0",
        imageUrl:
            "https://cdn.iconscout.com/icon/free/png-256/free-webpack-3-1174982.png",
        knowledge: "INTERMEDIATE",
    },
    {
        name: "Jest",
        category: "FULLSTACK",
        about: "Jest is a powerful JavaScript Testing Framework with a focus on simplicity.",
        color: "#85394F",
        imageUrl:
            "https://cdn.iconscout.com/icon/free/png-256/free-jest-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-vol-1-pack-logos-icons-3030000.png",
        knowledge: "INTERMEDIATE",
    },
    {
        name: "Cypress",
        category: "FRONTEND",
        about: "With Cypress, you can easily create tests for your modern web applications, debug them visually, and automatically run them in your continuous integration builds.",
        color: "#20E399",
        imageUrl:
            "https://img.stackshare.io/service/9231/thumb_retina_66c5c1a197dcd0232e41e4ab6299d119b4e165b3.png",
        knowledge: "INTERMEDIATE",
    },
    {
        name: "Figma",
        category: "FRONTEND",
        about: "Figma is a vector graphics editor and design prototyping tool primarily based on the web browser.",
        color: "#B659FF",
        imageUrl: "https://cdn-icons-png.flaticon.com/256/5968/5968705.png",
        knowledge: "INTERMEDIATE",
    },
    {
        name: "NodeJS",
        category: "BACKEND",
        about: "NodeJS is a runtime environment that allows you to execute JavaScript code server-side. It is designed for building scalable network applications.",
        color: "#8CC84B",
        imageUrl:
            "https://cdn.iconscout.com/icon/free/png-512/node-js-1174935.png",
        knowledge: "ADVANCED",
    },
    {
        name: "ExpressJS",
        category: "BACKEND",
        about: "Express is a minimal and flexible Node.js web application framework that provides a robust set of features for building web and mobile applications.",
        color: "#7B7B7B",
        imageUrl:
            "https://cdn.iconscout.com/icon/free/png-512/free-express-3-1174978.png?f=webp&w=256",
        knowledge: "ADVANCED",
    },
    {
        name: "NestJS",
        category: "BACKEND",
        about: "NestJS is a framework for building efficient, reliable and scalable server-side applications using TypeScript.",
        color: "#E0234E",
        imageUrl:
            "https://raw.githubusercontent.com/johnpapa/clean-architecture/master/clean-architecture.jpg",
        knowledge: "ADVANCED",
    },
    {
        name: "PrismaORM",
        category: "BACKEND",
        about: "Prisma is a next-generation ORM that makes it easy to access your database in TypeScript and Node.js applications.",
        color: "#2B2D42",
        imageUrl:
            "https://prisma-io.s3.amazonaws.com/1*aq4DDdWWseF9NlGlyu6f9A.png",
        knowledge: "ADVANCED",
    },
    {
        name: "Java",
        category: "BACKEND",
        about: "Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.",
        color: "#F7A03D",
        imageUrl:
            "https://cdn.iconscout.com/icon/free/png-512/free-java-2828369-2351065.png?f=webp&w=256",
        knowledge: "INTERMEDIATE",
    },
    {
        name: "Spring Boot",
        category: "BACKEND",
        about: "Spring Boot is an extension of the Spring framework that simplifies the setup and development of new Spring applications.",
        color: "#6DB33A",
        imageUrl:
            "https://www.springboottutorial.com/content/images/2020/06/Spring-Boot.png",
        knowledge: "INTERMEDIATE",
    },
    {
        name: "JUnit",
        category: "BACKEND",
        about: "JUnit is a simple framework to write repeatable tests. It is an instance of the xUnit framework that is very popular in the Java ecosystem.",
        color: "#4C9EF2",
        imageUrl:
            "https://cdn.iconscout.com/icon/free/png-512/free-junit-1-2827043.png?f=webp&w=256",
        knowledge: "INTERMEDIATE",
    },
    {
        name: "PostgreSQL",
        category: "BACKEND",
        about: "PostgreSQL is an open-source relational database management system emphasizing extensibility and SQL compliance.",
        color: "#326CE5",
        imageUrl:
            "https://cdn.iconscout.com/icon/free/png-512/free-postgresql-1174980.png?f=webp&w=256",
        knowledge: "ADVANCED",
    },
    {
        name: "MongoDB",
        category: "BACKEND",
        about: "MongoDB is a document database with the scalability and flexibility that you want with the querying and indexing that you need.",
        color: "#00943F",
        imageUrl:
            "https://cdn.iconscout.com/icon/free/png-512/free-mongodb-1174982.png?f=webp&w=256",
        knowledge: "BEGINNER",
    },
    {
        name: "Redis",
        category: "BACKEND",
        about: "Redis is an in-memory data structure store, used as a database, cache, and message broker.",
        color: "#D32D27",
        imageUrl:
            "https://cdn.iconscout.com/icon/free/png-512/free-redis-1174983.png?f=webp&w=256",
        knowledge: "BEGINNER",
    },
    {
        name: "AWS",
        category: "BACKEND",
        about: "Amazon Web Services is a subsidiary of Amazon providing on-demand cloud computing platforms and APIs to individuals, companies, and governments.",
        color: "#FF9900",
        imageUrl:
            "https://cdn.iconscout.com/icon/free/png-512/free-aws-1174950.png?f=webp&w=256",
        knowledge: "BEGINNER",
    },
    {
        name: "RabbitMQ",
        category: "BACKEND",
        about: "RabbitMQ is an open-source message broker software that facilitates communication between different parts of an application.",
        color: "#E94B30",
        imageUrl:
            "https://cdn.iconscout.com/icon/free/png-512/free-rabbitmq-1174995.png?f=webp&w=256",
        knowledge: "BEGINNER",
    },
    {
        name: "Docker",
        category: "FULLSTACK",
        about: "Docker is an open platform for developing, shipping, and running applications inside lightweight containers.",
        color: "#4C74A0",
        imageUrl:
            "https://cdn.iconscout.com/icon/free/png-512/free-docker-1174940.png?f=webp&w=256",
        knowledge: "INTERMEDIATE",
    },
    {
        name: "DDD",
        category: "BACKEND",
        about: "Domain-driven design (DDD) is an approach to software development that emphasizes collaboration between technical and domain experts.",
        color: "#3C4858",
        imageUrl:
            "https://cdn.iconscout.com/icon/free/png-512/free-ddd-3521715-2945020.png?f=webp&w=256",
        knowledge: "INTERMEDIATE",
    },
    {
        name: "Enterprise Patterns",
        category: "BACKEND",
        about: "Enterprise Patterns are design patterns that address common problems faced in enterprise applications and architectures.",
        color: "#A0B0C3",
        imageUrl:
            "https://cdn.iconscout.com/icon/free/png-512/free-design-pattern-3521864-2945130.png?f=webp&w=256",
        knowledge: "BEGINNER",
    },
    {
        name: "Clean Code",
        category: "FULLSTACK",
        about: "Clean Code is a philosophy of software development that emphasizes writing code that is easy to read, understand, and maintain.",
        color: "#A8C6E5",
        imageUrl:
            "https://cdn.iconscout.com/icon/free/png-512/free-clean-code-3521818-2945112.png?f=webp&w=256",
        knowledge: "ADVANCED",
    },
    {
        name: "CI/CD",
        category: "FULLSTACK",
        about: "CI/CD is a method to frequently deliver apps to customers by introducing automation into the stages of app development.",
        color: "#A0B0C3",
        imageUrl:
            "https://cdn.iconscout.com/icon/free/png-512/free-ci-cd-3521862-2945128.png?f=webp&w=256",
        knowledge: "BEGINNER",
    },
    {
        name: "Architectural Styles",
        category: "FULLSTACK",
        about: "Architectural styles are fundamental structural organization patterns of software systems that encapsulate particular design choices.",
        color: "#A0B0C3",
        imageUrl:
            "https://cdn.iconscout.com/icon/free/png-512/free-architecture-3521861-2945127.png?f=webp&w=256",
        knowledge: "BEGINNER",
    },
    {
        name: "Kubernetes",
        category: "BACKEND",
        about: "Kubernetes is an open-source system for automating the deployment, scaling, and management of containerized applications.",
        color: "#326CE5",
        imageUrl:
            "https://cdn.iconscout.com/icon/free/png-512/free-kubernetes-1174947.png?f=webp&w=256",
        knowledge: "BEGINNER",
    },
];
