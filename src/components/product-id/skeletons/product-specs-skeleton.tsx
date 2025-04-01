import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

export function ProductSpecsSkeleton({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "rounded-lg border bg-card text-card-foreground shadow-sm",
        className
      )}
    >
      <div className="flex flex-col">
        <div className="flex border-b p-4">
          <Skeleton className="h-6 w-24 flex-1" />
          <Skeleton className="h-6 w-24 flex-1" />
        </div>
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className={cn("flex p-4", i !== 5 && "border-b")}>
            <Skeleton className="h-5 w-20 flex-1" />
            <Skeleton className="h-5 w-24 flex-1" />
          </div>
        ))}
      </div>
    </div>
  );
}