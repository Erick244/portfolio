import { H1 } from "@/components/shadcn-ui/typography/H1";
import { P } from "@/components/shadcn-ui/typography/P";
import { HTMLAttributes } from "react";

export function AboutIntroduction(props: HTMLAttributes<HTMLDivElement>) {
    return (
        <div {...props}>
            <H1 className="text-center">About-me</H1>
            <P className="text-center">
                Hello! My name is <strong>Erick</strong>, I&apos;m 18 years old,
                and I&apos;m from{" "}
                <strong>São José dos Campos, São Paulo, Brazil</strong>.
                I&apos;m passionate about technology, especially web
                programming. I love creating websites and applications that make
                the online knowledge more dynamic and interactive.
            </P>
            <P className="text-center">
                I&apos;ve been on this journey for three years, studying and
                working on projects. Unfortunately, I haven&apos;t had the
                opportunity to showcase my work in a real team yet. Today,
                I&apos;m actively seeking that opportunity and promise to give
                my best to contribute to the team. If you&apos;re also an
                enthusiast in the field, I&apos;d love to exchange ideas and
                learn more from you! 🚀💻
            </P>
        </div>
    );
}
