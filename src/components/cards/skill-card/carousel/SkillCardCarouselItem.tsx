import { cn } from "@/lib/utils";
import Image from "next/image";
import { HTMLAttributes } from "react";

interface SkillCardCarouselItemProps extends HTMLAttributes<HTMLDivElement> {
    imageUrl: string;
    alt: string;
    active?: boolean;
}

export function SkillCardItem({
    imageUrl,
    alt,
    active,
    ...props
}: SkillCardCarouselItemProps) {
    return (
        <Image
            {...props}
            className={cn(
                "cursor-pointer transition-all duration-300  aspect-square hover:bg-background/20 w-[60px] h-[60px] sm:w-[100px] sm:h-[100px] md:w-[120px] md:h-[120px] rounded-lg border-2 bg-background/10 p-1",
                active ? "border-background/50 scale-90 " : "border-transparent"
            )}
            alt={alt}
            src={imageUrl}
            width={100}
            height={100}
        />
    );
}
