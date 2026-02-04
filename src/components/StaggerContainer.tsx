"use client";
import { motion } from "framer-motion";

export default function StaggerContainer({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={{
        hidden: {},
        show: {
          transition: {
            delayChildren: 0.4, // espera a que termine navbar
            staggerChildren: 0.18,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
