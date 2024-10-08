import { getDictionary } from "@/app/[lang]/dictionaries";
import { email, githubLink, linkedinLink } from "@/utils/my";
import {
    ChevronDown,
    GithubIcon,
    LinkedinIcon,
    MailIcon,
    SettingsIcon,
} from "lucide-react";
import Link from "next/link";
import { ChromaButton } from "../buttons/ChromaButton";
import { CopyButton } from "../buttons/CopyButton";
import { ServerMotion } from "../framer-motion-server";
import { H1 } from "../typography/H1";
import { P } from "../typography/P";
import { Logo } from "../utils/Logo";

interface IntroductionProps {
    dict: Awaited<ReturnType<typeof getDictionary>>["sections"]["introduction"];
}

export function Introduction({ dict }: IntroductionProps) {
    return (
        <ServerMotion.section
            initial={{ opacity: 0, y: "10px" }}
            animate={{ opacity: 1, y: "0" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="relative p-5 lg:p-0 space-y-2 flex flex-col justify-center lg:h-screen"
        >
            <div className="flex items-center gap-4">
                <H1>WEB</H1>
                <Logo className="md:text-[2.65rem]" />
            </div>
            <div>
                <H1>DEVELOPER</H1>
            </div>
            <div className="flex items-center gap-2">
                <ChromaButton asChild className="md:h-12 md:w-12">
                    <Link
                        aria-label="Github Link"
                        href={githubLink}
                        target="_blank"
                    >
                        <GithubIcon />
                    </Link>
                </ChromaButton>
                <ChromaButton asChild className="md:h-12 md:w-12">
                    <Link
                        aria-label="Linkedin Link"
                        href={linkedinLink}
                        target="_blank"
                    >
                        <LinkedinIcon />
                    </Link>
                </ChromaButton>
                <CopyButton
                    aria-label="Copy Email"
                    copyText={email}
                    className="md:h-12 md:w-12 shadow-md shadow-black/50"
                >
                    <MailIcon />
                </CopyButton>
                <div>
                    <P className="max-w-[200px] sm:max-w-[400px] md:max-w-[600px] md:font-semibold">
                        {dict.standoutPhrase}
                        <SettingsIcon className="inline w-4 h-4 text-foreground ml-1" />
                    </P>
                </div>
            </div>
            <ChevronDown className="hidden lg:block absolute bottom-20 left-1/2 -translate-x-1/2 text-white w-12 h-12" />
        </ServerMotion.section>
    );
}
