"use client";

import { ChromaButton } from "@/components/buttons/ChromaButton";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTrigger,
} from "@/components/ui/dialog";
import { useDictionary } from "@/contexts/DictionaryContext";
import { DialogTitle } from "@radix-ui/react-dialog";

interface SkillCardViewAllProps {
    title: string;
    children: React.ReactNode;
}

export function SkillCardViewAll({ children, title }: SkillCardViewAllProps) {
    const dict = useDictionary();

    return (
        <Dialog>
            <DialogTrigger asChild>
                <ChromaButton
                    aria-label="View All Skills"
                    className="h-6 w-24 font-semibold text-xs"
                >
                    {dict.components.skillCardViewAll.buttonLabel}
                </ChromaButton>
            </DialogTrigger>
            <DialogContent className="bg-foreground/20 backdrop-blur-sm text-background">
                <DialogHeader>
                    <DialogTitle className="font-semibold">
                        {title} SKILLS
                    </DialogTitle>
                </DialogHeader>
                {children}
            </DialogContent>
        </Dialog>
    );
}
