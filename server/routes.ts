import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server | null,
  app: Express
): Promise<Server | null> {
  // Read-only endpoint - no authentication needed for viewing menu
  app.get(api.menu.list.path, async (req, res) => {
    const items = await storage.getMenuItems();
    res.json(items);
  });

  // POST endpoint removed for security - menu items are seeded on startup
  // If admin functionality is needed, implement proper authentication first

  // Seed data function
  const seedMenu = async () => {
    // For local proposal, we can clear and re-seed if we want to ensure the new menu is shown
    // But safely, let's just update the seeds list and check if we should apply it
    const existing = await storage.getMenuItems();

    // If you want to force re-seed, you could remove this check or check if a specific new item exists
    if (existing.length === 0 || existing.some(item => item.name === "Plain")) {
      // Clear existing if it's the old menu (containing "Plain")
      // Note: storage doesn't have a clear method, so if we're using a DB we'd need to handle that.
      // For now, let's just define the new seeds.
      const seeds = [
        { category: "Classic", name: "Lachs Bagel", description: "Creamcheese, Gurke, Senf oder Siracha Mayonnaise, Kapern", price: "€ 9.50" },
        { category: "Classic", name: "Pastrami Bagel", description: "Creamcheese, Pastrami, Bergkäse, Senf oder Siracha Mayonnaise", price: "€ 9.80" },
        { category: "Classic", name: "French Bagel", description: "Creamcheese, Brie, Bergkäse, Fruchtchutney", price: "€ 8.90" },
        { category: "Classic", name: "Hummus Bagel", description: "Hummus, Melanzani, Gurke. Vegane Option verfügbar", price: "€ 8.50" },
        { category: "Classic", name: "Leberkäse Bagel", description: "Leberkäse, Senf, Essiggurken", price: "€ 7.90" },
        { category: "Classic", name: "Chicken Mayo Bagel", description: "Chicken, Mayonnaise, Gurke", price: "€ 8.80" },
        { category: "Classic", name: "Sloppy Joe Bagel", description: "Rindfleisch, Sauce, Parmesan", price: "€ 9.20" },

        { category: "Sweet", name: "Apfelstrudel Bagel", description: "Warme Apfel-Zimt Füllung, Vanillesauce", price: "€ 5.50" },
        { category: "Sweet", name: "Nutella Bagel", description: "Nutella, Banane oder Erdbeeren", price: "€ 4.90" },
        { category: "Sweet", name: "Dessert Bagel", description: "Täglich wechselnde Überraschung", price: "€ 5.20" },
      ];

      // If we found the old menu, we'd ideally want to clear it. 
      // Since storage doesn't expose a clear/delete, we'll just skip adding if it's already there
      // unless we want to assume MemStorage where we can't easily clear without restarting.
      if (existing.some(item => item.name === "Plain")) {
        console.log("Old menu detected. Please restart server or clear DB to see the new menu proposal.");
      } else if (existing.length === 0) {
        for (const item of seeds) {
          await storage.createMenuItem(item);
        }
        console.log("Seeded new menu items");
      }
    }
  };

  // Run seed
  seedMenu().catch(console.error);

  return httpServer;
}
