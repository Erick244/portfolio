import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

export interface PProps extends HTMLAttributes<HTMLParagraphElement> {
    children: React.ReactNode;
}

export function P({ children, ...props }: PProps) {
    return (
        <p
            {...props}
            style={{
                color: "hsl(var(--background))",
                ...props.style,
            }}
            className={cn(
                "leading-7 [&:not(:first-child)]:mt-6 font-medium text-xs sm:text-sm md:text-base text-shadow-md shadow-black/50",
                props.className
            )}
        >
            {children}
        </p>
    );
}
