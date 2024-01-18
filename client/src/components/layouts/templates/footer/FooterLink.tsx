import { cn } from "@/lib/utils";
import Link from "next/link";
import { ComponentProps } from "react";

interface FooterLinkProps extends ComponentProps<typeof Link> {
    children: React.ReactNode;
}

export function FooterLink({ children, ...props }: FooterLinkProps) {
    return (
        <Link
            {...props}
            className={cn(
                "w-10 h-10 rounded border-b-2 border-muted-foreground bg-secondary flex justify-center items-center",
                props.className
            )}
        >
            {children}
        </Link>
    );
}
