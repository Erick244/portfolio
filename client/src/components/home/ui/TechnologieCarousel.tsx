"use client";

import {
    Carousel,
    CarouselContent,
    CarouselNext,
    CarouselPrevious,
} from "@/components/shadcn-ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

interface TechnologieCarouselProps {
    children: React.ReactNode;
}

export function TechnologieCarousel({ children }: TechnologieCarouselProps) {
    const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: true }));

    return (
        <Carousel
            plugins={[plugin.current]}
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
            className="w-full max-w-sm sm:max-w-lg md:max-w-xl lg:max-w-2xl"
            opts={{
                align: "center",
                loop: true,
            }}
        >
            <CarouselContent>{children}</CarouselContent>
            <CarouselPrevious className=" left-0 bg-transparent hover:bg-background/20 sm:hover:bg-secondary  sm:bg-background rounded sm:rounded-full border-r-0 sm:border-r text-foreground h-full sm:-left-12 sm:h-8" />
            <CarouselNext className="right-0 bg-transparent hover:bg-background/20 sm:hover:bg-secondary  sm:bg-background text-foreground rounded border-l-0 sm:border-l sm:rounded-full h-full sm:-right-12 sm:h-8" />
        </Carousel>
    );
}
