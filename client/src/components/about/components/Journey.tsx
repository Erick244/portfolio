import { Achievement as AchievementData } from "@/components/admin/management/journey/table/JourneyTableColumns";
import { getData } from "@/functions/api";
import { fetchDataWithRetry } from "@/functions/data";
import { Achievement } from "../templates/achievement";

export async function Journey() {
    const journey: AchievementData[] = await fetchDataWithRetry(async () => {
        return await getData("/journey", {
            next: {
                revalidate: 3600, // 1h
            },
        });
    });

    return (
        <div className="space-y-10 pb-10 overflow-y-scroll max-h-96 h-full">
            {journey &&
                journey.map((achievement) => {
                    const isEven = achievement.id % 2 === 0;

                    return (
                        <Achievement.Root key={achievement.id}>
                            <Achievement.Date
                                isRightDirection={isEven}
                                dateFormatted={achievement.dateFormatted}
                            />
                            <Achievement.Line isRightDirection={isEven}>
                                <Achievement.Title
                                    isRightDirection={isEven}
                                    color={achievement.color}
                                >
                                    {achievement.title}
                                </Achievement.Title>
                            </Achievement.Line>
                        </Achievement.Root>
                    );
                })}
        </div>
    );
}
