"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { navItems } from "@/lib/navItems";

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
            {navItems.map(({ Icon, title, categories }) => (
              <AccordionItem key={title} value={title}>
                <AccordionTrigger>
                  <span className="flex items-center">
                    <Icon className="h-4 w-4 mr-2" style={{ transform: "none" }} />
                    {title}
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col gap-4">
                    {categories.map((category) => (
                      <div key={category.title} className="flex flex-col gap-2">
                        <h4 className="text-sm font-medium">{category.title}</h4>
                        <div className="flex flex-col gap-2">
                          {category.items.map((item) => (
                            <Link
                              key={item.title}
                              href={item.href}
                              className="text-sm text-muted-foreground hover:text-foreground"
                            >
                              {item.title}
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
  );
}
