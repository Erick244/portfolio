import { Technology } from "@/components/admin/management/technologies/table/TechnologiesTableColumns";
import { CarouselItem } from "@/components/shadcn-ui/carousel";
import { Blockquote } from "@/components/shadcn-ui/typography/Blockquote";
import { H3 } from "@/components/shadcn-ui/typography/H3";
import { getData } from "@/functions/api";
import { fetchDataWithRetry } from "@/functions/data";
import { TechnologyCard } from "../templates/technology-card";
import { TechnologyCarousel } from "./TechnologyCarousel";

export async function FrontendCarousel() {
    const technologies: Technology[] = await fetchDataWithRetry(async () => {
        return await getData("/technologies/findAllByCategory/FRONTEND", {
            next: {
                revalidate: 3600, // 1h
            },
        });
    });

    return (
        <TechnologyCarousel>
            {technologies &&
                technologies.map((tech) => (
                    <CarouselItem key={tech.id}>
                        <TechnologyCard.Root color={tech.color}>
                            <H3 className="absolute -top-3 bg-background px-1 text-lg">
                                {tech.name}
                            </H3>
                            <div className="flex justify-between ">
                                <Blockquote className="flex items-center gap-2">
                                    <span>Knowledge:</span>
                                    <TechnologyCard.Star
                                        fill
                                        toolTipText="Basic"
                                    />
                                    <TechnologyCard.Star
                                        fill={
                                            tech.knowledge === "INTERMEDIATE" ||
                                            tech.knowledge === "EXPERT"
                                        }
                                        toolTipText="Intermediate"
                                    />
                                    <TechnologyCard.Star
                                        fill={tech.knowledge === "EXPERT"}
                                        toolTipText="Expert"
                                    />
                                </Blockquote>
                                <TechnologyCard.Image
                                    imageUrl={tech.imageUrl}
                                />
                            </div>
                            <TechnologyCard.About>
                                {tech.about}
                            </TechnologyCard.About>
                        </TechnologyCard.Root>
                    </CarouselItem>
                ))}
        </TechnologyCarousel>
    );
}
