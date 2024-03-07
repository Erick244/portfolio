"use client";

import { Button } from "@/components/shadcn-ui/button";
import { DialogClose } from "@/components/shadcn-ui/dialog";
import { H2 } from "@/components/shadcn-ui/typography/H2";
import { toast } from "@/components/shadcn-ui/use-toast";
import { deleteData } from "@/functions/api";
import { checkForErrorInResponseData } from "@/functions/data";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";
import { Achievement } from "../../table/JorneyTableColumns";

interface DeleteAchievementFormProps {
    achievement: Achievement;
}

export function DeleteAchievementForm({
    achievement,
}: DeleteAchievementFormProps) {
    const router = useRouter();

    async function onSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        try {
            const data = await deleteData(`/jorney/${achievement.id}`);

            checkForErrorInResponseData(data);

            toast({
                title: "Success",
                description: `Technologie "${achievement.title}" deleted!`,
            });

            router.refresh();
            router.prefetch("/");
        } catch (error: any) {
            toast({
                title: "Error",
                description: error.message,
                variant: "destructive",
            });
        }
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
