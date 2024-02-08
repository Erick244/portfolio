import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/shadcn-ui/pagination";

interface TablePaginationProps {
    count: number;
}

export function TablePagination({ count }: TablePaginationProps) {
    const itensPerPage = 10;
    const pages = Math.ceil(count / itensPerPage);
    const pagesCountArray = Array.from({ length: pages }, (_, i) => i + 1);

    return (
        <Pagination className="mt-5">
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious href="#" />
                </PaginationItem>
                {pagesCountArray.map((page) => (
                    <PaginationItem key={page}>
                        <PaginationLink href="#">{page}</PaginationLink>
                    </PaginationItem>
                ))}

                <PaginationItem>
                    <PaginationNext href="#" />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    );
}
