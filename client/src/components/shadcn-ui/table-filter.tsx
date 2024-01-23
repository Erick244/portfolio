"use client";

import { cn } from "@/lib/utils";
import { Table } from "@tanstack/react-table";
import { HTMLAttributes } from "react";
import { Input } from "./input";

interface TableFilterProps<TData> extends HTMLAttributes<HTMLDivElement> {
    table: Table<TData>;
    filterField: string;
}

export function TableFilter<TData>({
    table,
    filterField,
    ...props
}: TableFilterProps<TData>) {
    return (
        <div
            {...props}
            className={cn("flex items-center py-4", props.className)}
        >
            <Input
                placeholder={`Seach by ${filterField}...`}
                value={
                    (table
                        .getColumn(filterField)
                        ?.getFilterValue() as string) ?? ""
                }
                onChange={(event) =>
                    table
                        .getColumn(filterField)
                        ?.setFilterValue(event.target.value)
                }
                className="max-w-sm"
            />
        </div>
    );
}
