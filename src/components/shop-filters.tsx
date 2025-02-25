"use client";

import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const categories = [
  {
    label: "Decks",
    subcategories: [
      { id: "street", label: "Street" },
      { id: "cruiser", label: "Cruiser" },
      { id: "old-school", label: "Old School" },
      { id: "longboard", label: "Longboard" },
    ],
  },
  {
    label: "Trucks",
    subcategories: [
      { id: "standard", label: "Standard" },
      { id: "low", label: "Low" },
      { id: "high", label: "High" },
    ],
  },
  {
    label: "Wheels",
    subcategories: [
      { id: "street-wheels", label: "Street" },
      { id: "cruiser-wheels", label: "Cruiser" },
      { id: "park-wheels", label: "Park" },
    ],
  },
  {
    label: "Bearings",
    subcategories: [
      { id: "standard-bearings", label: "Standard" },
      { id: "ceramic", label: "Ceramic" },
      { id: "swiss", label: "Swiss" },
    ],
  },
];

const brands = [
  { id: "element", label: "Element" },
  { id: "santa-cruz", label: "Santa Cruz" },
  { id: "baker", label: "Baker" },
  { id: "independent", label: "Independent" },
  { id: "spitfire", label: "Spitfire" },
  { id: "bones", label: "Bones" },
];

export function ShopFilters() {
  const [priceRange, setPriceRange] = useState([0, 200]);

  return (
    <div className="sticky top-20 grid gap-4">
      <Accordion
        type="multiple"
        defaultValue={["categories", "price", "brands"]}
        className="w-full"
      >
        <AccordionItem value="categories">
          <AccordionTrigger>Categories</AccordionTrigger>
          <AccordionContent>
            <div className="grid gap-4">
              {categories.map((category) => (
                <div key={category.label} className="grid gap-2">
                  <h4 className="font-medium">{category.label}</h4>
                  <div className="grid gap-2">
                    {category.subcategories.map((subcategory) => (
                      <div key={subcategory.id} className="flex items-center gap-2">
                        <Checkbox id={subcategory.id} />
                        <label htmlFor={subcategory.id} className="text-sm">
                          {subcategory.label}
                        </label>
                      </div>
                    ))}
                  </div>
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
                value={priceRange}
                onValueChange={setPriceRange}
                max={200}
                step={1}
                className="py-4"
              />
              <div className="flex items-center justify-between">
                <span className="text-sm">${priceRange[0]}</span>
                <span className="text-sm">${priceRange[1]}</span>
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
                  <Checkbox id={brand.id} />
                  <label htmlFor={brand.id} className="text-sm">
                    {brand.label}
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
