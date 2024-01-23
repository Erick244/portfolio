"use client";

import { Button } from "@/components/shadcn-ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/shadcn-ui/dropdown-menu";
import { SortingButton } from "@/components/shadcn-ui/sorting-button";
import { cn } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";

export type Technology = {
    id: number;
    name: string;
    experience: string;
    category: "FRONTEND" | "BACKEND";
    mainColor: string;
    about: string;
};

export const TechnologiesTableColumns: ColumnDef<Technology>[] = [
    {
        accessorKey: "id",
        header: ({ column }) => SortingButton(column, "ID"),
    },
    {
        accessorKey: "name",
        header: ({ column }) => SortingButton(column, "Name"),
    },
    {
        accessorKey: "experience",
        header: ({ column }) => SortingButton(column, "Experience"),
    },
    {
        accessorKey: "category",
        header: ({ column }) => SortingButton(column, "Category"),
    },
    {
        id: "mainColor",
        header: "Main Color",
        cell: ({ row }) => {
            const mainColor = row.original.mainColor;

            return (
                <div
                    className={cn(
                        "bg-gradient-to-br to-transparent to-70% rounded-full p-2 w-6 h-6 m-auto border border-border",
                        mainColor
                    )}
                ></div>
            );
        },
    },
    {
        id: "actions",
        header: "Actions",

        cell: ({ row }) => {
            const technology = row.original;

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>
                            Actions - {technology.id}
                        </DropdownMenuLabel>

                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuItem>Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            );
        },
    },
];
