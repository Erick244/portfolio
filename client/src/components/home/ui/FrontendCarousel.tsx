import { Technologie } from "@/components/admin/management/technologies/table/TechnologiesTableColumns";
import { CarouselItem } from "@/components/shadcn-ui/carousel";
import { Blockquote } from "@/components/shadcn-ui/typography/Blockquote";
import { H3 } from "@/components/shadcn-ui/typography/H3";
import { getData } from "@/functions/api";
import { TechnologieCard } from "../templates/technologie-card";
import { TechnologieCarousel } from "./TechnologieCarousel";

export async function FrontendCarousel() {
    const technologies = await getData<Technologie[]>(
        "/technologies/findAllByCategory/FRONTEND",
        { cache: "no-store" }
    );

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
                                <Blockquote>
                                    Experience: {tech.experience}
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
