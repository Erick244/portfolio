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
            <DialogContent className="max-w-7xl sm:h-auto h-5/6 overflow-scroll">
                {children}
            </DialogContent>
        </Dialog>
    );
}
