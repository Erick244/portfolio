import { Skeleton } from "@/components/shadcn-ui/skeleton";

export function ProjectSkeleton() {
    return (
        <div className="sm:h-80 border-2 border-border rounded overflow-hidden group flex sm:flex-row flex-col justify-between items-center gap-5 p-5">
            <div className="space-y-2 w-1/2 ">
                <Skeleton className="w-20 h-5 sm:mb-5 sm:mx-0 m-auto" />
                <Skeleton className="h-2 w-32 sm:mb-5 sm:mx-0 m-auto" />
                <Skeleton className="h-2 w-28 sm:mb-5 sm:mx-0 m-auto" />
                <Skeleton className="h-2 w-32 sm:mb-5 sm:mx-0 m-auto" />
            </div>
            <Skeleton className="w-4/5 h-[250px]" />
            <div className="shadow-lg shadow-black/30 self-stretch p-2 flex sm:flex-col flex-row sm:justify-between sm:gap-0 gap-2 items-center border-t-2 border-border sm:border-none justify-start">
                <Skeleton className="w-7 h-7" />
                <Skeleton className="w-7 h-7" />
            </div>
        </div>
    );
}
