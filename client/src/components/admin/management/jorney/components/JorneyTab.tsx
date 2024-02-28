import { DataTable } from "@/components/shadcn-ui/data-table";
import { H2 } from "@/components/shadcn-ui/typography/H2";
import { getData } from "@/functions/api";
import { getApiPageValue, getPagesCount } from "@/functions/data";
import { TablePagination } from "../../components/TablePagination";
import { CreateAchievementForm } from "../forms/components/CreateAchievementForm";
import { Achievement, JorneyTableColumns } from "../table/JorneyTableColumns";

interface JorneyTabProps {
    pageParam: string;
}

export async function JorneyTab({ pageParam }: JorneyTabProps) {
    const take = 6;
    const count = await getData<number>("/jorney/count");
    const pagesCount = getPagesCount(count, take);
    const apiPageValue = getApiPageValue(pageParam, pagesCount);

    const jorney = await getData<Achievement[]>(
        `/jorney?page=${apiPageValue}&take=${take}`
    );

    const enablePagination = pagesCount > 1;

    return (
        <div className="py-5">
            <H2 className="mb-5">Jorney</H2>

            <DataTable
                addFormData={<CreateAchievementForm />}
                columns={JorneyTableColumns}
                data={jorney}
                filterField="title"
            />
            {enablePagination && <TablePagination pagesCount={pagesCount} />}
        </div>
    );
}
