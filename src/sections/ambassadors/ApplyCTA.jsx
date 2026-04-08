import React from "react";
import { motion } from "framer-motion";

export default function ApplyCTA() {
  return (
    <section className="relative py-20 md:py-24 text-white overflow-hidden">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute top-0 right-0 w-[400px] md:w-[500px] h-[400px] md:h-[500px] bg-purple-700/30 blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-green-500/20 blur-[120px]"></div>
      </div>

      <div className="relative max-w-3xl mx-auto px-6">
        {/* FORM CARD */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl"
        >
          {/* HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-center mb-6"
          >
            <h2 className="text-2xl md:text-4xl font-bold leading-tight">
              Apply. 5 minutes. <br />
              <span className="text-green-400">No long essays.</span>
            </h2>

            <p className="text-gray-400 text-sm mt-2">
              Takes 5 minutes. We review every application personally within 5–7
              days.
            </p>
          </motion.div>

          {/* FORM */}
          <form className="space-y-4">
            {/* GRID INPUTS */}
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
                  required
                  placeholder={placeholder}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.05 }}
                  className="bg-black/40 border border-white/10 rounded-lg px-4 py-2 
                  placeholder:text-gray-500
                  focus:outline-none focus:border-green-400 focus:ring-1 focus:ring-green-400/30 transition"
                />
              ))}
            </div>

            {/* TEXTAREA */}
            <motion.textarea
              required
              placeholder="Why do you want to be an ambassador? (2–3 lines)"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-sm 
              placeholder:text-gray-500
              focus:outline-none focus:border-green-400 focus:ring-1 focus:ring-green-400/30"
            />

            {/* OPTIONAL */}
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              {["LinkedIn (optional)", "Instagram handle (optional)"].map(
                (placeholder, i) => (
                  <motion.input
                    key={i}
                    type="text"
                    placeholder={placeholder}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + i * 0.05 }}
                    className="bg-black/40 border border-white/10 rounded-lg px-4 py-2 
                    placeholder:text-gray-500
                    focus:outline-none focus:border-green-400 focus:ring-1 focus:ring-green-400/30"
                  />
                ),
              )}
            </div>

            {/* TRUST LINE */}
            <p className="text-xs text-gray-500 text-center">
              🔒 Your data is सुरक्षित. We never share your information.
            </p>

            {/* BUTTON */}
            <motion.button
              type="submit"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.96 }}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-green-500 to-blue-500 font-medium shadow-lg hover:opacity-90"
            >
              Apply Now →
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
