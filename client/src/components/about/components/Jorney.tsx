import { H1 } from "@/components/shadcn-ui/typography/H1";
import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";
import { JorneyLine } from "../ui/JorneyLine";

export function Jorney(props: HTMLAttributes<HTMLDivElement>) {
    return (
        <div className={cn("", props.className)}>
            <H1 className="text-center mb-10">Jorney</H1>
            <div className="space-y-10">
                <JorneyLine
                    direction="LEFT"
                    achievement="Java Curse"
                    date={new Date()}
                    shadowColor="shadow-yellow-500/50"
                />
                <JorneyLine
                    direction="RIGHT"
                    achievement="Javascript Curse"
                    date={new Date()}
                    shadowColor="shadow-blue-500/50"
                />
                <JorneyLine
                    direction="LEFT"
                    achievement="CSS Programming"
                    date={new Date()}
                    shadowColor="shadow-red-500/50"
                />
                <JorneyLine
                    direction="RIGHT"
                    achievement="javascript curse"
                    date={new Date()}
                    shadowColor="shadow-green-500/50"
                />
            </div>
        </div>
    );
}
