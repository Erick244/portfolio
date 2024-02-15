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
                <div className="w-full rounded-lg h-full p-10 bg-clip-border border border-background flex gap-4 flex-col justify-center items-center bg-[linear-gradient(to_right,hsl(var(--background))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--background))_1px,transparent_1px)] bg-[size:24px_24px] bg-background/20 text-foreground/60">
                    <H3 className="text-3xl">ONLY BACKEND</H3>
                    <Server className="w-10 h-10" />
                </div>
            )}
        </div>
    );
}
