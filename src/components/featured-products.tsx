import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { CarouselItem } from "@/components/ui/carousel";
import { CustomCarrousel } from "@/components/CustomCarrousel";

let products = [
  {
    name: "Pro Deck Model X",
    price: 60.0,
    image:
      "https://onboardsk8.com/cdn/shop/files/TablaSantaCruzxGodzillaMechaHand8.0-1.jpg?v=1732227421&width=360",
  },
  {
    name: "Trucks Set - Black",
    price: 45.0,
    image:
      "https://onboardsk8.com/cdn/shop/files/venture-v-lights-bobby.jpg?v=1729550759&width=360",
  },
  {
    name: "Wheels 62mm - White",
    price: 35.0,
    image:
      "https://onboardsk8.com/cdn/shop/files/RuedasSpitfireF4BigBeatdownClassic99a.jpg?v=1732738246&width=360",
  },
  {
    name: "Bearings - ABEC 7",
    price: 20.0,
    image:
      "https://onboardsk8.com/cdn/shop/files/LijaPowellPeraltaColorMeSkull.jpg?v=1729626008&width=360",
  },
];
products = products.concat(products);

export function FeaturedProducts() {
  return (
    <section className="py-12">
      <CustomCarrousel title="Featured Products">
        {products.map((product, idx) => (
          <CarouselItem className="md:basis-1/2 lg:basis-1/4" key={idx + product.name}>
            <Card>
              <CardContent className="p-0">
                <div className="relative rounded-t-lg cursor-pointer aspect-square overflow-hidden">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="object-cover transition-all duration-300 hover:scale-105"
                    fill
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium">{product.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    ${product.price.toFixed(2)}
                  </p>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CustomCarrousel>
    </section>
  );
}
