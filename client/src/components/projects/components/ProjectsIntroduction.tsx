import { H1 } from "@/components/shadcn-ui/typography/H1";
import { P } from "@/components/shadcn-ui/typography/P";
import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

export function ProjectsIntroduction(props: HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            {...props}
            className={cn(
                "flex flex-col items-center font-mono",
                props.className
            )}
        >
            <H1>Projects</H1>
            <P className="text-center">
                In this section you will see my best projects made along my
                journey.
            </P>
        </div>
    );
}
