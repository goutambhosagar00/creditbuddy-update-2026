import { motion } from "framer-motion";

export default function AmbassadorHero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 py-20 md:py-24 overflow-hidden">
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[400px] md:w-[500px] h-[400px] md:h-[500px] bg-green-500/20 blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-blue-500/20 blur-[120px]"></div>
      </div>

      {/* CONTENT */}
      <div className="relative max-w-4xl mx-auto px-6 text-center">
        {/* HEADING */}
        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-6xl font-bold leading-tight text-gray-900"
        >
          Be the one who <br />
          <span className="bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">
            changes things
          </span>
          <br />
          on your campus.
        </motion.h1>

        {/* SUBTEXT */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-500 mt-4 text-sm md:text-base max-w-xl mx-auto"
        >
          Not just a user. The leader who brings fair finance to students around
          you.
        </motion.p>

        {/* ✅🔥 MAIN CTA (ISSUE #14 FIX) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-8"
        >
          <button className="px-8 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium shadow-lg hover:scale-[1.03] active:scale-[0.97] transition">
            Apply to Be a Campus Ambassador →
          </button>

          {/* MICRO COPY */}
          <p className="text-xs text-gray-400 mt-2">
            Takes 5 minutes. We review every application personally.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
