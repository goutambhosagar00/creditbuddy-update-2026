import React from "react";
import { motion } from "framer-motion";

export default function Newsletter() {
  return (
    <section className="bg-[#F3E8FF] py-20 text-center">
      <div className="max-w-xl mx-auto px-6">
        {/* HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl font-bold text-[#6B21A8] mb-6"
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
            className="px-5 py-3 rounded-full bg-white border border-gray-200 
            w-full sm:w-auto flex-1 outline-none text-sm
            focus:ring-2 focus:ring-purple-300 transition"
          />

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 rounded-full bg-[#7C3AED] text-white font-medium 
            hover:opacity-90 transition"
          >
            Subscribe
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
