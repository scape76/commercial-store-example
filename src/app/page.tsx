import { CategoryListItem } from "@/components/CategoryListItem";
import { db } from "@/db";
import { ShoppingCartButton } from "@/components/ShoppingCartButton";

export default async function Home() {
  const categories = await db.query.categories.findMany({
    with: {
      products: true,
    },
  });

  return (
    <>
      <header className="flex py-6 px-8 items-center justify-between">
        <span className="text-accent-foreground uppercase tracking-wide">
          my store
        </span>
        <nav>search for products</nav>
        <ShoppingCartButton />
      </header>
      <hr className="border border-border" />
      <main className="">
        <div className="flex flex-col gap-6 mx-6 md:mx-24 my-6">
          {categories.map((category) => (
            <CategoryListItem {...category} id={category.id} />
          ))}
        </div>
      </main>
    </>
  );
}
