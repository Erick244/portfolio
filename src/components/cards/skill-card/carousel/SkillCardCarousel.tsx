"use client";

import {
    Carousel,
    CarouselContent,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

interface SkillCardCarouselRootProps {
    children: React.ReactNode;
}

export function SkillCardCarouselRoot({
    children,
}: SkillCardCarouselRootProps) {
    return (
        <Carousel
            opts={{
                align: "start",
            }}
            plugins={[
                Autoplay({
                    delay: 2000,
                }),
            ]}
        >
            <CarouselContent>{children}</CarouselContent>
            <CarouselPrevious className="sm:scale-150" />
            <CarouselNext className="sm:scale-150" />
        </Carousel>
    );
}
