import { cn } from "@/lib/utils";
import Link from "next/link";
import { ComponentProps } from "react";

export function HeaderLink({
    children,
    ...props
}: ComponentProps<typeof Link>) {
    return (
        <Link
            {...props}
            className={cn(
                "font-mono hover:bg-secondary p-1 rounded",
                props.className
            )}
        >
            {children}
        </Link>
    );
}
