import { Achievement as AcheivementData } from "@/components/admin/management/jorney/table/JorneyTableColumns";
import { getData } from "@/functions/api";
import { fetchDataWithRetry } from "@/functions/data";
import { Achievement } from "../templates/achievement";

export async function Jorney() {
    const jorney: AcheivementData[] = await fetchDataWithRetry(async () => {
        return await getData("/jorney", {
            cache: "no-store",
        });
    });

    return (
        <div className="space-y-10 pb-10 overflow-y-scroll max-h-96 h-full">
            {jorney &&
                jorney.map((achievement) => {
                    const isEven = achievement.id % 2 === 0;

                    return (
                        <Achievement.Root key={achievement.id}>
                            <Achievement.Date
                                isRigthDirection={isEven}
                                dateFormated={achievement.dateFormated}
                            />
                            <Achievement.Line isRigthDirection={isEven}>
                                <Achievement.Title
                                    isRigthDirection={isEven}
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
