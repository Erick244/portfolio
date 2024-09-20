import { P } from "@/components/typography/P";
import { ProjectCardTitle } from "./ProjectCardTitle";

interface ProjectCardDescriptionProps {
    children: React.ReactNode;
    title: string;
}

export function ProjectCardDescription({
    children,
    title,
}: ProjectCardDescriptionProps) {
    return (
        <div>
            <ProjectCardTitle className="hidden md:block text-2xl">
                {title}
            </ProjectCardTitle>
            <P className="max-w-[400px] text-center">{children}</P>
        </div>
    );
}
