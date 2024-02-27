import { H1 } from "@/components/shadcn-ui/typography/H1";
import { P } from "@/components/shadcn-ui/typography/P";
import { HTMLAttributes } from "react";

export function AboutIntroduction(props: HTMLAttributes<HTMLDivElement>) {
    return (
        <div {...props}>
            <H1 className="text-center">About-me</H1>
            <P className="text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                quaerat quo maiores sit. Sunt vero temporibus, aspernatur
                commodi rem ipsam similique laborum quibusdam quas repudiandae
                molestias delectus harum saepe. Aliquid?
            </P>
            <P className="text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                quaerat quo maiores sit. Sunt vero temporibus, aspernatur
                commodi rem ipsam similique laborum quibusdam quas repudiandae
                molestias delectus harum saepe. Aliquid?
            </P>
        </div>
    );
}
