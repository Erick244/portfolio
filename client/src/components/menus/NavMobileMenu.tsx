import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/shadcn-ui/sheet";
import { Menu } from "lucide-react";
import { NavItems } from "../layouts/ui/NavItems";
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
                    <NavItems />
                </SheetHeader>
            </SheetContent>
        </Sheet>
    );
}
