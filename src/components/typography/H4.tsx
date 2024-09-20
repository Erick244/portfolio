import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

export interface H4Props extends HTMLAttributes<HTMLHeadingElement> {
    children: React.ReactNode;
}

export function H4({ children, ...props }: H4Props) {
    return (
        <h4
            {...props}
            className={cn(
                " font-black text-shadow-md shadow-black/60 scroll-m-20 text-lg sm:text-xl md:text-2xl tracking-tight",
                props.className
            )}
            style={{
                color: "hsl(var(--background))",
            }}
        >
            {children}
        </h4>
    );
}
