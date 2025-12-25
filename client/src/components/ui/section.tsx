import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionProps {
  id?: string;
  className?: string;
  children: ReactNode;
  bg?: "white" | "creme" | "black";
}

export function Section({ id, className, children, bg = "creme" }: SectionProps) {
  const bgColors = {
    white: "bg-white",
    creme: "bg-background",
    black: "bg-foreground text-white",
  };

  return (
    <section 
      id={id} 
      className={cn(
        "py-16 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden",
        bgColors[bg],
        className
      )}
    >
      <div className="max-w-7xl mx-auto w-full">
        {children}
      </div>
    </section>
  );
}
