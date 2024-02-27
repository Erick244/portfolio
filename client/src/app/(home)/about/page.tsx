import { AboutIntroduction } from "@/components/about/components/AboutIntroduction";
import { Goal } from "@/components/about/components/Goal";
import { Jorney } from "@/components/about/components/Jorney";
import { JorneySkeleton } from "@/components/about/skeletons/JorneySkeleton";
import { H1 } from "@/components/shadcn-ui/typography/H1";
import { Suspense } from "react";

export default function Page() {
    return (
        <div className="my-10 space-y-10">
            <AboutIntroduction />
            <hr />
            <H1 className="text-center mb-10">Jorney</H1>
            <Suspense fallback={<JorneySkeleton />}>
                <Jorney />
            </Suspense>
            <hr />
            <Goal />
        </div>
    );
}
