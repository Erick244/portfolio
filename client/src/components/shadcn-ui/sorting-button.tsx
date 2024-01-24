import { Column } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { Button } from "./button";

interface SortingButtonProps<TData, TValue> {
    column: Column<TData, TValue>;
    label: string;
}

export function SortingButton<TData, TValue>({
    column,
    label,
}: SortingButtonProps<TData, TValue>) {
    return (
        <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
            {label}
            <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
    );
}
