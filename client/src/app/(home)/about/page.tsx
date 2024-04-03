import { AboutIntroduction } from "@/components/about/components/AboutIntroduction";
import { Goal } from "@/components/about/components/Goal";
import { Journey } from "@/components/about/components/Journey";
import { JourneySkeleton } from "@/components/about/skeletons/JourneySkeleton";
import { H1 } from "@/components/shadcn-ui/typography/H1";
import { P } from "@/components/shadcn-ui/typography/P";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
    title: "About",
};

export default function Page() {
    return (
        <div className="my-10 space-y-10">
            <AboutIntroduction />
            <hr />
            <div>
                <H1 className="text-center mb-10">Journey</H1>
                <P className="text-center mb-10">
                    Here you will find my study journey. The start date of the
                    studies. 📚 <br /> (Dates/orders are not 100% correct)
                </P>
                <Suspense fallback={<JourneySkeleton />}>
                    <Journey />
                </Suspense>
            </div>
            <hr />
            <Goal />
        </div>
    );
}
