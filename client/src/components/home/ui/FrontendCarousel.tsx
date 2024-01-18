import { CarouselItem } from "@/components/shadcn-ui/carousel";
import { TechnologieCard } from "./TechnologieCard";
import { TechnologieCarousel } from "./TechnologieCarousel";

export function FrontendCarousel() {
    return (
        <TechnologieCarousel>
            <CarouselItem>
                <TechnologieCard
                    about="test"
                    experience="2 years"
                    title="JavaScript"
                    className="to-yellow-500 shadow-lg shadow-yellow-500/30"
                    imageUrl="https://itexto.com.br/wp-content/uploads/2017/08/logotipo.png"
                />
            </CarouselItem>
            <CarouselItem>
                <TechnologieCard
                    about="test"
                    experience="2 years"
                    title="CSS3"
                    className="to-blue-500 shadow-lg shadow-blue-500/30"
                    imageUrl="https://cdn.iconscout.com/icon/free/png-256/free-css3-8-1175200.png"
                />
            </CarouselItem>
            <CarouselItem>
                <TechnologieCard
                    about="test"
                    experience="2 years"
                    title="HTML5"
                    className="to-orange-500 shadow-lg shadow-orange-500/30"
                    imageUrl="https://www.falsepositives.com/wp-content/uploads/2011/01/HTML5_Logo_256.png"
                />
            </CarouselItem>
        </TechnologieCarousel>
    );
}
