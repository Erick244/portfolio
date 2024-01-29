import { DataTable } from "@/components/shadcn-ui/data-table";
import { H2 } from "@/components/shadcn-ui/typography/H2";
import { CreateProjectForm } from "../forms/components/CreateProjectForm";
import { Project, ProjectsTableColumns } from "../table/ProjectsTableColumns";

const projectsDataTemp: Project[] = [
    {
        id: 1,
        description:
            "fkdaweni bnawiwh aiwa hdiwahdhwaihdi owai dhwaihiw ahidhwaoihdoiwaidhawio",
        imageUrl: "",
        name: "FinApp",
        repoUrl: "https://github",
        siteUrl: "",
        color: "#ffbc05",
    },
    {
        id: 2,
        description:
            "fkdaweni bnawiwh aiwa hdiwahdhwaihdi owai dhwaihiw ahidhwaoihdoiwaidhawio",
        imageUrl: "",
        name: "TaskFlow",
        repoUrl: "https://github",
        siteUrl: "",
        color: "#ffbc05",
    },
    {
        id: 3,
        description:
            "fkdaweni bnawiwh aiwa hdiwahdhwaihdi owai dhwaihiw ahidhwaoihdoiwaidhawio",
        imageUrl: "",
        name: "Other",
        repoUrl: "https://github",
        siteUrl: "",
        color: "#ffbc05",
    },
    {
        id: 4,
        description:
            "fkdaweni bnawiwh aiwa hdiwahdhwaihdi owai dhwaihiw ahidhwaoihdoiwaidhawio",
        imageUrl: "",
        name: "Other 2",
        repoUrl: "https://github",
        siteUrl: "",
        color: "#ffbc05",
    },
    {
        id: 5,
        description:
            "fkdaweni bnawiwh aiwa hdiwahdhwaihdi owai dhwaihiw ahidhwaoihdoiwaidhawio",
        imageUrl: "",
        name: "Other 3",
        repoUrl: "https://github",
        siteUrl: "",
        color: "#ffbc05",
    },
];

export function ProjectsTab() {
    return (
        <div className="py-5">
            <H2 className="mb-5">Projects</H2>

            <DataTable
                addFormData={<CreateProjectForm />}
                columns={ProjectsTableColumns}
                data={projectsDataTemp}
                filterField="name"
            />
        </div>
    );
}
