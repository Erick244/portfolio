import { DataTable } from "@/components/shadcn-ui/data-table";
import { H2 } from "@/components/shadcn-ui/typography/H2";
import { getData } from "@/functions/api";
import { TablePagination } from "../../components/TablePagination";
import { CreateTechnologieForm } from "../forms/components/CreateTechnologieForm";
import {
    Technologie,
    TechnologiesTableColumns,
} from "../table/TechnologiesTableColumns";

export async function TechnologiesTab() {
    const technologies = await getData<Technologie[]>(
        `/technologies?take=10&page=0`
    );

    return (
        <div className="py-5">
            <H2 className="mb-5">Technologies</H2>

            <DataTable
                addFormData={<CreateTechnologieForm />}
                columns={TechnologiesTableColumns}
                data={technologies}
                filterField="name"
            />
            <TablePagination count={50} />
        </div>
    );
}
