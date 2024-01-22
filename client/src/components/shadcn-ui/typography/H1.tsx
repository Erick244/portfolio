import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface H1Props extends HTMLAttributes<HTMLHeadingElement> {
    children: React.ReactNode;
}

export function H1({ children, ...props }: H1Props) {
    return (
        <h1
            {...props}
            className={cn(
                "scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl font-mono animate-tracking-in-expand",
                props.className
            )}
        >
            {children}
        </h1>
    );
}
