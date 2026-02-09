"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import BlurBlob from "./BlurBlob";

export default function AnimatedBackground() {
  const { scrollYProgress } = useScroll();

  const isDesktop = useMediaQuery({ minWidth: 1024 });

  const bg = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    isDesktop
      ? [
          "radial-gradient(circle at 20% 20%, rgba(168,85,247,0.15), transparent 60%)",
          "radial-gradient(circle at 80% 30%, rgba(147,51,234,0.18), transparent 60%)",
          "radial-gradient(circle at 50% 80%, rgba(192,132,252,0.15), transparent 60%)",
        ]
      : [
          "radial-gradient(circle at 50% 20%, rgba(168,85,247,0.12), transparent 70%)",
          "radial-gradient(circle at 50% 40%, rgba(147,51,234,0.14), transparent 70%)",
          "radial-gradient(circle at 50% 60%, rgba(192,132,252,0.12), transparent 70%)",
        ],
  );

  return (
    <motion.div
      className="fixed inset-0 -z-10 overflow-hidden"
      style={{ backgroundImage: bg }}
    >
      {isDesktop && (
        <>
          <BlurBlob />
          <BlurBlob delay={2}/>
        </>
      )}
    </motion.div>
  );
}
