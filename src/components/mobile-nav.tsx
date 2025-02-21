"use client"

import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const mainNavItems = [
  {
    title: "Shop",
    items: [
      {
        title: "Categories",
        items: [
          { title: "Decks", href: "/shop/decks" },
          { title: "Trucks", href: "/shop/trucks" },
          { title: "Wheels", href: "/shop/wheels" },
          { title: "Bearings", href: "/shop/bearings" },
        ],
      },
      {
        title: "Featured",
        items: [
          { title: "New Arrivals", href: "/shop/new-arrivals" },
          { title: "Best Sellers", href: "/shop/best-sellers" },
          { title: "Sales", href: "/shop/sales" },
        ],
      },
    ],
  },
  {
    title: "Customize",
    items: [
      {
        title: "Options",
        items: [
          { title: "Custom Deck Designer", href: "/customize/deck" },
          { title: "Build Complete Setup", href: "/customize/complete" },
        ],
      },
    ],
  },
]

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle>Navigation</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-4 py-4">
          <Accordion type="single" collapsible className="w-full">
            {mainNavItems.map((item) => (
              <AccordionItem key={item.title} value={item.title}>
                <AccordionTrigger>{item.title}</AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col gap-4">
                    {item.items.map((section) => (
                      <div key={section.title} className="flex flex-col gap-2">
                        <h4 className="text-sm font-medium">{section.title}</h4>
                        <div className="flex flex-col gap-2">
                          {section.items.map((subItem) => (
                            <Link
                              key={subItem.title}
                              href={subItem.href}
                              className="text-sm text-muted-foreground hover:text-foreground"
                            >
                              {subItem.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="flex flex-col gap-2">
            <Link href="/tutorials" className="text-sm font-medium">
              Tutorials
            </Link>
            <Link href="/community" className="text-sm font-medium">
              Community
            </Link>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

