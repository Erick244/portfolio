import { discordTag, email, githubLink, linkedinLink } from "@/utils/my";
import { GithubIcon, LinkedinIcon, MailIcon } from "lucide-react";
import Link from "next/link";
import { CopyButton } from "../buttons/CopyButton";
import { ServerMotion } from "../framer-motion-server";
import { DiscordLogo } from "../svgs/DiscordLogo";
import { Button } from "../ui/button";

export function Contact() {
    return (
        <ServerMotion.section
            initial={{ opacity: 0, y: "10px" }}
            whileInView={{ opacity: 1, y: "0" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="mb-32 w-full max-w-lg"
        >
            <div className="bg-foreground text-background flex justify-between items-center gap-4 p-3 rounded-lg">
                <MailIcon />
                <span className="font-mono bg-background/20 p-1 rounded">
                    {email}
                </span>
                <CopyButton
                    copyText={email}
                    className="border-x-2 border-muted-foreground"
                />
            </div>
            <div className="flex justify-between gap-4 mt-2">
                <Button
                    className="sm:h-12 w-full shadow-md shadow-black/30"
                    asChild
                >
                    <Link href={githubLink} target="_blank">
                        <GithubIcon />
                    </Link>
                </Button>
                <Button className="sm:h-12 w-full shadow-md shadow-black/30">
                    <Link href={linkedinLink} target="_blank">
                        <LinkedinIcon />
                    </Link>
                </Button>
                <CopyButton
                    size="default"
                    className="sm:h-12 w-full shadow-md shadow-black/30"
                    copyText={discordTag}
                >
                    <DiscordLogo />
                </CopyButton>
            </div>
        </ServerMotion.section>
    );
}
