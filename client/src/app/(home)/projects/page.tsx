import { Projects } from "@/components/projects/components/Projects";
import { ProjectsIntroduction } from "@/components/projects/components/ProjectsIntroduction";
import { ProjectsSkeleton } from "@/components/projects/skeletons/ProjectsSkeleton";
import { Suspense } from "react";

export default function Page() {
    return (
        <div className="my-10 space-y-10">
            <ProjectsIntroduction />
            <hr />
            <Suspense fallback={<ProjectsSkeleton />}>
                <Projects />
            </Suspense>
        </div>
    );
}
