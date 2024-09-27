"use client";

import { toast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { CopyCheckIcon, CopyIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { Button, ButtonProps } from "../ui/button";

interface CopyButtonProps extends ButtonProps {
    copyText: string;
}

export function CopyButton({ copyText, children, ...props }: CopyButtonProps) {
    const [isCopied, setIsCopied] = useState<boolean>(false);

    async function copyToClipboard() {
        await navigator.clipboard.writeText(copyText);
        setIsCopied(true);

        toast({
            title: "Copied to Clipboard!",
        });
    }

    useEffect(() => {
        setTimeout(() => {
            setIsCopied(false);
        }, 5000);
    }, [isCopied]);

    return (
        <Button
            {...props}
            size={props.size || "icon"}
            className={cn(
                "active:scale-90 transition-all group overflow-hidden relative",
                props.className
            )}
            onClick={copyToClipboard}
        >
            {children && (
                <span className="transition-all absolute translate-y-0  group-hover:-translate-y-[calc(100%_+_20px)]">
                    {children}
                </span>
            )}
            <span
                className={cn(
                    children &&
                        "transition-all absolute translate-y-[calc(100%_+_20px)] group-hover:translate-y-0"
                )}
            >
                {isCopied ? <CopyCheckIcon /> : <CopyIcon />}
            </span>
        </Button>
    );
}
