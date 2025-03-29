import { faker } from '@faker-js/faker'
import prisma from "@/lib/prisma"
import { Product, User } from '@prisma/client'

/**
 * Creates sample reviews for products
 * @param users Array of user objects
 * @param products Array of product objects
 */
async function createReviews(users: User[], products: Product[]) {
  console.info('Creating product reviews...')

  // Filter out admin users - only customers write reviews
  const customers = users.filter(user => user.role === 'CUSTOMER')

  // For each product, create between 0 and 10 reviews
  for (const product of products) {
    // Determine how many reviews this product will have (0-10)
    const reviewCount = faker.number.int({ min: 0, max: 10 })

    // Skip if no reviews
    if (reviewCount === 0) continue

    // Create unique set of users for this product's reviews
    const reviewers = faker.helpers.arrayElements(customers, reviewCount)

    // Create reviews for this product
    for (const user of reviewers) {
      // Generate review data - only ratings 3-5 (neutral to positive)
      const rating = faker.number.int({ min: 3, max: 5 })
      const hasComment = faker.datatype.boolean(0.8) // 80% chance of having a comment

      // Create review
      await prisma.review.create({
        data: {
          rating,
          comment: hasComment ? generateReviewComment(product.name, rating) : null,
          userId: user.id,
          productId: product.id,
          createdAt: faker.date.past({ years: 1 }),
          updatedAt: faker.date.recent({ days: 30 })
        }
      })
    }
  }
}

/**
 * Generates a realistic review comment based on product name and rating
 * @param productName Name of the product
 * @param rating Rating given (3-5)
 * @returns Generated review comment
 */
function generateReviewComment(productName: string, rating: number): string {
  // Positive review phrases (4-5 stars)
  const positiveReviews = [
    `Love my new ${productName}! Exactly what I was looking for.`,
    `Great quality and fast shipping. Would buy again.`,
    `This ${productName} exceeded my expectations. Highly recommend!`,
    `Perfect for my skating style. Very happy with this purchase.`,
    `Awesome product, great price. Can't beat it!`,
    `Been using this for a few weeks now and it's holding up great.`,
    `The quality is top-notch. Worth every penny.`,
    `Exactly as described. Very satisfied customer here.`
  ]

  // Neutral review phrases (3 stars)
  const neutralReviews = [
    `Decent ${productName}, nothing special but gets the job done.`,
    `It's okay for the price. Not amazing but not terrible either.`,
    `Pretty much what I expected. No complaints.`,
    `Average quality, but works fine for casual skating.`,
    `Not bad, but I've had better. Still usable though.`,
    `Decent value for money. Might buy again.`
  ]

  // Select appropriate review pool based on rating
  let reviewPool: string[]
  if (rating >= 4) {
    reviewPool = positiveReviews
  } else {
    reviewPool = neutralReviews
  }

  // Select a random review from the pool
  let comment = faker.helpers.arrayElement(reviewPool)

  // Sometimes add an additional sentence for more variety
  if (faker.datatype.boolean(0.3)) {
    const additionalComments = [
      "Would definitely shop here again.",
      "Shipping was fast too!",
      "Customer service was helpful when I had questions.",
      "The price was right for what you get.",
      "Perfect for my needs.",
      "Not sure if I'd buy this brand again though.",
      "Might try a different style next time."
    ]
    comment += " " + faker.helpers.arrayElement(additionalComments)
  }

  return comment
}

export default createReviews