"use client"; // temp

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { NotebookPenIcon, TrophyIcon } from "lucide-react";
import Image from "next/image";
import { ChromaButton } from "../buttons/ChromaButton";
import { H3 } from "../typography/H3";
import { H4 } from "../typography/H4";
import { P } from "../typography/P";

export function Skills() {
    return (
        <section className="space-y-10 py-10">
            <div className="bg-foreground/50 shadow-lg shadow-rose-500 py-5 px-10 rounded-lg max-w-3xl">
                <div className="flex justify-between items-center pb-2 sm:pb-5">
                    <H3 className="text-lg">FRONTEND</H3>
                    <ChromaButton className="h-6 w-24 font-semibold">
                        VIEW ALL
                    </ChromaButton>
                </div>
                <Carousel
                    opts={{
                        align: "start",
                    }}
                    plugins={[
                        Autoplay({
                            delay: 2000,
                            stopOnFocusIn: false,
                            stopOnInteraction: true,
                            stopOnMouseEnter: false,
                        }),
                    ]}
                >
                    <CarouselContent>
                        {Array.from({ length: 10 }).map((_, i) => (
                            <CarouselItem
                                key={i}
                                className="select-none basis-1/4 hover:scale-90 transition-all duration-200 cursor-pointer"
                            >
                                <Image
                                    className="aspect-square w-full h-full max-w-[120px] max-h-[120px] rounded-lg"
                                    alt="temp"
                                    src={
                                        "https://styles.redditmedia.com/t5_ufdd1/styles/communityIcon_gyjrgho7vfj31.png?width=256&s=04345b241e7138ca2c9a9e3f6b3ae12e13041638"
                                    }
                                    width={100}
                                    height={100}
                                />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="sm:scale-150" />
                    <CarouselNext className="sm:scale-150" />
                </Carousel>
                <div className="flex flex-col gap-2">
                    <H4 className="text-base text-center mt-5">NEST.JS</H4>
                    <div className="flex items-center justify-center gap-2">
                        <NotebookPenIcon className="text-background w-4 h-4" />
                        <div className="h-3.5 border border-background rounded-lg grow max-w-[400px]">
                            <div className="h-full rounded bg-gradient-to-r from-background to-rose-500 w-[50%]" />
                        </div>
                        <TrophyIcon className="text-background w-4 h-4" />
                    </div>
                    <P className="text-center max-w-[600px]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Facere, eveniet obcaecati? Odit animi quidem tempore
                        officia.
                    </P>
                </div>
            </div>
        </section>
    );
}
