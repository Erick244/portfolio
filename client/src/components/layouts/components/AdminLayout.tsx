import { ModeToggle } from "@/components/shadcn-ui/mode-toggle";
import { H1 } from "@/components/shadcn-ui/typography/H1";
import { Logo } from "@/components/utils/Logo";
import { Github } from "lucide-react";
import { Footer } from "../templates/footer";
import { Header } from "../templates/header";
import { SideBar } from "../templates/side-bar";
import { SideBarItems } from "../ui/SideBarItems";

interface AdminLayoutProps {
    children: React.ReactNode;
    title: string;
}

export function AdminLayout({ children, title }: AdminLayoutProps) {
    return (
        <div className="h-screen w-screen flex">
            <SideBar.Root className="items-center">
                <Logo href="/" className="pb-12 pt-8" />
                <SideBarItems />
            </SideBar.Root>

            <div className="flex flex-col w-full h-full">
                <Header.Root className="px-10 flex justify-between items-center border-b border-border sticky top-0">
                    <H1 className="lg:text-2xl text-2xl">{title}</H1>
                    <ModeToggle />
                </Header.Root>

                <main className="grow">{children}</main>

                <Footer.Root className="flex justify-between items-center">
                    <Logo href="/" />
                    <Footer.Link
                        href={"https://github.com/Erick244/portfolio"}
                        target="_blank"
                    >
                        <Github />
                    </Footer.Link>
                </Footer.Root>
            </div>
        </div>
    );
}
