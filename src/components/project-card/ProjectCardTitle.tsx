import { cn } from "@/lib/utils";
import { H3, H3Props } from "../typography/H3";

export function ProjectCardTitle({ children, ...props }: H3Props) {
    return (
        <H3 {...props} className={cn("text-center my-2", props.className)}>
            {children}
        </H3>
    );
}
