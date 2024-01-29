import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface AchievementRootProps extends HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

export function AchievementRoot({ children, ...props }: AchievementRootProps) {
    return (
        <div {...props} className={cn("w-full", props.className)}>
            {children}
        </div>
    );
}
