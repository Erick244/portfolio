import { AdminLayout } from "@/components/layouts/components/AdminLayout";
import { LayoutProps } from "../../layout";

export default function Layout({ children }: LayoutProps) {
    return <AdminLayout title="Management">{children} </AdminLayout>;
}
