interface SkillCardRootProps {
    children: React.ReactNode;
    color: string;
}

export function SkillCardRoot({ children, color }: SkillCardRootProps) {
    return (
        <div
            style={{
                boxShadow: `0 10px 15px -3px ${color}, 0 4px 6px -4px ${color}`,
            }}
            className="bg-foreground/50 shadow-lg py-5 px-10 rounded-lg max-w-3xl"
        >
            {children}
        </div>
    );
}
