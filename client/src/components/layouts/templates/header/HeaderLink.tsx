import { cn } from "@/lib/utils";
import Link from "next/link";
import { ComponentProps } from "react";

interface HeaderLinkProps extends ComponentProps<typeof Link> {
    isActive?: boolean;
}

export function HeaderLink({ children, isActive, ...props }: HeaderLinkProps) {
    return (
        <Link
            {...props}
            className={cn(
                "font-mono p-1 rounded hover:bg-secondary border-2",
                isActive
                    ? "border-foreground rounded-b-none border-x-transparent border-t-transparent"
                    : "border-border md:border-transparent border-2",
                props.className
            )}
        >
            {children}
        </Link>
    );
}
