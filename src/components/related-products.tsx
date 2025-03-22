import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

// This would typically come from a database or API
const products = [
  {
    id: "2",
    name: "Trucks Set - Black",
    price: 45.0,
    image: "/images/placeholder-product.webp",
  },
  {
    id: "3",
    name: "Wheels 54mm - White",
    price: 35.0,
    image: "/images/placeholder-product.webp",
  },
  {
    id: "4",
    name: "Bearings - ABEC 7",
    price: 20.0,
    image: "/images/placeholder-product.webp",
  },
  {
    id: "5",
    name: "Cruiser Deck - Bamboo",
    price: 75.0,
    image: "/images/placeholder-product.webp",
  },
];

export function RelatedProducts({
  currentProductId,
  className,
}: {
  currentProductId: string;
  className?: string;
}) {
  const relatedProducts = products.filter((p) => p.id !== currentProductId).slice(0, 4);

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
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium line-clamp-1">{product.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    ${product.price.toFixed(2)}
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
