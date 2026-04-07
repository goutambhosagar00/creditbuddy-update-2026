import React from "react";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="relative py-20 text-white overflow-hidden">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute top-0 right-0 w-[300px] h-[400px] bg-purple-600/30 blur-[140px]" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[400px] bg-blue-500/20 blur-[140px]" />
      </div>

      <div className="relative max-w-2xl mx-auto px-6 text-center">
        {/* HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-5xl font-semibold tracking-tight"
        >
          1,000+ students are already in. <br />
          <span className="text-blue-500">Are you?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="text-gray-400 mt-4 mb-10 text-sm md:text-base leading-relaxed"
        >
          Join the waitlist. Get early access. Shape what CreditBuddy becomes.
        </motion.p>

        {/* FORM CARD */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 shadow-2xl text-left"
        >
          {/* INPUTS */}
          <div className="grid md:grid-cols-2 gap-4">
            {["Full Name", "Phone (WhatsApp)", "College", "City"].map(
              (placeholder, i) => (
                <motion.input
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: 0.25 + i * 0.05, // 👈 subtle stagger
                  }}
                  type="text"
                  placeholder={placeholder}
                  className="bg-black/40 border border-white/10 rounded-lg px-4 py-2.5 text-sm 
                focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30 transition"
                />
              ),
            )}
          </div>

          {/* OPTIONS */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-wrap gap-2 mt-5 text-xs"
          >
            {["Borrow", "Earn", "Learn", "All of the above"].map((item, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-white/10 rounded-full hover:bg-white/20 transition cursor-pointer"
              >
                {item}
              </span>
            ))}
          </motion.div>

          {/* BUTTON */}
          <motion.button
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="w-full mt-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 
            font-medium shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition"
          >
            Count Me In →
          </motion.button>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-xs text-gray-500 mt-3 text-center"
          >
            We respect your privacy. No spam.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
