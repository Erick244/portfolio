import { Technologie } from "@/components/admin/management/technologies/table/TechnologiesTableColumns";
import { CarouselItem } from "@/components/shadcn-ui/carousel";
import { Blockquote } from "@/components/shadcn-ui/typography/Blockquote";
import { H3 } from "@/components/shadcn-ui/typography/H3";
import { TechnologieCard } from "../templates/technologie-card";
import { TechnologieCarousel } from "./TechnologieCarousel";

const frontendTechnologiesTemp: Technologie[] = [
    {
        id: 1,
        name: "Javascript",
        about: "JavaScript is a versatile programming language commonly used for web development.",
        category: "FRONTEND",
        experience: "2 years",
        color: "#fae102",
        imageUrl:
            "https://itexto.com.br/wp-content/uploads/2017/08/logotipo.png",
    },
    {
        id: 2,
        name: "CSS3",
        about: "CSS3 is a styled runtime built on Chrome's V8 engine.",
        category: "FRONTEND",
        experience: "2 years",
        color: "#0297fa",
        imageUrl:
            "https://cdn.iconscout.com/icon/free/png-256/free-css3-8-1175200.png",
    },
    {
        id: 3,
        name: "HTML",
        about: "HTML (Hypertext Markup Language) are fundamental technologies for web development.",
        category: "FRONTEND",
        experience: "3 years",
        color: "#fa8b02",
        imageUrl:
            "https://www.falsepositives.com/wp-content/uploads/2011/01/HTML5_Logo_256.png",
    },
];

export function FrontendCarousel() {
    return (
        <TechnologieCarousel>
            {frontendTechnologiesTemp &&
                frontendTechnologiesTemp.map((tech) => (
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
