import { Section } from "./ui/section";
import { motion } from "framer-motion";
import { Globe, Flame } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function USPSection() {
  const { t } = useI18n();

  const usps = [
    {
      icon: Flame,
      title: t("usp.freshDaily.title"),
      description: t("usp.freshDaily.desc")
    },
    {
      icon: Globe,
      title: t("usp.viennaBorn.title"),
      description: t("usp.viennaBorn.desc")
    }
  ];

  return (
    <Section bg="white" className="border-b border-border">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-center">
        {usps.map((usp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            className="group p-6 rounded-2xl hover:bg-background transition-colors duration-300"
          >
            <div className="w-16 h-16 mx-auto mb-6 bg-secondary/10 text-secondary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <usp.icon size={32} strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-logo font-bold mb-3 uppercase tracking-tight">{usp.title}</h3>
            <p className="text-muted-foreground leading-relaxed">
              {usp.description}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
