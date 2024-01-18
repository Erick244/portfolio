import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface TitleLineProps extends HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

export function TitleLine({ children, ...props }: TitleLineProps) {
    return (
        <div
            {...props}
            className={cn(
                "flex justify-center items-center gap-2",
                props.className
            )}
        >
            <div className="w-[30%] bg-border h-[1px]"></div>
            <span className="text-lg font-semibold font-mono">{children}</span>
            <div className="w-[30%] bg-border h-[1px]"></div>
        </div>
    );
}
