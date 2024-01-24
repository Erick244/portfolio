import { DataTable } from "@/components/shadcn-ui/data-table";
import { H2 } from "@/components/shadcn-ui/typography/H2";
import { Achievement, JorneyTableColumns } from "../table/JorneyTableColumns";

const jorneyDataTemp: Achievement[] = [
    {
        id: 1,
        dateFormated: "January 24th, 2023",
        title: "JavaScript Curse Initialized",
        twColorClasses: "shadow-orange-500",
    },
    {
        id: 2,
        dateFormated: "December 24th, 2022",
        title: "Git Curse Initialized",
        twColorClasses: "shadow-blue-500",
    },
    {
        id: 3,
        dateFormated: "January 04th, 2024",
        title: "Curse Initialized",
        twColorClasses: "shadow-red-500",
    },
    {
        id: 4,
        dateFormated: "January 24th, 2024",
        title: "Java Financial",
        twColorClasses: "shadow-yellow-500",
    },
    {
        id: 5,
        dateFormated: "November 30th, 2023",
        title: "Curse Initialized",
        twColorClasses: "shadow-green-500",
    },
];

export function JorneyTab() {
    return (
        <div className="py-5">
            <H2 className="mb-5">Jorney</H2>

            <DataTable
                addFormData={<p />}
                columns={JorneyTableColumns}
                data={jorneyDataTemp}
                filterField="title"
            />
        </div>
    );
}
