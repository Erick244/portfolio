import { SendIcon } from "lucide-react";
import { Message } from "../message";
import { P } from "../typography/P";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";

export function AboutMe() {
    return (
        <section className="mb-20 space-y-20">
            <Message.Root>
                <Message.Content>
                    <P className="leading-relaxed md:text-sm">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Eligendi voluptatibus quo praesentium ipsam ipsa
                        quibusdam ratione quam officia nesciunt? Ad
                        necessitatibus mollitia pariatur sequi, laboriosam ea
                        beatae veritatis sunt voluptate. Lorem ipsum dolor sit
                        amet consectetur adipisicing elit. Eos eius dignissimos,
                        saepe non quo distinctio fuga perspiciatis accusamus
                        omnis, voluptatem repellendus illum nobis quaerat rem!
                        Earum hic maxime inventore id.
                    </P>
                </Message.Content>

                <Message.User>ERICK HENRIQUE</Message.User>
            </Message.Root>
            <Message.Root>
                <Message.Content isSender>
                    <Textarea
                        placeholder="Send a message..."
                        className="resize-none min-h-[100px]"
                    />
                    <Button size="icon" className="absolute right-14 bottom-11">
                        <SendIcon className="w-4 h-4" />
                    </Button>
                </Message.Content>

                <Message.User isSender>You</Message.User>
            </Message.Root>
        </section>
    );
}
