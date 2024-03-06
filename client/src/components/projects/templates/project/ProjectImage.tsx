import { H3 } from "@/components/shadcn-ui/typography/H3";
import { cn } from "@/lib/utils";
import { ExternalLink, Server } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { HTMLAttributes } from "react";

interface ProjectImageProps extends HTMLAttributes<HTMLAnchorElement> {
    imageUrl?: string | null;
    siteUrl?: string | null;
}

export function ProjectImage({
    imageUrl,
    siteUrl,
    ...props
}: ProjectImageProps) {
    return (
        <Link
            {...props}
            href={siteUrl || ""}
            target={siteUrl ? "_blank" : "_self"}
            className={cn(
                "-z-0 sm:w-1/2 animate-slide-in-blurred-right w-4/5 rounded-md overflow-hidden shadow-lg shadow-black/30 flex justify-center items-center group/link",
                props.className
            )}
        >
            {siteUrl && (
                <span className="transition-all duration-200 flex justify-center items-center gap-2 py-2 z-10 absolute text-2xl font-bold group-hover/link:w-full w-0 opacity-0 group-hover/link:opacity-100  group-hover/link:bg-black/80 ">
                    <span>PREVIEW</span>
                    <ExternalLink strokeWidth={3} />
                </span>
            )}
            {imageUrl ? (
                <Image
                    className="object-cover w-full h-full transition-all duration-200 group-hover/link:scale-105 rounded-md"
                    width={500}
                    height={500}
                    alt="Project image"
                    src={imageUrl}
                />
            ) : (
                <div className="w-full rounded-lg h-56 p-10 flex gap-4 flex-col justify-center items-center bg-background/20 text-foreground/70 border border-border border-opacity-25">
                    <H3>ONLY BACKEND</H3>
                    <Server className="w-5 h-5" />
                </div>
            )}
        </Link>
    );
}
