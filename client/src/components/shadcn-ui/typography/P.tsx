import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface PProps extends HTMLAttributes<HTMLParagraphElement> {
    children: React.ReactNode;
}

export function P({ children, ...props }: PProps) {
    return (
        <p
            {...props}
            className={cn(
                "leading-7 [&:not(:first-child)]:mt-6 font-mono",
                props.className
            )}
        >
            {children}
        </p>
    );
}
