import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

export function VerticalDivisor(props: HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            {...props}
            className={cn("w-[1px] h-full bg-border", props.className)}
        />
    );
}
