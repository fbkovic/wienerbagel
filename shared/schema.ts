import { pgTable, text, serial, integer, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const menuItems = pgTable("menu_items", {
  id: serial("id").primaryKey(),
  category: text("category").notNull(), // Classic, Signature, Sweet, Drinks
  name: text("name").notNull(),
  description: text("description").notNull(),
  price: text("price").notNull(), // Using text to allow "€ 5.50" formatting easily
});

export const insertMenuItemSchema = createInsertSchema(menuItems).omit({ id: true });

export type MenuItem = typeof menuItems.$inferSelect;
export type InsertMenuItem = z.infer<typeof insertMenuItemSchema>;
