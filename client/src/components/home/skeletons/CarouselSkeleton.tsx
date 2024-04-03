import { CarouselItem } from "@/components/shadcn-ui/carousel";
import { TechnologyCarousel } from "../ui/TechnologyCarousel";
import { TechnologyCardSkeleton } from "./TechnologyCardSkeleton";

export function CarouselSkeleton() {
    return (
        <TechnologyCarousel>
            <CarouselItem>
                <TechnologyCardSkeleton />
            </CarouselItem>
        </TechnologyCarousel>
    );
}
