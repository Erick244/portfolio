import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/shadcn-ui/sheet";
import { Menu } from "lucide-react";
import { Header } from "../layouts/templates/header";
import { Button, ButtonProps } from "../shadcn-ui/button";

export function NavMobileMenu(props: ButtonProps) {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button {...props} variant={"outline"} size={"icon"}>
                    <Menu />
                </Button>
            </SheetTrigger>
            <SheetContent>
                <SheetTitle>Menu</SheetTitle>

                <SheetHeader className="pt-10">
                    <Header.Link
                        href="#"
                        className="border border-border rounded py-2"
                    >
                        projects
                    </Header.Link>
                    <Header.Link
                        href="#"
                        className="border border-border rounded py-2"
                    >
                        about
                    </Header.Link>
                    <Header.Link
                        href="#"
                        className="border border-border rounded py-2"
                    >
                        contact
                    </Header.Link>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    );
}
