import { Section } from "./ui/section";
import { motion } from "framer-motion";
import originImg from "@assets/Gemini_Generated_Image_665h6q665h6q665h_1766673066758.png";
import journeyImg from "@assets/9e3d95a3-30a9-413b-afbc-6d9092ddac85_1766673066758.png";
import legendImg from "@assets/wienerbagel_1683_1766673066759.png";

const timelineEvents = [
  {
    year: "1683",
    location: "Vienna, Austria",
    title: "The Invention",
    description: "Legend tells of a Jewish baker in Vienna creating a stirrup-shaped bread (Beugel) to thank the King of Poland for saving the city from the Ottomans.",
    image: originImg
  },
  {
    year: "1880",
    location: "New York City",
    title: "The Migration",
    description: "Eastern European immigrants bring their beloved bread to the Lower East Side of Manhattan. The 'Bagel' is born in America.",
    image: journeyImg
  },
  {
    year: "1950",
    location: "USA",
    title: "The Golden Age",
    description: "Bagels become an American staple. Lox and Schmear becomes the ultimate brunch icon worldwide.",
    image: legendImg
  },
  {
    year: "2025",
    location: "Vienna, Austria",
    title: "The Homecoming",
    description: "Wienerbagel brings the perfected NYC-style bagel back to its birthplace. The circle is complete.",
    image: journeyImg
  }
];

export function StoryTimeline() {
  return (
    <Section id="story" bg="black" className="relative">
      <div className="text-center mb-16">
        <span className="text-secondary font-bold tracking-widest uppercase text-sm">Our History</span>
        <h2 className="text-4xl md:text-5xl font-black mt-2 text-white">The Journey Home</h2>
      </div>

      <div className="relative border-l-2 border-white/10 ml-4 md:ml-1/2 space-y-16">
        {timelineEvents.map((event, index) => (
          <motion.div
            key={event.year}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className={`relative pl-8 md:pl-0 flex flex-col md:flex-row gap-8 items-center ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Timeline Dot */}
            <div className="absolute left-[-5px] md:left-1/2 md:-ml-[5px] w-[12px] h-[12px] rounded-full bg-secondary border-4 border-black z-10" />

            {/* Content Side */}
            <div className="md:w-1/2 md:px-12">
              <span className="text-6xl font-black text-white/10 absolute -top-8 left-4 md:left-auto md:right-12 select-none z-0">
                {event.year}
              </span>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-secondary font-bold text-xl">{event.year}</span>
                  <span className="text-white/40 uppercase tracking-widest text-xs">{event.location}</span>
                </div>
                <h3 className="text-2xl font-logo font-bold text-white mb-3 uppercase tracking-tight">{event.title}</h3>
                <p className="text-white/60 leading-relaxed max-w-md">
                  {event.description}
                </p>
              </div>
            </div>

            {/* Image Side */}
            <div className="md:w-1/2 px-4">
              {event.image && (
                <div className="rounded-lg overflow-hidden border border-white/10 shadow-2xl">
                  <img src={event.image} alt={event.title} className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-500" />
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
