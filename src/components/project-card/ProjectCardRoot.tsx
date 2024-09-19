"use client";

import { cn } from "@/lib/utils";
import { HTMLAttributes, useState } from "react";

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
    const [isHover, setIsHover] = useState<boolean>(false);

    function toggleHover() {
        setIsHover(!isHover);
    }

    return (
        <div
            {...props}
            onMouseEnter={toggleHover}
            onMouseLeave={toggleHover}
            style={{
                background: `linear-gradient(${
                    isEven ? "-30deg" : "30deg"
                }, ${color} 0%, ${color} 40%, #ffffff46 40%, #ffffff46 100%)`,
                backgroundSize: isHover ? "100% 200%" : "100% 100%",
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
