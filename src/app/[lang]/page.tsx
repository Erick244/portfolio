import { AboutMe } from "@/components/sections/AboutMe";
import { Contact } from "@/components/sections/Contact";
import { Introduction } from "@/components/sections/Introduction";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { H2 } from "@/components/typography/H2";
import { LangToggle } from "@/components/utils/LangToggle";
import { Locales } from "@/enums/locales.enum";
import { getDictionary } from "./dictionaries";

export default async function Home({ params }: { params: { lang: Locales } }) {
    const dict = await getDictionary(params.lang);

    return (
        <main className="h-auto w-full flex flex-col items-center pt-10 px-5 md:px-0">
            <Introduction dict={dict.sections.introduction} />
            <H2 id="projects">{dict.sections.projects.title}</H2>
            <Projects lang={params.lang} />
            <H2 id="skills">SKILLS</H2>
            <Skills />
            <H2 id="about-me">{dict.sections.aboutMe.title}</H2>
            <AboutMe dict={dict.sections.aboutMe} />
            <H2 id="contact">{dict.sections.contact.title}</H2>
            <Contact />
            <LangToggle />
        </main>
    );
}
