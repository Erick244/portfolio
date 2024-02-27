import { TitleLine } from "@/components/shadcn-ui/typography/TitleLine";
import { cn } from "@/lib/utils";
import { HTMLAttributes, Suspense } from "react";
import { H1 } from "../../shadcn-ui/typography/H1";
import { CarouselSkeleton } from "../skeletons/CarouselSkeleton";
import { BackendCarousel } from "../ui/BackendCarousel";
import { FrontendCarousel } from "../ui/FrontendCarousel";

export function Technologies(props: HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            {...props}
            className={cn("flex flex-col items-center gap-5", props.className)}
        >
            <H1>Technologies</H1>
            <TitleLine className="self-stretch">Frontend</TitleLine>

            <Suspense fallback={<CarouselSkeleton />}>
                <FrontendCarousel />
            </Suspense>
            <TitleLine className="self-stretch">Backend</TitleLine>
            <Suspense fallback={<CarouselSkeleton />}>
                <BackendCarousel />
            </Suspense>
        </div>
    );
}
