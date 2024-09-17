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
                "font-black text-[3.40rem] leading-[1] text-shadow-md shadow-black/50 scroll-m-20 tracking-tight ",
                props.className
            )}
        >
            {children}
        </h1>
    );
}
