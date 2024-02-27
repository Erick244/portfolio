import { H1 } from "@/components/shadcn-ui/typography/H1";
import { P } from "@/components/shadcn-ui/typography/P";
import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

export function Goal(props: HTMLAttributes<HTMLDivElement>) {
    return (
        <div {...props} className={cn("", props.className)}>
            <H1 className="text-center">Goal</H1>
            <P className="text-center">
                “My goal today is to collaborate with a professional team. I
                want not only to showcase my work but also to contribute to the
                team&apos;s growth. Additionally, I am committed to learning
                more and teaching as much as I can.” 🌟🤝
            </P>
        </div>
    );
}
