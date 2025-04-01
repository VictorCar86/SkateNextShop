import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

const categories = [
  {
    title: "Decks",
    image: "https://picsum.photos/seed/picsum/300/300",
    href: "/shop/decks",
  },
  {
    title: "Trucks",
    image: "https://picsum.photos/seed/picsum/300/300",
    href: "/shop/trucks",
  },
  {
    title: "Wheels",
    image: "https://picsum.photos/seed/picsum/300/300",
    href: "/shop/wheels",
  },
  {
    title: "Bearings",
    image: "https://picsum.photos/seed/picsum/300/300",
    href: "/shop/bearings",
  },
]

export function CategoryGrid() {
  return (
    <section className="py-12">
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold tracking-tight">Shop by Category</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <Card key={category.title} className="overflow-hidden">
              <Link href={category.href}>
                <CardContent className="p-0">
                  <div className="aspect-square relative">
                    <Image
                      src={category.image || "/placeholder.svg"}
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
  )
}

