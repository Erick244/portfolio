"use client";

import { ActionsTableDropDown } from "@/components/admin/ui/ActionsTableDropDown";
import { ColorsTableDemonstration } from "@/components/shadcn-ui/colors-table-demonstration";
import { SortingButton } from "@/components/shadcn-ui/sorting-button";
import { ColumnDef } from "@tanstack/react-table";

export type Technologie = {
    id: number;
    name: string;
    experience: string;
    category: "FRONTEND" | "BACKEND";
    about: string;
    imageUrl: string;
    twColorClasses: string;
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
        accessorKey: "experience",
        header: ({ column }) => (
            <SortingButton column={column} label="Experience" />
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
            const twColorClasses = row.original.twColorClasses;

            return <ColorsTableDemonstration className={twColorClasses} />;
        },
    },
    {
        id: "actions",
        header: "Actions",

        cell: ({ row }) => {
            const technologie = row.original;

            return (
                <ActionsTableDropDown title={`Actions - ${technologie.id}`} />
            );
        },
    },
];
