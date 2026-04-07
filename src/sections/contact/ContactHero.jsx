import React from "react";
import { motion } from "framer-motion";

export default function ContactHero() {
  return (
    <section className="bg-gray-50 py-24 text-center">
      <div className="max-w-4xl mx-auto px-6">
        {/* HEADING */}
        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-5xl font-bold"
        >
          Let’s talk.
        </motion.h1>

        {/* SUBTEXT */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-500 mt-4 text-sm md:text-base"
        >
          Students. Partners. Investors. Journalists. We reply within 24 hours.
        </motion.p>
      </div>
    </section>
  );
}
