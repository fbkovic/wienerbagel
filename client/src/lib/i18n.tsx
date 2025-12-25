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
    "hero.subtitle": "Wo das Bagel 1683 geboren wurde – und endlich nach Hause zurückgekehrt ist.",
    "hero.viewMenu": "Speisekarte",
    "hero.ourStory": "Unsere Story",
    
    "usp.handRolled.title": "Handgerollt",
    "usp.handRolled.desc": "Jedes einzelne Bagel wird von Hand gerollt, in Kesselwasser mit Honig gekocht und auf Stein gebacken.",
    "usp.viennaBorn.title": "In Wien Geboren",
    "usp.viennaBorn.desc": "Die Legende besagt, das Bagel wurde hier 1683 erfunden. Wir bringen das Original-Rezept nach Hause.",
    "usp.freshDaily.title": "Täglich Frisch",
    "usp.freshDaily.desc": "Jeden Morgen frisch gebacken. Keine Konservierungsstoffe, nur Mehl, Wasser, Hefe, Salz und Malz.",
    
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
    "story.2025.location": "Wien, Österreich",
    "story.2025.title": "Die Heimkehr",
    "story.2025.desc": "Wienerbagel bringt das perfektionierte NYC-Style Bagel an seinen Geburtsort zurück. Der Kreis schließt sich.",
    
    "menu.label": "Frisch aus dem Ofen",
    "menu.title": "Unsere Speisekarte",
    "menu.classic": "Klassisch",
    "menu.signature": "Signature",
    "menu.sweet": "Süß",
    "menu.drinks": "Getränke",
    "menu.empty": "Aktuell keine Artikel in dieser Kategorie verfügbar.",
    
    "visit.label": "Besuchen Sie uns",
    "visit.title": "Wiens erstes NYC Bagel Shop",
    "visit.subtitle": "Mitten im Herzen des 1. Bezirks bringen wir das authentische New York Bagel-Erlebnis dorthin zurück, wo alles begann.",
    "visit.location": "Standort 1",
    "visit.location2": "Standort 2",
    "visit.location3": "Standort 3",
    "visit.comingSoon": "Coming Soon",
    "visit.hours": "Öffnungszeiten",
    "visit.contact": "Kontakt",
    "visit.weekdays": "Täglich: 07:50 - 17:00 Uhr",
    "visit.weekends": "(außer Feiertagen)",
    "visit.directions": "Wegbeschreibung",
    "visit.review": "\"Das beste Bagel, das ich außerhalb von Brooklyn gegessen habe. Endlich in Wien!\"",
    "visit.reviewer": "- Anna S., Local Guide",
    
    "footer.rights": "Alle Rechte vorbehalten.",
    "footer.established": "Gegr. 1683 in Wien. Neu-Gegr. 2025."
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
    
    "usp.handRolled.title": "Hand-Rolled",
    "usp.handRolled.desc": "Every single bagel is rolled by hand, boiled in kettle water with honey, and baked on stone.",
    "usp.viennaBorn.title": "Vienna Born",
    "usp.viennaBorn.desc": "Legend says the bagel was invented here in 1683. We're bringing the original recipe back home.",
    "usp.freshDaily.title": "Fresh Daily",
    "usp.freshDaily.desc": "Baked fresh every single morning. No preservatives, just flour, water, yeast, salt, and malt.",
    
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
    "story.2025.location": "Vienna, Austria",
    "story.2025.title": "The Homecoming",
    "story.2025.desc": "Wienerbagel brings the perfected NYC-style bagel back to its birthplace. The circle is complete.",
    
    "menu.label": "Fresh from the Oven",
    "menu.title": "Our Menu",
    "menu.classic": "Classic",
    "menu.signature": "Signature",
    "menu.sweet": "Sweet",
    "menu.drinks": "Drinks",
    "menu.empty": "No items currently available in this category.",
    
    "visit.label": "Visit Us",
    "visit.title": "Vienna's First NYC Bagel Shop",
    "visit.subtitle": "Located in the heart of the 1st District, we're bringing the authentic New York bagel experience back to where it all began.",
    "visit.location": "Location 1",
    "visit.location2": "Location 2",
    "visit.location3": "Location 3",
    "visit.comingSoon": "Coming Soon",
    "visit.hours": "Opening Hours",
    "visit.contact": "Contact",
    "visit.weekdays": "Daily: 07:50 - 17:00",
    "visit.weekends": "(except public holidays)",
    "visit.directions": "Get Directions",
    "visit.review": "\"Best Bagel I've had outside of Brooklyn. Finally in Vienna!\"",
    "visit.reviewer": "- Anna S., Local Guide",
    
    "footer.rights": "All rights reserved.",
    "footer.established": "Est. 1683 in Wien. Re-Est. 2025."
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
