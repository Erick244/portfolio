import { Button } from "@/components/shadcn-ui/button";
import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/shadcn-ui/dialog";
import { Plus } from "lucide-react";
import { HTMLAttributes } from "react";

interface AddDataDialogProps extends HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
}

export function AddDataDialog({ children, ...props }: AddDataDialogProps) {
    return (
        <Dialog>
            <DialogTrigger {...props} asChild>
                <Button>
                    <Plus />
                </Button>
            </DialogTrigger>
            <DialogContent>{children}</DialogContent>
        </Dialog>
    );
}
