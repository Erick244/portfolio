import { existCookieOrRedirect } from "@/functions/cookie";
import { AUTH_TOKEN_COOKIE_NAME } from "@/utils/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Admin - Dashboard",
};

export default function Page() {
    existCookieOrRedirect(AUTH_TOKEN_COOKIE_NAME, "/admin");

    return (
        <div className="flex justify-center bg-yellow-500 p-2 text-white font-bold">
            IN WORKING...
        </div>
    );
}
