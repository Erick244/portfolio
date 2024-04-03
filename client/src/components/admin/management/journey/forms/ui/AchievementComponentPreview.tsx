import { Achievement } from "@/components/about/templates/achievement";
import { H2 } from "@/components/shadcn-ui/typography/H2";
import { format } from "date-fns";
import { HTMLAttributes } from "react";
import { UseFormReturn } from "react-hook-form";
import { CreateAchievementFormData } from "../components/CreateAchievementForm";

interface AchievementComponentPreviewProps
    extends HTMLAttributes<HTMLDivElement> {
    form: UseFormReturn<CreateAchievementFormData>;
}

export function AchievementComponentPreview({
    form,
    ...props
}: AchievementComponentPreviewProps) {
    const color = form.watch("color");
    const date = form.watch("date");
    const dateFormatted = date
        ? format(date, "PPP")
        : format(new Date(), "PPP");
    const title = form.watch("title") || "Title";

    return (
        <div {...props}>
            <H2 className="my-5 text-xl text-center">Component Preview</H2>
            <Achievement.Root className="mt-10">
                <Achievement.Date dateFormatted={dateFormatted} />
                <Achievement.Line>
                    <Achievement.Title color={color}>{title}</Achievement.Title>
                </Achievement.Line>
            </Achievement.Root>
        </div>
    );
}
