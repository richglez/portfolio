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
        className="mt-7"
      >
        <AnimatedWords text="Interested in collaborating or have a project in mind? Feel free to reach out!" />
      </motion.p>

      {/* Glass Card */}
      <motion.div
        variants={fadeZoom}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.4 }}
        className="group hover:shadow-[0_0_60px_rgba(168,85,247,0.25)]
          mt-16 max-w-xl
          rounded-2xl
          bg-white/5 backdrop-blur-xl
          border border-white/10 hover:border-purple-500/50 transition-all duration-300
          shadow-[0_0_40px_rgba(168,85,247,0.15)]
          p-8
        "
      >
        <form className="space-y-6">
          {/* Name */}
          <div className="flex flex-col gap-2">
            <label className="text-sm text-white/70 group-hover:text-purple-400 transition-colors">
              Name
            </label>
            <input
              type="text"
              placeholder="Your name"
              className="
                rounded-xl bg-black/30
                border border-white/10
                px-4 py-3
                text-white placeholder:text-white/40
                outline-none
                focus:border-[var(--color-primary)]
                focus:ring-1 focus:ring-[var(--color-primary)]
                transition
              "
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <label className="text-sm text-white/70 group-hover:text-purple-400 transition-colors">
              Email
            </label>
            <input
              type="email"
              placeholder="you@email.com"
              className="
                rounded-xl bg-black/30
                border border-white/10
                px-4 py-3
                text-white placeholder:text-white/40
                outline-none
                focus:border-[var(--color-primary)]
                focus:ring-1 focus:ring-[var(--color-primary)]
                transition
              "
            />
          </div>

          {/* Message */}
          <div className="flex flex-col gap-2">
            <label className="text-sm text-white/70 group-hover:text-purple-400 transition-colors">
              Message
            </label>
            <textarea
              rows={4}
              placeholder="Tell me about your project..."
              className="
                rounded-xl bg-black/30
                border border-white/10
                px-4 py-3
                text-white placeholder:text-white/40
                outline-none resize-none
                focus:border-[var(--color-primary)]
                focus:ring-1 focus:ring-[var(--color-primary)]
                transition
              "
            />
          </div>

          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="
              mt-4 w-full
              rounded-xl
              bg-[var(--color-primary)]
              py-3 font-semibold
              text-slate-800
              shadow-[0_0_30px_var(--color-primary)]
              transition cursor-pointer group-hover:text-white
            "
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
}

export default LetsTalk;
