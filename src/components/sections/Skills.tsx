"use client"; // temp

import { ChromaButton } from "../buttons/ChromaButton";
import { SkillCard } from "../cards/skill-card";
import { H3 } from "../typography/H3";

export function Skills() {
    return (
        <section className="space-y-10 py-10">
            <SkillCard.Root>
                <SkillCard.Header>
                    <H3 className="text-lg">FRONTEND</H3>
                    <ChromaButton className="h-6 w-24 font-semibold">
                        VIEW ALL
                    </ChromaButton>
                </SkillCard.Header>
                <SkillCard.Carousel.Root>
                    {Array.from({ length: 10 }).map((_, i) => (
                        <SkillCard.Carousel.Item key={i} />
                    ))}
                </SkillCard.Carousel.Root>
                <SkillCard.Content.Root>
                    <SkillCard.Content.Title>NEST.JS</SkillCard.Content.Title>
                    <SkillCard.Content.Progress />
                    <SkillCard.Content.Description>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Facere, eveniet obcaecati? Odit animi quidem tempore
                        officia.
                    </SkillCard.Content.Description>
                </SkillCard.Content.Root>
            </SkillCard.Root>
        </section>
    );
}
