import { NavMobileMenu } from "@/components/menus/NavMobileMenu";
import { ModeToggle } from "@/components/shadcn-ui/mode-toggle";
import { Logo } from "@/components/utils/Logo";
import { Footer } from "../templates/footer";
import { Header } from "../templates/header";

interface HomeLayoutProps {
    children: React.ReactNode;
}

export function HomeLayout({ children }: HomeLayoutProps) {
    return (
        <div className="h-screen w-screen flex flex-col max-w-3xl m-auto md:px-0 px-5">
            <Header.Root className="flex justify-between">
                <Logo href="/" />
                <nav className="hidden md:flex items-center gap-3">
                    <Header.Link href="#">projects</Header.Link>
                    <Header.Link href="#">about</Header.Link>
                    <Header.Link href="#">contact</Header.Link>
                    <ModeToggle className="lg:hidden" />
                </nav>
                <div className="md:hidden flex items-center gap-3">
                    <NavMobileMenu />
                    <ModeToggle />
                </div>
            </Header.Root>
            <main className="grow">{children}</main>
            <Footer.Root>FOOTER</Footer.Root>
        </div>
    );
}
