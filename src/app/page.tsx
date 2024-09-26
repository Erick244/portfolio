import { AboutMe } from "@/components/sections/AboutMe";
import { Introduction } from "@/components/sections/Introduction";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { H2 } from "@/components/typography/H2";

export default function Home() {
    return (
        <main className="h-auto w-full flex flex-col items-center pt-10 px-5 md:px-0">
            <Introduction />
            <H2>PROJECTS</H2>
            <Projects />
            <H2>SKILLS</H2>
            <Skills />
            <H2>ABOUT-ME</H2>
            <AboutMe />
        </main>
    );
}
