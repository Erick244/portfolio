import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { NotebookPenIcon, TrophyIcon } from "lucide-react";

export function SkillCardContentProgress() {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger>
                    <div className="flex items-center justify-center gap-2">
                        <NotebookPenIcon className="text-background w-4 h-4" />
                        <div className="h-3.5 border border-background rounded-lg grow max-w-[400px]">
                            <div className="h-full rounded bg-gradient-to-r from-background to-rose-500 w-[50%]" />
                        </div>
                        <TrophyIcon className="text-background w-4 h-4" />
                    </div>
                </TooltipTrigger>
                <TooltipContent>
                    <p>Add to library</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
}
