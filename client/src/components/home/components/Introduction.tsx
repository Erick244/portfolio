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
                old, and I&apos;ve been studying programming for three years.
                Throughout this journey, I&apos;ve focused on specializing in
                web development. My current goal is to gain/improve knowledge in
                this field continuously. 🧠⚛️
            </P>
        </div>
    );
}
