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
            className="transition-all duration-500 bg-foreground/50 shadow-lg py-5 px-10 rounded-lg w-full sm:w-[500px] md:w-full md:max-w-3xl"
        >
            {children}
        </div>
    );
}
