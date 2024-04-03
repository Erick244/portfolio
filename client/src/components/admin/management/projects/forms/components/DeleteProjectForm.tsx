"use client";

import { Button } from "@/components/shadcn-ui/button";
import { DialogClose } from "@/components/shadcn-ui/dialog";
import { H2 } from "@/components/shadcn-ui/typography/H2";
import { toast } from "@/components/shadcn-ui/use-toast";
import { deleteData } from "@/functions/api";
import { checkForErrorInResponseData } from "@/functions/data";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";
import { Project } from "../../table/ProjectsTableColumns";

interface DeleteProjectFormProps {
    project: Project;
}

export function DeleteProjectForm({ project }: DeleteProjectFormProps) {
    const router = useRouter();

    async function onSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        try {
            const data = await deleteData(`/projects/${project.id}`);

            checkForErrorInResponseData(data);

            toast({
                title: "Success",
                description: `Technology "${project.name}" deleted!`,
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
            <H2 className="my-5 text-xl animate-none">Delete Project</H2>
            <p className="text-destructive">
                Do you want to <strong>PERMANENTLY DELETE</strong> the &quot;
                {project.name}&quot; project?
            </p>
            <div className="flex justify-between">
                <DialogClose asChild>
                    <Button type="submit" variant="destructive">
                        Delete
                    </Button>
                </DialogClose>
                <DialogClose asChild>
                    <Button type="button" variant="secondary">
                        Cancel
                    </Button>
                </DialogClose>
            </div>
        </form>
    );
}
