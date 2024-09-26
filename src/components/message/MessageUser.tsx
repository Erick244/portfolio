import { cn } from "@/lib/utils";

interface MessageUserProps {
    children: React.ReactNode;
    isSender?: boolean;
}

export function MessageUser({ children, isSender }: MessageUserProps) {
    return (
        <div
            className={cn(
                "flex  items-center gap-2 absolute mt-5",
                isSender ? "flex-row-reverse -left-2" : "flex-row -right-2"
            )}
        >
            <span className="text-background font-semibold text-sm">
                {children}
            </span>
            <div className="h-10 w-10 rounded-full bg-background" />
        </div>
    );
}
