import { SkillCategory } from "@/types/skill.type";
import { skills } from "./data";

export function GET(
    _: Request,
    { params }: { params: { category: SkillCategory } }
) {
    try {
        const category = params.category.toUpperCase().trim();

        if (!category) {
            return new Response("Category not found", { status: 404 });
        }

        const filteredSkills = skills.filter(
            (skill) => skill.category === category
        );

        return new Response(JSON.stringify(filteredSkills), { status: 200 });
    } catch (error) {
        return new Response((error as Error).message, { status: 404 });
    }
}
