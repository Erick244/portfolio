import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export function existCookieOrRedirect(cookieName: string, redirectUrl: string) {
    const cookie = cookies().get(cookieName);

    if (!cookie) {
        redirect(redirectUrl);
    }
}

export function notExistCookieOrRedirect(
    cookieName: string,
    redirectUrl: string
) {
    const cookie = cookies().get(cookieName);

    if (cookie) {
        redirect(redirectUrl);
    }
}
