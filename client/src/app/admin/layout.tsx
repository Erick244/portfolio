import AdminAuthContextProvider from "@/contexts/auth/AdminAuthContext";
import { LayoutProps } from "../layout";

export default function Layout({ children }: LayoutProps) {
    return <AdminAuthContextProvider>{children}</AdminAuthContextProvider>;
}
