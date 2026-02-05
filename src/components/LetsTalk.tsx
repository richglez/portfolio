import { motion, Variants } from "framer-motion";
import AnimatedWords from "./AnimatedWords";

function LetsTalk() {
  const fadeZoom: Variants = {
    hidden: {
      opacity: 0,
      scale: 0.95,
      y: 20,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="letstalk"
      className="min-h-screen scroll-mt-24 pt-20 text-white px-75"
    >
      <motion.h2
        variants={fadeZoom}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        className="text-5xl lg:text-6xl font-bold tracking-tight"
      >
        Let&apos;s Talk
        <motion.span className="ml-5 md:ml-8 bg-linear-to-r from-pink-700 via-purple-500 to-blue-500 bg-clip-text text-transparent">
          Contact to Me
        </motion.span>
      </motion.h2>

      <motion.p
        variants={fadeZoom}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.7 }}
      >
        <AnimatedWords text="Interested in collaborating or have a project in mind? Feel free to reach out!" />
      </motion.p>
    </section>
  );
}

export default LetsTalk;
