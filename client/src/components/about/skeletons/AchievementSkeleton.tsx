import { Skeleton } from "@/components/shadcn-ui/skeleton";
import { Achievement } from "../templates/achievement";

interface AchievementSkeletonProps {
    isRigthDirection?: boolean;
}

export function AchievementSkeleton({
    isRigthDirection,
}: AchievementSkeletonProps) {
    return (
        <div className="w-full">
            <Achievement.Date
                className="text-secondary animate-pulse"
                isRigthDirection={isRigthDirection}
                dateFormated={"Month day, year"}
            />

            <Achievement.Line isRigthDirection={isRigthDirection}>
                <Skeleton className="h-5 w-10 rounded" />
            </Achievement.Line>
        </div>
    );
}
