import { AdminForm } from "@/components/admin/components/AdminForm";
import { Muted } from "@/components/shadcn-ui/typography/Muted";
import { Logo } from "@/components/utils/Logo";
import { notExistCookieOrRedirect } from "@/functions/cookie";
import { AUTH_TOKEN_COOKIE_NAME } from "@/utils/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Admin",
};

export default function Page() {
    notExistCookieOrRedirect(AUTH_TOKEN_COOKIE_NAME, "/admin/management");

    return (
        <div className="h-screen flex flex-col justify-center items-center gap-10 sm:p-0 p-5">
            <Logo href="/" />
            <Muted className="text-center">
                Specific area for administrators. Please do not attempt to
                access without permission.
            </Muted>
            <AdminForm />
        </div>
    );
}
