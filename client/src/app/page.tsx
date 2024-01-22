import { Introduction } from "@/components/home/components/Introduction";
import { Technologies } from "@/components/home/components/Technologies";

export default function Home() {
    return (
        <div className="my-10 space-y-10">
            <Introduction />
            <hr />
            <Technologies />
        </div>
    );
}
