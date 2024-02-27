import { CarouselItem } from "@/components/shadcn-ui/carousel";
import { TechnologieCarousel } from "../ui/TechnologieCarousel";
import { TechnologieCardSkeleton } from "./TechnologieCardSkeleton";

export function CarouselSkeleton() {
    return (
        <TechnologieCarousel>
            <CarouselItem>
                <TechnologieCardSkeleton />
            </CarouselItem>
        </TechnologieCarousel>
    );
}
