import { Projects } from "@/components/projects/components/Projects";
import { ProjectsIntroduction } from "@/components/projects/components/ProjectsIntroduction";

export default function Page() {
    return (
        <div className="my-10 space-y-10">
            <ProjectsIntroduction />
            <hr />
            <Projects />
        </div>
    );
}
