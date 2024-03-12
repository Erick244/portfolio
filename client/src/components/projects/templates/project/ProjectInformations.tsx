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
        <div
            {...props}
            className={cn(
                "sm:w-1/2 w-full p-5 sm:self-center self-stretch flex flex-col justify-center items-center",
                props.className
            )}
        >
            <H2 className="sm:text-left text-center self-stretch">{title}</H2>
            <P className="sm:text-base text-sm sm:self-start sm:text-left text-center break-words max-w-sm">
                {description}
            </P>
        </div>
    );
}
