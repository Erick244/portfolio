import { Locales } from "@/enums/locales.enum";

export type Skill = {
    name: string;
    knowledge: SkillKnowledge;
    category: SkillCategory;
    imageUrl: string;
    about: {
        [key in Locales]: string;
    };
    color: string;
};

export type SkillKnowledge = "BEGINNER" | "INTERMEDIATE" | "ADVANCED";
export type SkillCategory = "FRONTEND" | "BACKEND" | "FULLSTACK";
