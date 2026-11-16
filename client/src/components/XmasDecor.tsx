import { cn } from "@/lib/utils";

/* Deterministic pseudo-random so the flakes look the same on every render. */
function rand(seed: number) {
  const x = Math.sin(seed * 9973) * 10000;
  return x - Math.floor(x);
}

const FLAKES = Array.from({ length: 40 }, (_, i) => ({
  left: rand(i + 1) * 100,
  size: 2 + rand(i + 51) * 5,
  duration: 9 + rand(i + 101) * 12,
  delay: -rand(i + 151) * 20,
  opacity: 0.35 + rand(i + 201) * 0.55,
  drift: (rand(i + 251) - 0.5) * 80,
}));

/** Soft falling snow. Fills its nearest positioned ancestor, ignores clicks. */
export function Snowfall({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
    >
      {FLAKES.map((f, i) => (
        <span
          key={i}
          className="xmas-flake"
          style={{
            left: `${f.left}%`,
            width: f.size,
            height: f.size,
            opacity: f.opacity,
            animationDuration: `${f.duration}s`,
            animationDelay: `${f.delay}s`,
            ["--xmas-drift" as string]: `${f.drift}px`,
          }}
        />
      ))}
    </div>
  );
}

const BULB_COLORS = ["#E23B4E", "#F2C94C", "#3FA36B", "#FFF4D6"];

/** A string of fairy lights hanging along the top edge of its parent. */
export function FairyLights({ className, count = 28 }: { className?: string; count?: number }) {
  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute left-0 right-0 top-0 h-10 overflow-hidden", className)}
    >
      <div className="absolute left-0 right-0 top-0 h-px bg-white/25" />
      <div className="flex justify-between px-3">
        {Array.from({ length: count }, (_, i) => {
          const color = BULB_COLORS[i % BULB_COLORS.length];
          return (
            <span
              key={i}
              className={cn("xmas-bulb", i % 2 === 1 && "hidden sm:block")}
              style={{
                backgroundColor: color,
                color,
                marginTop: 4 + (i % 3) * 5,
                animationDelay: `${(i % 5) * 0.45}s`,
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
