import { P, PProps } from "@/components/typography/P";

export function SkillCardContentDescription({ children }: PProps) {
    return (
        <P className="text-center m-auto max-w-[600px] h-[50px] md:h-[70px] overflow-y-scroll hidden-scrollbar">
            {children}
        </P>
    );
}
