import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/shadcn-ui/dialog";
import { DropdownMenuItem } from "@/components/shadcn-ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface ActionFormDialogProps extends HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
    FormComponent: JSX.Element;
    contentClasses?: string;
}

export function ActionFormDialog({
    children,
    FormComponent,
    contentClasses,
    ...props
}: ActionFormDialogProps) {
    return (
        <Dialog>
            <DialogTrigger className="w-full">
                <DropdownMenuItem
                    {...props}
                    onSelect={(e) => e.preventDefault()}
                >
                    {children}
                </DropdownMenuItem>
            </DialogTrigger>
            <DialogContent className={cn("max-w-7xl", contentClasses)}>
                {FormComponent}
            </DialogContent>
        </Dialog>
    );
}
