import { CarouselItem } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface SkillCardCarouselItemProps {
    imageUrl: string;
    alt: string;
    active?: boolean;
}

export function SkillCardItem({
    imageUrl,
    alt,
    active,
}: SkillCardCarouselItemProps) {
    return (
        <CarouselItem className=" select-none basis-1/4 hover:scale-90 transition-all duration-200 cursor-pointer">
            <Image
                className={cn(
                    "aspect-square w-full h-full max-w-[120px] max-h-[120px] rounded-lg border-2 bg-background/10 p-1",
                    active ? "border-background" : "border-transparent"
                )}
                alt={alt}
                src={imageUrl}
                width={100}
                height={100}
            />
        </CarouselItem>
    );
}
