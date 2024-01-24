import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

export function ColorsTableDemonstration(
    props: HTMLAttributes<HTMLDivElement>
) {
    return (
        <div
            {...props}
            className={cn(
                "bg-gradient-to-br from-background shadow-md from-60% to-100% rounded-full p-2 w-6 h-6 m-auto border border-border",
                props.className
            )}
        />
    );
}
