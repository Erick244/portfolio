import { Technologie } from "@/components/admin/management/technologies/table/TechnologiesTableColumns";
import { CarouselItem } from "@/components/shadcn-ui/carousel";
import { Blockquote } from "@/components/shadcn-ui/typography/Blockquote";
import { H3 } from "@/components/shadcn-ui/typography/H3";
import { getData } from "@/functions/api";
import { fetchDataWithRetry } from "@/functions/data";
import { TechnologieCard } from "../templates/technologie-card";
import { TechnologieCarousel } from "./TechnologieCarousel";

export async function FrontendCarousel() {
    const technologies: Technologie[] = await fetchDataWithRetry(async () => {
        return await getData("/technologies/findAllByCategory/FRONTEND", {
            next: {
                revalidate: 3600, // 1h
            },
        });
    });

    return (
        <TechnologieCarousel>
            {technologies &&
                technologies.map((tech) => (
                    <CarouselItem key={tech.id}>
                        <TechnologieCard.Root color={tech.color}>
                            <H3 className="absolute -top-3 bg-background px-1 text-lg">
                                {tech.name}
                            </H3>
                            <div className="flex justify-between ">
                                <Blockquote className="flex items-center gap-2">
                                    <span>Knowledge:</span>
                                    <TechnologieCard.Star
                                        fill
                                        toolTipText="Basic"
                                    />
                                    <TechnologieCard.Star
                                        fill={
                                            tech.knowledge === "INTERMEDIATE" ||
                                            tech.knowledge === "EXPERT"
                                        }
                                        toolTipText="Intermediate"
                                    />
                                    <TechnologieCard.Star
                                        fill={tech.knowledge === "EXPERT"}
                                        toolTipText="Expert"
                                    />
                                </Blockquote>
                                <TechnologieCard.Image
                                    imageUrl={tech.imageUrl}
                                />
                            </div>
                            <TechnologieCard.About>
                                {tech.about}
                            </TechnologieCard.About>
                        </TechnologieCard.Root>
                    </CarouselItem>
                ))}
        </TechnologieCarousel>
    );
}
