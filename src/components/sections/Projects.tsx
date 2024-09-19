import { ExternalLinkIcon, GithubIcon } from "lucide-react";
import Image from "next/image";
import { ChromaButton } from "../buttons/ChromaButton";
import { H3 } from "../typography/H3";
import { P } from "../typography/P";

export function Projects() {
    return (
        <section className="space-y-10">
            <Project />
            <Project />
        </section>
    );
}

function Project() {
    return (
        <div className="relative flex flex-col items-center p-2 transition-all saturate-200 hover:scale-105 border border-background/10 rounded-lg shadow-[0_0_10px] shadow-black/20 group">
            <div className="space-x-5 invisible group-hover:visible transition-all duration-200 z-10 absolute inset-0 w-full h-full group-hover:bg-background/20 group-hover:backdrop-blur-sm rounded-lg flex justify-center items-center">
                <ChromaButton className="text-background invisible group-hover:visible h-10 w-16">
                    <GithubIcon />
                </ChromaButton>
                <ChromaButton className="text-background invisible group-hover:visible h-10 w-16">
                    <ExternalLinkIcon />
                </ChromaButton>
            </div>

            <H3 className="text-center my-2">PROJECT NAME</H3>
            <div className="relative mb-10">
                <div className="relative flex justify-center border-4 border-foreground rounded w-[200px] h-[120px]">
                    <div className="absolute bg-foreground w-6 h-1 rounded-t-none rounded" />
                    <Image
                        className="aspect-video"
                        alt="Test"
                        width={1920}
                        height={1080}
                        src={
                            "https://fastly.picsum.photos/id/784/1920/1080.jpg?hmac=-8DXqUGvoqi4XgJxLL0QPeXFKYx_5uZR_ob0HfZr-Uo"
                        }
                    />
                    <div className="absolute -bottom-3 w-[calc(100%_+_60px)] h-2 bg-foreground rounded" />
                </div>
                <div className="w-[50px] h-[100px] overflow-hidden flex justify-center absolute border-2 border-foreground rounded-lg top-16 -left-5">
                    <div className="absolute bg-foreground w-6 h-1 rounded-t-none rounded" />
                    <Image
                        alt="Test"
                        width={1080}
                        height={1920}
                        src={
                            "https://fastly.picsum.photos/id/728/1080/1920.jpg?hmac=FyeAJhWLYsAvHA-eB4O79emTN-cKaaQDYQxjHTqKEd0"
                        }
                    />
                </div>
                <div className="absolute flex justify-between items-center gap-2 left-10 -bottom-11">
                    <div className="p-1 bg-blue-500 rounded text-background shadow-lg">
                        TS
                    </div>
                    <div className="p-1 bg-yellow-500 rounded text-background shadow-lg">
                        JS
                    </div>
                    <div className="p-1 bg-blue-500 rounded text-background shadow-lg">
                        TS
                    </div>
                    <div className="p-1 bg-yellow-500 rounded text-background shadow-lg">
                        JS
                    </div>
                </div>
            </div>
            <P className="max-w-[400px] text-center">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea
                voluptates omnis facere ratione blanditiis sequi cumque dolor
                incidunt enim placeat consequatur animi aut eveniet, doloribus
                odio assumenda quas, molestias officiis.
            </P>
        </div>
    );
}
