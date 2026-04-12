import React from "react";
import { motion } from "framer-motion";

export default function Story() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-4xl mx-auto px-6">
        {/* HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-5xl font-bold mb-8 leading-tight"
        >
          Why we built CreditBuddy.
        </motion.h2>

        {/* STORY */}
        <div className="space-y-5 text-gray-600 leading-relaxed text-sm md:text-base">
          {[
            "Late nights. Empty wallet. The hesitation before asking for ₹200 — knowing it’ll worry your parents.",
            "India has Very high college students — ambitious, capable, building the country’s future. Yet financially, they’re treated like risks, not potential.",
            "Banks won’t lend without a salary slip. And the apps that do? Hidden charges, Very high interest, and harassment tactics.",
          ].map((text, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + i * 0.1 }}
            >
              {text}
            </motion.p>
          ))}

          {/* FINAL LINE */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="font-semibold text-black text-base md:text-lg pt-2"
          >
            We’ve lived this. So we built the platform we wish we had.
          </motion.p>
        </div>

        {/* QUOTE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="mt-12 border border-gray-200 bg-white p-6 rounded-2xl shadow-sm"
        >
          <p className="italic text-gray-700 text-sm md:text-base leading-relaxed">
            “Students don’t need to be saved. They need access — to fair credit,
            real earning opportunities, and the knowledge to make smart
            decisions.”
          </p>

          <p className="text-xs text-gray-400 mt-4">— Dev, Founder & CEO</p>
        </motion.div>
      </div>
    </section>
  );
}
