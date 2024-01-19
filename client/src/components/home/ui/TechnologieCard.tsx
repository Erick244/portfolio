import { Blockquote } from "@/components/shadcn-ui/typography/Blockquote";
import { H3 } from "@/components/shadcn-ui/typography/H3";
import { H4 } from "@/components/shadcn-ui/typography/H4";
import { P } from "@/components/shadcn-ui/typography/P";
import { cn } from "@/lib/utils";
import { ImageIcon } from "lucide-react";
import Image from "next/image";
import { HTMLAttributes } from "react";

interface TechnologieCardProps extends HTMLAttributes<HTMLDivElement> {
    title: string;
    experience: string;
    about: string;
    imageUrl?: string;
}

export function TechnologieCard({
    about,
    experience,
    title,
    imageUrl,
    ...props
}: TechnologieCardProps) {
    return (
        <div
            {...props}
            className={cn(
                "snap-center relative border h-60 border-border p-5 m-5 transition-all duration-300 rounded-lg bg-gradient-to-br from-background from-60%  to-100%",
                props.className
            )}
        >
            <H3 className="absolute -top-3 bg-background px-1 text-lg">
                {title}
            </H3>
            <div className="flex justify-between ">
                <Blockquote>Experience: {experience}</Blockquote>
                {imageUrl ? (
                    <div className="overflow-hidden rounded">
                        <Image
                            alt="Technologie logo image"
                            width={50}
                            height={50}
                            src={imageUrl}
                        />
                    </div>
                ) : (
                    <ImageIcon className="w-10 h-10 " />
                )}
            </div>
            <div className="flex flex-col">
                <H4 className="mt-5">About</H4>
                <P className="backdrop-blur-sm font-sans">{about}</P>
            </div>
        </div>
    );
}
