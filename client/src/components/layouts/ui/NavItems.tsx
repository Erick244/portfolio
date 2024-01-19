"use client";

import { usePathname } from "next/navigation";
import { Header } from "../templates/header";

export function NavItems() {
    const pathname = usePathname();

    return (
        <>
            <Header.Link href="/projects" isActive={pathname === "/projects"}>
                projects
            </Header.Link>
            <Header.Link href="/about" isActive={pathname === "/about"}>
                about
            </Header.Link>
            <Header.Link href="/contact" isActive={pathname === "/contact"}>
                contact
            </Header.Link>
        </>
    );
}
