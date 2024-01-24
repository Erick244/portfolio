"use client";

import { ActionsTableDropDown } from "@/components/admin/ui/ActionsTableDropDown";
import { ColorsTableDemonstration } from "@/components/shadcn-ui/colors-table-demonstration";
import { SortingButton } from "@/components/shadcn-ui/sorting-button";
import { ColumnDef } from "@tanstack/react-table";

export type Achievement = {
    id: number;
    title: string;
    dateFormated: string;
    twColorClasses: string;
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
        id: "twColorClasses",
        header: "Colors",
        cell: ({ row }) => {
            const twColorClasses = row.original.twColorClasses;

            return <ColorsTableDemonstration className={twColorClasses} />;
        },
    },
    {
        id: "actions",
        header: "Actions",

        cell: ({ row }) => {
            const achievement = row.original;

            return (
                <ActionsTableDropDown title={`Actions - ${achievement.id}`} />
            );
        },
    },
];
