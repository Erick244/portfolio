import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/shadcn-ui/tabs";
import { JourneyTab } from "../journey/components/JourneyTab";
import { ProjectsTab } from "../projects/components/ProjectsTab";
import { TechnologiesTab } from "../technologies/components/TechnologiesTab";

interface ManagementTabsProps {
    pageParam: string;
}

export function ManagementTabs({ pageParam = "1" }: ManagementTabsProps) {
    return (
        <Tabs defaultValue="technologies" className="w-4/5">
            <TabsList>
                <TabsTrigger value="technologies">Technologies</TabsTrigger>
                <TabsTrigger value="projects">Projects</TabsTrigger>
                <TabsTrigger value="journey">Journey</TabsTrigger>
            </TabsList>
            <TabsContent value="technologies">
                <TechnologiesTab pageParam={pageParam} />
            </TabsContent>
            <TabsContent value="projects">
                <ProjectsTab pageParam={pageParam} />
            </TabsContent>
            <TabsContent value="journey">
                <JourneyTab pageParam={pageParam} />
            </TabsContent>
        </Tabs>
    );
}
