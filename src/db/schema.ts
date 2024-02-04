import { relations } from "drizzle-orm";
import {
  decimal,
  integer,
  pgEnum,
  pgTable,
  serial,
  uniqueIndex,
  varchar,
} from "drizzle-orm/pg-core";

export const categories = pgTable("categories", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 64 }).notNull(),
});

export const categoriesRelations = relations(categories, ({ many }) => ({
  products: many(products),
}));

export const products = pgTable("products", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 64 }).notNull(),
  description: varchar("description", { length: 512 }),
  price: decimal("price").notNull(),
  categoryId: integer("category_id"),
  imageUrl: varchar("image_url"),
});

export const productsRelations = relations(products, ({ one }) => ({
  category: one(categories, {
    fields: [products.categoryId],
    references: [categories.id],
  }),
}));

type Product = typeof products.$inferSelect;
type Category = typeof categories.$inferSelect;

export type { Product, Category };
