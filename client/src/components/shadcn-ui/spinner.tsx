import { cn } from "@/lib/utils";
import { Loader2, LucideProps } from "lucide-react";

export function Spinner(props: LucideProps) {
    return (
        <Loader2
            {...props}
            className={cn("animate-spin w-5 h-5", props.className)}
        />
    );
}
