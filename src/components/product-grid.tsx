import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import prisma from "@/lib/prisma";

const products = await prisma.product.findMany({
  include: {
    brand: true,
    category: true,
    images: true,
  },
  take: 10,
});

export function ProductGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <Card key={product.id} className="overflow-hidden">
          <Link href={`/shop/product/${product.id}`}>
            <div className="relative aspect-square overflow-hidden">
              <Image
                src={product.images[0]?.url ?? "/images/placeholder-product.webp"}
                alt={product.name}
                fill
                className="object-cover transition-transform hover:scale-105"
              />
            </div>
          </Link>
          <CardHeader className="p-4">
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-2">
                <CardTitle className="line-clamp-1" title={product.name}>
                  {product.name}
                </CardTitle>
                <CardDescription className="line-clamp-2" title={product.description}>
                  {product.description}
                </CardDescription>
              </div>
              <Button variant="ghost" size="icon" className="h-8 w-8 shrink-0">
                <Heart className="h-4 w-4" />
                <span className="sr-only">Add to wishlist</span>
              </Button>
            </div>
          </CardHeader>
          <CardContent className="p-4 pt-0">
            <div className="flex items-center justify-between">
              <span className="font-medium">${product.price.toFixed(2)}</span>
              <Button size="sm">Add to Cart</Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
