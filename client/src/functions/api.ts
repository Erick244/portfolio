"use server";

import { DefaultException } from "@/models/DefaultException";
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

export async function postData(
    url: string,
    body: any,
    config?: RequestInit | undefined
): Promise<any> {
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
        return await createDefaultException(resp);
    }

    if (isJsonContent(resp)) {
        const data = await resp.json();
        return data;
    }

    return null;
}

async function createDefaultException(
    resp: Response
): Promise<DefaultException> {
    const errorMessage = await resp.text();
    const statusCode = resp.status;

    return {
        errorMessage,
        statusCode,
    };
}

function isJsonContent(resp: Response): boolean {
    return resp.headers.get("Content-Type") === "application/json";
}

export async function putData(
    url: string,
    body: any,
    config?: RequestInit | undefined
): Promise<any> {
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
        return await createDefaultException(resp);
    }

    if (isJsonContent(resp)) {
        const data = await resp.json();
        return data;
    }

    return null;
}

export async function getData(
    url: string,
    config?: RequestInit | undefined
): Promise<any> {
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
        return await createDefaultException(resp);
    }
}

export async function deleteData(
    url: string,
    config?: RequestInit | undefined
): Promise<any> {
    const resp = await fetch(`${BASE_API_URL}${url}`, {
        method: "DELETE",
        headers: {
            ...(await getDefaultHeaders()),
        },
        ...config,
    });

    const badRequest = !resp.ok;
    if (badRequest) {
        return await createDefaultException(resp);
    }

    if (isJsonContent(resp)) {
        const data = await resp.json();
        return data;
    }

    return null;
}
