import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Read-only endpoint - no authentication needed for viewing menu
  app.get(api.menu.list.path, async (req, res) => {
    const items = await storage.getMenuItems();
    res.json(items);
  });

  // POST endpoint removed for security - menu items are seeded on startup
  // If admin functionality is needed, implement proper authentication first

  // Seed data function
  const seedMenu = async () => {
    const existing = await storage.getMenuItems();
    if (existing.length === 0) {
      const seeds = [
        { category: "Classic Bagels", name: "Plain", description: "Simple and classic.", price: "€ 3.50" },
        { category: "Classic Bagels", name: "Sesame", description: "Topped with toasted sesame seeds.", price: "€ 3.80" },
        { category: "Classic Bagels", name: "Everything", description: "The NYC classic with everything on it.", price: "€ 3.90" },
        { category: "Signature Bagels", name: "The Wiener", description: "Mini Schnitzel, lingonberry jam, lemon.", price: "€ 8.90" },
        { category: "Signature Bagels", name: "The NYC", description: "Smoked salmon (Lox), cream cheese, capers, onion.", price: "€ 9.50" },
        { category: "Signature Bagels", name: "The Rubens", description: "Pastrami, sauerkraut, swiss cheese, russian dressing.", price: "€ 9.20" },
        { category: "Sweet Bagels", name: "Cinnamon Raisin", description: "Sweet dough with cinnamon and raisins.", price: "€ 4.20" },
        { category: "Sweet Bagels", name: "Blueberry", description: "Fresh blueberries baked in.", price: "€ 4.50" },
        { category: "Drinks", name: "Wiener Melange", description: "Classic Viennese coffee.", price: "€ 4.20" },
        { category: "Drinks", name: "Cold Brew", description: "Steeped for 12 hours.", price: "€ 4.50" },
      ];
      for (const item of seeds) {
        await storage.createMenuItem(item);
      }
      console.log("Seeded menu items");
    }
  };
  
  // Run seed
  seedMenu().catch(console.error);

  return httpServer;
}
