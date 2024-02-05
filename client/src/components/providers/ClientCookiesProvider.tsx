import { CookiesProvider } from "next-client-cookies/server";

interface CookiesProviderProps {
    children: React.ReactNode;
}

export function ClientCookiesProvider({ children }: CookiesProviderProps) {
    return <CookiesProvider>{children}</CookiesProvider>;
}
