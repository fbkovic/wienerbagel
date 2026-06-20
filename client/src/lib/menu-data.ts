// Single source of truth for the menu (Speisekarte).
// Rendered as crawlable + screen-reader text in MenuSection so search engines
// can read the dishes/prices that otherwise only live inside the menu images.
// Content mirrors the two menu boards (speisekarte-1.jpg / speisekarte-2.jpg).

export interface MenuItem {
  name: string;
  description?: string;
  /** Display price exactly as on the board, e.g. "12,90" or "+5" or "+0,50". */
  price: string;
  /** e.g. "vegan", "vegetarisch", "scharf". */
  tags?: string[];
  /** Austrian allergen letter codes as printed, e.g. "A,E,G,M,N". */
  allergens?: string;
}

export interface MenuSection {
  title: string;
  note?: string;
  items: MenuItem[];
}

export const menuSections: MenuSection[] = [
  {
    title: "Simple Bagel's",
    note: "Bagel mit Aufstrich – nach Wunsch mit Extras verfeinern.",
    items: [
      { name: "Humus", price: "5,90", tags: ["vegan"], allergens: "A,N" },
      { name: "Cream Cheese", price: "5,90", allergens: "A,G" },
    ],
  },
  {
    title: "Simple Bagel's – Extras & Zutaten",
    note: "Aufpreis pro Zutat.",
    items: [
      { name: "Lachs", price: "+5", allergens: "D" },
      { name: "Rinderpastrami", price: "+5", allergens: "M" },
      { name: "Käse oder Brie", price: "+4", allergens: "G" },
      { name: "Putenschinken", price: "+4", allergens: "G" },
      { name: "Melanzani", price: "+4", tags: ["vegan"] },
      { name: "Sauce Hollandaise", price: "+2", allergens: "A,C,G" },
      { name: "Guacamole", price: "+2", tags: ["vegan"], allergens: "L,M" },
      { name: "Cheddar", price: "+2", allergens: "G" },
      { name: "Curry-Mango Sauce", price: "+0,50", allergens: "C,G" },
      { name: "Sriracha-Mayo", price: "+0,50", allergens: "C,G" },
      { name: "Mayonnaise", price: "+0,50", allergens: "C,G" },
      { name: "Senf", price: "+0,50", allergens: "M" },
    ],
  },
  {
    title: "Frühstück – Breakfast",
    items: [
      {
        name: "Süßer Klimt",
        description: "Wiener Klassiker: Putenschinken, Bergkäse, Butter, hausgemachte Marmelade",
        price: "14,90",
        allergens: "A,C,G",
      },
      {
        name: "Omelette",
        description: "3 Eier und Sauce Hollandaise",
        price: "14,90",
        tags: ["scharf"],
        allergens: "A,C,G",
      },
      {
        name: "Croissant Omelette",
        description: "3 Eier und Sauce Hollandaise",
        price: "14,90",
        tags: ["scharf"],
        allergens: "A,C,G",
      },
      {
        name: "Vegasti",
        description: "Hummus, Melanzani, Guacamole, getrocknete Tomate",
        price: "14,90",
        tags: ["vegan"],
        allergens: "A,N",
      },
      {
        name: "French Kiss",
        description: "Brie, Bergkäse, Doppelrahmfrischkäse, Beeren-Chutney",
        price: "14,90",
        tags: ["vegetarisch"],
        allergens: "A,G",
      },
      {
        name: "Ham Shuka",
        description: "Hummus, Rinderhackfleisch, Jalapeño",
        price: "14,90",
        tags: ["scharf"],
        allergens: "A,G,L,M,N",
      },
    ],
  },
  {
    title: "Signatur Bagel",
    items: [
      {
        name: "Veganoush",
        description: "Humus, Melanzani, getrocknete Tomaten, Rotkraut, Kraut, Salat",
        price: "12,90",
        tags: ["vegan"],
        allergens: "A,E,M,N",
      },
      {
        name: "Leberkäs",
        description: "Hühner-Käseleberkäse, Senf, Kraut",
        price: "9,90",
        tags: ["scharf"],
        allergens: "A,E,G,M,N",
      },
      {
        name: "French",
        description: "Cream Cheese, Brie, Bergkäse, Beerenchutney, Salat",
        price: "12,90",
        tags: ["vegetarisch"],
        allergens: "A,E,G,M,N",
      },
      {
        name: "Steirer TropicChick",
        description: "Steirisches Pulled Chicken, Salat, Curry-Mango-Sauce",
        price: "12,90",
        tags: ["scharf"],
        allergens: "A,C,E,G,L,M,N",
      },
      {
        name: "Breakfast",
        description: "Cream Cheese, Omelette mit 2 Eiern, Salat",
        price: "12,90",
        tags: ["vegetarisch", "scharf"],
        allergens: "A,C,E,G,M,N",
      },
      {
        name: "Pastrami",
        description: "Cream Cheese, Rinderpastrami, Bergkäse, Salat, Kraut, Essiggurken, Senf",
        price: "12,90",
        allergens: "A,E,G,M,N",
      },
      {
        name: "Classic",
        description: "Cream Cheese, Essiggurken, Puten-Schinken, Bergkäse, Kraut, Mayonnaise, Salat",
        price: "12,90",
        allergens: "A,C,E,G,M,N",
      },
      {
        name: "Tuna",
        description: "Thunfisch, Kapern, Olivenöl, Rotkraut, Mayonnaise",
        price: "9,90",
        allergens: "A,C,D,E,G,M,N",
      },
      {
        name: "Salmon",
        description: "Cream Cheese, geräucherter Lachs, Kapern, Rotkraut, Senf, Eisberg",
        price: "12,90",
        allergens: "A,D,E,G,M,N",
      },
      {
        name: "Sloppy Joe",
        description: "Marinierter Rinderhackfleisch, Bohnen, Salat, Kraut, Sriracha-Mayo",
        price: "12,90",
        tags: ["scharf"],
        allergens: "A,C,E,G,L,M,N",
      },
      {
        name: "Apple-Stradel",
        description: "Hausgemachte Vanillecreme, Apfel-Zimt-Chutney",
        price: "9,90",
        allergens: "A,D,E,G,M,N",
      },
    ],
  },
  {
    title: "Extras",
    items: [
      { name: "2 Eier Omelette", price: "+7,90" },
      { name: "3 Eier Omelette", price: "+9,90" },
      { name: "4 Eier Omelette", price: "+11,90" },
    ],
  },
];
