"use client";

import {
    Carousel,
    CarouselContent,
    CarouselNext,
    CarouselPrevious,
    CarouselProps,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { forwardRef, HTMLAttributes } from "react";

interface SkillCardCarouselRootProps
    extends HTMLAttributes<HTMLDivElement>,
        CarouselProps {
    children: React.ReactNode;
}

export const SkillCardCarouselRoot = forwardRef<
    HTMLDivElement,
    SkillCardCarouselRootProps
>(({ children, ...props }, ref) => {
    return (
        <Carousel
            {...props}
            ref={ref}
            opts={{
                align: "start",
                loop: true,
            }}
            plugins={[
                Autoplay({
                    delay: 2000,
                }),
            ]}
            className="mt-3"
        >
            <CarouselContent>{children}</CarouselContent>
            <CarouselPrevious className="sm:scale-150" />
            <CarouselNext className="sm:scale-150" />
        </Carousel>
    );
});

SkillCardCarouselRoot.displayName = "SkillCardCarouselRoot";
