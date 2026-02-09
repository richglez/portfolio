import { motion } from "framer-motion";

export default function BlurBlob({ delay = 0, color = "primary" }) {
  return (
    <motion.div
      className={`
        absolute
        hidden lg:block
        w-md h-112
        bg-${color}/20
        rounded-full
        blur-[140px]
      `}
      initial={{ x: -150, y: 0 }}
      animate={{
        x: [-150, 200, -100],
        y: [0, -150, 100],
      }}
      transition={{
        duration: 25,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    />
  );
}
