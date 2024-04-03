import { DataTable } from "@/components/shadcn-ui/data-table";
import { H2 } from "@/components/shadcn-ui/typography/H2";
import { getData } from "@/functions/api";
import { getApiPageValue, getPagesCount } from "@/functions/data";
import { TablePagination } from "../../components/TablePagination";
import { CreateAchievementForm } from "../forms/components/CreateAchievementForm";
import { Achievement, JourneyTableColumns } from "../table/JourneyTableColumns";

interface JourneyTabProps {
    pageParam: string;
}

export async function JourneyTab({ pageParam }: JourneyTabProps) {
    const take = 6;
    const count: number = await getData("/journey/count");
    const pagesCount = getPagesCount(count, take);
    const apiPageValue = getApiPageValue(pageParam, pagesCount);

    const journey: Achievement[] = await getData(
        `/journey?page=${apiPageValue}&take=${take}`
    );

    const enablePagination = pagesCount > 1;

    return (
        <div className="py-5">
            <H2 className="mb-5">Journey</H2>

            <DataTable
                addFormData={<CreateAchievementForm />}
                columns={JourneyTableColumns}
                data={journey}
                filterField="title"
            />
            {enablePagination && <TablePagination pagesCount={pagesCount} />}
        </div>
    );
}
