import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { CarouselItem } from "@/components/ui/carousel";
import { CustomCarrousel } from "@/components/CustomCarrousel";
import prisma from "@/lib/prisma";
import Link from "next/link";

const products = await prisma.product.findMany({
  include: {
    images: true,
  },
  take: 10,
});

export function FeaturedProducts() {
  return (
    <section className="py-12">
      <CustomCarrousel title="Featured Products">
        {products.map((product) => (
          <CarouselItem className="md:basis-1/2 lg:basis-1/4" key={product.id}>
            <Link href={`/shop/product/${product.id}`} key={product.id}>
              <Card>
                <CardContent className="p-0">
                  <div className="relative rounded-t-lg cursor-pointer aspect-square overflow-hidden">
                    <Image
                      src={product.images[0]?.url || "/images/placeholder-product.webp"}
                      alt={product.name}
                      className="object-cover transition-all duration-300 hover:scale-105"
                      fill
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium" title={product.name}>
                      {product.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      ${product.price.toFixed(2)}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </CarouselItem>
        ))}
      </CustomCarrousel>
    </section>
  );
}
