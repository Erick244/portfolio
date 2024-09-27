import { email, githubLink, linkedinLink } from "@/utils/my";
import { GithubIcon, LinkedinIcon, MailIcon, SettingsIcon } from "lucide-react";
import Link from "next/link";
import { ChromaButton } from "../buttons/ChromaButton";
import { CopyButton } from "../buttons/CopyButton";
import { H1 } from "../typography/H1";
import { P } from "../typography/P";
import { Logo } from "../utils/Logo";

export function Introduction() {
    return (
        <section className="p-5 space-y-2 flex flex-col justify-center md:min-h-[768px]">
            <div className="flex items-center gap-4">
                <H1>WEB</H1>
                <Logo className="md:text-[2.65rem]" />
            </div>
            <div>
                <H1>DEVELOPER</H1>
            </div>
            <div className="flex items-center gap-2">
                <ChromaButton className="md:h-12 md:w-12">
                    <Link href={githubLink} target="_blank">
                        <GithubIcon />
                    </Link>
                </ChromaButton>
                <ChromaButton className="md:h-12 md:w-12">
                    <Link href={linkedinLink} target="_blank">
                        <LinkedinIcon />
                    </Link>
                </ChromaButton>
                <CopyButton
                    copyText={email}
                    className="md:h-12 md:w-12 shadow-md shadow-black/50"
                >
                    <MailIcon />
                </CopyButton>
                <div>
                    <P className="max-w-[200px] sm:max-w-[400px] md:max-w-[600px] md:font-semibold">
                        Turning ideas into digital solutions with clean and
                        efficient code.
                        <SettingsIcon className="inline w-4 h-4 text-foreground ml-1" />
                    </P>
                </div>
            </div>
        </section>
    );
}
