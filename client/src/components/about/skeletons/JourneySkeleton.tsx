import { AchievementSkeleton } from "./AchievementSkeleton";

export function JourneySkeleton() {
    return (
        <div className="space-y-10 pb-10 overflow-y-scroll max-h-96 h-full">
            <AchievementSkeleton isRightDirection={true} />
            <AchievementSkeleton />
            <AchievementSkeleton isRightDirection={true} />
            <AchievementSkeleton />
        </div>
    );
}
