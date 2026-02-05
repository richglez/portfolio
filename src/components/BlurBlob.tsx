import { motion } from "framer-motion";

export default function BlurBlob({ delay = 0 }) {
  return (
    <motion.div
      className="absolute w-96 h-96 bg-primary/20 rounded-full blur-[120px]"
      initial={{ x: -200, y: 0 }}
      animate={{
        x: [-200, 200, -150],
        y: [0, -200, 100],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    />
  );
}
