import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "Our Story", href: "#story" },
    { name: "Menu", href: "#menu" },
    { name: "Visit Us", href: "#visit" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        isScrolled 
          ? "bg-background/95 backdrop-blur-md shadow-sm border-border/50 py-2" 
          : "bg-transparent py-4"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="group flex flex-col items-start z-50">
            <span className="font-display font-black text-2xl tracking-tighter text-foreground leading-none group-hover:text-primary transition-colors">
              WIENER<span className="text-primary">BAGEL</span>
            </span>
            <span className="text-[0.65rem] font-medium tracking-[0.2em] uppercase text-muted-foreground group-hover:text-foreground transition-colors">
              Est. 1683 Vienna
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-foreground/80 hover:text-primary transition-colors uppercase tracking-wide"
              >
                {link.name}
              </a>
            ))}
            <Button className="rounded-full bg-primary hover:bg-primary/90 text-white font-bold px-6">
              Order Now
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-foreground z-50"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
          >
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-background z-40 flex flex-col items-center justify-center space-y-8 transition-transform duration-300 md:hidden",
          isMobileOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setIsMobileOpen(false)}
            className="text-2xl font-display font-bold text-foreground hover:text-primary transition-colors"
          >
            {link.name}
          </a>
        ))}
        <Button size="lg" className="rounded-full bg-primary text-white mt-8">
          Order Online
        </Button>
      </div>
    </nav>
  );
}
