import { Skeleton } from "@/components/ui/skeleton"

export const TabsSkeleton = () => {
    return (
        <div>
            <div className="mt-6 grid gap-10 gap-y-24 grid-col-2 sm:grid-cols-3 md:grid-cols-4">
                {Array.from({ length: 9 }, (item, index) => (
                    <div key={index} className="flex flex-col gap-2 my-4">
                        <Skeleton className="w-full h-32 rounded-xl" />
                        <Skeleton className="w-full h-7 rounded-xl" />
                        <Skeleton className="w-16 h-5 rounded-xl" />
                        <Skeleton className="w-full h-9 rounded-xl" />
                    </div>
                ))}
            </div>
        </div>
    )
}