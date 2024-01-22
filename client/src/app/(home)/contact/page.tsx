import { CopyEmail } from "@/components/contact/CopyEmail";
import { OthersContacts } from "@/components/contact/OthersContacts";
import { H1 } from "@/components/shadcn-ui/typography/H1";
import { P } from "@/components/shadcn-ui/typography/P";

export default function Page() {
    return (
        <div className="my-10 ">
            <H1 className="text-center">Contatct</H1>
            <P className="text-center mb-10">
                Send me a message or maybe a proposal :D
            </P>
            <CopyEmail className="mb-5" />
            <OthersContacts />
        </div>
    );
}
