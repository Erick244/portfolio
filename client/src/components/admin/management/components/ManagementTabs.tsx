import { DataTable } from "@/components/shadcn-ui/data-table";
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/shadcn-ui/tabs";
import { cn } from "@/lib/utils";
import { TabsProps } from "@radix-ui/react-tabs";
import {
    TechnologiesTableColumns,
    Technology,
} from "../technologies/table/TechnologiesTableColumns";

const technologiesDataTemp: Technology[] = [
    {
        id: 1,
        name: "Javascript",
        about: "JavaScript is a versatile programming language commonly used for web development.",
        category: "BACKEND",
        experience: "2 years",
        mainColor: "from-yellow-500",
    },
    {
        id: 2,
        name: "Node.js",
        about: "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.",
        category: "BACKEND",
        experience: "2 years",
        mainColor: "from-green-500",
    },
    {
        id: 3,
        name: "React",
        about: "React is a JavaScript library for building user interfaces.",
        category: "FRONTEND",
        experience: "2 years",
        mainColor: "from-green-500",
    },
    {
        id: 4,
        name: "Java",
        about: "Java is a widely-used, class-based, object-oriented programming language.",
        category: "BACKEND",
        experience: "4 years",
        mainColor: "from-orange-500",
    },
    {
        id: 5,
        name: "HTML/CSS",
        about: "HTML (Hypertext Markup Language) and CSS (Cascading Style Sheets) are fundamental technologies for web development.",
        category: "FRONTEND",
        experience: "3 years",
        mainColor: "from-rose-950",
    },
];

export function ManagementTabs(props: TabsProps) {
    return (
        <Tabs
            {...props}
            defaultValue="technologies"
            className={cn("w-4/5", props.className)}
        >
            <TabsList>
                <TabsTrigger value="technologies">Technologies</TabsTrigger>
                <TabsTrigger value="password">Password</TabsTrigger>
            </TabsList>
            <TabsContent value="technologies">
                <DataTable
                    columns={TechnologiesTableColumns}
                    data={technologiesDataTemp}
                    filterField="name"
                />
            </TabsContent>
            <TabsContent value="password">
                Change your password here.
            </TabsContent>
        </Tabs>
    );
}
