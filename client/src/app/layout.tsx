import { RootProviders } from "@/components/providers";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: {
        default: "<Erick.Henrique/>",
        template: "<Erick.Henrique/> | %s",
    },
    description: "Developer portfolio",
};

export interface LayoutProps {
    children: React.ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={cn(
                    "min-h-screen bg-background font-sans antialiased overflow-x-hidden"
                )}
            >
                <RootProviders>{children}</RootProviders>
            </body>
        </html>
    );
}
