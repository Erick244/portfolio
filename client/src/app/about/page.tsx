import { AboutIntroduction } from "@/components/about/components/AboutIntroduction";
import { Goal } from "@/components/about/components/Goal";
import { Jorney } from "@/components/about/components/Jorney";

export default function Page() {
    return (
        <div className="my-10 space-y-10">
            <AboutIntroduction />
            <hr />
            <Jorney />
            <hr />
            <Goal />
        </div>
    );
}
