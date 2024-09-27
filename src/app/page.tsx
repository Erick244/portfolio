import { AboutMe } from "@/components/sections/AboutMe";
import { Contact } from "@/components/sections/Contact";
import { Introduction } from "@/components/sections/Introduction";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { H2 } from "@/components/typography/H2";

export default function Home() {
    return (
        <main className="h-auto w-full flex flex-col items-center pt-10 px-5 md:px-0">
            <Introduction />
            <H2 id="projects">PROJECTS</H2>
            <Projects />
            <H2 id="skills">SKILLS</H2>
            <Skills />
            <H2 id="about-me">ABOUT-ME</H2>
            <AboutMe />
            <H2 id="contact">CONTACT</H2>
            <Contact />
        </main>
    );
}
