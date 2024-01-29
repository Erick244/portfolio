import { Project } from "@/components/projects/templates/project";
import { H2 } from "@/components/shadcn-ui/typography/H2";
import { httpsUrlRegex } from "@/utils/regex";
import { ExternalLink, Github } from "lucide-react";
import { HTMLAttributes } from "react";
import { UseFormReturn } from "react-hook-form";
import { CreateProjectFormData } from "../components/CreateProjectForm";

interface ProjectComponentPreviewProps extends HTMLAttributes<HTMLDivElement> {
    form: UseFormReturn<CreateProjectFormData>;
}

export function ProjectComponentPreview({
    form,
    ...props
}: ProjectComponentPreviewProps) {
    const color = form.watch("color");
    const name = form.watch("name") || "Name";
    const description = form.watch("description") || "Project Description...";
    const imageUrl = form.watch("imageUrl");
    const isValidImageUrl = imageUrl && imageUrl.match(httpsUrlRegex);
    const repoUrl = form.watch("repoUrl");
    const siteUrl = form.watch("siteUrl");

    return (
        <div {...props}>
            <H2 className="my-5 text-xl text-center">Component Preview</H2>
            <Project.Root color={color}>
                <Project.Informations title={name} description={description} />
                <Project.Image imageUrl={isValidImageUrl ? imageUrl : null} />
                <Project.Links>
                    <Project.Link Icon={Github} href={repoUrl} />

                    {siteUrl && (
                        <Project.Link Icon={ExternalLink} href={siteUrl} />
                    )}
                </Project.Links>
            </Project.Root>
        </div>
    );
}
