import { HeroSection } from "@/components/main-page/hero-section";
import { FeaturedProducts } from "@/components/main-page/featured-products";
import { CategoryGrid } from "@/components/main-page/category-grid";
import { TrickTutorials } from "@/components/main-page/trick-tutorials";
import { CommunitySection } from "@/components/main-page/community-section";

export default function Home() {
  return (
    <div className="flex flex-col gap-8 pb-8">
      <HeroSection />
      <div className="px-8">
        <FeaturedProducts />
        <CategoryGrid />
        <TrickTutorials />
        <CommunitySection />
      </div>
    </div>
  );
}
