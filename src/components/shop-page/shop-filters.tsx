"use client";

import { useState, useEffect, useTransition } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

interface Category {
  id: string;
  name: string;
  children: {
    id: string;
    name: string;
  }[];
}

interface Brand {
  id: string;
  name: string;
}

interface FilterOptionsProps {
  categories: Category[];
  brands: Brand[];
  priceRange: {
    min: number;
    max: number;
  };
}

export function ShopFilters({ categories, brands, priceRange }: FilterOptionsProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  // Initialize state from URL parameters
  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    searchParams.get("categories")?.split(",") || [],
  );
  const [selectedBrands, setSelectedBrands] = useState<string[]>(
    searchParams.get("brands")?.split(",") || [],
  );
  const [priceRangeValue, setPriceRangeValue] = useState<[number, number]>([
    Number(searchParams.get("minPrice")) || priceRange.min,
    Number(searchParams.get("maxPrice")) || priceRange.max,
  ]);

  // Update URL with filters
  useEffect(() => {
    startTransition(() => {
      const params = new URLSearchParams();

      if (selectedCategories.length > 0) {
        params.set("categories", selectedCategories.join(","));
      }

      if (selectedBrands.length > 0) {
        params.set("brands", selectedBrands.join(","));
      }

      params.set("minPrice", priceRangeValue[0].toString());
      params.set("maxPrice", priceRangeValue[1].toString());

      const search = params.toString();
      if (search) {
        router.push(`/shop?${search}`);
      } else {
        router.push("/shop");
      }
    });
  }, [selectedCategories, selectedBrands, priceRangeValue, router]);

  const handleCategoryChange = (checked: boolean, categoryName: string) => {
    setSelectedCategories((prev) =>
      checked ? [...prev, categoryName] : prev.filter((name) => name !== categoryName),
    );
  };

  const handleBrandChange = (checked: boolean, brandName: string) => {
    setSelectedBrands((prev) =>
      checked ? [...prev, brandName] : prev.filter((name) => name !== brandName),
    );
  };

  const handleReset = () => {
    setSelectedCategories([]);
    setSelectedBrands([]);
    setPriceRangeValue([priceRange.min, priceRange.max]);
  };

  return (
    <div className="sticky top-20 grid gap-4">
      <div className="flex items-center justify-between">
        <h2 className="font-semibold">Filters</h2>
        <Button variant="ghost" size="sm" onClick={handleReset} disabled={isPending}>
          Reset
        </Button>
      </div>
      {isPending && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-background/50">
          <Loader2 className="h-6 w-6 animate-spin" />
        </div>
      )}
      <Accordion
        type="multiple"
        // defaultValue={["categories", "price", "brands"]}
        className="w-full"
      >
        <AccordionItem value="categories">
          <AccordionTrigger>Categories</AccordionTrigger>
          <AccordionContent>
            <div className="grid gap-4">
              {categories.map((category) => (
                <div key={category.id} className="grid gap-2">
                  <div className="flex items-center gap-2">
                    <Checkbox
                      id={category.id}
                      checked={selectedCategories.includes(category.name)}
                      onCheckedChange={(checked) =>
                        handleCategoryChange(checked as boolean, category.name)
                      }
                    />
                    <label htmlFor={category.id} className="text-sm font-medium">
                      {category.name}
                    </label>
                  </div>
                  {category.children.length > 0 && (
                    <div className="ml-6 grid gap-2">
                      {category.children.map((subCategory) => (
                        <div key={subCategory.id} className="flex items-center gap-2">
                          <Checkbox
                            id={subCategory.id}
                            checked={selectedCategories.includes(subCategory.name)}
                            onCheckedChange={(checked) =>
                              handleCategoryChange(checked as boolean, subCategory.name)
                            }
                          />
                          <label htmlFor={subCategory.id} className="text-sm">
                            {subCategory.name}
                          </label>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="price">
          <AccordionTrigger>Price Range</AccordionTrigger>
          <AccordionContent>
            <div className="grid gap-4">
              <Slider
                value={priceRangeValue}
                onValueChange={(value) => setPriceRangeValue(value as [number, number])}
                min={priceRange.min}
                max={priceRange.max}
                step={1}
                className="py-4"
              />
              <div className="flex items-center justify-between">
                <span className="text-sm">${priceRangeValue[0]}</span>
                <span className="text-sm">${priceRangeValue[1]}</span>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="brands">
          <AccordionTrigger>Brands</AccordionTrigger>
          <AccordionContent>
            <div className="grid gap-2">
              {brands.map((brand) => (
                <div key={brand.id} className="flex items-center gap-2">
                  <Checkbox
                    id={brand.id}
                    checked={selectedBrands.includes(brand.name)}
                    onCheckedChange={(checked) =>
                      handleBrandChange(checked as boolean, brand.name)
                    }
                  />
                  <label htmlFor={brand.id} className="text-sm">
                    {brand.name}
                  </label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
