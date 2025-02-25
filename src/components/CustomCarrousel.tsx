"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { Carousel, CarouselContent } from "@/components/ui/carousel";
import { useState, useEffect } from "react";
import { type CarouselApi } from "@/components/ui/carousel";

export function CustomCarrousel({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-start items-center gap-4">
        <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
        <div className="flex gap-2">
          <button
            className="border-2 border-primary rounded-full p-1 disabled:opacity-50"
            onClick={() => api?.scrollPrev()}
            disabled={current === 0}
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            className="border-2 border-primary rounded-full p-1 disabled:opacity-50"
            onClick={() => api?.scrollNext()}
            disabled={current === count - 1}
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
      <div className="relative">
        <Carousel opts={{ align: "center" }} setApi={setApi}>
          <CarouselContent>{children}</CarouselContent>
          <div className="flex justify-center gap-2 py-4">
            {Array.from({ length: count }).map((_, i) => (
              <button
                key={i}
                className={`h-2.5 w-2 rounded-full transition-colors ${
                  current === i ? "bg-primary" : "bg-muted"
                }`}
                onClick={() => api?.scrollTo(i)}
              />
            ))}
          </div>
        </Carousel>
      </div>
    </div>
  );
}
