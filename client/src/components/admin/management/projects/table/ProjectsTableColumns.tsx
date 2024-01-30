"use client";

import { ActionFormDialog } from "@/components/admin/ui/ActionFormDialog";
import { ActionsTableDropDown } from "@/components/admin/ui/ActionsTableDropDown";
import { projectColorStyles } from "@/components/projects/templates/project/ProjectRoot";
import { ColorsTableDemonstration } from "@/components/shadcn-ui/colors-table-demonstration";
import { SortingButton } from "@/components/shadcn-ui/sorting-button";
import { ColumnDef } from "@tanstack/react-table";
import { DeleteIcon, EditIcon } from "lucide-react";
import { DeleteProjectForm } from "../forms/components/DeleteTechnologieForm";
import { EditProjectForm } from "../forms/components/EditProjectForm";

export type Project = {
    id: number;
    name: string;
    description: string;
    imageUrl: string | null;
    repoUrl: string;
    siteUrl: string | null;
    color: string;
};

export const ProjectsTableColumns: ColumnDef<Project>[] = [
    {
        accessorKey: "id",
        header: ({ column }) => <SortingButton column={column} label="ID" />,
    },
    {
        accessorKey: "name",
        header: ({ column }) => <SortingButton column={column} label="Name" />,
    },
    {
        accessorKey: "color",
        header: "Colors",
        cell: ({ row }) => {
            const color = row.original.color;

            return (
                <ColorsTableDemonstration style={projectColorStyles(color)} />
            );
        },
    },
    {
        id: "actions",
        header: "Actions",

        cell: ({ row }) => {
            const project = row.original;

            return (
                <ActionsTableDropDown title={`Actions - ${project.id}`}>
                    <ActionFormDialog
                        FormComponent={<EditProjectForm project={project} />}
                        className="flex justify-between"
                    >
                        Edit <EditIcon className="w-4 h-4" />
                    </ActionFormDialog>
                    <ActionFormDialog
                        contentClasses="max-w-lg"
                        FormComponent={<DeleteProjectForm project={project} />}
                        className="flex justify-between"
                    >
                        Delete <DeleteIcon className="w-4 h-4" />
                    </ActionFormDialog>
                </ActionsTableDropDown>
            );
        },
    },
];
