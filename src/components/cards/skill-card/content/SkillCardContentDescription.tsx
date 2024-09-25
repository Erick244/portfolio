import { P, PProps } from "@/components/typography/P";

export function SkillCardContentDescription({ children }: PProps) {
    return <P className="text-center m-auto max-w-[600px]">{children}</P>;
}
