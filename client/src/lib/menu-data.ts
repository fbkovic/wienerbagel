// Single source of truth for the menu (Speisekarte).
// Rendered as crawlable + screen-reader text in MenuSection so search engines
// can read the dishes/prices that otherwise only live inside the menu images.
// Content mirrors the three menu boards (speisekarte-signature.webp,
// speisekarte-fruehstueck.webp, speisekarte-getraenke.webp).

export interface MenuItem {
  name: string;
  description?: string;
  /** Display price exactly as on the board, e.g. "12,90" or "+5" or "+0,50". */
  price: string;
  /** e.g. "vegan", "vegetarisch", "warm". */
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
    title: "Signature Bagel",
    items: [
      {
        name: "Veganoush",
        description: "Hummus, Melanzani, getrocknete Tomaten, Rotkraut, Kraut, Salat",
        price: "12,90",
        tags: ["vegan"],
        allergens: "A,E,M,N",
      },
      {
        name: "Leberkäs",
        description: "Hühner-Käseleberkäse, Senf, Kraut",
        price: "9,90",
        tags: ["warm"],
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
        name: "Steirer TropiChick",
        description: "Steirisches Chicken, Salat, Curry-Mango-Sauce",
        price: "12,90",
        tags: ["warm"],
        allergens: "A,C,E,G,L,M,N",
      },
      {
        name: "Breakfast",
        description: "Cream Cheese, Omelette mit 2 Eiern, Salat",
        price: "12,90",
        tags: ["vegetarisch", "warm"],
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
        description: "Cream Cheese, Puten-Schinken, Bergkäse, Kraut, Mayonnaise, Salat",
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
        description: "Cream Cheese, geräucherter Lachs, Kapern, Rotkraut, Senf, Salat",
        price: "12,90",
        allergens: "A,D,E,G,M,N",
      },
      {
        name: "Sloppy Joe",
        description: "Mariniertes Rinderhackfleisch, Bohnen, Salat, Kraut, Sriracha-Mayo",
        price: "12,90",
        tags: ["warm"],
        allergens: "A,C,E,G,L,M,N",
      },
    ],
  },
  {
    title: "Limited – X-Mas Special",
    note: "Nur in der Weihnachtszeit.",
    items: [
      {
        name: "X-Mas Sweet Duck",
        description: "Geräucherte Entenbrust, Rotkraut, Brie, Beerenchutney",
        price: "12,90",
        allergens: "A,E,F,G,M,N",
      },
      {
        name: "X-Mas Spicy Duck",
        description: "Geräucherte Entenbrust, Rotkraut, Jalapeños, Spicy Kimchi Mayo",
        price: "12,90",
        allergens: "A,E,F,G,M,N",
      },
    ],
  },
  {
    title: "Extras zum Bagel",
    items: [
      { name: "2 Eier Omelette", price: "7,90", allergens: "C,G" },
      { name: "3 Eier Omelette", price: "9,90", allergens: "C,G" },
      { name: "4 Eier Omelette", price: "11,90", allergens: "C,G" },
    ],
  },
  {
    title: "Simple Bagels",
    note: "Bagel mit Aufstrich – nach Wunsch mit Extras verfeinern.",
    items: [
      { name: "Hummus", price: "5,90", tags: ["vegan"], allergens: "A,N" },
      { name: "Guacamole", price: "5,90", tags: ["vegan"], allergens: "A,L" },
      { name: "Cream Cheese", price: "5,90", tags: ["vegetarisch"], allergens: "A,G" },
    ],
  },
  {
    title: "Simple Bagels – Extras",
    note: "Aufpreis pro Zutat.",
    items: [
      { name: "Lachs", price: "+5,00", allergens: "D" },
      { name: "Rinderpastrami", price: "+5,00", allergens: "M" },
      { name: "Rinderspeck", price: "+2,90", allergens: "L,M" },
      { name: "Käse oder Brie", price: "+4,00", allergens: "G" },
      { name: "Putenschinken", price: "+4,00", allergens: "G" },
      { name: "Melanzani", price: "+4,00", tags: ["vegan"], allergens: "L" },
      { name: "Sauce Hollandaise", price: "+2,00", allergens: "A,C,G" },
      { name: "Guacamole (Extra)", price: "+2,70", tags: ["vegan"], allergens: "L" },
      { name: "Cheddarsauce", price: "+2,00", allergens: "G" },
      { name: "Curry-Mango-Sauce", price: "+0,50", allergens: "C,G" },
      { name: "Sriracha-Mayo", price: "+0,50", tags: ["vegan"], allergens: "L,M" },
      { name: "Mayonnaise", price: "+0,50", allergens: "C" },
      { name: "Senf", price: "+0,50", allergens: "M" },
    ],
  },
  {
    title: "Frühstück – Breakfast",
    items: [
      {
        name: "Süßer Klimt",
        description: "Putenschinken, Bergkäse, Butter, hausgemachte Marmelade",
        price: "14,90",
        allergens: "A,G",
      },
      {
        name: "Omelette",
        description: "3 Eier, Sauce Hollandaise",
        price: "14,90",
        tags: ["vegetarisch", "warm"],
        allergens: "A,C,G",
      },
      {
        name: "Croissant Omelette",
        description: "3 Eier, Sauce Hollandaise",
        price: "14,90",
        tags: ["vegetarisch", "warm"],
        allergens: "A,C,G",
      },
      {
        name: "Vegasti",
        description: "Hummus, Melanzani, Guacamole, getrocknete Tomate",
        price: "14,90",
        tags: ["vegan"],
        allergens: "A,L,N",
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
        tags: ["warm"],
        allergens: "A,G,L,M,N",
      },
    ],
  },
  {
    title: "Getränke – Coffee",
    note: "Größen: S 236 ml, M 354 ml, L 450 ml. Pflanzenmilch (Hafer, Kokos) +0,50, Extra Espresso Shot +1,50.",
    items: [
      { name: "Espresso", price: "3,00" },
      { name: "Espresso Doppio (2 Shot)", price: "4,00" },
      { name: "Verlängert (Lungo)", price: "4,00" },
      { name: "Americano (2 Shot), M", price: "4,50" },
      { name: "Melange / Cappuccino", description: "S 4,20 · M 4,70 · L 5,20", price: "4,20" },
      { name: "Flat White (2 Shot)", price: "4,90" },
      { name: "Latte Macchiato (2 Shot), L", price: "5,20" },
      { name: "Espresso Macchiato", price: "3,90" },
      { name: "Espresso Doppio Macchiato (2 Shot)", price: "4,90" },
      { name: "Verlängert Braun (mit Milch)", price: "4,40" },
      { name: "Caffe Mocha (Valrhona, 2 Shot), L", price: "6,90" },
    ],
  },
  {
    title: "Getränke – Premium / Homemade",
    items: [
      { name: "Sri Lanka Coconut Latte (mit Kokosmilch), L", price: "6,90" },
      { name: "Chai Tea Latte, L", price: "5,90" },
      { name: "Madagaskar Vanille Latte, M", price: "5,90" },
      { name: "Matcha Latte, M", price: "5,90" },
      { name: "Strawberry Matcha Iced Latte, M", price: "6,90" },
      { name: "Mango Matcha Iced Latte, M", price: "6,90" },
      { name: "Hot Chocolate (Valrhona), M", price: "6,90" },
      { name: "Türk kahvesi (Turkish Coffee)", price: "5,90" },
      { name: "Pumpkin Spice Latte (saisonal), M", price: "6,90" },
    ],
  },
  {
    title: "Getränke – Tee, Softdrinks & mehr",
    items: [
      { name: "Tee (Grüntee, Früchtetee, Schwarztee, Kräutertee)", description: "Small 5,90 · Large 7,90", price: "5,90" },
      { name: "Mineralwasser still / prickelnd", description: "330 ml 3,50 · 750 ml 5,50", price: "3,50" },
      { name: "Rauch Ice Tea Zitrone / Pfirsich, 330 ml", price: "4,50" },
      { name: "Coca Cola, 330 ml", price: "4,50" },
      { name: "Coca Cola Zero, 330 ml", price: "4,50" },
      { name: "Frischer Orangensaft, 250 ml", price: "4,90" },
      { name: "Jugendgetränke (Soda / Wasser mit Himbeere oder Zitrone), 250 ml", price: "4,90" },
      { name: "Weißer Spritzer, 330 ml", price: "5,90" },
      { name: "Extra Aperol, 40 ml", price: "+2,00" },
      { name: "Bier (Tegernseer hell), 330 ml", price: "5,90" },
    ],
  },
];
