import { GithubIcon, LinkedinIcon, MailIcon, SettingsIcon } from "lucide-react";
import { ContactButton } from "../buttons/ContactButton";
import { H1 } from "../typography/H1";
import { P } from "../typography/P";
import { Logo } from "../utils/Logo";

export function Introduction() {
    return (
        <section className="p-5 space-y-2">
            <div className="flex items-center gap-4">
                <H1>WEB</H1>
                <Logo />
            </div>
            <div>
                <H1>DEVELOPER</H1>
            </div>
            <div className="flex items-center gap-2">
                <ContactButton>
                    <GithubIcon />
                </ContactButton>
                <ContactButton>
                    <LinkedinIcon />
                </ContactButton>
                <ContactButton>
                    <MailIcon />
                </ContactButton>
                <div>
                    <P className="max-w-[200px] sm:max-w-[400px] ">
                        Turning ideas into digital solutions with clean and
                        efficient code.
                        <SettingsIcon className="inline w-4 h-4 text-foreground ml-1" />
                    </P>
                </div>
            </div>
        </section>
    );
}
