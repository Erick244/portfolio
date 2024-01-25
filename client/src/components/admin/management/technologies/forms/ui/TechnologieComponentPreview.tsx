import { TechnologieCard } from "@/components/home/templates/technologie-card";
import { Blockquote } from "@/components/shadcn-ui/typography/Blockquote";
import { H2 } from "@/components/shadcn-ui/typography/H2";
import { H3 } from "@/components/shadcn-ui/typography/H3";
import { ImageIcon } from "lucide-react";
import { HTMLAttributes } from "react";
import { UseFormReturn } from "react-hook-form";
import { CreateTechnologieFormData } from "../components/CreateTechnologieForm";

interface TechnologieComponentPreviewProps
    extends HTMLAttributes<HTMLDivElement> {
    form: UseFormReturn<CreateTechnologieFormData>;
}

export function TechnologieComponentPreview({
    form,
    ...props
}: TechnologieComponentPreviewProps) {
    const twColorClasses = form.watch("twColorClasses");
    const name = form.watch("name") || "Name";
    const experience = form.watch("experience") || "XXX";
    const imageUrl = form.watch("imageUrl");
    const isValidUrl = imageUrl && imageUrl.match(/^https?:\/\/.+\/.+$/);
    const about = form.watch("about") || "About Description";

    // TODO: Fix twclasses not apply in run time
    return (
        <div {...props}>
            <H2 className="my-5 text-xl text-center">Component Preview</H2>
            <TechnologieCard.Root className={twColorClasses}>
                <H3 className="absolute -top-3 bg-background px-1 text-lg">
                    {name}
                </H3>
                <div className="flex justify-between ">
                    <Blockquote>Experience: {experience}</Blockquote>
                    {isValidUrl ? (
                        <TechnologieCard.Image imageUrl={imageUrl} />
                    ) : (
                        <ImageIcon className="w-14 h-14" />
                    )}
                </div>
                <TechnologieCard.About className="max-w-xs">
                    {about}
                </TechnologieCard.About>
            </TechnologieCard.Root>
        </div>
    );
}
