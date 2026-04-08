import React from "react";
import { motion } from "framer-motion";

export default function Learn() {
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
            <div className="w-10 h-10 bg-yellow-500 text-white flex items-center justify-center rounded-lg">
              📘
            </div>
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">
              Learn
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
            5 minutes a day. Life-changing. Learn how money actually works — not
            theory, but real-life decisions that impact your future.
          </motion.p>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* LEFT */}
            <div className="space-y-6">
              {/* FEATURES */}
              <ul className="space-y-3 text-sm text-gray-600">
                {[
                  "5-minute modules — fits between classes",
                  "Earn coins & unlock real rewards",
                  "Anonymous peer forum — ask anything without fear",
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.06 }}
                    className="flex gap-2"
                  >
                    <span className="text-green-500">✔</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>

              {/* BUDDY COINS */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.35 }}
                className="bg-yellow-50 border border-yellow-100 rounded-xl p-5"
              >
                <h3 className="font-semibold mb-2">🪙 Buddy Coins</h3>
                <p className="text-sm text-gray-600">
                  Complete modules, earn coins, and redeem them for real perks
                  inside the app.
                </p>
              </motion.div>
            </div>

            {/* RIGHT CURRICULUM */}
            <div className="space-y-3 text-sm text-gray-700">
              <h3 className="font-semibold mb-2">What you'll actually learn</h3>

              {[
                "Why your credit score decides your financial life",
                "How to budget as a student (and actually stick to it)",
                "APR explained: why loans cost more than you think",
                "Smart savings: build an emergency fund step-by-step",
                "Loans vs credit cards: what to use and when",
                "Investing basics: SIPs & mutual funds made simple",
                "What actually happens if you miss a payment",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.25 + i * 0.05 }}
                  className="bg-gray-50 px-4 py-3 rounded-lg hover:bg-gray-100 transition"
                >
                  {item}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
