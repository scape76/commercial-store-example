import { PostgresJsDatabase, drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";
import * as schema from "./schema";

declare global {
  var db: PostgresJsDatabase<typeof schema>;
}

const queryClient = postgres(process.env.DB_URL!);

let db: PostgresJsDatabase<typeof schema>;

if (process.env.NODE_ENV === "production") {
  db = drizzle(queryClient, { schema });
} else {
  if (!global.db) {
    global.db = drizzle(queryClient, { schema });
  }

  db = global.db;
}

export { db };
