import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { USPSection } from "@/components/USPSection";
import { StoryTimeline } from "@/components/StoryTimeline";
import { MenuSection } from "@/components/MenuSection";
import { VisitUs } from "@/components/VisitUs";
import { Footer } from "@/components/Footer";
import { motion, useScroll, useSpring } from "framer-motion";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary selection:text-white">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-[100] origin-left"
        style={{ scaleX }}
      />

      <Navbar />
      
      <main>
        <Hero />
        <USPSection />
        <StoryTimeline />
        <MenuSection />
        <VisitUs />
      </main>

      <Footer />
    </div>
  );
}
