import { cn } from "@/lib/utils";
import { CSSProperties, HTMLAttributes } from "react";

interface AchievementTitleProps extends HTMLAttributes<HTMLSpanElement> {
    children: React.ReactNode;
    color: string;
    isRigthDirection?: boolean;
}

export function AchievementTitle({
    children,
    color,
    isRigthDirection,
    ...props
}: AchievementTitleProps) {
    return (
        <span
            {...props}
            className={cn(
                "py-1 px-2 rounded border-border font-mono text-sm",
                isRigthDirection ? "border-r" : "border-l",
                props.className
            )}
            style={achievementColorStyles(color)}
        >
            {children}
        </span>
    );
}

export function achievementColorStyles(color: string): CSSProperties {
    return {
        boxShadow: `0 15px 30px -6px ${color}84, 0 8px 15px -6px ${color}84`,
    };
}
