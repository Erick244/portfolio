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
