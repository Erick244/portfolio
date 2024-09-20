interface SkillCardHeaderProps {
    children: React.ReactNode;
}

export function SkillCardHeader({ children }: SkillCardHeaderProps) {
    return (
        <header className="flex justify-between items-center pb-2 sm:pb-5">
            {children}
        </header>
    );
}
