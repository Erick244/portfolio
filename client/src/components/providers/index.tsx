import { Toaster } from "../shadcn-ui/toaster";
import { ClientCookiesProvider } from "./ClientCookiesProvider";
import { ThemeProvider } from "./ThemeProvider";

interface RootProvidersProps {
    children: React.ReactNode;
}

export function RootProviders({ children }: RootProvidersProps) {
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            <ClientCookiesProvider>{children}</ClientCookiesProvider>
            <Toaster />
        </ThemeProvider>
    );
}
