import { motion, Variants } from "framer-motion";
import AnimatedWords from "./AnimatedWords";

function LetsTalk() {
  const fadeZoom: Variants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.9, ease: "easeOut" },
    },
  };

  return (
    <section
      id="letstalk"
      className="min-h-screen scroll-mt-24 py-5 px-75 text-white"
    >
        {/* container type grid col 2 */}
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* LEFT COLUMN */}
          <div>
            {/* Title */}
            <motion.h2
              variants={fadeZoom}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              className="text-[54px] font-bold tracking-tight mt-15"
            >
              {" "}
              Let&apos;s Talk{" "}
              <motion.span className="ml-5 md:ml-8 bg-linear-to-r from-pink-700 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                {" "}
                Contact to Me{" "}
              </motion.span>{" "}
            </motion.h2>

            {/* Subtitle */}
            <motion.div
              variants={fadeZoom}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.5 }}
              className="mt-6 text-white/70 text-lg"
            >
              <AnimatedWords text="Interested in collaborating or have a project in mind? Feel free to reach out!" />
            </motion.div>

            {/* Glass Form */}
            <motion.div
              variants={fadeZoom}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.4 }}
              className="
                mt-12 w-150 max-h-120
                rounded-2xl
                bg-white/5 backdrop-blur-xl
                border border-white/10
                p-8
                shadow-[0_0_40px_rgba(168,85,247,0.15)]
                hover:border-purple-500/50
                transition
              "
            >
              <form className="space-y-6">
                {/* Name */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm text-white/70">Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="rounded-xl bg-black/30 border border-white/10 px-4 py-3 text-white placeholder:text-white/40 outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm text-white/70">Email</label>
                  <input
                    type="email"
                    placeholder="you@email.com"
                    className="rounded-xl bg-black/30 border border-white/10 px-4 py-3 text-white placeholder:text-white/40 outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition"
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2 max-h-30">
                  <label className="text-sm text-white/70">Message</label>
                  <textarea
                    rows={4}
                    placeholder="Tell me about your project..."
                    className="rounded-xl bg-black/30 border border-white/10 px-4 py-3 text-white placeholder:text-white/40 outline-none resize-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition"
                  />
                </div>

                {/* Button */}
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full rounded-xl bg-purple-500 py-3 font-semibold text-black shadow-[0_0_30px_rgba(168,85,247,0.8)]"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="relative flex justify-end mt-16">
            <motion.img
              variants={fadeZoom}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.3 }}
              src="/Gemini_Generated_Image_vhxbwxvhxbwxvhxb.png"
              className="aspect-square w-130 h-130 relative z-10 rounded-3xl object-cover shadow-2xl border border-white/10"
            />
            {/* glow a la imagen sobrepuesta */}
            <div className="absolute -inset-6 bg-purple-600/20 blur-3xl rounded-full z-21" />
          </div>
        </div>

    </section>
  );
}

export default LetsTalk;
