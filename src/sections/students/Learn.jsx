import React from "react";
import { motion } from "framer-motion";

export default function Learn() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200"
        >
          {/* HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-10 h-10 bg-yellow-500 text-white flex items-center justify-center rounded-lg">
              📘
            </div>
            <h2 className="text-xl md:text-2xl font-semibold">Learn</h2>
          </motion.div>

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-gray-600 mb-8 text-sm md:text-base"
          >
            5 minutes a day. Life-changing. Learn how money actually works —
            credit scores, budgeting, and smart decisions.
          </motion.p>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* LEFT */}
            <div className="space-y-6">
              {/* FEATURES */}
              <ul className="space-y-3 text-sm text-gray-600">
                {[
                  "5-minute modules — fits between classes",
                  "Earn coins & unlock perks",
                  "Anonymous peer forum — ask anything",
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.06 }}
                  >
                    ✔ {item}
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
                  Earn coins for completing modules. Redeem for perks and
                  benefits in the app.
                </p>
              </motion.div>
            </div>

            {/* RIGHT CURRICULUM */}
            <div className="space-y-3 text-sm text-gray-600">
              <h3 className="font-semibold mb-2">Module Curriculum</h3>

              {[
                "What is a credit score & why it matters",
                "How to budget like a student",
                "Loans vs credit cards — what to use",
                "APR, interest, and hidden fees explained",
                "Building an emergency fund",
                "Investing basics — SIP, mutual funds",
                "What happens if you default",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.25 + i * 0.05 }}
                  className={`bg-gray-50 px-4 py-2 rounded-lg ${
                    i === 4 ? "border border-yellow-300" : ""
                  }`}
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
