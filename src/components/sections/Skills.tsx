"use client"; // temp

import { ChromaButton } from "../buttons/ChromaButton";
import { SkillCard } from "../cards/skill-card";
import { H3 } from "../typography/H3";

//TODO: add props

export function Skills() {
    return (
        <section className="space-y-10 py-10">
            <SkillCard.Root color="#ff0000">
                <SkillCard.Header>
                    <H3 className="text-lg">FRONTEND</H3>
                    <ChromaButton className="h-6 w-24 font-semibold">
                        VIEW ALL
                    </ChromaButton>
                </SkillCard.Header>
                <SkillCard.Carousel.Root>
                    {Array.from({ length: 10 }).map((_, i) => (
                        <SkillCard.Carousel.Item
                            imageUrl="https://styles.redditmedia.com/t5_ufdd1/styles/communityIcon_gyjrgho7vfj31.png?width=256&s=04345b241e7138ca2c9a9e3f6b3ae12e13041638"
                            alt="NestJS logo Image"
                            key={i}
                        />
                    ))}
                </SkillCard.Carousel.Root>
                <SkillCard.Content.Root>
                    <SkillCard.Content.Title>NEST.JS</SkillCard.Content.Title>
                    <SkillCard.Content.Progress
                        knowledge="BASIC"
                        color="#ff0000"
                    />
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
