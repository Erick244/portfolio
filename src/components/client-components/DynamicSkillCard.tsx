"use client";

import { Skill } from "@/types/skill.type";
import { useCallback, useEffect, useState } from "react";
import { ChromaButton } from "../buttons/ChromaButton";
import { SkillCard } from "../cards/skill-card";
import { H3 } from "../typography/H3";

interface DynamicSkillCardProps {
    skills: Skill[];
    title: string;
}

export function DynamicSkillCard({ skills, title }: DynamicSkillCardProps) {
    const [currentSkill, setCurrentSkill] = useState<Skill>(skills[0]);
    const [stopAutoChanging, setStopAutoChanging] = useState<boolean>(false);

    const nextCurrentSkillIndex = useCallback(() => {
        const currentIndex = skills.findIndex(
            (skill) => skill === currentSkill
        );

        return currentIndex === skills.length - 1 ? 0 : currentIndex + 1;
    }, [currentSkill, skills]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrentSkill(skills[nextCurrentSkillIndex()]);
        }, 2000);

        if (stopAutoChanging) {
            clearTimeout(timer);
        }
    }, [nextCurrentSkillIndex, skills, stopAutoChanging]);

    return (
        <SkillCard.Root color={currentSkill.color}>
            <SkillCard.Header>
                <H3 className="text-lg">{title}</H3>
                <ChromaButton className="h-6 w-24 font-semibold">
                    VIEW ALL
                </ChromaButton>
            </SkillCard.Header>
            <SkillCard.Carousel.Root>
                {skills.map((skill, i) => (
                    <SkillCard.Carousel.Item
                        onClick={() => {
                            setCurrentSkill(skill);
                            setStopAutoChanging(true);
                        }}
                        active={skill === currentSkill}
                        imageUrl={skill.imageUrl}
                        alt={`${skill.name} logo image`}
                        key={i}
                    />
                ))}
            </SkillCard.Carousel.Root>
            <SkillCard.Content.Root>
                <SkillCard.Content.Title>
                    {currentSkill.name}
                </SkillCard.Content.Title>
                <SkillCard.Content.Progress
                    knowledge={currentSkill.knowledge}
                    color={currentSkill.color}
                />
                <SkillCard.Content.Description>
                    {currentSkill.about}
                </SkillCard.Content.Description>
            </SkillCard.Content.Root>
        </SkillCard.Root>
    );
}
