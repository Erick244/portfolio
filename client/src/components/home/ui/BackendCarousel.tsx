import { Technologie } from "@/components/admin/management/technologies/table/TechnologiesTableColumns";
import { CarouselItem } from "@/components/shadcn-ui/carousel";
import { Blockquote } from "@/components/shadcn-ui/typography/Blockquote";
import { H3 } from "@/components/shadcn-ui/typography/H3";
import { TechnologieCard } from "../templates/technologie-card";
import { TechnologieCarousel } from "./TechnologieCarousel";

const backendTechnologiesTemp: Technologie[] = [
    {
        id: 1,
        name: "Java",
        about: "Java is a versatile programming language commonly used for web development.",
        category: "BACKEND",
        experience: "2 years",
        color: "#058aff",
        imageUrl: "https://cdn-icons-png.flaticon.com/256/226/226777.png",
    },
    {
        id: 2,
        name: "Node.JS",
        about: "Node.JS is based in JavaScript for backend programing.",
        category: "BACKEND",
        experience: "2 years",
        color: "#3fff05",
        imageUrl:
            "https://cdn.iconscout.com/icon/free/png-256/free-node-js-1174925.png?f=webp",
    },
    {
        id: 3,
        name: "Nest.JS",
        about: "Nest.JS is a JavaScript backend framework for productions aplications.",
        category: "BACKEND",
        experience: "2 years",
        color: "#ff0533",
        imageUrl:
            "https://static-00.iconduck.com/assets.00/nestjs-plain-icon-256x256-20nmj4pt.png",
    },
];

export function BackendCarousel() {
    return (
        <TechnologieCarousel>
            {backendTechnologiesTemp &&
                backendTechnologiesTemp.map((tech) => (
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
