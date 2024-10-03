import { Locales } from "@/enums/locales.enum";

const dictionaries = {
    [Locales.enUS]: () =>
        import("@/app/dictionaries/en-us.json").then(
            (module) => module.default
        ),
    [Locales.ptBR]: () =>
        import("@/app/dictionaries/pt-br.json").then(
            (module) => module.default
        ),
};

export const getDictionary = async (locale: Locales) => dictionaries[locale]();
