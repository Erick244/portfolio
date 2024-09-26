import { P } from "../typography/P";

// TODO: COMPONENTIZATION

export function AboutMe() {
    return (
        <section className="py-10">
            <div className="max-w-2xl relative">
                <P
                    style={{
                        color: "#000",
                    }}
                    className="bg-background p-5 md:text-sm rounded-xl rounded-br-none shadow-md shadow-black/30"
                >
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Eligendi voluptatibus quo praesentium ipsam ipsa quibusdam
                    ratione quam officia nesciunt? Ad necessitatibus mollitia
                    pariatur sequi, laboriosam ea beatae veritatis sunt
                    voluptate. Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Eos eius dignissimos, saepe non quo
                    distinctio fuga perspiciatis accusamus omnis, voluptatem
                    repellendus illum nobis quaerat rem! Earum hic maxime
                    inventore id.
                </P>
                <div className="flex items-center gap-2 absolute -right-10 mt-5">
                    <span>Erick Henrique</span>
                    <div className="h-10 w-10 rounded-full bg-background" />
                </div>
            </div>
        </section>
    );
}
