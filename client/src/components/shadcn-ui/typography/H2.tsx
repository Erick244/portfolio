import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface H2Props extends HTMLAttributes<HTMLHeadingElement> {
    children: React.ReactNode;
}

export function H2({ children, ...props }: H2Props) {
    return (
        <h2
            className={cn(
                "scroll-m-20 border-b pb-2 text-2xl font-semibold font-mono tracking-tight first:mt-0",
                props.className
            )}
        >
            {children}
        </h2>
    );
}
