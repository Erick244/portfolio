import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface ProjectRootProps extends HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

export function ProjectRoot({ children, ...props }: ProjectRootProps) {
    return (
        <div
            {...props}
            className={cn(
                "sm:h-80 border-2 border-border bg-gradient-to-bl from-foreground from-5% to-transparent to-50% rounded overflow-hidden group flex sm:flex-row flex-col justify-between items-center gap-5",
                props.className
            )}
        >
            {children}
        </div>
    );
}
