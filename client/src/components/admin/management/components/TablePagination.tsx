"use client";

import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/shadcn-ui/pagination";
import { cn } from "@/lib/utils";
import { useRouter, useSearchParams } from "next/navigation";

interface TablePaginationProps {
    pagesCount: number;
}

export function TablePagination({ pagesCount }: TablePaginationProps) {
    const pagesCountArray = Array.from({ length: pagesCount }, (_, i) => i + 1);

    const router = useRouter();
    const searchParams = useSearchParams();
    const currentPage = searchParams.get("page");

    function switchPage(pageIndex: number) {
        router.push(`/admin/management?page=${pageIndex}`);
        router.refresh();
    }

    const numberCurrentPage = currentPage ? +currentPage : 1;
    const disablePrevious = numberCurrentPage <= 1;

    function previousPage() {
        if (disablePrevious) return;

        const previousPage = numberCurrentPage - 1;

        router.push(`/admin/management?page=${previousPage}`);
        router.refresh();
    }

    const disableNext = numberCurrentPage >= pagesCount;

    function nextPage() {
        if (disableNext) return;

        const nextPage = numberCurrentPage + 1;

        router.push(`/admin/management?page=${nextPage}`);
        router.refresh();
    }

    return (
        <Pagination className="mt-5">
            <PaginationContent>
                <PaginationItem
                    className={cn(
                        disablePrevious
                            ? "cursor-not-allowed"
                            : "cursor-pointer"
                    )}
                >
                    <PaginationPrevious onClick={previousPage} />
                </PaginationItem>
                {pagesCountArray.map((page) => {
                    const isSameItem = numberCurrentPage === page;

                    const isLastPage = page === 5;
                    const currentPageIsLargerThanNumberOfPages =
                        numberCurrentPage > pagesCount;

                    const isFirstPage = page === 1;
                    const currentPageIsSmallerThanThFirstPage =
                        numberCurrentPage < 1;

                    const isActiveItem =
                        isSameItem ||
                        (isLastPage && currentPageIsLargerThanNumberOfPages) ||
                        (isFirstPage && currentPageIsSmallerThanThFirstPage);

                    return (
                        <PaginationItem key={page}>
                            <PaginationLink
                                isActive={isActiveItem}
                                onClick={() => switchPage(page)}
                            >
                                {page}
                            </PaginationLink>
                        </PaginationItem>
                    );
                })}

                <PaginationItem
                    className={cn(
                        disableNext ? "cursor-not-allowed" : "cursor-pointer"
                    )}
                >
                    <PaginationNext onClick={nextPage} />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    );
}
