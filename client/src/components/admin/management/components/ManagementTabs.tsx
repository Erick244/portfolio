import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/shadcn-ui/tabs";
import { cn } from "@/lib/utils";
import { TabsProps } from "@radix-ui/react-tabs";
import { JorneyTab } from "../jorney/components/JorneyTab";
import { ProjectsTab } from "../projects/components/ProjectsTab";
import { TechnologiesTab } from "../technologies/components/TechnologiesTab";

export function ManagementTabs(props: TabsProps) {
    return (
        <Tabs
            {...props}
            defaultValue="technologies"
            className={cn("w-4/5", props.className)}
        >
            <TabsList>
                <TabsTrigger value="technologies">Technologies</TabsTrigger>
                <TabsTrigger value="projects">Projects</TabsTrigger>
                <TabsTrigger value="jorney">Jorney</TabsTrigger>
            </TabsList>
            <TabsContent value="technologies">
                <TechnologiesTab />
            </TabsContent>
            <TabsContent value="projects">
                <ProjectsTab />
            </TabsContent>
            <TabsContent value="jorney">
                <JorneyTab />
            </TabsContent>
        </Tabs>
    );
}
