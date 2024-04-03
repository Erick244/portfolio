"use client";

import { ActionFormDialog } from "@/components/admin/ui/ActionFormDialog";
import { ActionsTableDropDown } from "@/components/admin/ui/ActionsTableDropDown";
import { technologyColorStyles } from "@/components/home/templates/technology-card/TechnologyCardRoot";
import { ColorsTableDemonstration } from "@/components/shadcn-ui/colors-table-demonstration";
import { SortingButton } from "@/components/shadcn-ui/sorting-button";
import { ColumnDef } from "@tanstack/react-table";
import { DeleteIcon, EditIcon } from "lucide-react";
import { DeleteTechnologyForm } from "../forms/components/DeleteTechnologyForm";
import { EditTechnologyForm } from "../forms/components/EditTechnologyForm";

export type Technology = {
    id: number;
    name: string;
    knowledge: "BASIC" | "INTERMEDIATE" | "EXPERT";
    category: "FRONTEND" | "BACKEND";
    about: string;
    imageUrl: string;
    color: string;
};

export const TechnologiesTableColumns: ColumnDef<Technology>[] = [
    {
        accessorKey: "id",
        header: ({ column }) => <SortingButton column={column} label="ID" />,
    },
    {
        accessorKey: "name",
        header: ({ column }) => <SortingButton column={column} label="Name" />,
    },
    {
        accessorKey: "knowledge",
        header: ({ column }) => (
            <SortingButton column={column} label="Knowledge" />
        ),
    },
    {
        accessorKey: "category",
        header: ({ column }) => (
            <SortingButton column={column} label="Category" />
        ),
    },
    {
        id: "twColorClasses",
        header: "Colors",
        cell: ({ row }) => {
            const color = row.original.color;

            return (
                <ColorsTableDemonstration
                    style={technologyColorStyles(color)}
                />
            );
        },
    },
    {
        id: "actions",
        header: "Actions",

        cell: ({ row }) => {
            const technology = row.original;

            return (
                <ActionsTableDropDown title={`Actions - ${technology.id}`}>
                    <ActionFormDialog
                        FormComponent={
                            <EditTechnologyForm technology={technology} />
                        }
                        className="flex justify-between"
                    >
                        Edit <EditIcon className="w-4 h-4" />
                    </ActionFormDialog>
                    <ActionFormDialog
                        contentClasses="max-w-lg"
                        FormComponent={
                            <DeleteTechnologyForm technology={technology} />
                        }
                        className="flex justify-between"
                    >
                        Delete <DeleteIcon className="w-4 h-4" />
                    </ActionFormDialog>
                </ActionsTableDropDown>
            );
        },
    },
];
