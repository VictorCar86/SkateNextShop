"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Product } from "@/lib/types";
import { CURRENT_HOST } from "@/lib/constants";

export function RelatedProducts({
  currentProductId,
  className,
}: {
  currentProductId: string;
  className?: string;
}) {
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchRelatedProducts() {
      try {
        const randomPage = Math.floor(Math.random() * 5) + 1;
        const res = await fetch(
          `${CURRENT_HOST}/api/products?category=${currentProductId}&limit=4&page=${randomPage}`,
        );
        if (res.ok) {
          const data = await res.json();
          setRelatedProducts(
            data.products.filter((p: Product) => p.id !== currentProductId),
          );
        }
      } catch (error) {
        console.error("Failed to fetch related products:", error);
      }
    }

    fetchRelatedProducts();
  }, [currentProductId]);

  return (
    <div className={className}>
      <h2 className="text-2xl font-bold mb-4">Related Products</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {relatedProducts.map((product) => (
          <Card key={product.id} className={cn("overflow-hidden")}>
            <Link href={`/shop/product/${product.id}`}>
              <CardContent className="p-0">
                <div className="relative aspect-square">
                  <Image
                    src={
                      product?.images?.at(0)?.url || "/images/placeholder-product.webp"
                    }
                    alt={product?.images?.at(0)?.alt || product.name}
                    fill
                    className="object-cover transition-transform hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium line-clamp-1">{product.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    ${Number(product.price)}
                  </p>
                </div>
              </CardContent>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
}
