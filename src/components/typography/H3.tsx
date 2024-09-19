import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

export interface H3Props extends HTMLAttributes<HTMLHeadingElement> {
    children: React.ReactNode;
}

export function H3({ children, ...props }: H3Props) {
    return (
        <h3
            {...props}
            className={cn(
                "font-black text-shadow-md shadow-black/60 text-xl sm:text-2xl md:text-3xl",
                props.className
            )}
            style={{
                color: "hsl(var(--background))",
            }}
        >
            {children}
        </h3>
    );
}
