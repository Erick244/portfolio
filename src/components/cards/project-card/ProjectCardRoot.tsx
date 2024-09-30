import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface ProjectCardRootProps extends HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    color: string;
    isEven: boolean;
}

export function ProjectCardRoot({
    children,
    color,
    isEven,
    ...props
}: ProjectCardRootProps) {
    const customGradient = `linear-gradient(${
        isEven ? "-45deg" : "45deg"
    }, ${color} 0%, transparent 70%)`;

    return (
        <div
            {...props}
            style={{
                background: customGradient,
            }}
            className={cn(
                "relative flex flex-col md:flex-row gap-5 md:gap-10 even:md:flex-row-reverse items-center p-5  md:px-10 md:py-6 transition-all duration-200 hover:scale-105 border border-background/10 rounded-lg shadow-[0_0_10px] shadow-black/20 group",
                props.className
            )}
        >
            {children}
        </div>
    );
}
