import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/shadcn-ui/tooltip";
import { cn } from "@/lib/utils";
import { Star } from "lucide-react";
import { HTMLAttributes } from "react";

interface TechnologieCardStarProps extends HTMLAttributes<HTMLElement> {
    fill?: boolean;
    toolTipText?: string;
}

export function TechnologieCardStar({
    fill,
    toolTipText,
    ...props
}: TechnologieCardStarProps) {
    const yellowRgb = "rgb(234 179 8)";
    const starFill = fill ? yellowRgb : "transparent";

    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger>
                    <Star
                        className={cn(
                            "w-4 h-4",
                            fill ? "text-yellow-500" : "text-muted-foreground",
                            props.className
                        )}
                        fill={starFill}
                    />
                </TooltipTrigger>
                <TooltipContent>{toolTipText}</TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
}
