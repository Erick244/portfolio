import { Button } from "@/components/shadcn-ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/shadcn-ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";

interface ActionsTableDropDownProps {
    title: string;
    children: React.ReactNode;
}

export function ActionsTableDropDown({
    title,
    children,
}: ActionsTableDropDownProps) {
    return (
        <DropdownMenu modal={false}>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                    <span className="sr-only">Open menu</span>
                    <MoreHorizontal className="h-4 w-4" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuLabel>{title}</DropdownMenuLabel>

                <DropdownMenuSeparator />

                {children}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
