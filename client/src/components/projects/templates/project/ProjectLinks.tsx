import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface ProjectLinksProps extends HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

export function ProjectLinks({ children, ...props }: ProjectLinksProps) {
    return (
        <div
            {...props}
            className={cn(
                "shadow-lg shadow-black/30 self-stretch p-2 flex sm:flex-col flex-row sm:justify-between sm:gap-0 gap-2 items-center border-t-2 border-border sm:border-none justify-start",
                props.className
            )}
        >
            {children}
        </div>
    );
}
