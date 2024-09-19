import Image from "next/image";

interface ProjectCardTechnologyPreviewProps {
    imageUrl: string;
    alt: string;
}

export function ProjectCardTechnologyPreview({
    imageUrl,
    alt,
}: ProjectCardTechnologyPreviewProps) {
    return (
        <div className="border rounded shadow-lg w-[30px] h-[30px] sm:w-[35px] sm:h-[35px] md:w-[40px] md:h-[40px] ">
            <Image
                className="w-full h-full rounded aspect-square"
                alt={alt}
                src={imageUrl}
                width={30}
                height={30}
            />
        </div>
    );
}
