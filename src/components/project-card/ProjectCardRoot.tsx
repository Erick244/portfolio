import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface ProjectCardRootProps extends HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

export function ProjectCardRoot({ children, ...props }: ProjectCardRootProps) {
    return (
        <div
            {...props}
            className={cn(
                "relative bg-background/10 flex flex-col md:flex-row gap-5 md:gap-10 items-center p-2 md:px-10 md:py-6 transition-all saturate-200 hover:scale-105 border border-background/10 rounded-lg shadow-[0_0_10px] shadow-black/20 group",
                props.className
            )}
        >
            {children}
        </div>
    );
}
