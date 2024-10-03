import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { NextRequest } from "next/server";
import { Locales } from "./enums/locales.enum";

const locales = Array.from(Object.values(Locales));
const defaultLocale = Locales.ptBR;

function getLocale(req: NextRequest) {
    const acceptLang = req.headers.get("Accept-Language");
    if (!acceptLang) return defaultLocale;

    const headers = { "accept-language": acceptLang };
    const languages = new Negotiator({ headers }).languages();

    return match(languages, locales, defaultLocale);
}

export function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl;

    const pathnameHasLocale = locales.some(
        (locale) =>
            pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    );

    if (pathnameHasLocale) return;

    const locale = getLocale(req);

    req.nextUrl.pathname = `/${locale}${pathname}`;

    return Response.redirect(req.nextUrl);
}

export const config = {
    // Matcher ignoring `/_next/` and `/api/`
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
