import Image from "next/image";

interface ProjectCardDesktopPreviewProps {
    imageUrl: string;
    alt: string;
}

export function ProjectCardDesktopPreview({
    imageUrl,
    alt,
}: ProjectCardDesktopPreviewProps) {
    return (
        <div className="relative flex justify-center border-4 border-foreground rounded w-[200px] h-[120px]">
            <div className="absolute bg-foreground w-6 h-1 rounded-t-none rounded" />
            <Image
                className="aspect-video"
                alt={alt}
                width={1920}
                height={1080}
                src={imageUrl}
            />
            <div className="absolute -bottom-3 w-[calc(100%_+_60px)] h-2 bg-foreground rounded" />
        </div>
    );
}
