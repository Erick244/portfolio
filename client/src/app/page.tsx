import { Introduction } from "@/components/home/components/Introduction";
import { Technologies } from "@/components/home/components/Technologies";

export default function Home() {
    return (
        <div>
            <Introduction className="my-10" />
            <hr />
            <Technologies className="my-10" />
        </div>
    );
}
