import { DefaultException } from "@/models/DefaultException";

export function getApiPageValue(pageParam: string, pagesCount: number) {
    const numberPageParam = +pageParam;

    const pageParamIsSmaller = numberPageParam < 1;
    const pageParamIsBigger = numberPageParam > pagesCount;

    const apiPageValue = pageParamIsSmaller
        ? 0
        : pageParamIsBigger
        ? pagesCount - 1
        : numberPageParam - 1;

    return apiPageValue;
}

export function getPagesCount(ItemsCount: number, itemsPerPage: number) {
    return Math.ceil(ItemsCount / itemsPerPage);
}

export function checkForErrorInResponseData<R>(data: any): R {
    const errorData = data as DefaultException;

    if (errorData?.errorMessage || errorData?.statusCode >= 400) {
        throw new Error(
            errorData.errorMessage || "Error - " + errorData.statusCode
        );
    } else {
        return data;
    }
}
