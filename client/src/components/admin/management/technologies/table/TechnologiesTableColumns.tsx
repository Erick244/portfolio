"use client";

import { ActionFormDialog } from "@/components/admin/ui/ActionFormDialog";
import { ActionsTableDropDown } from "@/components/admin/ui/ActionsTableDropDown";
import { technologieColorStyles } from "@/components/home/templates/technologie-card/TechnologieCardRoot";
import { ColorsTableDemonstration } from "@/components/shadcn-ui/colors-table-demonstration";
import { SortingButton } from "@/components/shadcn-ui/sorting-button";
import { ColumnDef } from "@tanstack/react-table";
import { DeleteIcon, EditIcon } from "lucide-react";
import { DeleteTechnologieForm } from "../forms/components/DeleteTechnologieForm";
import { EditTechnologieForm } from "../forms/components/EditTechnologieForm";

export type Technologie = {
    id: number;
    name: string;
    knowledge: "BASIC" | "INTERMEDIATE" | "EXPERT";
    category: "FRONTEND" | "BACKEND";
    about: string;
    imageUrl: string;
    color: string;
};

export const TechnologiesTableColumns: ColumnDef<Technologie>[] = [
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
                    style={technologieColorStyles(color)}
                />
            );
        },
    },
    {
        id: "actions",
        header: "Actions",

        cell: ({ row }) => {
            const technologie = row.original;

            return (
                <ActionsTableDropDown title={`Actions - ${technologie.id}`}>
                    <ActionFormDialog
                        FormComponent={
                            <EditTechnologieForm technologie={technologie} />
                        }
                        className="flex justify-between"
                    >
                        Edit <EditIcon className="w-4 h-4" />
                    </ActionFormDialog>
                    <ActionFormDialog
                        contentClasses="max-w-lg"
                        FormComponent={
                            <DeleteTechnologieForm technologie={technologie} />
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
