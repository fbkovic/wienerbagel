import { useI18n, type Language } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { Globe } from "lucide-react";

export function LanguageSwitcher({ className }: { className?: string }) {
  const { language, setLanguage } = useI18n();

  return (
    <div className={cn("flex items-center gap-1", className)}>
      <Globe className="w-4 h-4 text-muted-foreground mr-1" />
      <button
        onClick={() => setLanguage("de")}
        className={cn(
          "px-2 py-1 rounded-md text-sm font-semibold transition-all",
          language === "de" 
            ? "bg-primary text-primary-foreground" 
            : "text-muted-foreground hover:text-foreground"
        )}
        aria-label="Deutsch"
        data-testid="button-lang-de"
      >
        DE
      </button>
      <span className="text-muted-foreground">/</span>
      <button
        onClick={() => setLanguage("en")}
        className={cn(
          "px-2 py-1 rounded-md text-sm font-semibold transition-all",
          language === "en" 
            ? "bg-primary text-primary-foreground" 
            : "text-muted-foreground hover:text-foreground"
        )}
        aria-label="English"
        data-testid="button-lang-en"
      >
        EN
      </button>
    </div>
  );
}
