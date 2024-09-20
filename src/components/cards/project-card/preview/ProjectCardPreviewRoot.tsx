interface ProjectCardPreviewRootProps {
    children: React.ReactNode;
}

export function ProjectCardPreviewRoot({
    children,
}: ProjectCardPreviewRootProps) {
    return <div className="relative mb-10">{children}</div>;
}
