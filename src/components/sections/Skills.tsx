import { skills } from "@/data/skills.data";
import { SkillCategory } from "@/types/skill.type";
import { DynamicSkillCard } from "../client-components/DynamicSkillCard";
import { ServerMotion } from "../framer-motion-server";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

export function Skills() {
    const filterSkillsByCategory = (category: SkillCategory) => {
        return skills.filter((skill) => skill.category === category);
    };

    return (
        <section className="py-10">
            <Tabs defaultValue="FULLSTACK">
                <TabsList className="bg-transparent flex justify-center items-center backdrop-blur-sm">
                    <TabsTrigger value="FRONTEND">Frontend</TabsTrigger>
                    <TabsTrigger value="FULLSTACK">Fullstack</TabsTrigger>
                    <TabsTrigger value="BACKEND">Backend</TabsTrigger>
                </TabsList>
                <TabsContent value="FULLSTACK">
                    <ServerMotion.div
                        className="backdrop-blur-lg"
                        initial={{ opacity: 0, y: "10px" }}
                        animate={{ opacity: 1, y: "0px" }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                        <DynamicSkillCard
                            skills={filterSkillsByCategory("FULLSTACK")}
                            title="FULLSTACK"
                        />
                    </ServerMotion.div>
                </TabsContent>
                <TabsContent value="FRONTEND">
                    <ServerMotion.div
                        className="backdrop-blur-lg"
                        initial={{ opacity: 0, y: "10px" }}
                        animate={{ opacity: 1, y: "0px" }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                        <DynamicSkillCard
                            skills={filterSkillsByCategory("FRONTEND")}
                            title="FRONTEND"
                        />
                    </ServerMotion.div>
                </TabsContent>
                <TabsContent value="BACKEND">
                    <ServerMotion.div
                        className="backdrop-blur-lg"
                        initial={{ opacity: 0, y: "10px" }}
                        animate={{ opacity: 1, y: "0px" }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                        <DynamicSkillCard
                            skills={filterSkillsByCategory("BACKEND")}
                            title="BACKEND"
                        />
                    </ServerMotion.div>
                </TabsContent>
            </Tabs>
        </section>
    );
}
