"use client";

import { useTransition } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Search, Store } from "lucide-react";
import { useDebouncedCallback } from "use-debounce";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function ShopHeader() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [, startTransition] = useTransition();

  const handleSearch = useDebouncedCallback((term: string) => {
    startTransition(() => {
      const params = new URLSearchParams(searchParams.toString());

      if (term) {
        params.set("search", term);
      } else {
        params.delete("search");
      }

      router.push(`/shop?${params.toString()}`);
    });
  }, 300);

  const handleSort = (value: string) => {
    startTransition(() => {
      const params = new URLSearchParams(searchParams.toString());

      if (value) {
        params.set("sort", value);
      } else {
        params.delete("sort");
      }

      router.push(`/shop?${params.toString()}`);
    });
  };

  return (
    <div className="flex flex-col gap-4 pb-8">
      <h1 className="flex items-center gap-2 text-3xl font-bold tracking-tight">
        <Store className="w-6 h-6" />
        <span>Shop</span>
      </h1>
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="relative flex-1 md:max-w-sm">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search products..."
            className="pl-8"
            defaultValue={searchParams.get("search") ?? ""}
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>
        <Select
          defaultValue={searchParams.get("sort") ?? "featured"}
          onValueChange={handleSort}
        >
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="featured">Featured</SelectItem>
            <SelectItem value="newest">Newest</SelectItem>
            <SelectItem value="price-asc">Price: Low to High</SelectItem>
            <SelectItem value="price-desc">Price: High to Low</SelectItem>
            <SelectItem value="best-selling">Best Selling</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
