import { cn } from "@/lib/utils";

interface MessageContentProps {
    children: React.ReactNode;
    isSender?: boolean;
}

export function MessageContent({ children, isSender }: MessageContentProps) {
    return (
        <div
            className={cn(
                "bg-background p-5 rounded-xl shadow-md shadow-black/30",
                isSender
                    ? "rounded-bl-none bg-background"
                    : "rounded-br-none bg-foreground"
            )}
        >
            {children}
        </div>
    );
}
