import { db } from "./db";
import {
  menuItems,
  type MenuItem,
  type InsertMenuItem
} from "@shared/schema";

export interface IStorage {
  getMenuItems(): Promise<MenuItem[]>;
  createMenuItem(item: InsertMenuItem): Promise<MenuItem>;
}

export class DatabaseStorage implements IStorage {
  async getMenuItems(): Promise<MenuItem[]> {
    if (!db) throw new Error("Database not initialized");
    return await db.select().from(menuItems);
  }

  async createMenuItem(item: InsertMenuItem): Promise<MenuItem> {
    if (!db) throw new Error("Database not initialized");
    const [newItem] = await db.insert(menuItems).values(item).returning();
    return newItem;
  }
}

export class MemStorage implements IStorage {
  private menuItems: Map<number, MenuItem>;
  private currentId: number;

  constructor() {
    this.menuItems = new Map();
    this.currentId = 1;
  }

  async getMenuItems(): Promise<MenuItem[]> {
    return Array.from(this.menuItems.values());
  }

  async createMenuItem(item: InsertMenuItem): Promise<MenuItem> {
    const id = this.currentId++;
    const newItem: MenuItem = { ...item, id };
    this.menuItems.set(id, newItem);
    return newItem;
  }
}

export const storage = process.env.DATABASE_URL ? new DatabaseStorage() : new MemStorage();

