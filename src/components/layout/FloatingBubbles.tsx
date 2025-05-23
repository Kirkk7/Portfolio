import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface BubbleProps {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
}

function Bubble({ x, y, size, color }: BubbleProps) {
  return (
    <motion.circle
      cx={x}
      cy={y}
      r={size}
      fill={color}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0.2, 0.3, 0.7],
        scale: [1, 1.2, 1],
        x: x + Math.random() * 100 - 50,
        y: y - Math.random() * 200,
      }}
      transition={{
        duration: 10 + Math.random() * 15,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      }}
    />
  );
}

export default function FloatingBubbles({
  count = 30,
  colors = ["rgba(64, 248, 255, 0.7)", "rgba(204, 173, 2, 0.7)"],
}: {
  count?: number;
  colors?: string[];
}) {
  const [bubbles, setBubbles] = useState<BubbleProps[]>([]);
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setDimensions({
          width: window.innerWidth,
          height: window.innerHeight,
        });

        const newBubbles = Array.from({ length: count }, (_, i) => ({
          id: i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight * 1.5,
          size: Math.random() * 15 + 5,
          color: colors[Math.floor(Math.random() * colors.length)],
        }));
        setBubbles(newBubbles);
      };

      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, [count]);

  return (
    <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
      <svg
        className="w-full h-full"
        viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
        preserveAspectRatio="xMidYMid slice"
      >
        {bubbles.map((bubble) => (
          <Bubble key={bubble.id} {...bubble} />
        ))}
      </svg>
    </div>
  );
}
