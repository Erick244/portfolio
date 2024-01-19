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
                "shadow-lg shadow-black/30 self-stretch p-2 flex flex-col justify-between items-center",
                props.className
            )}
        >
            {children}
        </div>
    );
}
