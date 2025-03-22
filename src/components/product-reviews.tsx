import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

// This would typically come from a database or API
const reviews = [
  {
    id: 1,
    author: "John Doe",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
    date: "2023-04-15",
    content: "Great product! The deck is sturdy and perfect for street skating.",
  },
  {
    id: 2,
    author: "Jane Smith",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 4,
    date: "2023-04-10",
    content:
      "Good quality deck, but a bit heavier than I expected. Still, it performs well.",
  },
  // Add more reviews as needed
];

const overallRating = 4.5;
const ratingCounts = { 5: 75, 4: 20, 3: 3, 2: 1, 1: 1 };

export function ProductReviews({
  productId,
  className,
}: {
  productId: string;
  className?: string;
}) {
  console.log("🚀 ~ productId:", productId);
  return (
    <div className={className}>
      <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="flex flex-col items-center justify-center p-6 border rounded-lg">
          <div className="text-4xl font-bold">{overallRating.toFixed(1)}</div>
          <div className="flex items-center mt-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={cn(
                  "w-5 h-5",
                  i < Math.floor(overallRating)
                    ? "text-yellow-400 fill-yellow-400"
                    : "text-gray-300",
                )}
              />
            ))}
          </div>
          <div className="text-sm text-muted-foreground mt-1">
            Based on {reviews.length} reviews
          </div>
        </div>
        <div className="flex flex-col gap-2">
          {Object.entries(ratingCounts)
            .reverse()
            .map(([rating, count]) => (
              <div key={rating} className="flex items-center gap-2">
                <div className="w-12 text-sm">{rating} stars</div>
                <Progress value={count} className="flex-1" />
                <div className="w-12 text-sm text-right">{count}%</div>
              </div>
            ))}
        </div>
      </div>
      <div className="mt-8">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Recent Reviews</h3>
          <Button variant="outline">Write a Review</Button>
        </div>
        <div className="space-y-6">
          {reviews.map((review) => (
            <div key={review.id} className="border-b pb-6 last:border-b-0">
              <div className="flex items-center gap-4 mb-2">
                <Avatar>
                  <AvatarImage src={review.avatar} alt={review.author} />
                  <AvatarFallback>{review.author[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">{review.author}</div>
                  <div className="text-sm text-muted-foreground">{review.date}</div>
                </div>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={cn(
                      "w-4 h-4",
                      i < review.rating
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-gray-300",
                    )}
                  />
                ))}
              </div>
              <p className="text-sm">{review.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
