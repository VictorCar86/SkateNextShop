"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { navItems } from "@/lib/navItems";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function CategoryGrid() {
  const [selectedNav, setSelectedNav] = useState(navItems[0].title);

  // Find the selected navigation item
  const selectedNavItem = navItems.find((item) => item.title === selectedNav);

  // Get categories from the selected navigation item
  const categories =
    selectedNavItem?.categories.find((category) => category.title === "Categories")
      ?.items || [];

  return (
    <section className="py-12">
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight">Shop by Category</h2>
          <Select value={selectedNav} onValueChange={setSelectedNav}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              {navItems.map((item) => (
                <SelectItem key={item.title} value={item.title}>
                  {item.title}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <Card key={category.title} className="overflow-hidden">
              <Link href={category.href}>
                <CardContent className="p-0">
                  <div className="aspect-square relative">
                    <Image
                      src={category.image || "/images/placeholder-product.webp"}
                      alt={category.title}
                      fill
                      className="object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium">{category.title}</h3>
                  </div>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
