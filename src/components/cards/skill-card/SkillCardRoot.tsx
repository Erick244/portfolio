interface SkillCardRootProps {
    children: React.ReactNode;
    color: string;
}

export function SkillCardRoot({ children, color }: SkillCardRootProps) {
    return (
        <div
            style={{
                boxShadow: `0 10px 15px -3px ${color}, 0 4px 6px -4px ${color}`,
                backgroundImage: `linear-gradient(${color} 1.5px, transparent 1.5px)`,
                backgroundSize: "110px 110px, 100% 100%",
            }}
            className="transition-all duration-500 bg-foreground/10 backdrop-blur-lg shadow-lg py-5 px-10 rounded-lg w-full max-w-md sm:w-[500px] md:w-full md:max-w-3xl"
        >
            {children}
        </div>
    );
}
