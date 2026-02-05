import { motion } from "framer-motion";

export default function AnimatedWords({ text }: { text: string }) {
  const words = text.split(" ");

  return (
    <motion.p
      className="text-zinc-400 text-xl mb-8 flex flex-wrap gap-2"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.1 }}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                delay: i * 0.12,
                duration: 0.4,
                ease: "easeOut",
              },
            },
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.p>
  );
}
