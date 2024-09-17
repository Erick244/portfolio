import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface PProps extends HTMLAttributes<HTMLParagraphElement> {
    children: React.ReactNode;
}

export function P({ children, ...props }: PProps) {
    return (
        <p
            {...props}
            style={{
                color: "hsl(var(--background))",
            }}
            className={cn(
                "leading-7 [&:not(:first-child)]:mt-6 font-medium text-xs sm:text-sm text-shadow-sm shadow-black/50 ",
                props.className
            )}
        >
            {children}
        </p>
    );
}
