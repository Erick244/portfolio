import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface BlockquoteProps extends HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
}

export function Blockquote({ children, ...props }: BlockquoteProps) {
    return (
        <blockquote
            {...props}
            className={cn(
                "border-l-2 pl-3 font-semibold sm:text-base text-sm",
                props.className
            )}
        >
            {children}
        </blockquote>
    );
}
