import { Product, products } from "@/db/schema";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Image from "next/image";
import { AddProductButton } from "./AddProductButton";
import { RemoveProductButton } from "./RemoveProductButton";

const ProductCard = ({
  product,
  variant = "list-item",
}: {
  product: Product;
  variant?: "list-item" | "cart-item";
}) => {
  const { title, price, imageUrl, description, id } = product;

  return (
    <Card className="flex-1 w-0 flex flex-col justify-between min-w-[240px]">
      <CardHeader className="relative">
        {imageUrl && (
          <Image
            className="rounded-md"
            alt={`Image of ${title}`}
            src={imageUrl}
            width={200}
            height={200}
          />
        )}
        {variant === "cart-item" && (
          <RemoveProductButton
            productId={id}
            className="absolute top-6 right-8"
            size={"icon"}
            variant={"destructive"}
          />
        )}
      </CardHeader>
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardDescription className="mt-4 truncate-three">
          {description}
        </CardDescription>
      </CardContent>
      {variant === "list-item" && (
        <CardFooter className="self-end align-bottom">
          <AddProductButton product={product} />
        </CardFooter>
      )}
    </Card>
  );
};

export { ProductCard };
