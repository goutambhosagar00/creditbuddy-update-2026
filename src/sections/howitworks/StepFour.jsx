import React from "react";
import { motion } from "framer-motion";

export default function StepFour() {
  return (
    <section className="bg-gray-50 py-16 sm:py-24">
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className="max-w-6xl mx-auto px-4 sm:px-6 text-center mb-10 sm:mb-14"
      >
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold tracking-tight leading-tight">
          Financial confidence. <br />
          <span className="text-gray-900">5 minutes a day.</span>
        </h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="text-gray-500 mt-4 text-sm sm:text-base max-w-xl mx-auto leading-relaxed"
        >
          School taught you Pythagoras. Nobody taught you how a credit score
          affects your entire life.
        </motion.p>
      </motion.div>

      {/* CONTENT GRID */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-8 sm:gap-10">
        {/* LEFT - MODULE LIST (FIXED 🚀) */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl p-5 sm:p-6 border border-gray-200 shadow-sm"
        >
          <h3 className="font-semibold mb-4 text-gray-900">
            📚 What you'll actually learn
          </h3>

          <ul className="space-y-3 text-sm text-gray-700">
            {[
              "Why your credit score decides your entire financial life",
              "How to budget on a student allowance (and actually stick to it)",
              "APR explained: why 36% APR costs more than you think",
              "Smart savings: build an emergency fund on ₹500/month",
              "Loan vs credit card: which one to use and when",
              "Investing basics: SIPs and mutual funds in plain language",
              "What actually happens if you default on a student loan",
            ].map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.05 }}
                className="bg-gray-50 px-4 py-2.5 rounded-lg"
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* RIGHT - CARDS */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="grid gap-5 sm:gap-6"
        >
          {[
            {
              title: "📌 Format",
              desc: "5-min micro modules. Real scenarios, not textbook theory. Example-based learning.",
            },
            {
              title: "🪙 Buddy Coins",
              desc: "Earn coins for every module completed. Streak bonuses. Redeem for perks.",
            },
            {
              title: "🌐 Community",
              desc: "Anonymous peer forum — ask money questions without fear.",
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 + i * 0.08 }}
              className="bg-yellow-50 border border-yellow-100 rounded-2xl p-5 
              hover:shadow-md hover:-translate-y-[3px] transition-all duration-300"
            >
              <h4 className="font-semibold mb-2 text-gray-900">{card.title}</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
