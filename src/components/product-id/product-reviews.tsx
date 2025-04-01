import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { Product } from "@/lib/types";
import { formatDate } from "@/lib/utils";

export function ProductReviews({
  reviews,
  className,
}: {
  reviews: Product["reviews"];
  className?: string;
}) {
  // Calculate overall rating
  const overallRating = reviews.length
    ? reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length
    : 0;

  // Calculate rating counts and percentages
  const ratingCounts: Record<number, number> = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };

  reviews.forEach((review) => {
    if (review.rating >= 1 && review.rating <= 5) {
      ratingCounts[review.rating]++;
    }
  });

  // Convert counts to percentages
  const ratingPercentages: Record<number, number> = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
  if (reviews.length > 0) {
    Object.keys(ratingCounts).forEach((rating) => {
      const numRating = Number(rating);
      ratingPercentages[numRating] = Math.round(
        (ratingCounts[numRating] / reviews.length) * 100,
      );
    });
  }

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
          {Object.entries(ratingPercentages)
            .reverse()
            .map(([rating, percentage]) => (
              <div key={rating} className="flex items-center gap-2">
                <div className="w-12 text-sm">{rating} stars</div>
                <Progress value={percentage} className="flex-1" />
                <div className="w-12 text-sm text-right">{percentage}%</div>
              </div>
            ))}
        </div>
      </div>
      <div className="mt-8">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Recent Reviews</h3>
          <Button variant="outline">Write a Review</Button>
        </div>
        {reviews.length > 0 ? (
          <div className="space-y-6">
            {reviews.map((review) => (
              <div key={review.id} className="border-b pb-6 last:border-b-0">
                <div className="flex items-center gap-4 mb-2">
                  <Avatar>
                    <AvatarImage
                      src={review.user?.image || ""}
                      alt={review.user?.name || "User"}
                    />
                    <AvatarFallback>
                      {(review.user?.name?.[0] || "U").toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">{review.user?.name || "Anonymous"}</div>
                    <div className="text-sm text-muted-foreground">
                      {formatDate(new Date(review.createdAt))}
                    </div>
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
                <p className="text-sm">{review.comment || "No comment provided."}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8 text-muted-foreground">
            No reviews yet. Be the first to review this product!
          </div>
        )}
      </div>
    </div>
  );
}
