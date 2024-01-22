import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { HTMLAttributes } from "react";

interface JorneyLineProps extends HTMLAttributes<HTMLDivElement> {
    date: Date;
    achievement: string;
    direction: "LEFT" | "RIGHT";
    shadowColor: string;
}

export function JorneyLine({
    achievement,
    date,
    direction,
    shadowColor,
    ...props
}: JorneyLineProps) {
    const isRigthDirection = direction === "RIGHT";

    return (
        <div {...props} className={cn("w-full", props.className)}>
            <div
                className={cn(
                    "text-sm px-2",
                    isRigthDirection ? "text-right" : "text-left"
                )}
            >
                {format(date, "PPP")}
            </div>
            <div
                className={cn(
                    "flex items-center ",
                    isRigthDirection ? "flex-row-reverse" : "flex-row"
                )}
            >
                <div
                    className={cn(
                        "w-1/2 animate-jorney bg-border h-[1px] flex items-center",
                        isRigthDirection ? "justify-end" : "justify-start"
                    )}
                >
                    <div className="bg-border h-4 w-[1px]"></div>
                </div>
                <span
                    className={cn(
                        "shadow-xl py-1 px-2 rounded border-border font-mono text-sm",
                        isRigthDirection ? "border-r" : "border-l",
                        shadowColor
                    )}
                >
                    {achievement}
                </span>
            </div>
        </div>
    );
}
