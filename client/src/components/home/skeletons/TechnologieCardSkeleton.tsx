import { Skeleton } from "@/components/shadcn-ui/skeleton";
import { Blockquote } from "@/components/shadcn-ui/typography/Blockquote";

export function TechnologieCardSkeleton() {
    return (
        <div className="snap-center relative border h-60 border-border p-5 m-5 transition-all duration-300 rounded-lg">
            <Skeleton className="absolute -top-3 px-1 w-20 h-5" />

            <div className="flex justify-between ">
                <Blockquote>
                    <Skeleton className="w-24 h-2 my-5" />
                </Blockquote>
                <Skeleton className="w-14 h-14" />
            </div>
            <Skeleton className="w-14 h-4 my-10" />
            <div className="space-y-2">
                <Skeleton className="h-2 w-32" />
                <Skeleton className="h-2 w-28" />
                <Skeleton className="h-2 w-32" />
            </div>
        </div>
    );
}
