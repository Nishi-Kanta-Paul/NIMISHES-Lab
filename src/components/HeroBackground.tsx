import { motion } from "framer-motion";

/**
 * Abstract, domain-neutral hero background: a layered network graph over a
 * gradient mesh and grid. Pure SVG/CSS  no imagery, no domain connotation.
 */

const nodes = [
  { x: 12, y: 26, r: 3.2 },
  { x: 24, y: 62, r: 2.4 },
  { x: 33, y: 18, r: 2.2 },
  { x: 41, y: 44, r: 4.2 },
  { x: 52, y: 74, r: 2.6 },
  { x: 58, y: 28, r: 3 },
  { x: 67, y: 56, r: 2.3 },
  { x: 74, y: 20, r: 2.8 },
  { x: 79, y: 68, r: 3.6 },
  { x: 88, y: 40, r: 2.4 },
  { x: 94, y: 76, r: 2 },
  { x: 18, y: 86, r: 2.2 },
];

const edges: [number, number][] = [
  [0, 2], [0, 1], [1, 3], [2, 3], [3, 5], [3, 4], [4, 6], [5, 6],
  [5, 7], [6, 8], [7, 9], [8, 9], [8, 10], [1, 11], [4, 11], [9, 10],
];

const HeroBackground = () => (
  <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
    {/* Gradient mesh */}
    <div
      className="absolute inset-0"
      style={{
        backgroundImage:
          "radial-gradient(ellipse 70% 60% at 15% 25%, hsl(199 89% 48% / 0.18), transparent 60%)," +
          "radial-gradient(ellipse 55% 55% at 80% 70%, hsl(186 90% 55% / 0.14), transparent 60%)," +
          "radial-gradient(ellipse 60% 50% at 60% 5%, hsl(210 90% 55% / 0.10), transparent 65%)",
      }}
    />

    {/* Grid */}
    <div
      className="absolute inset-0 opacity-[0.14]"
      style={{
        backgroundImage:
          "linear-gradient(to right, hsl(199 89% 48% / 0.35) 1px, transparent 1px)," +
          "linear-gradient(to bottom, hsl(199 89% 48% / 0.35) 1px, transparent 1px)",
        backgroundSize: "56px 56px",
        maskImage: "radial-gradient(ellipse 80% 70% at 50% 40%, black, transparent 85%)",
        WebkitMaskImage: "radial-gradient(ellipse 80% 70% at 50% 40%, black, transparent 85%)",
      }}
    />

    {/* Network graph */}
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="hero-edge" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="hsl(199 89% 48%)" stopOpacity="0.55" />
          <stop offset="100%" stopColor="hsl(186 90% 60%)" stopOpacity="0.15" />
        </linearGradient>
        <radialGradient id="hero-node">
          <stop offset="0%" stopColor="hsl(186 95% 75%)" />
          <stop offset="100%" stopColor="hsl(199 89% 48%)" />
        </radialGradient>
      </defs>

      <g opacity="0.5">
        {edges.map(([a, b], i) => (
          <motion.line
            key={`${a}-${b}`}
            x1={nodes[a].x}
            y1={nodes[a].y}
            x2={nodes[b].x}
            y2={nodes[b].y}
            stroke="url(#hero-edge)"
            strokeWidth="0.18"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.4, delay: 0.3 + i * 0.06, ease: "easeOut" }}
          />
        ))}
      </g>

      {nodes.map((n, i) => (
        <motion.circle
          key={`${n.x}-${n.y}`}
          cx={n.x}
          cy={n.y}
          r={n.r * 0.28}
          fill="url(#hero-node)"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: [0.45, 0.9, 0.45], scale: 1 }}
          transition={{
            opacity: { duration: 4 + (i % 4), repeat: Infinity, ease: "easeInOut", delay: i * 0.2 },
            scale: { duration: 0.6, delay: 0.2 + i * 0.05 },
          }}
        />
      ))}
    </svg>

    {/* Vignette into page background */}
    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
  </div>
);

export default HeroBackground;
