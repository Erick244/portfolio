import { Projects } from "@/components/projects/components/Projects";
import { ProjectsIntroduction } from "@/components/projects/components/ProjectsIntroduction";

export default function Page() {
    return (
        <div>
            <ProjectsIntroduction className="my-10" />
            <hr />
            <Projects className="my-10" />
        </div>
    );
}
