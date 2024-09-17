import { GithubIcon, LinkedinIcon, MailIcon, SettingsIcon } from "lucide-react";
import { ContactButton } from "../buttons/ContactButton";
import { H1 } from "../typography/H1";
import { P } from "../typography/P";
import { Logo } from "../utils/Logo";

export function Introduction() {
    return (
        <div className="p-5 space-y-2">
            <div className="flex items-center gap-2">
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
                    <P>
                        <span>
                            Turning ideas into digital solutions with clean and
                            efficient code.
                            <SettingsIcon className="inline w-4 h-4 text-foreground ml-1" />
                        </span>
                    </P>
                </div>
            </div>
        </div>
    );
}
