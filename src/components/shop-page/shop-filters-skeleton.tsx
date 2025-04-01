import { Skeleton } from "@/components/ui/skeleton";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function ShopFiltersSkeleton() {
  return (
    <div className="sticky top-20 grid gap-4">
      <div className="flex items-center justify-between">
        <Skeleton className="h-6 w-16" />
        <Skeleton className="h-8 w-12" />
      </div>
      <Accordion type="multiple" className="w-full">
        <AccordionItem value="categories">
          <AccordionTrigger>
            <Skeleton className="h-5 w-24" />
          </AccordionTrigger>
          <AccordionContent>
            <div className="grid gap-4">
              {Array.from({ length: 4 }, (_, i) => (
                <div key={i} className="grid gap-2">
                  <div className="flex items-center gap-2">
                    <Skeleton className="h-4 w-4 rounded" />
                    <Skeleton className="h-4 w-24" />
                  </div>
                  <div className="ml-6 grid gap-2">
                    {Array.from({ length: 3 }, (_, j) => (
                      <div key={j} className="flex items-center gap-2">
                        <Skeleton className="h-4 w-4 rounded" />
                        <Skeleton className="h-4 w-20" />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="price">
          <AccordionTrigger>
            <Skeleton className="h-5 w-24" />
          </AccordionTrigger>
          <AccordionContent>
            <div className="grid gap-4">
              <Skeleton className="h-5 w-full" />
              <div className="flex items-center justify-between">
                <Skeleton className="h-4 w-12" />
                <Skeleton className="h-4 w-12" />
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="brands">
          <AccordionTrigger>
            <Skeleton className="h-5 w-24" />
          </AccordionTrigger>
          <AccordionContent>
            <div className="grid gap-2">
              {Array.from({ length: 6 }, (_, i) => (
                <div key={i} className="flex items-center gap-2">
                  <Skeleton className="h-4 w-4 rounded" />
                  <Skeleton className="h-4 w-20" />
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}