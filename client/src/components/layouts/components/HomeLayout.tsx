import { NavMobileMenu } from "@/components/menus/NavMobileMenu";
import { ModeToggle } from "@/components/shadcn-ui/mode-toggle";
import { Logo } from "@/components/utils/Logo";
import { Github } from "lucide-react";
import { Footer } from "../templates/footer";
import { Header } from "../templates/header";
import { NavItems } from "../ui/NavItems";

interface HomeLayoutProps {
    children: React.ReactNode;
}

export function HomeLayout({ children }: HomeLayoutProps) {
    return (
        <div className="h-screen w-screen flex flex-col max-w-3xl m-auto md:px-0 px-5">
            <Header.Root className="flex justify-between items-center sticky top-0">
                <Logo href="/" />
                <nav className="hidden md:flex items-center gap-3">
                    <NavItems />
                    <ModeToggle className="lg:hidden" />
                </nav>
                <div className="md:hidden flex items-center gap-3">
                    <NavMobileMenu />
                    <ModeToggle />
                </div>
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
    );
}
