import { cn } from "@/lib/utils";
import Image from "next/image";
import { HTMLAttributes } from "react";

interface TechnologieCardImageProps extends HTMLAttributes<HTMLDivElement> {
    imageUrl: string;
}

export function TechnologieCardImage({
    imageUrl,
    ...props
}: TechnologieCardImageProps) {
    return (
        <div
            {...props}
            className={cn("overflow-hidden rounded", props.className)}
        >
            <Image
                alt="Technologie logo image"
                width={50}
                height={50}
                src={imageUrl}
            />
        </div>
    );
}
