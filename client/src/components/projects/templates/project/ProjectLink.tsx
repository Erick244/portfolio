import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import Link from "next/link";
import { ComponentProps } from "react";

interface ProjectLinkProps extends ComponentProps<typeof Link> {
    Icon: LucideIcon;
}

export function ProjectLink({ Icon, ...props }: ProjectLinkProps) {
    return (
        <Link
            {...props}
            className={cn(
                "shadow-md shadow-black/30 bg-black/30 text-white  p-1 rounded",
                props.className
            )}
        >
            <Icon />
        </Link>
    );
}
