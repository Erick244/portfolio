import { CarouselItem } from "@/components/shadcn-ui/carousel";
import { TechnologieCard } from "./TechnologieCard";
import { TechnologieCarousel } from "./TechnologieCarousel";

export function BackendCarousel() {
    return (
        <TechnologieCarousel>
            <CarouselItem>
                <TechnologieCard
                    about="test"
                    experience="2 years"
                    title="Java"
                    className="to-blue-300 shadow-lg shadow-blue-300/30"
                    imageUrl="https://cdn-icons-png.flaticon.com/256/226/226777.png"
                />
            </CarouselItem>
            <CarouselItem>
                <TechnologieCard
                    about="test"
                    experience="2 years"
                    title="Node.JS"
                    className="to-lime-500 shadow-lg shadow-lime-500/30"
                    imageUrl="https://cdn.iconscout.com/icon/free/png-256/free-node-js-1174925.png?f=webp"
                />
            </CarouselItem>
            <CarouselItem>
                <TechnologieCard
                    about="test"
                    experience="2 years"
                    title="Nest.JS"
                    className="to-pink-800 shadow-lg shadow-pink-800/30"
                    imageUrl="https://static-00.iconduck.com/assets.00/nestjs-plain-icon-256x256-20nmj4pt.png"
                />
            </CarouselItem>
        </TechnologieCarousel>
    );
}
