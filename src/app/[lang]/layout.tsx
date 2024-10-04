import "@/app/globals.css";
import { BackgroundImage } from "@/components/layout/BackgroundImage";
import { NavMenu } from "@/components/layout/NavMenu";
import { Locales } from "@/enums/locales.enum";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";

const font = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Erick Henrique | Web Developer",
    description: "Erick Henrique web developer portfolio.",
};

export async function generateStaticParams() {
    return Object.values(Locales).map((lang) => ({ lang }));
}

interface LayoutProps {
    children: React.ReactNode;
    params: { lang: Locales };
}

export default function RootLayout({ children, params }: LayoutProps) {
    return (
        <html lang={params.lang}>
            <body
                style={{
                    backgroundImage:
                        "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(21,21,21,1) 100%, rgba(169,169,169,1) 100%)",
                }}
                className={cn(
                    "min-h-screen bg-fixed antialiased overflow-x-hidden scroll-smooth",
                    font.className
                )}
            >
                <Providers params={params}>
                    {children}
                    <NavMenu />
                </Providers>
                <BackgroundImage />
            </body>
        </html>
    );
}
