"use client";

import { AdminFormData } from "@/components/admin/components/AdminForm";
import { toast } from "@/components/shadcn-ui/use-toast";
import { postData } from "@/functions/api";
import { checkForErrorInResponseData } from "@/functions/data";
import { Admin } from "@/models/Admin.model";
import { AdminAndToken } from "@/models/AdminAndToken.model";
import { AUTH_TOKEN_COOKIE_NAME } from "@/utils/constants";
import { useCookies } from "next-client-cookies";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect } from "react";

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

    async function retrieveAdmin() {
        try {
            const token = cookies.get(AUTH_TOKEN_COOKIE_NAME);
            if (!token) return;

            const data = await postData("/admin/token", { token });

            const admin = checkForErrorInResponseData<Admin>(data);
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
        retrieveAdmin();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    async function login(adminFormData: AdminFormData) {
        try {
            const data = await postData("/admin/login", adminFormData);

            const adminAndToken =
                checkForErrorInResponseData<AdminAndToken>(data);

            const oneMonthInSeconds = 60 * 60 * 24 * 30;
            cookies.set(AUTH_TOKEN_COOKIE_NAME, adminAndToken.token, {
                path: "/admin",
                expires: oneMonthInSeconds,
            });

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
