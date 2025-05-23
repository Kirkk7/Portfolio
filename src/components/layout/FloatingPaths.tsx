// FloatingPaths.tsx
import { motion } from "framer-motion";

interface FloatingPathsProps {
  position?: number;
  offsetX?: number;
  offsetY?: number;
  scale?: number;
}

export function FloatingPaths({
  position = 1,
  offsetX = 100,
  offsetY = -50,
  scale = 1.2,
}: FloatingPathsProps) {
  const paths = Array.from({ length: 36 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position + offsetX} -${189 + i * 6 + offsetY}C-${
      380 - i * 5 * position + offsetX
    } -${189 + i * 6 + offsetY} -${312 - i * 5 * position + offsetX} ${
      216 - i * 6
    } ${152 - i * 5 * position + offsetX} ${343 - i * 6}C${
      616 - i * 5 * position + offsetX
    } ${470 - i * 6} ${684 - i * 5 * position + offsetX} ${
      875 - i * 6 * scale
    } ${684 - i * 5 * position + offsetX} ${875 - i * 6 * scale}`,
    color: `rgba(15,23,42,${0.1 + i * 0.03})`,
    width: 0.5 + i * 0.03,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      <svg
        className="w-full h-full text-slate-950 dark:text-white"
        viewBox="0 0 696 316"
        fill="none"
        preserveAspectRatio="xMinYMin slice"
      >
        <title>Background Paths</title>
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="currentColor"
            strokeWidth={path.width}
            strokeOpacity={0.1 + path.id * 0.03}
            initial={{
              pathLength: 0.3,
              opacity: 0.8, // Increased initial opacity
            }}
            animate={{
              pathLength: 1,
              opacity: [0.6, 0.9, 0.6], // Narrower opacity range
              pathOffset: [0, 0.5, 1], // Smoother path offset
            }}
            transition={{
              duration: 30 + Math.random() * 20, // Slower animation
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          />
        ))}
      </svg>
    </div>
  );
}
