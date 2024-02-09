import { DataTable } from "@/components/shadcn-ui/data-table";
import { H2 } from "@/components/shadcn-ui/typography/H2";
import { getData } from "@/functions/api";
import { getApiPageValue, getPagesCount } from "@/functions/data";
import { TablePagination } from "../../components/TablePagination";
import { CreateTechnologieForm } from "../forms/components/CreateTechnologieForm";
import {
    Technologie,
    TechnologiesTableColumns,
} from "../table/TechnologiesTableColumns";

interface TechnologiesTabProps {
    pageParam: string;
}

export async function TechnologiesTab({ pageParam }: TechnologiesTabProps) {
    const count = 50;
    const take = 10;
    const pagesCount = getPagesCount(count, take);
    const apiPageValue = getApiPageValue(pageParam, pagesCount);

    const technologies = await getData<Technologie[]>(
        `/technologies?page=${apiPageValue}&take=${take}`
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
            <TablePagination pagesCount={pagesCount} />
        </div>
    );
}
