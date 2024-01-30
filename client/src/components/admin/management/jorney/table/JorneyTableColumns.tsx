"use client";

import { achievementColorStyles } from "@/components/about/templates/achievement/AchievementTitle";
import { ActionFormDialog } from "@/components/admin/ui/ActionFormDialog";
import { ActionsTableDropDown } from "@/components/admin/ui/ActionsTableDropDown";
import { ColorsTableDemonstration } from "@/components/shadcn-ui/colors-table-demonstration";
import { SortingButton } from "@/components/shadcn-ui/sorting-button";
import { ColumnDef } from "@tanstack/react-table";
import { DeleteIcon, EditIcon } from "lucide-react";
import { DeleteAchievementForm } from "../forms/components/DeleteTechnologieForm";
import { EditAchievementForm } from "../forms/components/EditAchievementForm";

export type Achievement = {
    id: number;
    title: string;
    dateFormated: string;
    color: string;
};

export const JorneyTableColumns: ColumnDef<Achievement>[] = [
    {
        accessorKey: "id",
        header: ({ column }) => <SortingButton column={column} label="ID" />,
    },
    {
        accessorKey: "title",
        header: ({ column }) => <SortingButton column={column} label="Title" />,
    },
    {
        accessorKey: "dateFormated",
        header: ({ column }) => <SortingButton column={column} label="Date" />, // TODO: Create a date filter for this
    },

    {
        id: "color",
        header: "Colors",
        cell: ({ row }) => {
            const color = row.original.color;

            return (
                <ColorsTableDemonstration
                    style={achievementColorStyles(color)}
                />
            );
        },
    },
    {
        id: "actions",
        header: "Actions",

        cell: ({ row }) => {
            const achievement = row.original;

            return (
                <ActionsTableDropDown title={`Actions - ${achievement.id}`}>
                    <ActionFormDialog
                        FormComponent={
                            <EditAchievementForm achievement={achievement} />
                        }
                        className="flex justify-between"
                    >
                        Edit <EditIcon className="w-4 h-4" />
                    </ActionFormDialog>
                    <ActionFormDialog
                        contentClasses="max-w-lg"
                        FormComponent={
                            <DeleteAchievementForm achievement={achievement} />
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
