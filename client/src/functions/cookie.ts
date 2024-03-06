import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export function existCookieOrRedirect(cookieName: string, redirectUrl: string) {
    const cookie = getCookie(cookieName);

    if (!cookie) {
        redirect(redirectUrl);
    }
}

export function getCookie(cookieName: string): RequestCookie | undefined {
    return cookies().get(cookieName);
}

export function notExistCookieOrRedirect(
    cookieName: string,
    redirectUrl: string
) {
    const cookie = getCookie(cookieName);

    if (cookie) {
        redirect(redirectUrl);
    }
}
