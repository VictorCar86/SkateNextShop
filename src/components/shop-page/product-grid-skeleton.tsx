import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { CustomPaginationSkeleton } from "../CustomPaginationSkeleton";

export function ProductGridSkeleton() {
  // Create an array of 12 items (same as the limit in the page)
  const skeletonItems = Array.from({ length: 12 }, (_, i) => i);

  return (
    <div className="flex flex-col gap-6">
      <CustomPaginationSkeleton currentPage={1} totalPages={1} />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {skeletonItems.map((index) => (
          <Card key={index} className="overflow-hidden">
            <div className="relative aspect-square overflow-hidden">
              <Skeleton className="h-full w-full" />
            </div>
            <CardHeader className="p-4">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-2 w-full">
                  <Skeleton className="h-5 w-3/4" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-2/3" />
                </div>
                <Skeleton className="h-8 w-8 rounded-full" />
              </div>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <div className="flex items-center justify-between">
                <Skeleton className="h-5 w-16" />
                <Skeleton className="h-9 w-24" />
              </div>
              <div className="mt-2 flex items-center gap-2">
                <Skeleton className="h-4 w-20" />
                <span>•</span>
                <Skeleton className="h-4 w-20" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <CustomPaginationSkeleton currentPage={1} totalPages={1} />
    </div>
  );
}
