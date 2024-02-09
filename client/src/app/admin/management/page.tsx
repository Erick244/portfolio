import { ManagementTabs } from "@/components/admin/management/components/ManagementTabs";
import { existCookieOrRedirect } from "@/functions/cookie";
import { PageProps } from "@/models/PageProps.model";
import { AUTH_TOKEN_COOKIE_NAME } from "@/utils/constants";

export default function Page({ searchParams }: PageProps) {
    existCookieOrRedirect(AUTH_TOKEN_COOKIE_NAME, "/admin");

    return (
        <div className="h-full w-full flex justify-center items-center">
            <ManagementTabs pageParam={searchParams.page} />
        </div>
    );
}
