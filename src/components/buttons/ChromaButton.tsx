import { cn } from "@/lib/utils";
import { forwardRef } from "react";
import { Button, ButtonProps } from "../ui/button";

export const ChromaButton = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ children, ...props }, ref) => {
        return (
            <Button
                {...props}
                ref={ref}
                size="icon"
                className={cn(
                    "flex-shrink-0 shadow-md shadow-black/50 before:opacity-0 after:opacity-0 chroma-border hover:before:opacity-100 hover:after:opacity-100 ",

                    props.className
                )}
            >
                {children}
            </Button>
        );
    }
);

ChromaButton.displayName = "ChromaButton";
