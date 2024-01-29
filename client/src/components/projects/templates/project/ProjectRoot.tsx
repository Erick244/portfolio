import { cn } from "@/lib/utils";
import { CSSProperties, HTMLAttributes } from "react";

interface ProjectRootProps extends HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    color: string;
}

export function ProjectRoot({ children, color, ...props }: ProjectRootProps) {
    return (
        <div
            {...props}
            className={cn(
                "sm:h-80 border-2 border-border rounded overflow-hidden group flex sm:flex-row flex-col justify-between items-center gap-5",
                props.className
            )}
            style={projectColorStyles(color)}
        >
            {children}
        </div>
    );
}

export function projectColorStyles(color: string): CSSProperties {
    return {
        background: `linear-gradient(to bottom left, ${color} 5%, transparent 50%)`,
    };
}
