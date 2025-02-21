import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const posts = [
  {
    username: "tony_hawk",
    location: "Venice Beach Skatepark",
    image: "https://picsum.photos/seed/picsum/300/300",
    likes: 1234,
    comments: 56,
  },
  {
    username: "skater_girl",
    location: "Downtown Rails",
    image: "https://picsum.photos/seed/picsum/300/300",
    likes: 892,
    comments: 34,
  },
  {
    username: "sk8er_boi",
    location: "Local Park",
    image: "https://picsum.photos/seed/picsum/300/300",
    likes: 567,
    comments: 23,
  },
  {
    username: "pro_skater",
    location: "Street Spot",
    image: "https://picsum.photos/seed/picsum/300/300",
    likes: 789,
    comments: 45,
  },
]

export function CommunitySection() {
  return (
    <section className="py-12">
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight">Community Highlights</h2>
          <Button variant="outline">Share Your Tricks</Button>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {posts.map((post) => (
            <Card key={post.username}>
              <CardContent className="p-0">
                <div className="relative aspect-square">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={`Post by ${post.username}`}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-muted" />
                    <div>
                      <p className="font-medium">@{post.username}</p>
                      <p className="text-sm text-muted-foreground">{post.location}</p>
                    </div>
                  </div>
                  <div className="mt-2 flex items-center gap-4 text-sm text-muted-foreground">
                    <span>{post.likes} likes</span>
                    <span>{post.comments} comments</span>
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

