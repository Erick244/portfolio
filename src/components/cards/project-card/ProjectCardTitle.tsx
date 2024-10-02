import { H3, H3Props } from "@/components/typography/H3";
import { cn } from "@/lib/utils";

export function ProjectCardTitle({ children, ...props }: H3Props) {
    return (
        <H3
            {...props}
            className={cn("text-center my-2 uppercase", props.className)}
        >
            {children}
        </H3>
    );
}
