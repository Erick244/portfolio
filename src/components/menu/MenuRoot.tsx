import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface MenuRootProps extends HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
}

export function MenuRoot({ children, ...props }: MenuRootProps) {
    return (
        <nav
            {...props}
            className={cn(
                "z-20 shadow-md shadow-black/30 fixed bottom-5 left-1/2 -translate-x-1/2 bg-background/50 backdrop-blur-lg rounded-lg p-3 flex flex-row justify-between items-center gap-1 lg:flex-col lg:bottom-auto lg:left-14 lg:top-1/2 lg:-translate-y-1/2",
                props.className
            )}
        >
            {children}
        </nav>
    );
}
