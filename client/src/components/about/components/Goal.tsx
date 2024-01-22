import { H1 } from "@/components/shadcn-ui/typography/H1";
import { P } from "@/components/shadcn-ui/typography/P";
import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

export function Goal(props: HTMLAttributes<HTMLDivElement>) {
    return (
        <div {...props} className={cn("", props.className)}>
            <H1 className="text-center">Goal</H1>
            <P className="text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                explicabo, quo tempora sunt quam placeat delectus exercitationem
                sequi ullam recusandae omnis alias dolor voluptatem earum iusto
                ducimus! Enim, alias iste?
            </P>
        </div>
    );
}
