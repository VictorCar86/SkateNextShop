"use client";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

export function HeroSection() {
  return (
    <div className="relative overflow-hidden">
      <div className="container flex flex-col justify-center items-center gap-4 min-h-[60vh] py-24 mx-auto md:py-32 text-center">
        <div className="absolute scale-[2] sm:scale-[none] -z-10">
          <Carousel
            plugins={[Autoplay({ delay: 4000 })]}
            opts={{ loop: true, align: "center" }}
          >
            <CarouselContent>
              <CarouselItem>
                <Image
                  src="/images/hero-models-XL.webp"
                  alt="Skateboarder doing a trick"
                  className="hidden md:block object-cover brightness-50"
                  width={1920}
                  height={1280}
                />
                <Image
                  src="/images/hero-models-SM.webp"
                  alt="Skateboarder doing a trick"
                  className="block md:hidden object-cover brightness-50"
                  width={1200}
                  height={600}
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  src="/images/hero-boards-XL.webp"
                  alt="Skateboarder doing a trick"
                  className="hidden md:block object-cover brightness-50"
                  width={1920}
                  height={1280}
                />
                <Image
                  src="/images/hero-boards-SM.webp"
                  alt="Skateboarder doing a trick"
                  className="block md:hidden object-cover brightness-50"
                  width={1200}
                  height={600}
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  src="/images/hero-skateboard-XL.webp"
                  alt="Skateboarder doing a trick"
                  className="hidden md:block object-cover brightness-50"
                  width={1920}
                  height={1280}
                />
                <Image
                  src="/images/hero-skateboard-SM.webp"
                  alt="Skateboarder doing a trick"
                  className="block md:hidden object-cover brightness-50"
                  width={1200}
                  height={600}
                />
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </div>
        <h1 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl">
          Your Ultimate Skateboarding Destination
        </h1>
        <p className="max-w-[700px] text-white md:text-xl">
          Find the perfect gear, customize your deck, and join our thriving community of
          skaters.
        </p>
        <div className="flex flex-col gap-4 min-[400px]:flex-row">
          <Button size="lg" variant="default">
            Shop Now
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-white hover:text-white bg-white/10 hover:bg-white/20"
          >
            Watch Tutorials
          </Button>
        </div>
      </div>
    </div>
  );
}
