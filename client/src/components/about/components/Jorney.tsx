import { Achievement as AcheivementData } from "@/components/admin/management/jorney/table/JorneyTableColumns";
import { H1 } from "@/components/shadcn-ui/typography/H1";
import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";
import { Achievement } from "../templates/achievement";

const jorneyDataTemp: AcheivementData[] = [
    {
        id: 1,
        dateFormated: "January 24th, 2023",
        title: "JavaScript Curse Initialized",
        color: "#ff6105",
    },
    {
        id: 2,
        dateFormated: "December 24th, 2022",
        title: "Git Curse Initialized",
        color: "#d4d013",
    },
    {
        id: 3,
        dateFormated: "January 04th, 2024",
        title: "Curse Initialized",
        color: "#173ca3",
    },
    {
        id: 4,
        dateFormated: "January 24th, 2024",
        title: "Java Financial",
        color: "#e81cbf",
    },
    {
        id: 5,
        dateFormated: "November 30th, 2023",
        title: "Curse Initialized",
        color: "#198a0c",
    },
];

export function Jorney(props: HTMLAttributes<HTMLDivElement>) {
    return (
        <div className={cn("", props.className)}>
            <H1 className="text-center mb-10">Jorney</H1>
            <div className="space-y-10 pb-10 overflow-y-scroll max-h-full">
                {jorneyDataTemp &&
                    jorneyDataTemp.map((achievement) => {
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
