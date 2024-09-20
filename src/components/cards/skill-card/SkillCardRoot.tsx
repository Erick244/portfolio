interface SkillCardRootProps {
    children: React.ReactNode;
}

export function SkillCardRoot({ children }: SkillCardRootProps) {
    return (
        <div className="bg-foreground/50 shadow-lg shadow-rose-500 py-5 px-10 rounded-lg max-w-3xl">
            {children}
        </div>
    );
}
