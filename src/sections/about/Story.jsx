import React from "react";
import { motion } from "framer-motion";

export default function Story() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-6">
        {/* HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-2xl md:text-4xl font-bold mb-6"
        >
          Why we built CreditBuddy.
        </motion.h2>

        {/* PARAGRAPHS */}
        <div className="space-y-4 text-sm md:text-base text-gray-600 leading-relaxed">
          {[
            "Late nights. Empty wallet. The stress of asking for ₹200 you know will worry your parents.",
            "India has 40 million college students — driven, capable, building the country’s future. But financial systems treat them like liabilities.",
            "Banks won’t lend without a salary slip. The apps that will charge 70%+ and send harassment messages.",
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

          {/* FINAL LINE (STRONG EMPHASIS) */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="font-medium text-black"
          >
            We knew this personally. So we built the platform we wish existed.
          </motion.p>
        </div>

        {/* QUOTE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="mt-10 border-l-4 border-blue-500 pl-6 bg-white p-6 rounded-xl shadow-sm"
        >
          <p className="italic text-gray-700">
            “Students don’t need to be saved. They need to be respected — given
            fair credit, real earning opportunities, and knowledge. They’ll take
            it from there.”
          </p>

          <p className="text-xs text-gray-400 mt-3">— Dev, Founder & CEO</p>
        </motion.div>
      </div>
    </section>
  );
}
