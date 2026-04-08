import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 text-gray-900 overflow-hidden">
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[500px] sm:w-[600px] h-[300px] sm:h-[400px] bg-purple-500/20 blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[250px] sm:w-[300px] h-[300px] sm:h-[400px] bg-blue-500/20 blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-10 lg:py-16 grid lg:grid-cols-2 gap-10 items-center">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* PILL */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center px-4 py-1.5 rounded-full 
            bg-white/70 backdrop-blur-md border border-white/30 
            text-xs font-medium tracking-wide text-gray-700 mb-5 shadow-sm"
          >
            Built by students. For students. Finally.
          </motion.div>

          {/* HEADING */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight mb-5"
          >
            Financial freedom for students.{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"></span>{" "}
            .
          </motion.h1>

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-gray-700 max-w-xl text-sm md:text-base leading-relaxed mb-3"
          >
            Access credit, earn, and grow your money — all in one simple
            platform.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-gray-500 text-xs mb-6"
          >
            Built by students, for students — because traditional finance
            doesn’t work for you.
          </motion.p>

          {/* TRUST BADGES */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-4 text-xs sm:text-sm text-gray-700 mb-6"
          >
            <span>✔ RBI-Compliant</span>
            <span>✔ Zero Data Selling</span>
            <span>⚡ Disbursed in Minutes</span>
          </motion.div>

          {/* CTA BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 w-full"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="w-full sm:w-auto text-center px-6 py-3 rounded-full font-medium text-white 
              bg-gradient-to-r from-blue-600 to-purple-700 
              hover:from-blue-500 hover:to-purple-600 
              transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get Early Access →
            </motion.button>

            <button className="w-full sm:w-auto text-center px-6 py-3 rounded-full font-medium text-purple-600 hover:underline transition">
              See How It Works →
            </button>
          </motion.div>

          {/* SOCIAL PROOF */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-sm text-gray-700 mt-5"
          >
            <span className="font-semibold text-gray-900">2,400+ students</span>{" "}
            already on the waitlist
          </motion.p>

          {/* MICRO COPY */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-xs text-gray-500 italic mt-1"
          >
            No app download needed. Takes 30 seconds.
          </motion.p>
        </motion.div>

        {/* RIGHT UI */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="relative flex justify-center lg:justify-end mt-10 lg:mt-0"
        >
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 6 }}
            className="relative bg-white/30 backdrop-blur-2xl border border-white/40 
            rounded-3xl p-6 w-[90%] max-w-[340px] 
            shadow-[0_20px_60px_rgba(0,0,0,0.2)]"
          >
            <div
              className="absolute top-4 right-4 text-gray-700 bg-white/60 backdrop-blur-xl 
            px-3 py-1 rounded-lg text-[11px] border border-white/30"
            >
              ₹450 Earned
            </div>

            <div className="h-10 w-32 bg-gray-300 rounded mb-4" />

            <p className="text-green-500 text-xs mb-2">✔ Verified Profile</p>

            <h2 className="text-2xl font-semibold text-gray-900">₹5,000</h2>
            <p className="text-gray-500 text-xs mb-4">Available Limit</p>

            <button className="w-full py-2.5 rounded-lg bg-black text-white font-medium hover:opacity-90 transition">
              Withdraw to Bank
            </button>

            <motion.div
              animate={{ y: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute -bottom-5 left-4 bg-gradient-to-r from-purple-500/30 to-blue-400/30 
              backdrop-blur-xl px-4 py-2 rounded-xl text-xs border border-white/30 text-gray-800"
            >
              ⭐ Score Built: Good
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
