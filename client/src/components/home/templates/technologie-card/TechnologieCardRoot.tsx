import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface TechnologieCardRootProps extends HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

export function TechnologieCardRoot({
    children,
    ...props
}: TechnologieCardRootProps) {
    return (
        <div
            {...props}
            className={cn(
                "snap-center relative shadow-lg border h-60 border-border p-5 m-5 transition-all duration-300 rounded-lg bg-gradient-to-br from-background from-60% to-100%",
                props.className
            )}
        >
            {children}
        </div>
    );
}
