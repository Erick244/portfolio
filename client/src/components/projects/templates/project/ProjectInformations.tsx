import { H2 } from "@/components/shadcn-ui/typography/H2";
import { P } from "@/components/shadcn-ui/typography/P";
import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface ProjectInformationsProps extends HTMLAttributes<HTMLDivElement> {
    title: string;
    description: string;
}

export function ProjectInformations({
    description,
    title,
    ...props
}: ProjectInformationsProps) {
    return (
        <div {...props} className={cn("w-1/2 p-5", props.className)}>
            <H2>{title}</H2>
            <P className="sm:text-base text-sm sm:text-left text-pretty">
                {description}
            </P>
        </div>
    );
}
