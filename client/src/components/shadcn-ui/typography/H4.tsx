import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface H4Props extends HTMLAttributes<HTMLHeadingElement> {
    children: React.ReactNode;
}

export function H4({ children, ...props }: H4Props) {
    return (
        <h4
            {...props}
            className={cn(
                "scroll-m-20 text-lg font-mono font-semibold tracking-tight",
                props.className
            )}
        >
            {children}
        </h4>
    );
}
