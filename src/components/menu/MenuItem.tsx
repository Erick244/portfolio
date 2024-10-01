import { cn } from "@/lib/utils";
import Link from "next/link";
import { ComponentProps } from "react";

interface MenuItemProps extends ComponentProps<typeof Link> {
    children: React.ReactNode;
    label: string;
    active?: boolean;
}

export function MenuItem({ children, active, label, ...props }: MenuItemProps) {
    return (
        <Link
            {...props}
            className={cn(
                "h-10 w-14 lg:h-14 flex justify-center items-center scale-90 rounded lg:rounded-xl cursor-pointer transition-all duration-300 group",
                active && "bg-foreground text-background scale-100",
                props.className
            )}
        >
            <div className="opacity-0 group-hover:opacity-100 whitespace-nowrap transition-all duration-300 w-0 lg:group-hover:w-full group-hover:w-24 text-sm h-10 absolute bg-foreground lg:left-full lg:top-auto -top-10 rounded flex justify-center items-center text-background font-mono">
                {label}
            </div>
            {children}
        </Link>
    );
}
