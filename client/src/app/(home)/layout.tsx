import { HomeLayout } from "@/components/layouts/components/HomeLayout";
import { ModeToggle } from "@/components/shadcn-ui/mode-toggle";
import { LayoutProps } from "../layout";

export default function Layout({ children }: LayoutProps) {
    return (
        <HomeLayout>
            <ModeToggle className="absolute right-5 top-5 hidden lg:flex" />
            {children}
        </HomeLayout>
    );
}
