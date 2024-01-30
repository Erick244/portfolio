import { cn } from "@/lib/utils";
import Link from "next/link";
import { ComponentProps } from "react";

export function Logo(props: ComponentProps<typeof Link>) {
    return (
        <Link
            {...props}
            href="/"
            className={cn(
                "flex gap-1 font-mono h-7 select-none",
                props.className
            )}
        >
            <div className="text-xl space-x-1">
                <span>&lt;</span>
                <span>Erick.Henrique</span>
                <span>/&gt;</span>
            </div>
        </Link>
    );
}
