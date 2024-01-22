import { cn } from "@/lib/utils";
import { Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { HTMLAttributes } from "react";
import { CopyToClipboardButton } from "../utils/CopyToClipboardButton";

export function OthersContacts(props: HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            {...props}
            className={cn("flex gap-5 sm:flex-row flex-col", props.className)}
        >
            <Link
                className="animate-slide-in-blurred-left transition-all hover:bg-foreground hover:text-background select-none w-full flex border border-border rounded p-2 items-center justify-between gap-2 font-mono"
                href="https://github.com/Erick244"
                target="_blank"
            >
                <span>GitHub</span>
                <Github />
            </Link>
            <div className="animate-slide-in-blurred-bottom hover:bg-gray-700 hover:text-white transition-all select-none w-full flex border border-border rounded p-2 items-center justify-between gap-2 font-mono">
                <span>Discord</span>
                <CopyToClipboardButton
                    text="kamy.kaze"
                    className="text-foreground"
                />
            </div>
            <Link
                className="hover:bg-blue-500 hover:text-white transition-all select-none w-full flex border border-border rounded p-2 items-center justify-between gap-2 font-mono animate-slide-in-blurred-right"
                href="https://www.linkedin.com/in/erick-henrique-36201b288/"
                target="_blank"
            >
                <span>Linkedin</span>
                <Linkedin />
            </Link>
        </div>
    );
}
