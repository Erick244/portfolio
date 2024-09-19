interface ProjectCardTechnologiesPreviewProps {
    children: React.ReactNode;
}

export function ProjectCardTechnologiesPreview({
    children,
}: ProjectCardTechnologiesPreviewProps) {
    return (
        <div className="absolute flex items-center gap-4 left-10 sm:left-16 sm:-bottom-12 md:right-0 md:left-auto md:-bottom-14 -bottom-11">
            {children}
        </div>
    );
}
