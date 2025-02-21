import Image from "next/image"
import { Play } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const tutorials = [
  {
    title: "How to Ollie",
    difficulty: "Beginner",
    duration: "5 min",
    image: "https://picsum.photos/seed/picsum/300/300",
  },
  {
    title: "Kickflip Tutorial",
    difficulty: "Intermediate",
    duration: "8 min",
    image: "https://picsum.photos/seed/picsum/300/300",
  },
  {
    title: "360 Flip Guide",
    difficulty: "Advanced",
    duration: "12 min",
    image: "https://picsum.photos/seed/picsum/300/300",
  },
]

export function TrickTutorials() {
  return (
    <section className="py-12">
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight">Learn New Tricks</h2>
          <Button variant="outline">View All</Button>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {tutorials.map((tutorial) => (
            <Card key={tutorial.title}>
              <CardContent className="p-0">
                <div className="relative">
                  <Image
                    src={tutorial.image || "/placeholder.svg"}
                    alt={tutorial.title}
                    width={300}
                    height={250}
                    className="w-full h-[250px] aspect-video rounded-t-lg object-cover"
                  />
                  <Button
                    size="icon"
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
                  >
                    <Play className="h-4 w-4" />
                  </Button>
                </div>
                <div className="p-4">
                  <h3 className="font-medium">{tutorial.title}</h3>
                  <div className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
                    <span>{tutorial.difficulty}</span>
                    <span>•</span>
                    <span>{tutorial.duration}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

