"use client";

import { ActionsTableDropDown } from "@/components/admin/ui/ActionsTableDropDown";
import { SortingButton } from "@/components/shadcn-ui/sorting-button";
import { ColumnDef } from "@tanstack/react-table";

export type Project = {
    id: number;
    name: string;
    description: string;
    imageUrl: string;
    repoUrl: string;
    siteUrl?: string;
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
        id: "actions",
        header: "Actions",

        cell: ({ row }) => {
            const project = row.original;

            return <ActionsTableDropDown title={`Actions - ${project.id}`} />;
        },
    },
];
