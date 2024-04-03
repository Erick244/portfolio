import { H4 } from "@/components/shadcn-ui/typography/H4";
import { P } from "@/components/shadcn-ui/typography/P";
import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface TechnologyCardAboutProps extends HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

export function TechnologyCardAbout({
    children,
    ...props
}: TechnologyCardAboutProps) {
    return (
        <div {...props} className={cn("flex flex-col", props.className)}>
            <H4 className="mt-5">About</H4>
            <P className="font-sans text-sm max-h-20 sm:max-h-full overflow-y-scroll sm:overflow-y-visible rounded break-words w-full">
                {children}
            </P>
        </div>
    );
}
