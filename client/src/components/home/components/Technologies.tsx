import { TitleLine } from "@/components/shadcn-ui/typography/TitleLine";
import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";
import { H1 } from "../../shadcn-ui/typography/H1";
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
            <FrontendCarousel />
            <TitleLine className="self-stretch">Backend</TitleLine>
            <BackendCarousel />
        </div>
    );
}
