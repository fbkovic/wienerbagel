import { Section } from "./ui/section";
import { Button } from "./ui/button";
import { MapPin, Clock, Phone, ArrowUpRight, Star } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import visitUsImg from "@assets/IMG_3572_1766674389993.PNG";
import { motion } from "framer-motion";

export function VisitUs() {
  const { t } = useI18n();

  const reviews = [
    { text: t("reviews.1.text"), author: t("reviews.1.author") },
    { text: t("reviews.2.text"), author: t("reviews.2.author") },
    { text: t("reviews.3.text"), author: t("reviews.3.author") },
  ];

  return (
    <Section id="visit" bg="white" className="border-t border-border">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        <div className="space-y-8">
          <div>
            <span className="text-primary font-bold tracking-widest uppercase text-sm">{t("visit.label")}</span>
            <h2 className="text-4xl md:text-5xl font-logo font-bold mt-2 mb-6 uppercase tracking-tight">{t("visit.title")}</h2>
            <p className="text-lg text-muted-foreground">
              {t("visit.subtitle1")}
              <a href="https://www.pamartisan.com" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary/80 transition-colors">{t("visit.subtitleLink")}</a>
              {t("visit.subtitle2")}
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
                <p className="text-muted-foreground">
                  <a href="mailto:office@wienerbagel.com" className="hover:text-primary transition-colors">office@wienerbagel.com</a>
                </p>
              </div>
            </div>
          </div>

          <Button asChild size="lg" className="w-full sm:w-auto bg-foreground text-white hover:bg-foreground/90 rounded-full h-14 px-8 text-lg">
            <a href="https://www.google.com/maps/dir/?api=1&destination=Kirchengasse+17/2,+1070+Wien" target="_blank" rel="noopener noreferrer">
              {t("visit.directions")} <ArrowUpRight className="ml-2 w-5 h-5" />
            </a>
          </Button>
        </div>

        <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
          <img
            src={visitUsImg}
            alt="Wiener Bagel - Unser Standort in Wien, Kirchengasse"
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="mt-16 w-full h-[400px] rounded-2xl overflow-hidden shadow-lg border border-border">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2659.1348!2d16.3533633!3d48.2008324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476d079361a45719%3A0xe5f87b3b3a3a3a3a!2sKirchengasse%2017%2F2%2C%201070%20Wien%2C%20Austria!5e0!3m2!1sen!2sde!4v1700000000000"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Wiener Bagel Standort Karte"
        ></iframe>
      </div>

      {/* Google Reviews Section */}
      <div className="mt-20">
        <div className="text-center mb-10">
          <h3 className="text-2xl md:text-3xl font-logo font-bold uppercase tracking-tight">{t("reviews.title")}</h3>
          <p className="text-muted-foreground mt-2">{t("reviews.subtitle")}</p>
          <div className="flex justify-center gap-1 mt-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-primary text-primary" />
            ))}
            <span className="ml-2 font-bold">4.6 / 5</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-background p-6 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground italic mb-4">
                {review.text}
              </p>
              <p className="font-bold text-sm uppercase tracking-wider">
                - {review.author}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
