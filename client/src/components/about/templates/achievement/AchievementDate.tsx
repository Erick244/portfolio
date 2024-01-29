import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface AchievementDateProps extends HTMLAttributes<HTMLDivElement> {
    dateFormated: string;
    isRigthDirection?: boolean;
}

export function AchievementDate({
    dateFormated,
    isRigthDirection,
    ...props
}: AchievementDateProps) {
    return (
        <div
            {...props}
            className={cn(
                "text-sm px-2",
                isRigthDirection ? "text-right" : "text-left",
                props.className
            )}
        >
            {dateFormated}
        </div>
    );
}
