import Image from "next/image";
import { Minus, Plus, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function CartItem() {
  const [quantity, setQuantity] = useState(1);
  return (
    <div className="flex gap-4 p-1">
      <div className="w-24 rounded-lg">
        <Image
          src="https://picsum.photos/seed/picsum/300/300"
          alt="Skateboard deck"
          width={300}
          height={300}
          className="rounded-lg object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col gap-1 justify-between">
        <div className="flex justify-between gap-4">
          <div className="grid gap-0.5">
            <h3 className="font-medium">Pro Deck Model X</h3>
            <p className="text-sm text-muted-foreground">8.25&quot; x 31.85&quot;</p>
          </div>
          <Button variant="ghost" size="icon">
            <X className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8"
            onClick={() => setQuantity(quantity - 1)}
            disabled={quantity === 1}
          >
            <Minus className="h-3 w-3" />
          </Button>
          <span className="w-12 text-center">{quantity}</span>
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8"
            onClick={() => setQuantity(quantity + 1)}
          >
            <Plus className="h-3 w-3" />
          </Button>
          <div className="ml-auto font-medium">$60.00</div>
        </div>
      </div>
    </div>
  );
}
