import { existCookieOrRedirect } from "@/functions/cookie";
import { AUTH_TOKEN_COOKIE_NAME } from "@/utils/constants";

export default function Page() {
    existCookieOrRedirect(AUTH_TOKEN_COOKIE_NAME, "/admin");

    return <div>IN WORKING...</div>;
}
