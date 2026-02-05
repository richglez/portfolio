"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import BlurBlob from "./BlurBlob";

export default function AnimatedBackground() {
  const { scrollYProgress } = useScroll();

  // colores dinámicos
  const bg = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [
      "radial-gradient(circle at 20% 20%, rgba(168,85,247,0.15), transparent 60%)",
      "radial-gradient(circle at 80% 30%, rgba(147,51,234,0.18), transparent 60%)",
      "radial-gradient(circle at 50% 80%, rgba(192,132,252,0.15), transparent 60%)",
    ],
  );

  


  return (
    <motion.div className="fixed inset-0 -z-10" style={{ backgroundImage: bg }}>
      <BlurBlob />
      <BlurBlob delay={2} />
    </motion.div>
  );
}
