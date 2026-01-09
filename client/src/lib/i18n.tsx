import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

export type Language = "de" | "en";

type TranslationKey = keyof typeof translations.de;

interface I18nContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKey) => string;
}

const translations = {
  de: {
    "nav.home": "Startseite",
    "nav.story": "Unsere Story",
    "nav.menu": "Speisekarte",
    "nav.visit": "Besuchen",
    "nav.order": "Jetzt Bestellen",

    "hero.tagline": "Von Wien nach NYC & zurück",
    "hero.subtitle": "Wo der Bagel 1683 geboren wurde – und endlich nach Hause zurückgekehrt ist.",
    "hero.viewMenu": "Speisekarte",
    "hero.ourStory": "Unsere Story",

    "usp.viennaBorn.title": "In Wien Geboren",
    "usp.viennaBorn.desc": "Die Legende besagt, der Bagel wurde hier 1683 erfunden. Wir bringen das Original-Rezept nach Hause.",
    "usp.freshDaily.title": "Täglich Frisch",
    "usp.freshDaily.desc": "Jeden Morgen frisch gebacken. Keine Konservierungsstoffe, nur Mehl, Wasser, Hefe und Salz.",

    "story.label": "Unsere Geschichte",
    "story.title": "Die Reise nach Hause",
    "story.1683.location": "Wien, Österreich",
    "story.1683.title": "Die Erfindung",
    "story.1683.desc": "Die Legende erzählt von einem jüdischen Bäcker in Wien, der ein steigbügelförmiges Brot (Beugel) kreierte, um den König von Polen zu ehren, der die Stadt vor den Osmanen rettete.",
    "story.1880.location": "New York City",
    "story.1880.title": "Die Migration",
    "story.1880.desc": "Osteuropäische Einwanderer bringen ihr geliebtes Brot in die Lower East Side von Manhattan. Das 'Bagel' wird in Amerika geboren.",
    "story.1950.location": "USA",
    "story.1950.title": "Das Goldene Zeitalter",
    "story.1950.desc": "Bagels werden zum amerikanischen Grundnahrungsmittel. Lox und Schmear wird zur ultimativen Brunch-Ikone weltweit.",
    "story.2026.location": "Wien, Österreich",
    "story.2026.title": "Die Heimkehr",
    "story.2026.desc": "Wienerbagel bringt das perfektionierte NYC-Style Bagel an seinen Geburtsort zurück. Der Kreis schließt sich.",

    "menu.label": "Frisch aus dem Ofen",
    "menu.title": "Speisekarte",
    "menu.classic": "Bagel Klassiker",
    "menu.signature": "Signature",
    "menu.sweet": "Bagel Sweet",
    "menu.drinks": "Getränke",
    "menu.empty": "Aktuell keine Artikel in dieser Kategorie verfügbar.",

    "menu.lachs.name": "Lachs Bagel",
    "menu.lachs.desc": "Creamcheese, Gurke, Senf oder Siracha Mayonnaise, Kapern",
    "menu.pastrami.name": "Pastrami Bagel",
    "menu.pastrami.desc": "Creamcheese, Pastrami, Bergkäse, Senf oder Siracha Mayonnaise",
    "menu.french.name": "French Bagel",
    "menu.french.desc": "Creamcheese, Brie, Bergkäse, Fruchtchutney",
    "menu.hummus.name": "Hummus Bagel",
    "menu.hummus.desc": "Hummus, Melanzani, Gurke. Vegane Option verfügbar",
    "menu.leberkaese.name": "Leberkäse Bagel",
    "menu.leberkaese.desc": "Leberkäse, Senf, Essiggurken",
    "menu.chicken.name": "Chicken Mayo Bagel",
    "menu.chicken.desc": "Chicken, Mayonnaise, Gurke",
    "menu.sloppy.name": "Sloppy Joe Bagel",
    "menu.sloppy.desc": "Rindfleisch, Sauce, Parmesan",
    "menu.apfel.name": "Apfelstrudel Bagel",
    "menu.apfel.desc": "Warme Apfel-Zimt Füllung, Vanillesauce",
    "menu.nutella.name": "Nutella Bagel",
    "menu.nutella.desc": "Nutella, Banane oder Erdbeeren",

    "visit.label": "Der originale Wienerbagel",
    "visit.title": "Unser Standort",
    "visit.subtitle1": "Unsere Reise begann beim ",
    "visit.subtitleLink": "www.pamartisan.com",
    "visit.subtitle2": ", wo Wienerbagel seine ersten Gäste begeisterte. Jetzt gehen wir den nächsten Schritt: Bald eröffnen wir unsere eigene Wienerbagel-Location im Herzen des 1. Bezirks – und bringen den Bagel zurück an seinen Ursprungsort: Wien.",
    "visit.location": "Standort",
    "visit.comingSoon": "Coming Soon",
    "visit.hours": "Öffnungszeiten",
    "visit.contact": "Kontakt",
    "visit.weekdays": "Täglich: 07:50 - 17:00 Uhr",
    "visit.weekends": "(außer Feiertagen)",
    "visit.directions": "Wegbeschreibung",
    "visit.review": "\"Der beste Bagel, den ich außerhalb von Brooklyn gegessen habe. Endlich in Wien!\"",
    "visit.reviewer": "- Anna S., Local Guide",

    "reviews.title": "Was unsere Gäste über PAM sagen",
    "reviews.subtitle": "Besuche uns bei PAM \"Bagel-Breakfast-Micro Roastery\"",
    "reviews.1.text": "„Beste Bagels in Wien! Besonders der Lachs-Bagel ist ein Traum. Man merkt die Qualität der Zutaten.“",
    "reviews.1.author": "Markus W.",
    "reviews.2.text": "„Super gemütliche Atmosphäre und die Bagels sind einfach authentisch New York Style. Der Kaffee ist auch fantastisch.“",
    "reviews.2.author": "Julia H.",
    "reviews.3.text": "„Sehr freundliches Personal und unglaublich leckere Croissants und Bagels. Ein absolutes Muss für Frühstücksfans!“",
    "reviews.3.author": "Thomas B.",

    "footer.rights": "Alle Rechte vorbehalten.",
    "footer.established": "Gegr. 1683 in Wien. Neu-Gegr. 2026."
  },
  en: {
    "nav.home": "Home",
    "nav.story": "Our Story",
    "nav.menu": "Menu",
    "nav.visit": "Visit Us",
    "nav.order": "Order Now",

    "hero.tagline": "From Vienna to NYC & Back",
    "hero.subtitle": "Where the bagel was born in 1683 – and finally returned home.",
    "hero.viewMenu": "View Menu",
    "hero.ourStory": "Our Story",

    "usp.viennaBorn.title": "Vienna Born",
    "usp.viennaBorn.desc": "Legend says the bagel was invented here in 1683. We're bringing the original recipe back home.",
    "usp.freshDaily.title": "Fresh Daily",
    "usp.freshDaily.desc": "Baked fresh every single morning. No preservatives, just flour, water, yeast and salt.",

    "story.label": "Our History",
    "story.title": "The Journey Home",
    "story.1683.location": "Vienna, Austria",
    "story.1683.title": "The Invention",
    "story.1683.desc": "Legend tells of a Jewish baker in Vienna creating a stirrup-shaped bread (Beugel) to thank the King of Poland for saving the city from the Ottomans.",
    "story.1880.location": "New York City",
    "story.1880.title": "The Migration",
    "story.1880.desc": "Eastern European immigrants bring their beloved bread to the Lower East Side of Manhattan. The 'Bagel' is born in America.",
    "story.1950.location": "USA",
    "story.1950.title": "The Golden Age",
    "story.1950.desc": "Bagels become an American staple. Lox and Schmear becomes the ultimate brunch icon worldwide.",
    "story.2026.location": "Vienna, Austria",
    "story.2026.title": "The Homecoming",
    "story.2026.desc": "Wienerbagel brings the perfected NYC-style bagel back to its birthplace. The circle is complete.",

    "menu.label": "Fresh from the Oven",
    "menu.title": "Menu",
    "menu.classic": "Bagel Classics",
    "menu.signature": "Signature",
    "menu.sweet": "Bagel Sweet",
    "menu.drinks": "Drinks",
    "menu.empty": "No items currently available in this category.",

    "menu.lachs.name": "Salmon Bagel",
    "menu.lachs.desc": "Cream cheese, cucumber, mustard or sriracha mayonnaise, capers",
    "menu.pastrami.name": "Pastrami Bagel",
    "menu.pastrami.desc": "Cream cheese, pastrami, mountain cheese, mustard or sriracha mayonnaise",
    "menu.french.name": "French Bagel",
    "menu.french.desc": "Cream cheese, brie, mountain cheese, fruit chutney",
    "menu.hummus.name": "Hummus Bagel",
    "menu.hummus.desc": "Hummus, eggplant, cucumber. Vegan option available",
    "menu.leberkaese.name": "Leberkäse Bagel",
    "menu.leberkaese.desc": "Leberkäse (Viennese meatloaf), mustard, pickles",
    "menu.chicken.name": "Chicken Mayo Bagel",
    "menu.chicken.desc": "Chicken, mayonnaise, cucumber",
    "menu.sloppy.name": "Sloppy Joe Bagel",
    "menu.sloppy.desc": "Beef, sauce, parmesan",
    "menu.apfel.name": "Apple Strudel Bagel",
    "menu.apfel.desc": "Warm apple-cinnamon filling, vanilla sauce",
    "menu.nutella.name": "Nutella Bagel",
    "menu.nutella.desc": "Nutella, banana or strawberries",

    "visit.label": "The Original Wienerbagel",
    "visit.title": "Our Location",
    "visit.subtitle1": "Our journey began at ",
    "visit.subtitleLink": "www.pamartisan.com",
    "visit.subtitle2": ", where Wienerbagel delighted its first guests. Now we're taking the next step: Soon we'll open our own Wienerbagel location in the heart of the 1st District – bringing the bagel back to its origin: Vienna.",
    "visit.location": "Location",
    "visit.comingSoon": "Coming Soon",
    "visit.hours": "Opening Hours",
    "visit.contact": "Contact",
    "visit.weekdays": "Daily: 07:50 - 17:00",
    "visit.weekends": "(except public holidays)",
    "visit.directions": "Get Directions",
    "visit.review": "\"Best Bagel I've had outside of Brooklyn. Finally in Vienna!\"",
    "visit.reviewer": "- Anna S., Local Guide",

    "reviews.title": "What our guests say about PAM",
    "reviews.subtitle": "Visit us at PAM \"Bagel-Breakfast-Micro Roastery\"",
    "reviews.1.text": "\"Best bagels in Vienna! Especially the salmon bagel is a dream. You can really taste the quality of the ingredients.\"",
    "reviews.1.author": "Markus W.",
    "reviews.2.text": "\"Super cozy atmosphere and the bagels are simply authentic New York style. The coffee is also fantastic.\"",
    "reviews.2.author": "Julia H.",
    "reviews.3.text": "\"Very friendly staff and incredibly delicious croissants and bagels. An absolute must for breakfast fans!\"",
    "reviews.3.author": "Thomas B.",

    "footer.rights": "All rights reserved.",
    "footer.established": "Est. 1683 in Wien. Re-Est. 2026."
  }
} as const;

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("wienerbagel-lang");
      if (saved === "de" || saved === "en") return saved;
    }
    return "de";
  });

  useEffect(() => {
    localStorage.setItem("wienerbagel-lang", language);
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (key: TranslationKey): string => {
    return translations[language][key] || key;
  };

  return (
    <I18nContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return context;
}
