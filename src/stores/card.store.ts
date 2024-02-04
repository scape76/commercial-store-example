import { Product } from "@/db/schema";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type CartStore = {
  products: Product[];
  addProduct: (product: Product) => void;
  removeProduct: (productId: Product["id"]) => void;
};

const useCartStore = create(
  persist<CartStore>(
    (set, get) => ({
      products: [],
      addProduct: (product) =>
        set((state) => ({ products: [...state.products, product] })),
      removeProduct: (productId) =>
        set((state) => ({
          products: state.products.filter((p) => p.id !== productId),
        })),
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export { useCartStore };
