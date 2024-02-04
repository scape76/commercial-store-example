"use client";

import { ShoppingCart } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useCartStore } from "@/stores/card.store";
import { ProductCard } from "./ProductCard";

const ShoppingCartButton = () => {
  const { products } = useCartStore();

  return (
    <Sheet>
      <SheetTrigger>
        <ShoppingCart />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Your cart</SheetTitle>
          {/* <SheetDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </SheetDescription> */}
          {products.map((product) => (
            <ProductCard
              product={product}
              variant="cart-item"
              key={product.id}
            />
          ))}
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export { ShoppingCartButton };
