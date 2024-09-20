interface SkillCardContentRootProps {
    children: React.ReactNode;
}

export function SkillCardContentRoot({ children }: SkillCardContentRootProps) {
    return <div className="flex flex-col gap-2">{children}</div>;
}
