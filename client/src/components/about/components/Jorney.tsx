import { Achievement as AcheivementData } from "@/components/admin/management/jorney/table/JorneyTableColumns";
import { H1 } from "@/components/shadcn-ui/typography/H1";
import { getData } from "@/functions/api";
import { HTMLAttributes } from "react";
import { Achievement } from "../templates/achievement";

export async function Jorney(props: HTMLAttributes<HTMLDivElement>) {
    const jorney = await getData<AcheivementData[]>("/jorney", {
        cache: "no-store",
    });

    return (
        <div {...props}>
            <H1 className="text-center mb-10">Jorney</H1>
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
        </div>
    );
}
