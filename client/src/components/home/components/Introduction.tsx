import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";
import { H1 } from "../../shadcn-ui/typography/H1";
import { P } from "../../shadcn-ui/typography/P";

export function Introduction(props: HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            {...props}
            className={cn(
                "flex flex-col items-center font-mono",
                props.className
            )}
        >
            <H1>Introduction</H1>
            <P className="text-center">
                My name is <strong>Erick Henrique</strong>, I&apos;m 18 years
                old and I&apos;ve been studying programming for 4 years. During
                this period I focused on specializing in Fullstack development
                for the Web. My goal today is to gain more and more knowledge in
                the area.
            </P>
        </div>
    );
}
