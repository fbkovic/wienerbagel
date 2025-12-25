import { useI18n } from "@/lib/i18n";
import logoImg from "@assets/wienerbagel1683_1766673703223.png";

export function Footer() {
  const { t } = useI18n();

  return (
    <footer className="bg-foreground text-white py-12 border-t border-white/10">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center mb-6">
          <img src={logoImg} alt="Wienerbagel Logo" className="h-36 w-auto invert" />
        </div>
        
        <div className="flex justify-center gap-8 mb-8 text-sm font-medium text-white/60">
          <a href="#" className="hover:text-white transition-colors">Instagram</a>
          <a href="#" className="hover:text-white transition-colors">Facebook</a>
          <a href="#" className="hover:text-white transition-colors">TikTok</a>
        </div>

        <p className="text-white/40 text-sm">
          © {new Date().getFullYear()} Wienerbagel. {t("footer.rights")} <br />
          {t("footer.established")}
        </p>
      </div>
    </footer>
  );
}
