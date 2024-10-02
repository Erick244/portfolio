import { SendIcon } from "lucide-react";
import { ServerMotion } from "../framer-motion-server";
import { Message } from "../message";
import { H3 } from "../typography/H3";
import { P } from "../typography/P";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";

export function AboutMe() {
    return (
        <ServerMotion.section
            initial={{ opacity: 0, y: "10px" }}
            whileInView={{ opacity: 1, y: "0" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="mb-20 space-y-20"
        >
            <Message.Root>
                <Message.Content>
                    <H3 className="font-mono">Hello World!</H3>
                    <P className="md:text-sm leading-relaxed font-mono">
                        My name is Erick, I&apos;m 19 years old, and I&apos;ve
                        been studying programming for 4 years. During this time,
                        I have fully dedicated myself to web development, both
                        Frontend and Backend. My current goal is to continue
                        improving my skills as a developer, gaining experience,
                        and remaining open to new opportunities in the market.
                    </P>
                </Message.Content>

                <Message.User>ERICK HENRIQUE</Message.User>
            </Message.Root>
            <Message.Root>
                <Message.Content isSender>
                    <Textarea
                        disabled
                        placeholder="In working..."
                        className="resize-none min-h-[100px]"
                    />
                    <Button
                        aria-label="Send Message"
                        disabled
                        size="icon"
                        className="absolute right-14 bottom-11"
                    >
                        <SendIcon className="w-4 h-4" />
                    </Button>
                </Message.Content>

                <Message.User isSender>You</Message.User>
            </Message.Root>
        </ServerMotion.section>
    );
}
