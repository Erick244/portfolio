"use client";
import { cn } from "@/lib/utils";
import { Check, Copy } from "lucide-react";
import { useState } from "react";
import { Button, ButtonProps } from "../shadcn-ui/button";

interface CopyToClipboardButtonProps extends ButtonProps {
    text: string;
}

export function CopyToClipboardButton({
    text,
    ...props
}: CopyToClipboardButtonProps) {
    const [copied, setCopied] = useState<boolean>(false);

    function copyToClipboard() {
        if (copied) return;

        navigator.clipboard.writeText(text);
        setCopied(true);

        setTimeout(() => {
            setCopied(false);
        }, 5000);
    }

    return (
        <Button
            {...props}
            variant={"outline"}
            size={"icon"}
            className={cn("", props.className)}
            onClick={copyToClipboard}
        >
            {copied ? (
                <Check className="w-4 h-4" />
            ) : (
                <Copy className="w-4 h-4" />
            )}
        </Button>
    );
}
