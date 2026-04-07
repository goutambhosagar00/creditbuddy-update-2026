import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 text-gray-900 overflow-hidden ">
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[600px] h-[400px] bg-purple-500/20 blur-[140px]" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[400px] bg-blue-500/20 blur-[140px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-1 py-2 lg:py-10 grid lg:grid-cols-2 gap-1 items-center">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* TAG */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="inline-block text-[11px] tracking-widest text-gray-600 bg-white/60 px-4 py-1.5 rounded-full mb-5"
          >
            Borrow. Earn. Learn. Build the Future.
          </motion.p>

          {/* HEADING */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight tracking-tight mb-4"
          >
            India's first student-focused financial{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              ecosystem
            </span>{" "}
            combining responsible credit, real earning opportunities, and
            financial literacy.
          </motion.h1>

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-gray-700 max-w-xl text-sm md:text-base leading-relaxed mb-3"
          >
            No more predatory loans. No more financial stress. CreditBuddy is
            built by students, for students—giving you fair access to credit,
            ways to earn, and the knowledge to manage your money wisely.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-gray-500 text-xs mb-5"
          >
            No salary slip. No credit history needed. No hidden charges. Ever.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-5 mb-5"
          >
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="px-6 py-3 rounded-full font-medium text-white 
              bg-gradient-to-r from-blue-600 to-purple-700 
              hover:from-blue-500 hover:to-purple-600 
              transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Get Early Access →
            </motion.button>

            <button className="px-6 py-3 rounded-full font-medium text-purple-600 hover:underline transition">
              See How It Works →
            </button>
          </motion.div>

          {/* FEATURES */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-wrap gap-5 text-xs md:text-sm text-gray-700"
          >
            <span>✔ RBI-Compliant</span>
            <span>✔ Zero Data Selling</span>
            <span>⚡ Disbursed in Minutes</span>
          </motion.div>
        </motion.div>

        {/* RIGHT UI */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="relative flex justify-center lg:justify-end"
        >
          {/* MAIN CARD */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="relative bg-white/30 backdrop-blur-2xl border border-white/40 
            rounded-3xl p-6 w-[300px] sm:w-[340px] 
            shadow-[0_20px_60px_rgba(0,0,0,0.2)]"
          >
            {/* TOP RIGHT BADGE */}
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

            {/* BOTTOM BADGE */}
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
