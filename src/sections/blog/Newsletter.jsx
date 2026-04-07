import React from "react";
import { motion } from "framer-motion";

export default function Newsletter() {
  return (
    <section className="bg-blue-600 py-16 text-white text-center">
      <div className="max-w-xl mx-auto px-6">
        {/* HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xl md:text-2xl font-semibold mb-6"
        >
          Weekly money tips.
        </motion.h2>

        {/* INPUT + BUTTON */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="flex flex-col sm:flex-row gap-3 justify-center"
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded-full bg-white text-black w-full sm:w-auto flex-1 outline-none
            focus:ring-2 focus:ring-white/60 transition"
          />

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
            className="px-5 py-2 rounded-full bg-black text-white hover:opacity-90 transition"
          >
            Subscribe
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
