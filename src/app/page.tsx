import { Introduction } from "@/components/sections/Introduction";
import { H2 } from "@/components/typography/H2";

export default function Home() {
    return (
        <div className="min-h-screen  w-full flex flex-col items-center my-10">
            <Introduction />
            <H2>PROJECTS</H2>
        </div>
    );
}
