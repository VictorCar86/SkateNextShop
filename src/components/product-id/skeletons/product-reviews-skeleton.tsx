import { Skeleton } from "@/components/ui/skeleton";

export function ProductReviewsSkeleton({ className }: { className?: string }) {
  return (
    <div className={className}>
      <Skeleton className="h-8 w-48 mb-4" />
      <div className="grid gap-6 md:grid-cols-2">
        <div className="flex flex-col items-center justify-center p-6 border rounded-lg">
          <Skeleton className="h-10 w-16 mb-2" />
          <div className="flex items-center gap-1 mb-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <Skeleton key={i} className="w-5 h-5" />
            ))}
          </div>
          <Skeleton className="h-4 w-32" />
        </div>
        <div className="flex flex-col gap-2">
          {[5, 4, 3, 2, 1].map((i) => (
            <div key={i} className="flex items-center gap-2">
              <Skeleton className="w-12 h-4" />
              <Skeleton className="flex-1 h-4" />
              <Skeleton className="w-12 h-4" />
            </div>
          ))}
        </div>
      </div>
      <div className="mt-8">
        <div className="flex justify-between items-center mb-4">
          <Skeleton className="h-6 w-32" />
          <Skeleton className="h-10 w-28" />
        </div>
        <div className="space-y-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="border-b pb-6 last:border-b-0">
              <div className="flex items-center gap-4 mb-2">
                <Skeleton className="h-10 w-10 rounded-full" />
                <div>
                  <Skeleton className="h-5 w-24 mb-1" />
                  <Skeleton className="h-4 w-32" />
                </div>
              </div>
              <div className="flex items-center mb-2 gap-1">
                {[1, 2, 3, 4, 5].map((j) => (
                  <Skeleton key={j} className="w-4 h-4" />
                ))}
              </div>
              <Skeleton className="h-16 w-full" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
