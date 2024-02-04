import { Category, Product } from "@/db/schema";
import { ProductCard } from "./ProductCard";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";

type CategoryWithProducts = Category & {
  products: Product[];
};

function CategoryListItem({ name, products }: CategoryWithProducts) {
  return (
    <section className="w-full">
      <h1 className="text-3xl p-6">{name}</h1>
      <ScrollArea className="pb-4">
        <div className="flex gap-4 px-6 w-max">
          {products.map((product) => (
            <ProductCard
              product={product}
              key={product.id}
            />
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </section>
  );
}

export { CategoryListItem };
