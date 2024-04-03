import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface AchievementDateProps extends HTMLAttributes<HTMLDivElement> {
    dateFormatted: string;
    isRightDirection?: boolean;
}

export function AchievementDate({
    dateFormatted,
    isRightDirection: isRightDirection,
    ...props
}: AchievementDateProps) {
    return (
        <div
            {...props}
            className={cn(
                "text-sm px-2",
                isRightDirection ? "text-right" : "text-left",
                props.className
            )}
        >
            {dateFormatted}
        </div>
    );
}
