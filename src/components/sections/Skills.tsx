import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { NotebookPenIcon, TrophyIcon } from "lucide-react";
import Image from "next/image";
import { H3 } from "../typography/H3";
import { H4 } from "../typography/H4";
import { P } from "../typography/P";
import { Button } from "../ui/button";

export function Skills() {
    return (
        <section className="space-y-10 py-10">
            <div className="bg-foreground/50 shadow-lg shadow-rose-500 py-5 px-10 rounded-lg">
                <div className="flex justify-between items-center pb-2">
                    <H3 className="text-lg">FRONTEND</H3>
                    <Button className="h-6">VIEW ALL</Button>
                </div>
                <Carousel>
                    <CarouselContent>
                        <CarouselItem className="basis-1/4">
                            <Image
                                className="aspect-square w-[55px] h-[55px] rounded-lg"
                                alt="temp"
                                src={
                                    "https://styles.redditmedia.com/t5_ufdd1/styles/communityIcon_gyjrgho7vfj31.png?width=256&s=04345b241e7138ca2c9a9e3f6b3ae12e13041638"
                                }
                                width={100}
                                height={100}
                            />
                        </CarouselItem>
                        <CarouselItem className="basis-1/4">
                            <Image
                                className="aspect-square w-[55px] h-[55px] rounded-lg"
                                alt="temp"
                                src={
                                    "https://styles.redditmedia.com/t5_ufdd1/styles/communityIcon_gyjrgho7vfj31.png?width=256&s=04345b241e7138ca2c9a9e3f6b3ae12e13041638"
                                }
                                width={100}
                                height={100}
                            />
                        </CarouselItem>
                        <CarouselItem className="basis-1/4">
                            <Image
                                className="aspect-square w-[55px] h-[55px] rounded-lg"
                                alt="temp"
                                src={
                                    "https://styles.redditmedia.com/t5_ufdd1/styles/communityIcon_gyjrgho7vfj31.png?width=256&s=04345b241e7138ca2c9a9e3f6b3ae12e13041638"
                                }
                                width={100}
                                height={100}
                            />
                        </CarouselItem>
                        <CarouselItem className="basis-1/4">
                            <Image
                                className="aspect-square w-[55px] h-[55px] rounded-lg"
                                alt="temp"
                                src={
                                    "https://styles.redditmedia.com/t5_ufdd1/styles/communityIcon_gyjrgho7vfj31.png?width=256&s=04345b241e7138ca2c9a9e3f6b3ae12e13041638"
                                }
                                width={100}
                                height={100}
                            />
                        </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
                <div className="space-y-2">
                    <H4 className="text-base text-center mt-5">NEST.JS</H4>
                    <div className="flex items-center gap-2">
                        <NotebookPenIcon className="text-background w-4 h-4" />
                        <div className="h-3.5 border border-background rounded-lg grow">
                            <div className="h-full rounded bg-gradient-to-r from-background to-rose-500 w-[50%]" />
                        </div>
                        <TrophyIcon className="text-background w-4 h-4" />
                    </div>
                    <P className="text-center">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Facere, eveniet obcaecati? Odit animi quidem tempore
                        officia.
                    </P>
                </div>
            </div>
        </section>
    );
}
