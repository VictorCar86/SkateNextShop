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

// const products = [
//   {
//     id: "1",
//     name: "Pro Deck Model X",
//     description: "Professional skateboard deck with custom artwork",
//     price: 60.0,
//     category: "Decks",
//     subcategory: "Street",
//     brand: "Element",
//     image:
//       "https://onboardsk8.com/cdn/shop/files/TablaSantaCruzxGodzillaMechaHand8.0-1.jpg?v=1732227421&width=360",
//   },
//   {
//     id: "2",
//     name: "Trucks Set - Black",
//     description: "High-quality aluminum skateboard trucks",
//     price: 45.0,
//     category: "Trucks",
//     subcategory: "Standard",
//     brand: "Independent",
//     image:
//       "https://onboardsk8.com/cdn/shop/files/venture-v-lights-bobby.jpg?v=1729550759&width=360",
//   },
//   {
//     id: "3",
//     name: "Wheels 54mm - White",
//     description: "Durable urethane skateboard wheels",
//     price: 35.0,
//     category: "Wheels",
//     subcategory: "Street",
//     brand: "Spitfire",
//     image:
//       "https://onboardsk8.com/cdn/shop/files/RuedasSpitfireF4BigBeatdownClassic99a.jpg?v=1732738246&width=360",
//   },
//   {
//     id: "4",
//     name: "Bearings - ABEC 7",
//     description: "High-speed steel skateboard bearings",
//     price: 20.0,
//     category: "Bearings",
//     subcategory: "Standard",
//     brand: "Bones",
//     image:
//       "https://onboardsk8.com/cdn/shop/files/LijaPowellPeraltaColorMeSkull.jpg?v=1729626008&width=360",
//   },
//   {
//     id: "5",
//     name: "Cruiser Deck - Bamboo",
//     description: "Smooth-riding bamboo cruiser deck",
//     price: 75.0,
//     category: "Decks",
//     subcategory: "Cruiser",
//     brand: "Santa Cruz",
//     image:
//       "https://onboardsk8.com/cdn/shop/files/TablaSantaCruzxGodzillaMechaHand8.0-1.jpg?v=1732227421&width=360",
//   },
//   {
//     id: "6",
//     name: "Low Trucks - Silver",
//     description: "Low-profile skateboard trucks",
//     price: 48.0,
//     category: "Trucks",
//     subcategory: "Low",
//     brand: "Independent",
//     image:
//       "https://onboardsk8.com/cdn/shop/files/TablaSantaCruzxGodzillaMechaHand8.0-1.jpg?v=1732227421&width=360",
//   },
//   {
//     id: "7",
//     name: "Park Wheels 56mm",
//     description: "Wide skateboard wheels for park riding",
//     price: 38.0,
//     category: "Wheels",
//     subcategory: "Park",
//     brand: "Spitfire",
//     image:
//       "https://onboardsk8.com/cdn/shop/files/TablaSantaCruzxGodzillaMechaHand8.0-1.jpg?v=1732227421&width=360",
//   },
//   {
//     id: "8",
//     name: "Swiss Bearings",
//     description: "Premium Swiss-made skateboard bearings",
//     price: 45.0,
//     category: "Bearings",
//     subcategory: "Swiss",
//     brand: "Bones",
//     image:
//       "https://onboardsk8.com/cdn/shop/files/TablaSantaCruzxGodzillaMechaHand8.0-1.jpg?v=1732227421&width=360",
//   },
//   {
//     id: "9",
//     name: "Old School Deck",
//     description: "Classic shaped skateboard deck",
//     price: 65.0,
//     category: "Decks",
//     subcategory: "Old School",
//     brand: "Santa Cruz",
//     image:
//       "https://onboardsk8.com/cdn/shop/files/TablaSantaCruzxGodzillaMechaHand8.0-1.jpg?v=1732227421&width=360",
//   },
//   {
//     id: "10",
//     name: "High Trucks - Gold",
//     description: "High-profile skateboard trucks",
//     price: 52.0,
//     category: "Trucks",
//     subcategory: "High",
//     brand: "Independent",
//     image:
//       "https://onboardsk8.com/cdn/shop/files/TablaSantaCruzxGodzillaMechaHand8.0-1.jpg?v=1732227421&width=360",
//   },
//   {
//     id: "11",
//     name: "Cruiser Wheels 60mm",
//     description: "Soft wheels perfect for cruising",
//     price: 42.0,
//     category: "Wheels",
//     subcategory: "Cruiser",
//     brand: "Bones",
//     image:
//       "https://onboardsk8.com/cdn/shop/files/TablaSantaCruzxGodzillaMechaHand8.0-1.jpg?v=1732227421&width=360",
//   },
//   {
//     id: "12",
//     name: "Ceramic Bearings",
//     description: "High-performance ceramic bearings",
//     price: 80.0,
//     category: "Bearings",
//     subcategory: "Ceramic",
//     brand: "Bones",
//     image:
//       "https://onboardsk8.com/cdn/shop/files/TablaSantaCruzxGodzillaMechaHand8.0-1.jpg?v=1732227421&width=360",
//   },
// ];

const products = await prisma.product.findMany({
  include: {
    brand: true,
    category: true,
  },
});

export function ProductGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <Card key={product.id} className="overflow-hidden">
          <Link href={`/shop/product/${product.id}`}>
            <div className="relative aspect-square overflow-hidden">
              <Image
                src={"/placeholder.svg"}
                alt={product.name}
                fill
                className="object-cover transition-transform hover:scale-105"
              />
            </div>
          </Link>
          <CardHeader className="p-4">
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-2">
                <CardTitle className="line-clamp-1">{product.name}</CardTitle>
                <CardDescription className="line-clamp-2">
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
