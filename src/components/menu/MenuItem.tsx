import { cn } from "@/lib/utils";
import Link from "next/link";
import { ComponentProps } from "react";

interface MenuItemProps extends ComponentProps<typeof Link> {
    children: React.ReactNode;
    active?: boolean;
}

export function MenuItem({ children, active, ...props }: MenuItemProps) {
    return (
        <Link
            {...props}
            className={cn(
                "h-10 w-14 lg:h-14 flex justify-center items-center rounded lg:rounded-lg cursor-pointer transition-all duration-300",
                active && "bg-foreground text-background",
                props.className
            )}
        >
            {children}
        </Link>
    );
}
