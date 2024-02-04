import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import { Category, Product, categories, products } from "./schema";
import { faker } from "@faker-js/faker";
import * as dotenv from "dotenv";
dotenv.config();

function generateFakeImageUrl(width = 400, height = 400) {
  const randomNumber = getRandomNumber(1, 1000);
  return `https://picsum.photos/${width}/${height}?random=${randomNumber}`;
}

const main = async () => {
  console.log("----", process.env.DB_URL, "----");
  const client = new Pool({
    connectionString: process.env.DB_URL,
  });
  const db = drizzle(client);
  const mockedProducts: Product[] = [];
  const mockedCategories: Category[] = [];

  for (let i = 0; i < 3; i++) {
    mockedCategories.push({
      id: i,
      name: faker.commerce.department(),
    });
  }

  for (let i = 0; i < 20; i++) {
    mockedProducts.push({
      id: i,
      description: faker.commerce.productDescription(),
      price: faker.commerce.price(),
      title: faker.commerce.productName(),
      categoryId: getRandomNumber(0, 2),
      imageUrl: generateFakeImageUrl(),
    });
  }

  console.log("Seed start");
  await db.insert(categories).values(mockedCategories);
  await db.insert(products).values(mockedProducts);
  console.log("Seed done");
};

function getRandomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

main();
