"use client";

import { Locales } from "@/enums/locales.enum";
import { Skill } from "@/types/skill.type";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { SkillCard } from "../cards/skill-card";
import { H3 } from "../typography/H3";
import { CarouselApi, CarouselItem } from "../ui/carousel";

interface DynamicSkillCardProps {
    skills: Skill[];
    title: string;
}

export function DynamicSkillCard({ skills, title }: DynamicSkillCardProps) {
    const [carouselApi, setCarouselApi] = useState<CarouselApi>();
    const [currentSkill, setCurrentSkill] = useState<Skill>(skills[0]);
    const params = useParams<{ lang: Locales }>();

    useEffect(() => {
        if (!carouselApi) return;

        carouselApi.on("select", () => {
            setCurrentSkill(() => {
                const nextSkill = skills[carouselApi.previousScrollSnap() + 1];

                return nextSkill ? nextSkill : skills[0];
            });
        });
    }, [carouselApi, skills]);

    function clickOnSkill(skill: Skill) {
        if (!carouselApi) return;

        setCurrentSkill(skill);
        carouselApi.plugins().autoplay.stop();
    }

    return (
        <SkillCard.Root color={currentSkill.color}>
            <SkillCard.Header>
                <H3 className="text-lg">{title}</H3>
                <SkillCard.ViewAll title={title}>
                    <div className="flex justify-center gap-5 flex-wrap max-h-[260px] overflow-y-scroll">
                        {skills.map((skill, i) => (
                            <SkillCard.Carousel.Item
                                onClick={() => clickOnSkill(skill)}
                                key={i}
                                active={skill === currentSkill}
                                imageUrl={skill.imageUrl}
                                alt={`${skill.name} logo image`}
                            />
                        ))}
                    </div>
                    <SkillCard.Content.Root>
                        <SkillCard.Content.Title>
                            {currentSkill.name}
                        </SkillCard.Content.Title>
                        <SkillCard.Content.Progress
                            knowledge={currentSkill.knowledge}
                            color={currentSkill.color}
                        />
                        <SkillCard.Content.Description>
                            {currentSkill.about[params.lang]}
                        </SkillCard.Content.Description>
                    </SkillCard.Content.Root>
                </SkillCard.ViewAll>
            </SkillCard.Header>
            <SkillCard.Carousel.Root setApi={setCarouselApi}>
                {skills.map((skill, i) => (
                    <CarouselItem
                        key={i}
                        className="select-none md:basis-1/5 basis-1/4 cursor-pointer"
                    >
                        <SkillCard.Carousel.Item
                            onClick={() => clickOnSkill(skill)}
                            active={skill === currentSkill}
                            imageUrl={skill.imageUrl}
                            alt={`${skill.name} logo image`}
                        />
                    </CarouselItem>
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
                    {currentSkill.about[params.lang]}
                </SkillCard.Content.Description>
            </SkillCard.Content.Root>
        </SkillCard.Root>
    );
}
