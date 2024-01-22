import { cn } from "@/lib/utils";
import Link from "next/link";
import { ComponentProps } from "react";

interface SideBarLinkProps extends ComponentProps<typeof Link> {
    isActive?: boolean;
}

export function SideBarLink({
    isActive,
    children,
    ...props
}: SideBarLinkProps) {
    return (
        <Link
            {...props}
            className={cn(
                "p-2 transition-all duration-300 border border-border rounded w-full flex justify-between items-center hover:bg-secondary",
                props.className,
                isActive
                    ? "bg-foreground text-background hover:bg-foreground"
                    : "bg-background text-foreground"
            )}
        >
            {children}
        </Link>
    );
}
