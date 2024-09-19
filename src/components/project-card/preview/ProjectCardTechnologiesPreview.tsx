interface ProjectCardTechnologiesPreviewProps {
    children: React.ReactNode;
}

export function ProjectCardTechnologiesPreview({
    children,
}: ProjectCardTechnologiesPreviewProps) {
    return (
        <div className="absolute flex justify-between items-center gap-4 left-10 -bottom-11">
            {children}
        </div>
    );
}
