import Image from "next/image";

interface ProjectCardMobilePreviewProps {
    imageUrl: string;
    alt: string;
}

export function ProjectCardMobilePreview({
    imageUrl,
    alt,
}: ProjectCardMobilePreviewProps) {
    return (
        <div className="w-[50px] h-[100px] sm:w-[75px] sm:h-[150px] md:w-[100px] md:h-[200px] overflow-hidden flex justify-center absolute border-2 border-foreground rounded-lg top-16 -left-5">
            <div className="absolute bg-foreground w-6 h-1 rounded-t-none rounded" />
            <Image alt={alt} width={375} height={667} src={imageUrl} />
        </div>
    );
}
