import { cn } from "@/lib/utils";
import Link from "next/link";
import { ComponentProps } from "react";

export function Logo(props: ComponentProps<typeof Link>) {
    return (
        <Link
            {...props}
            href="/"
            className={cn("flex gap-1 font-mono h-7", props.className)}
        >
            <div className="text-xl space-x-1">
                <span>&#123;</span>
                <span>ERICK</span>
                <span>&#125;</span>
            </div>
            <div className="self-end text-sm">HENRIQUE</div>
        </Link>
    );
}
