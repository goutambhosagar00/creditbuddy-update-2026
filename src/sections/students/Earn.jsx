import React from "react";
import { motion } from "framer-motion";

export default function Earn() {
  return (
    <section className="bg-gray-50 py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-200"
        >
          {/* HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-3 mb-5"
          >
            <div className="w-10 h-10 bg-green-600 text-white flex items-center justify-center rounded-lg">
              💰
            </div>
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">
              Earn
            </h2>
          </motion.div>

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base leading-relaxed"
          >
            Real income. Real flexibility. We don’t just give you money — we
            help you make it. Connect with verified, flexible opportunities.
          </motion.p>

          {/* CARDS */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6">
            {[
              {
                icon: "🧪",
                title: "Product Testing",
                desc: "Test apps and services. Give feedback and earn per task.",
              },
              {
                icon: "💻",
                title: "Freelance Work",
                desc: "Writing, design, social media — based on your skills.",
              },
              {
                icon: "📢",
                title: "Campus Gigs",
                desc: "Promote events & brands. Flexible work, real pay.",
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.08 }}
                className="bg-gray-50 p-5 rounded-xl 
                hover:shadow-md hover:-translate-y-[3px] transition-all duration-300"
              >
                <div className="text-2xl mb-3">{card.icon}</div>
                <h3 className="font-medium mb-2 text-gray-900">{card.title}</h3>
                <p className="text-xs sm:text-sm text-gray-500">{card.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* 🔥 FEATURE HIGHLIGHT (ISSUE #09 FIX) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35 }}
            className="mt-8 bg-gradient-to-r from-purple-100 to-blue-100 border border-blue-200 rounded-xl p-4 text-sm font-medium text-blue-700 text-center"
          >
            The feature no other loan app has →
          </motion.div>

          {/* 🔥 EARN TO REPAY CARD */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-4 bg-black text-white rounded-xl p-5 sm:p-6 space-y-4"
          >
            <p className="text-sm sm:text-base">
              Earn-to-Repay: Apply your earnings directly to your loan.
            </p>

            {/* 🔥 3 STEP FLOW (ISSUE #10 FIX) */}
            <div className="text-xs sm:text-sm text-gray-300 space-y-2">
              <p>Step 1: Complete a gig or task on CreditBuddy</p>
              <p>Step 2: Earnings land in your Buddy Wallet</p>
              <p>Step 3: Apply to your loan in one tap</p>
            </div>

            <div className="flex justify-between items-center pt-2 border-t border-white/10">
              <span className="text-green-400 text-sm">
                Reduce interest & stress
              </span>

              <button className="bg-gradient-to-r from-purple-500 to-blue-500 px-4 py-2 rounded-lg text-sm font-medium hover:scale-[1.03] active:scale-[0.97] transition">
                Start Earning →
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
