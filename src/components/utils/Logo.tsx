import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

export function Logo(props: HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            {...props}
            className={cn(
                "font-black font-mono bg-foreground rounded text-background p-2 relative chroma-border shadow-lg shadow-black/50 sm:text-[1.80rem]",
                props.className
            )}
        >
            <span>&lt;</span>
            <span>ERICK.HENRIQUE</span>
            <span>/&gt;</span>
        </div>
    );
}
