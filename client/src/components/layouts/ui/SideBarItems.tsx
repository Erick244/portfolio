"use client";

import { LayoutDashboard, Settings } from "lucide-react";
import { usePathname } from "next/navigation";
import { SideBar } from "../templates/side-bar";

export function SideBarItems() {
    const pathname = usePathname();

    return (
        <>
            <SideBar.Link
                href="/admin/management"
                isActive={pathname === "/admin/management"}
            >
                <span className="sm:flex hidden">Management</span>
                <Settings className="w-4 h-4" />
            </SideBar.Link>
            <SideBar.Link
                href="/admin/dashboard"
                isActive={pathname === "/admin/dashboard"}
            >
                <span className="sm:flex hidden">Dashboard</span>
                <LayoutDashboard className="w-4 h-4" />
            </SideBar.Link>
        </>
    );
}
