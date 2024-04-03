import { cn } from "@/lib/utils";
import Image from "next/image";
import { HTMLAttributes } from "react";

interface TechnologyCardImageProps extends HTMLAttributes<HTMLDivElement> {
    imageUrl: string;
}

export function TechnologyCardImage({
    imageUrl,
    ...props
}: TechnologyCardImageProps) {
    return (
        <div
            {...props}
            className={cn("overflow-hidden rounded", props.className)}
        >
            <Image
                alt="Technology logo image"
                width={50}
                height={50}
                src={imageUrl}
            />
        </div>
    );
}
