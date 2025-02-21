import Link from "next/link"
import { SkullIcon as Skateboarding } from "lucide-react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

export function MainNav() {
  return (
    <div className="flex gap-6 md:gap-8">
      <Link href="/" className="flex items-center px-1.5 mx-2">
        <Skateboarding className="h-6 w-6 mr-2" />
        <span className="inline-block font-bold">SkateShop</span>
      </Link>
      <NavigationMenu className="hidden md:flex">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Shop</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <div className="grid gap-2">
                  <h3 className="font-medium">Categories</h3>
                  <NavigationMenuLink asChild>
                    <Link href="/shop/decks" className="hover:underline">
                      Decks
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link href="/shop/trucks" className="hover:underline">
                      Trucks
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link href="/shop/wheels" className="hover:underline">
                      Wheels
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link href="/shop/bearings" className="hover:underline">
                      Bearings
                    </Link>
                  </NavigationMenuLink>
                </div>
                <div className="grid gap-2">
                  <h3 className="font-medium">Featured</h3>
                  <NavigationMenuLink asChild>
                    <Link href="/shop/new-arrivals" className="hover:underline">
                      New Arrivals
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link href="/shop/best-sellers" className="hover:underline">
                      Best Sellers
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link href="/shop/sales" className="hover:underline">
                      Sales
                    </Link>
                  </NavigationMenuLink>
                </div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Customize</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid gap-3 p-6 md:w-[400px] lg:w-[500px]">
                <NavigationMenuLink asChild>
                  <Link href="/customize/deck" className="hover:underline">
                    Custom Deck Designer
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="/customize/complete" className="hover:underline">
                    Build Complete Setup
                  </Link>
                </NavigationMenuLink>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/tutorials" legacyBehavior passHref>
              <NavigationMenuLink>Tutorials</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/community" legacyBehavior passHref>
              <NavigationMenuLink>Community</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}

