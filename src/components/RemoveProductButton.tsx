"use client";

import { Product } from "@/db/schema";
import { Button, ButtonProps } from "./ui/button";
import { useCartStore } from "@/stores/card.store";
import { Trash2 } from "lucide-react";

interface RemoveProductButtonProps extends ButtonProps {
  productId: Product["id"];
}

const RemoveProductButton = ({
  productId,
  ...props
}: RemoveProductButtonProps) => {
  const { products, removeProduct } = useCartStore();

  console.log(products, productId);

  return (
    <Button onClick={() => removeProduct(productId)} size={"icon"} {...props}>
      <Trash2 />
    </Button>
  );
};

export { RemoveProductButton };
