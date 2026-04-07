import React from "react";
import { motion } from "framer-motion";

export default function ApplyCTA() {
  return (
    <section className="relative py-24 text-white overflow-hidden">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-700/30 blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-green-500/20 blur-[120px]"></div>
      </div>

      <div className="relative max-w-3xl mx-auto px-6">
        {/* FORM CARD */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl"
        >
          {/* HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl md:text-4xl font-bold">
              Apply. 5 minutes. <br />
              <span className="text-green-400">No long essays.</span>
            </h2>

            <p className="text-gray-400 text-sm mt-2">
              You’re in the top 1%, we review applications within 5–7 days.
            </p>
          </motion.div>

          {/* FORM */}
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            {[
              "Full Name",
              "Phone (WhatsApp)",
              "College / University",
              "City / State",
              "Year of Study",
              "Course / Specialization",
            ].map((placeholder, i) => (
              <motion.input
                key={i}
                type="text"
                placeholder={placeholder}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.05 }}
                className="bg-black/40 border border-white/10 rounded-lg px-4 py-2 
                focus:outline-none focus:border-green-400 focus:ring-1 focus:ring-green-400/30 transition"
              />
            ))}
          </div>

          {/* TEXTAREA */}
          <motion.textarea
            placeholder="Why do you want to be an ambassador? (Short answer)"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="w-full mt-4 bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-sm 
            focus:outline-none focus:border-green-400 focus:ring-1 focus:ring-green-400/30"
          />

          {/* OPTIONAL */}
          <div className="grid md:grid-cols-2 gap-4 mt-4 text-sm">
            {["LinkedIn (optional)", "Instagram handle (optional)"].map(
              (placeholder, i) => (
                <motion.input
                  key={i}
                  type="text"
                  placeholder={placeholder}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + i * 0.05 }}
                  className="bg-black/40 border border-white/10 rounded-lg px-4 py-2 
                  focus:outline-none focus:border-green-400 focus:ring-1 focus:ring-green-400/30"
                />
              ),
            )}
          </div>

          {/* BUTTON */}
          <motion.button
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.96 }}
            className="w-full mt-6 py-3 rounded-xl bg-gradient-to-r from-green-500 to-blue-500 font-medium hover:opacity-90"
          >
            Apply Now →
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
