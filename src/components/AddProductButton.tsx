"use client";

import { Product } from "@/db/schema";
import { Button } from "./ui/button";
import { useCartStore } from "@/stores/card.store";

const AddProductButton = ({ product }: { product: Product }) => {
  const { addProduct, products } = useCartStore();

  return (
    <Button
      disabled={products.some((p) => p.id === product.id)}
      onClick={() => addProduct(product)}
    >
      Add to card
    </Button>
  );
};

export { AddProductButton };
