import { TechnologyCard } from "@/components/home/templates/technology-card";
import { Blockquote } from "@/components/shadcn-ui/typography/Blockquote";
import { H2 } from "@/components/shadcn-ui/typography/H2";
import { H3 } from "@/components/shadcn-ui/typography/H3";
import { httpsUrlRegex } from "@/utils/regex";
import { ImageIcon } from "lucide-react";
import { HTMLAttributes } from "react";
import { UseFormReturn } from "react-hook-form";
import { CreateTechnologyFormData } from "../components/CreateTechnologyForm";

interface TechnologyComponentPreviewProps
    extends HTMLAttributes<HTMLDivElement> {
    form: UseFormReturn<CreateTechnologyFormData>;
}

export function TechnologyComponentPreview({
    form,
    ...props
}: TechnologyComponentPreviewProps) {
    const color = form.watch("color");
    const name = form.watch("name") || "Name";
    const imageUrl = form.watch("imageUrl");
    const isValidUrl = imageUrl && imageUrl.match(httpsUrlRegex);
    const about = form.watch("about") || "About Description...";
    const knowledge = form.watch("knowledge") || "BASIC";

    return (
        <div {...props}>
            <H2 className="my-5 text-xl text-center">Component Preview</H2>
            <TechnologyCard.Root color={color}>
                <H3 className="absolute -top-3 bg-background px-1 text-lg">
                    {name}
                </H3>
                <div className="flex justify-between ">
                    <Blockquote className="flex items-center gap-2">
                        <span>Knowledge:</span>
                        <TechnologyCard.Star fill toolTipText="Basic" />
                        <TechnologyCard.Star
                            fill={
                                knowledge === "INTERMEDIATE" ||
                                knowledge === "EXPERT"
                            }
                            toolTipText="Intermediate"
                        />
                        <TechnologyCard.Star
                            fill={knowledge === "EXPERT"}
                            toolTipText="Expert"
                        />
                    </Blockquote>
                    {isValidUrl ? (
                        <TechnologyCard.Image imageUrl={imageUrl} />
                    ) : (
                        <ImageIcon className="w-14 h-14" />
                    )}
                </div>
                <TechnologyCard.About className="max-w-xs">
                    {about}
                </TechnologyCard.About>
            </TechnologyCard.Root>
        </div>
    );
}
