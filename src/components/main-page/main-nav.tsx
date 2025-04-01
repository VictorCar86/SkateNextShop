import Link from "next/link";
import { SkullIcon as Skateboarding } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { navItems } from "@/lib/navItems";

export function MainNav() {
  return (
    <div className="flex gap-6 md:gap-8">
      <Link href="/" className="flex items-center px-1.5 mx-2">
        <Skateboarding className="h-6 w-6 mr-2" />
        <span className="inline-block font-bold">SkateShop</span>
      </Link>
      <NavigationMenu className="hidden md:flex">
        <NavigationMenuList>
          {navItems.map(({ Icon, title, categories }) => (
            <NavigationMenuItem key={title}>
              <NavigationMenuTrigger>
                <Icon className="h-4 w-4 mr-2" />
                {title}
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  {categories.map((category) => (
                    <div className="grid gap-2" key={category.title}>
                      <h3 className="font-medium">{category.title}</h3>
                      {category.items.map((item) => (
                        <NavigationMenuLink asChild key={item.title}>
                          <Link
                            href={item.href}
                            className="text-muted-foreground hover:text-foreground hover:underline"
                          >
                            {item.title}
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  ))}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          ))}
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
  );
}
