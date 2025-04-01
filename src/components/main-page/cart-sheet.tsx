"use client";

import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { CartItem } from "@/components/main-page/cart-item";
import { Separator } from "@/components/ui/separator";

export function CartSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="relative mx-2">
          <ShoppingCart className="h-4 w-4" />
          <span className="absolute -right-1 -top-1 h-4 w-4 rounded-full bg-primary text-xs text-primary-foreground">
            2
          </span>
        </Button>
      </SheetTrigger>
      <SheetContent className="flex w-full flex-col sm:max-w-lg">
        <SheetHeader className="px-1">
          <SheetTitle>Cart (2 items)</SheetTitle>
        </SheetHeader>
        <div className="flex flex-1 flex-col gap-4 overflow-hidden">
          <div className="flex flex-1 flex-col gap-4">
            <CartItem />
            <Separator />
            <CartItem />
          </div>
          <div className="grid gap-4 px-1">
            <Separator />
            <div className="flex items-center justify-between text-sm">
              <span>Subtotal</span>
              <span>$120.00</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <Separator />
            <div className="flex items-center justify-between font-medium">
              <span>Total</span>
              <span>$120.00</span>
            </div>
            <Button className="w-full">Checkout</Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
