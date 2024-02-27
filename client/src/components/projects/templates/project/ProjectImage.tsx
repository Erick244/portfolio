import { H3 } from "@/components/shadcn-ui/typography/H3";
import { cn } from "@/lib/utils";
import { Server } from "lucide-react";
import Image from "next/image";
import { HTMLAttributes } from "react";

interface ProjectImageProps extends HTMLAttributes<HTMLDivElement> {
    imageUrl?: string | null;
}

export function ProjectImage({ imageUrl, ...props }: ProjectImageProps) {
    return (
        <div
            {...props}
            className={cn(
                "-z-0 sm:w-1/2 animate-slide-in-blurred-right w-4/5 rounded-md overflow-hidden shadow-lg shadow-black/30 flex justify-center items-center",
                props.className
            )}
        >
            {imageUrl ? (
                <Image
                    className="object-cover w-full h-full"
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
        </div>
    );
}
