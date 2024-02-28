import { DataTable } from "@/components/shadcn-ui/data-table";
import { H2 } from "@/components/shadcn-ui/typography/H2";
import { getData } from "@/functions/api";
import { getApiPageValue, getPagesCount } from "@/functions/data";
import { TablePagination } from "../../components/TablePagination";
import { CreateProjectForm } from "../forms/components/CreateProjectForm";
import { Project, ProjectsTableColumns } from "../table/ProjectsTableColumns";

interface ProjectsTabProps {
    pageParam: string;
}

export async function ProjectsTab({ pageParam }: ProjectsTabProps) {
    const take = 6;
    const count = await getData<number>("/projects/count");
    const pagesCount = getPagesCount(count, take);
    const apiPageValue = getApiPageValue(pageParam, pagesCount);

    const projects = await getData<Project[]>(
        `/projects?page=${apiPageValue}&take=${take}`
    );

    const enablePagination = pagesCount > 1;

    return (
        <div className="py-5">
            <H2 className="mb-5">Projects</H2>

            <DataTable
                addFormData={<CreateProjectForm />}
                columns={ProjectsTableColumns}
                data={projects}
                filterField="name"
            />

            {enablePagination && <TablePagination pagesCount={pagesCount} />}
        </div>
    );
}
