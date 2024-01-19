import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface HeaderRootProps extends HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
}

export function HeaderRoot({ children, ...props }: HeaderRootProps) {
    return (
        <header
            {...props}
            className={cn(
                "backdrop-blur-sm bg-background/30 py-10",
                props.className
            )}
        >
            {children}
        </header>
    );
}
