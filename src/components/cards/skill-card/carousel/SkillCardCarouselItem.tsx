import { CarouselItem } from "@/components/ui/carousel";
import Image from "next/image";

interface SkillCardCarouselItemProps {
    imageUrl: string;
    alt: string;
}

export function SkillCardItem({ imageUrl, alt }: SkillCardCarouselItemProps) {
    return (
        <CarouselItem className="select-none basis-1/4 hover:scale-90 transition-all duration-200 cursor-pointer">
            <Image
                className="aspect-square w-full h-full max-w-[120px] max-h-[120px] rounded-lg"
                alt={alt}
                src={imageUrl}
                width={100}
                height={100}
            />
        </CarouselItem>
    );
}
