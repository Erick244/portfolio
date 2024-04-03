import { cn } from "@/lib/utils";
import { CSSProperties, HTMLAttributes } from "react";

interface TechnologyCardRootProps extends HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    color: string;
}

export function TechnologyCardRoot({
    children,
    color,
    ...props
}: TechnologyCardRootProps) {
    return (
        <div
            {...props}
            className={cn(
                "snap-center relative border h-60 border-border p-5 m-5 transition-all duration-300 rounded-lg",
                props.className
            )}
            style={technologyColorStyles(color)}
        >
            {children}
        </div>
    );
}

export function technologyColorStyles(color: string): CSSProperties {
    return {
        background: `linear-gradient(to bottom right, transparent 60%, ${color} 100%)`,
        boxShadow: `0 10px 15px -3px ${color}30, 0 4px 6px -4px ${color}30`,
    };
}
