import { Section } from "./ui/section";
import { Button } from "./ui/button";
import { MapPin, Clock, Phone, ArrowUpRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import visitUsImg from "@assets/IMG_3572_1766674389993.PNG";

export function VisitUs() {
  const { t } = useI18n();

  return (
    <Section id="visit" bg="white" className="border-t border-border">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        <div className="space-y-8">
          <div>
            <span className="text-primary font-bold tracking-widest uppercase text-sm">{t("visit.label")}</span>
            <h2 className="text-4xl md:text-5xl font-logo font-bold mt-2 mb-6 uppercase tracking-tight">{t("visit.title")}</h2>
            <p className="text-lg text-muted-foreground">
              {t("visit.subtitle")}
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-background p-3 rounded-full border border-border">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-lg">{t("visit.location")}</h4>
                <p className="text-muted-foreground">Kirchengasse 17/2<br />1070 Wien, Austria</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-background p-3 rounded-full border border-border">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-lg">{t("visit.hours")}</h4>
                <p className="text-muted-foreground">
                  {t("visit.weekdays")}<br />
                  {t("visit.weekends")}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-background p-3 rounded-full border border-border">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-lg">{t("visit.contact")}</h4>
                <p className="text-muted-foreground">office@wienerbagel.com</p>
              </div>
            </div>
          </div>

          <Button size="lg" className="w-full sm:w-auto bg-foreground text-white hover:bg-foreground/90 rounded-full h-14 px-8 text-lg">
            {t("visit.directions")} <ArrowUpRight className="ml-2 w-5 h-5" />
          </Button>
        </div>

        <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src={visitUsImg} 
              alt="Storefront"
              className="absolute inset-0 w-full h-full object-cover"
            />
        </div>
      </div>
    </Section>
  );
}
