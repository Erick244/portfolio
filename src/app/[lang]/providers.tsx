import { Toaster } from "@/components/ui/toaster";
import DictionaryContextProvider from "@/contexts/DictionaryContext";
import { Locales } from "@/enums/locales.enum";
import { Provider } from "jotai";
import { getDictionary } from "./dictionaries";

interface ProvidersProps {
    children: React.ReactNode;
    params: { lang: Locales };
}

export async function Providers({ children, params }: ProvidersProps) {
    const dictionary = await getDictionary(params.lang);

    return (
        <DictionaryContextProvider dictionary={dictionary}>
            <Toaster />
            <Provider>{children}</Provider>
        </DictionaryContextProvider>
    );
}
