import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

const products = [
  {
    name: "Pro Deck Model X",
    price: 60.0,
    image: "https://picsum.photos/seed/picsum/300/300",
  },
  {
    name: "Trucks Set - Black",
    price: 45.0,
    image: "https://picsum.photos/seed/picsum/300/300",
  },
  {
    name: "Wheels 54mm - White",
    price: 35.0,
    image: "https://picsum.photos/seed/picsum/300/300",
  },
  {
    name: "Bearings - ABEC 7",
    price: 20.0,
    image: "https://picsum.photos/seed/picsum/300/300",
  },
]

export function FeaturedProducts() {
  return (
    <section className="py-12">
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold tracking-tight">Featured Products</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <Card key={product.name}>
              <CardContent className="p-0">
                <div className="relative aspect-square">
                  <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover rounded-t-lg" />
                </div>
                <div className="p-4">
                  <h3 className="font-medium">{product.name}</h3>
                  <p className="text-sm text-muted-foreground">${product.price.toFixed(2)}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

