"use server";

import { AUTH_TOKEN_COOKIE_NAME } from "@/utils/constants";
import { getCookie } from "./cookie";

const BASE_API_URL = process.env.BASE_API_URL;

async function getDefaultHeaders() {
    const token = getCookie(AUTH_TOKEN_COOKIE_NAME)?.value;

    return {
        "Content-Type": "application/json",
        Authorization: token ? "Bearer " + token : "",
    };
}

export async function postData<R>(
    url: string,
    body: any,
    config?: RequestInit | undefined
): Promise<R> {
    const resp = await fetch(`${BASE_API_URL}${url}`, {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
            ...(await getDefaultHeaders()),
        },
        ...config,
    });

    const badRequest = !resp.ok;
    if (badRequest) {
        const message = await resp.text();
        throw new Error(message);
    }

    const isJsonContent =
        resp.headers.get("Content-Type") === "application/json";
    if (isJsonContent) {
        const data = await resp.json();
        return data;
    }

    return <R>null;
}

export async function putData<R>(
    url: string,
    body: any,
    config?: RequestInit | undefined
): Promise<R> {
    const resp = await fetch(`${BASE_API_URL}${url}`, {
        method: "PUT",
        body: JSON.stringify(body),
        headers: {
            ...(await getDefaultHeaders()),
        },
        ...config,
    });

    const badRequest = !resp.ok;
    if (badRequest) {
        const message = await resp.text();
        throw new Error(message);
    }

    const isJsonContent =
        resp.headers.get("Content-Type") === "application/json";
    if (isJsonContent) {
        const data = await resp.json();
        return data;
    }

    return <R>null;
}

export async function getData<R>(
    url: string,
    config?: RequestInit | undefined
): Promise<R> {
    const resp = await fetch(`${BASE_API_URL}${url}`, {
        method: "GET",
        headers: {
            ...(await getDefaultHeaders()),
        },
        ...config,
    });

    if (resp.ok) {
        const data = await resp.json();
        return data;
    } else {
        const message = await resp.text();
        throw new Error(message);
    }
}

export async function deleteData<R>(
    url: string,
    config?: RequestInit | undefined
): Promise<R> {
    const resp = await fetch(`${BASE_API_URL}${url}`, {
        method: "DELETE",
        headers: {
            ...(await getDefaultHeaders()),
        },
        ...config,
    });

    const badRequest = !resp.ok;
    if (badRequest) {
        const message = await resp.text();
        throw new Error(message);
    }

    const isJsonContent =
        resp.headers.get("Content-Type") === "application/json";
    if (isJsonContent) {
        const data = await resp.json();
        return data;
    }

    return <R>null;
}
