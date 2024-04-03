import { Skeleton } from "@/components/shadcn-ui/skeleton";
import { Achievement } from "../templates/achievement";

interface AchievementSkeletonProps {
    isRightDirection?: boolean;
}

export function AchievementSkeleton({
    isRightDirection,
}: AchievementSkeletonProps) {
    return (
        <div className="w-full">
            <Achievement.Date
                className="text-secondary animate-pulse"
                isRightDirection={isRightDirection}
                dateFormatted={"Month day, year"}
            />

            <Achievement.Line isRightDirection={isRightDirection}>
                <Skeleton className="h-5 w-10 rounded" />
            </Achievement.Line>
        </div>
    );
}
