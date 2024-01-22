import { cn } from "@/lib/utils";
import { AtSign } from "lucide-react";
import { HTMLAttributes } from "react";
import { CopyToClipboardButton } from "../utils/CopyToClipboardButton";

export function CopyEmail(props: HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            {...props}
            className={cn(
                "font-mono border border-border rounded flex justify-between items-center py-1 px-5",
                props.className
            )}
        >
            <AtSign className="sm:block hidden" />
            <span className="font-mono text-center text-sm sm:text-base">
                erickcontato012@gmail.com
            </span>
            <CopyToClipboardButton text="erickcontato012@gmail.com" />
        </div>
    );
}
