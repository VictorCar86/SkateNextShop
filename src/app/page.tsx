import { HeroSection } from "@/components/hero-section"
import { FeaturedProducts } from "@/components/featured-products"
import { CategoryGrid } from "@/components/category-grid"
import { TrickTutorials } from "@/components/trick-tutorials"
import { CommunitySection } from "@/components/community-section"

export default function Home() {
  return (
    <div className="flex flex-col gap-12 pb-8">
      <HeroSection />
      <div className="container px-8">
        <FeaturedProducts />
        <CategoryGrid />
        <TrickTutorials />
        <CommunitySection />
      </div>
    </div>
  )
}

