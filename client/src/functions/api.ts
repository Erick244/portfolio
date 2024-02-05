import { AUTH_TOKEN_COOKIE_NAME } from "@/utils/constants";
import { parseCookies } from "nookies";

const BASE_API_URL = "http://localhost:8080";
const { [AUTH_TOKEN_COOKIE_NAME]: token } = parseCookies(null, {
    path: "/admin",
});
const DEFAULT_HEADERS = {
    "Content-Type": "application/json",
    Authorization: token ? "Bearer " + token : "",
};

export async function postData<R>(
    url: string,
    body: any,
    config?: RequestInit | undefined
): Promise<R> {
    const resp = await fetch(`${BASE_API_URL}${url}`, {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
            ...DEFAULT_HEADERS,
        },
        ...config,
    });

    if (resp.ok) {
        const data = await resp.json();
        return data;
    } else {
        const message = await resp.text();
        throw message;
    }
}
