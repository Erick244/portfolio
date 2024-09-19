import { cn } from "@/lib/utils";
import { Button, ButtonProps } from "../ui/button";

export function ChromaButton({ children, ...props }: ButtonProps) {
    return (
        <Button
            {...props}
            size="icon"
            className={cn(
                "flex-shrink-0 shadow-md shadow-black/50 h-9 w-9 before:opacity-0 after:opacity-0 chroma-border hover:before:opacity-100 hover:after:opacity-100 ",

                props.className
            )}
        >
            {children}
        </Button>
    );
}
