import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface FooterRootProps extends HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
}

export function FooterRoot({ children, ...props }: FooterRootProps) {
    return (
        <footer {...props} className={cn("p-5 border-t", props.className)}>
            {children}
        </footer>
    );
}
