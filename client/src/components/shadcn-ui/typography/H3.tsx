import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface H3Props extends HTMLAttributes<HTMLHeadingElement> {
    children: React.ReactNode;
}

export function H3({ children, ...props }: H3Props) {
    return (
        <h3
            {...props}
            className={cn(
                "scroll-m-20 font-mono text-xl font-semibold tracking-tight",
                props.className
            )}
        >
            {children}
        </h3>
    );
}
