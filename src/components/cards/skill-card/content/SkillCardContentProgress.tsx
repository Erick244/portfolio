import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { SkillKnowledge } from "@/types/skill.type";
import { NotebookPenIcon, TrophyIcon } from "lucide-react";

interface SkillCardContentProgressProps {
    knowledge: SkillKnowledge;
    color: string;
}

export function SkillCardContentProgress({
    knowledge,
    color,
}: SkillCardContentProgressProps) {
    const progressLevels = {
        BEGINNER: 50,
        INTERMEDIATE: 75,
        ADVANCED: 100,
    };

    return (
        <TooltipProvider delayDuration={0}>
            <Tooltip>
                <TooltipTrigger>
                    <div className="flex items-center justify-center gap-2">
                        <NotebookPenIcon className="text-background w-4 h-4" />
                        <div className="h-3.5 bg-background/20 rounded-lg grow max-w-[400px] overflow-hidden">
                            <div
                                style={{
                                    width: `${progressLevels[knowledge]}%`,
                                    background: `linear-gradient(to right,  hsl(var(--background)) 0%, ${color} 100%)`,
                                }}
                                className="transition-all duration-500 h-full rounded"
                            />
                        </div>
                        <TrophyIcon className="text-background w-4 h-4" />
                    </div>
                </TooltipTrigger>
                <TooltipContent>
                    <p>{knowledge}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
}
