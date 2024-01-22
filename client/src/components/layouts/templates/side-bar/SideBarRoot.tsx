import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface SideBarRootProps extends HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
}

export function SideBarRoot({ children, ...props }: SideBarRootProps) {
    return (
        <aside
            {...props}
            className={cn(
                "p-5 h-full w-full max-w-xs flex flex-col gap-5 border-r border-border",
                props.className
            )}
        >
            {children}
        </aside>
    );
}
