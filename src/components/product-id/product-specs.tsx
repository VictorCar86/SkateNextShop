import { cn } from "@/lib/utils";

interface Spec {
  name: string;
  value: string;
}

export function ProductSpecs({
  specs,
  className,
}: {
  specs: Spec[];
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-lg border bg-card text-card-foreground shadow-sm",
        className,
      )}
    >
      <div className="flex flex-col">
        <div className="flex border-b p-4 font-semibold">
          <div className="flex-1">Specification</div>
          <div className="flex-1">Value</div>
        </div>
        {specs.map((spec, index) => (
          <div
            key={spec.name}
            className={cn("flex p-4", index !== specs.length - 1 && "border-b")}
          >
            <div className="flex-1 font-medium">{spec.name}</div>
            <div className="flex-1">{spec.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
