import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  // Staggered animation variants for children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-indigo-50/30 to-purple-50/40 text-gray-900 overflow-hidden">
      {/* Enhanced background glow effects with premium colors */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[600px] h-[400px] bg-gradient-to-bl from-purple-400/30 to-indigo-400/20 blur-[140px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[350px] bg-gradient-to-tr from-blue-400/25 to-cyan-400/15 blur-[130px] rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-indigo-300/10 blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 py-16 lg:py-20 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* LEFT CONTENT with staggered animations */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* EYEBROW */}
          <motion.p
            variants={itemVariants}
            className="text-sm uppercase tracking-wider text-indigo-600 font-semibold mb-4 flex items-center gap-2"
          >
            <span className="inline-block w-2 h-2 rounded-full bg-indigo-500"></span>
            Borrow. Earn. Learn. Build the Future.
          </motion.p>

          {/* HEADLINE with gradient accent */}
          <motion.h1
            variants={itemVariants}
            className="text-2xl sm:text-5xl md:text-6xl  font-bold leading-[1.2] tracking-tight mb-6"
          >
            India’s student-first financial ecosystem.
          </motion.h1>

          {/* SUBHEADLINE */}
          <motion.p
            variants={itemVariants}
            className="text-gray-600 max-w-xl text-base md:text-lg leading-relaxed mb-5"
          >
            No more predatory loans. No more financial stress. CreditBuddy is
            built by students, for students — giving you fair access to credit,
            ways to earn, and the knowledge to manage your money wisely.
          </motion.p>

          {/* MICRO TRUST */}
          <motion.p
            variants={itemVariants}
            className="text-gray-500 text-sm mb-7 flex items-center gap-1"
          >
            <span className="text-indigo-500 text-lg">✓</span> No salary slip.
            No credit history needed. No hidden charges. Ever.
          </motion.p>

          {/* CTA BUTTONS */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 mb-8"
          >
            <button className="group px-7 py-3.5 rounded-full text-white font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 hover:from-blue-500 hover:via-indigo-500 hover:to-purple-600 hover:scale-105 active:scale-95">
              Get Early Access →
            </button>

            <button className="group px-7 py-3.5 rounded-full text-indigo-700 font-semibold text-sm bg-white/60 backdrop-blur-sm border border-indigo-200 hover:bg-indigo-50/80 hover:border-indigo-300 transition-all duration-200 hover:shadow-md">
              See How It Works →
            </button>
          </motion.div>

          {/* TRUST CHIPS with premium styling */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-3 text-sm text-gray-700"
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/60 backdrop-blur-sm border border-gray-200/80 shadow-sm text-gray-800 text-xs font-medium">
              <span className="text-indigo-500 text-base">✔</span> RBI-Compliant
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/60 backdrop-blur-sm border border-gray-200/80 shadow-sm text-gray-800 text-xs font-medium">
              <span className="text-indigo-500 text-base">✔</span> No Data
              Selling
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/60 backdrop-blur-sm border border-gray-200/80 shadow-sm text-gray-800 text-xs font-medium">
              <span className="text-indigo-500 text-base">⚡</span> Disbursed in
              Minutes
            </span>
          </motion.div>
        </motion.div>

        {/* RIGHT CARD with enhanced glassmorphism */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="flex justify-center lg:justify-end"
        >
          <div className="bg-white/40 backdrop-blur-xl rounded-2xl border border-white/50 shadow-2xl w-[90%] max-w-[360px] p-6 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
            <div className="flex items-center justify-between mb-3">
              <p className="text-xs font-semibold text-emerald-600 bg-emerald-50/80 backdrop-blur-sm px-2 py-0.5 rounded-full inline-flex items-center gap-1">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                Verified Profile
              </p>
              <span className="text-xs text-gray-400">CreditBuddy</span>
            </div>

            <h2 className="text-4xl font-bold text-gray-900 tracking-tight">
              ₹5,000
            </h2>
            <p className="text-gray-500 text-xs mt-1 mb-5">Available Limit</p>

            <button className="w-full py-3 bg-gray-900 text-white rounded-xl font-medium text-sm shadow-md hover:bg-gray-800 transition-all duration-200 hover:shadow-lg active:scale-[0.98]">
              Withdraw to Bank
            </button>

            <p className="text-[11px] text-gray-400 text-center mt-4">
              0% interest • Instant transfer
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
