import { DataTable } from "@/components/shadcn-ui/data-table";
import { H2 } from "@/components/shadcn-ui/typography/H2";
import { getData } from "@/functions/api";
import { getApiPageValue, getPagesCount } from "@/functions/data";
import { TablePagination } from "../../components/TablePagination";
import { CreateTechnologyForm } from "../forms/components/CreateTechnologyForm";
import {
    TechnologiesTableColumns,
    Technology,
} from "../table/TechnologiesTableColumns";

interface TechnologiesTabProps {
    pageParam: string;
}

export async function TechnologiesTab({ pageParam }: TechnologiesTabProps) {
    const take = 6;
    const count: number = await getData("/technologies/count");
    const pagesCount = getPagesCount(count, take);
    const apiPageValue = getApiPageValue(pageParam, pagesCount);

    const technologies: Technology[] = await getData(
        `/technologies?page=${apiPageValue}&take=${take}`
    );

    const enablePagination = pagesCount > 1;

    return (
        <div className="py-5">
            <H2 className="mb-5">Technologies</H2>

            <DataTable
                addFormData={<CreateTechnologyForm />}
                columns={TechnologiesTableColumns}
                data={technologies}
                filterField="name"
            />
            {enablePagination && <TablePagination pagesCount={pagesCount} />}
        </div>
    );
}
