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
import { Product } from "@/lib/actions";

interface ProductGridProps {
  products: Product[];
}

export function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.length === 0 && (
        <p className="my-10 col-span-full text-center text-3xl text-muted-foreground">
          No products found
        </p>
      )}
      {products.map((product) => (
        <Card key={product.id} className="overflow-hidden">
          <Link href={`/shop/product/${product.id}`}>
            <div className="relative aspect-square overflow-hidden">
              <Image
                src={product.images[0]?.url ?? "/images/placeholder-product.webp"}
                alt={product.images[0]?.alt ?? "Product Image"}
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
              <span className="font-medium">${product.price.toNumber()}</span>
              <Button size="sm">Add to Cart</Button>
            </div>
            <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
              <span>{product.category.name}</span>
              <span>•</span>
              <span>{product.brand.name}</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
