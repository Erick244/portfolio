export type Skill = {
    name: string;
    knowledge: SkillKnowledge;
    category: SkillCategory;
    imageUrl: string;
    about: string;
    color: string;
};

export type SkillKnowledge = "BASIC" | "INTERMEDIATE" | "ADVANCED";
export type SkillCategory = "FRONTEND" | "BACKEND" | "FULLSTACK";
