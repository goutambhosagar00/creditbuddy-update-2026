import React from "react";
import { motion } from "framer-motion";

export default function ContactHero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 py-28 text-center overflow-hidden">
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-blue-400/20 blur-[120px]"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/20 blur-[120px]"></div>
      </div>

      {/* CONTENT */}
      <div className="relative max-w-4xl mx-auto px-6">
        {/* HEADING */}
        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-6xl font-bold leading-tight text-black"
        >
          Let’s{" "}
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            talk.
          </span>
        </motion.h1>

        {/* SUBTEXT */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-600 mt-5 text-sm md:text-base max-w-xl mx-auto"
        >
          Students. Partners. Investors. Journalists. We usually reply within{" "}
          <span className="font-medium text-black">24 hours.</span>
        </motion.p>

        {/* SMALL TRUST LINE */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
          className="text-xs text-gray-400 mt-4"
        >
          Or faster — if it’s urgent ⚡
        </motion.p>
      </div>
    </section>
  );
}
