import { AchievementSkeleton } from "./AchievementSkeleton";

export function JorneySkeleton() {
    return (
        <div className="space-y-10 pb-10 overflow-y-scroll max-h-96 h-full">
            <AchievementSkeleton isRigthDirection={true} />
            <AchievementSkeleton />
            <AchievementSkeleton isRigthDirection={true} />
            <AchievementSkeleton />
        </div>
    );
}
