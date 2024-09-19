import { Introduction } from "@/components/sections/Introduction";
import { Projects } from "@/components/sections/Projects";
import { H2 } from "@/components/typography/H2";

export default function Home() {
    return (
        <main className="h-auto w-full flex flex-col items-center pt-10 px-5 md:px-0">
            <Introduction />
            <H2>PROJECTS</H2>
            <Projects />
        </main>
    );
}
