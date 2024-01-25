import { DataTable } from "@/components/shadcn-ui/data-table";
import { H2 } from "@/components/shadcn-ui/typography/H2";
import { CreateTechnologieForm } from "../forms/components/CreateTechnologieForm";
import {
    Technologie,
    TechnologiesTableColumns,
} from "../table/TechnologiesTableColumns";

const technologiesDataTemp: Technologie[] = [
    {
        id: 1,
        name: "Javascript",
        about: "JavaScript is a versatile programming language commonly used for web development.",
        category: "BACKEND",
        experience: "2 years",
        twColorClasses: "to-yellow-500 shadow-yellow-500/30",
        imageUrl: "",
    },
    {
        id: 2,
        name: "Node.js",
        about: "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.",
        category: "BACKEND",
        experience: "2 years",
        twColorClasses: "to-green-500 shadow-green-500/30",
        imageUrl: "",
    },
    {
        id: 3,
        name: "React",
        about: "React is a JavaScript library for building user interfaces.",
        category: "FRONTEND",
        experience: "2 years",
        twColorClasses: "to-sky-500 shadow-sky-500/30",
        imageUrl: "",
    },
    {
        id: 4,
        name: "Java",
        about: "Java is a widely-used, class-based, object-oriented programming language.",
        category: "BACKEND",
        experience: "4 years",
        twColorClasses: "to-orange-500 shadow-orange-500/30",
        imageUrl: "",
    },
    {
        id: 5,
        name: "HTML/CSS",
        about: "HTML (Hypertext Markup Language) and CSS (Cascading Style Sheets) are fundamental technologies for web development.",
        category: "FRONTEND",
        experience: "3 years",
        twColorClasses: "to-rose-500 shadow-rose-500/30",
        imageUrl: "",
    },
];

export function TechnologiesTab() {
    return (
        <div className="py-5">
            <H2 className="mb-5">Technologies</H2>

            <DataTable
                addFormData={<CreateTechnologieForm />}
                columns={TechnologiesTableColumns}
                data={technologiesDataTemp}
                filterField="name"
            />
        </div>
    );
}
