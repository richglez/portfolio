"use client";
import { motion } from "framer-motion";

export default function WordReveal({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  const words = text.split(" ");

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.06, // velocidad palabra por palabra
      },
    },
  };

  const word = {
    hidden: { opacity: 0, y: 15, filter: "blur(4px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.35 },
    },
  };

  return (
    <motion.span
      variants={container}
      initial="hidden"
      animate="show"
      className={`inline-block ${className}`}
    >
      {words.map((w, i) => (
        <motion.span key={i} variants={word} className="inline-block mr-2">
          {w}
        </motion.span>
      ))}
    </motion.span>
  );
}
