"use client";

import { AdminFormData } from "@/components/admin/components/AdminForm";
import { toast } from "@/components/shadcn-ui/use-toast";
import { getData, postData } from "@/functions/api";
import { Admin } from "@/models/Admin.model";
import { AdminAndToken } from "@/models/AdminAndToken.model";
import { AUTH_TOKEN_COOKIE_NAME } from "@/utils/constants";
import { useCookies } from "next-client-cookies";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

interface AdminAuthContextProps {
    login: (data: AdminFormData) => Promise<void>;
}

const AdminAuthContext = createContext({} as AdminAuthContextProps);

export default function AdminAuthContextProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const router = useRouter();
    const cookies = useCookies();
    const [admin, setAdmin] = useState<Admin | null>(null);

    async function retriveAdmin() {
        try {
            const token = cookies.get(AUTH_TOKEN_COOKIE_NAME);
            if (!token) return;

            const admin = await getData<Admin>(`/admin/token/${token}`);

            setAdmin(admin);
        } catch (error: any) {
            toast({
                title: "Admin - Error",
                description: error.message,
                variant: "destructive",
            });

            cookies.remove(AUTH_TOKEN_COOKIE_NAME, {
                path: "/admin",
            });
            router.push("/admin");
        }
    }

    useEffect(() => {
        retriveAdmin();
    }, []);

    async function login(data: AdminFormData) {
        try {
            const adminAndToken = await postData<AdminAndToken>(
                "/admin/login",
                data
            );

            const oneMonthInSeconds = 60 * 60 * 24 * 30;
            cookies.set(AUTH_TOKEN_COOKIE_NAME, adminAndToken.token, {
                path: "/admin",
                expires: oneMonthInSeconds,
            });

            setAdmin(adminAndToken.admin);

            router.push("/admin/management");
        } catch (error: any) {
            toast({
                title: "Admin - Error",
                description: error.message,
                variant: "destructive",
            });
        }
    }

    return (
        <AdminAuthContext.Provider value={{ login }}>
            {children}
        </AdminAuthContext.Provider>
    );
}

export const useAdminAuthContext = () => useContext(AdminAuthContext);
