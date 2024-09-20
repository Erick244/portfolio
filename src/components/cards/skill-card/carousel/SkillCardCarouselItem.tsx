import { CarouselItem } from "@/components/ui/carousel";
import Image from "next/image";

export function SkillCardItem() {
    return (
        <CarouselItem className="select-none basis-1/4 hover:scale-90 transition-all duration-200 cursor-pointer">
            <Image
                className="aspect-square w-full h-full max-w-[120px] max-h-[120px] rounded-lg"
                alt="temp"
                src={
                    "https://styles.redditmedia.com/t5_ufdd1/styles/communityIcon_gyjrgho7vfj31.png?width=256&s=04345b241e7138ca2c9a9e3f6b3ae12e13041638"
                }
                width={100}
                height={100}
            />
        </CarouselItem>
    );
}
