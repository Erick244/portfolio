"use client";

import { getDictionary } from "@/app/[lang]/dictionaries";
import { createContext, useContext } from "react";

type Dictionary = Awaited<ReturnType<typeof getDictionary>>;

const DictionaryContext = createContext<Dictionary>({} as Dictionary);

export default function DictionaryContextProvider({
    children,
    dictionary,
}: {
    children: React.ReactNode;
    dictionary: Dictionary;
}) {
    return (
        <DictionaryContext.Provider value={dictionary}>
            {children}
        </DictionaryContext.Provider>
    );
}

export const useDictionary = () => useContext(DictionaryContext);
