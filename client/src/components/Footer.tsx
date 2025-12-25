export function Footer() {
  return (
    <footer className="bg-foreground text-white py-12 border-t border-white/10">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-display font-black text-3xl tracking-tight mb-4">
          WIENER<span className="text-primary">BAGEL</span>
        </h2>
        
        <div className="flex justify-center gap-8 mb-8 text-sm font-medium text-white/60">
          <a href="#" className="hover:text-white transition-colors">Instagram</a>
          <a href="#" className="hover:text-white transition-colors">Facebook</a>
          <a href="#" className="hover:text-white transition-colors">TikTok</a>
        </div>

        <p className="text-white/40 text-sm">
          © {new Date().getFullYear()} Wienerbagel GmbH. All rights reserved. <br />
          Est. 1683 in Wien. Re-Est. 2025.
        </p>
      </div>
    </footer>
  );
}
