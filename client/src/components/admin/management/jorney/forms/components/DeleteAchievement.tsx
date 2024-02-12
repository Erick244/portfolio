"use client";

import { Button } from "@/components/shadcn-ui/button";
import { DialogClose } from "@/components/shadcn-ui/dialog";
import { H2 } from "@/components/shadcn-ui/typography/H2";
import { FormEvent } from "react";
import { Achievement } from "../../table/JorneyTableColumns";

interface DeleteAchievementFormProps {
    achievement: Achievement;
}

export function DeleteAchievementForm({
    achievement,
}: DeleteAchievementFormProps) {
    function onSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        console.log("Delete");
    }

    return (
        <form className="space-y-8 w-full" onSubmit={onSubmit}>
            <H2 className="my-5 text-xl animate-none">Delete Achievement</H2>
            <p className="text-destructive">
                Do you want to <strong>PERMANENTLY DELETE</strong> the &quot;
                {achievement.title}&quot; achievement?
            </p>
            <div className="flex justify-between">
                <Button type="submit" variant="destructive">
                    Delete
                </Button>
                <DialogClose asChild>
                    <Button type="button" variant="secondary">
                        Cancel
                    </Button>
                </DialogClose>
            </div>
        </form>
    );
}
