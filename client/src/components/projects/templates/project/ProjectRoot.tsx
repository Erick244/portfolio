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
                "sm:h-80 h-60 border-2 border-border bg-gradient-to-bl from-foreground from-5% to-transparent to-50% rounded overflow-hidden group flex justify-between items-center gap-5",
                props.className
            )}
        >
            {children}
        </div>
    );
}
