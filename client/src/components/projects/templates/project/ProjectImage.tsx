import { cn } from "@/lib/utils";
import Image from "next/image";
import { HTMLAttributes } from "react";

interface ProjectImageProps extends HTMLAttributes<HTMLDivElement> {
    imageUrl?: string;
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
            <Image
                className="object-cover w-full h-full"
                width={500}
                height={500}
                alt="Project image"
                src={imageUrl ?? "/only-backend.png"}
            />
        </div>
    );
}
