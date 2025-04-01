import { Skeleton } from "@/components/ui/skeleton";

export function ProductDetailsSkeleton() {
  return (
    <div className="grid gap-14 lg:grid-cols-2 lg:pl-12">
      {/* Image carousel skeleton */}
      <div className="w-full max-w-[450px] justify-self-center">
        <Skeleton className="aspect-square w-full rounded-lg" />
      </div>

      {/* Product details skeleton */}
      <div className="flex flex-col gap-4">
        <div>
          <Skeleton className="h-8 w-3/4" />
          <Skeleton className="h-6 w-1/4 mt-2" />
        </div>
        <Skeleton className="h-20 w-full" />
        <div>
          <Skeleton className="h-6 w-16 mb-2" />
          <div className="flex gap-2">
            {[1, 2, 3, 4].map((i) => (
              <Skeleton key={i} className="h-10 w-10 rounded-md" />
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Skeleton className="h-10 w-10" />
          <Skeleton className="h-6 w-12" />
          <Skeleton className="h-10 w-10" />
        </div>
        <div className="flex gap-2">
          <Skeleton className="h-10 flex-1" />
          <Skeleton className="h-10 w-10" />
        </div>
        <div className="flex flex-col gap-1">
          <Skeleton className="h-4 w-1/3" />
          <Skeleton className="h-4 w-1/4" />
        </div>
      </div>
    </div>
  );
}