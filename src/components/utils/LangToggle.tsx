"use client";

import {} from "@/app/[lang]/dictionaries";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Locales } from "@/enums/locales.enum";
import { cn } from "@/lib/utils";
import { CheckIcon, ChevronDownIcon } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { Button } from "../ui/button";

export function LangToggle() {
    const params = useParams();
    const router = useRouter();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="fixed top-3 right-3 z-20" asChild>
                <Button size="sm" className="bg-foreground/70 backdrop-blur-sm">
                    {params.lang.toString().toUpperCase()}{" "}
                    <ChevronDownIcon className="ml-2 h-4 w-4" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>Languages</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {languages.map((lang, i) => (
                    <DropdownMenuItem
                        key={i}
                        onClick={() => router.replace(`/${lang.locale}`)}
                    >
                        <span>{lang.name}</span>
                        <CheckIcon
                            className={cn(
                                "w-4 h-4 ml-2 text-foreground",
                                lang.locale === params.lang
                                    ? "opacity-100"
                                    : "opacity-0"
                            )}
                        />
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

const languages: { locale: Locales; name: string }[] = [
    {
        locale: Locales.ptBR,
        name: "Portugues (Brasil)",
    },
    {
        locale: Locales.enUS,
        name: "English (USA)",
    },
];
