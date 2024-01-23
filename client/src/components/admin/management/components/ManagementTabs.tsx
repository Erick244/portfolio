import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/shadcn-ui/tabs";
import { cn } from "@/lib/utils";
import { TabsProps } from "@radix-ui/react-tabs";

export function ManagementTabs(props: TabsProps) {
    return (
        <Tabs
            {...props}
            defaultValue="account"
            className={cn("w-[400px]", props.className)}
        >
            <TabsList>
                <TabsTrigger value="account">Account</TabsTrigger>
                <TabsTrigger value="password">Password</TabsTrigger>
            </TabsList>
            <TabsContent value="account" className="border border-border">
                Make changes to your account here.
            </TabsContent>
            <TabsContent value="password">
                Change your password here.
            </TabsContent>
        </Tabs>
    );
}
