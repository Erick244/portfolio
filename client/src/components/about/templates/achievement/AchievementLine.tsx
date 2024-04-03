import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface AchievementLineProps extends HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    isRightDirection?: boolean;
}

export function AchievementLine({
    children,
    isRightDirection,
    ...props
}: AchievementLineProps) {
    return (
        <div
            {...props}
            className={cn(
                "flex items-center ",
                isRightDirection ? "flex-row-reverse" : "flex-row",
                props.className
            )}
        >
            <div
                className={cn(
                    "w-1/2 animate-journey bg-border h-[1px] flex items-center",
                    isRightDirection ? "justify-end" : "justify-start"
                )}
            >
                <div className="bg-border h-4 w-[1px]"></div>
            </div>
            {children}
        </div>
    );
}
