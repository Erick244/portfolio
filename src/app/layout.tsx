import { NavMenu } from "@/components/layout/NavMenu";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";
import { Provider } from "jotai";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import "./globals.css";

const font = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Erick Henrique | Web Developer",
    description: "Erick Henrique web developer portfolio.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={cn(
                    " min-h-screen antialiased bg-gradient-to-tr to-background from-foreground overflow-x-hidden scroll-smooth",
                    font.className
                )}
            >
                <Toaster />
                <Provider>
                    {children}
                    <NavMenu />
                </Provider>
                <Image
                    priority
                    className="fixed -z-20 min-h-screen inset-0 object-cover opacity-30"
                    alt="Background Image"
                    width={1920}
                    height={1080}
                    src={"/bg.webp"}
                />
            </body>
        </html>
    );
}
