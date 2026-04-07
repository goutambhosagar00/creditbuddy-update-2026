import React from "react";
import { motion } from "framer-motion";

export default function Borrow() {
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
            <div className="w-10 h-10 bg-blue-600 text-white flex items-center justify-center rounded-lg">
              💳
            </div>
            <h2 className="text-xl md:text-2xl font-semibold">Borrow</h2>
          </motion.div>

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-gray-600 mb-8 text-sm md:text-base"
          >
            When you need it, it’s there. No salary slip. No credit history. No
            panic situations — just get started in minutes.
          </motion.p>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* LEFT FEATURES */}
            <div className="space-y-5 text-sm text-gray-600">
              {[
                {
                  title: "Loan range",
                  desc: "₹500 to ₹10,000. Start small — grow your limits.",
                },
                {
                  title: "Repayment terms",
                  desc: "20–30 days. You pick based on your allowance cycle.",
                },
                {
                  title: "Know your cost",
                  desc: "Exact amount shown before you confirm.",
                },
                {
                  title: "Cost",
                  desc: "Transparent fees. No hidden charges.",
                },
                {
                  title: "What happens if late?",
                  desc: "No harassment. Extend or repay with flexibility.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.06 }}
                >
                  <p className="font-medium text-black">✔ {item.title}</p>
                  <p className="text-xs text-gray-500">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* RIGHT WARNING BOX */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="bg-red-50 border border-red-100 rounded-xl p-5"
            >
              <h3 className="text-red-600 font-semibold mb-3 text-sm">
                What CreditBuddy will NEVER do:
              </h3>

              <ul className="space-y-2 text-xs text-gray-600">
                {[
                  "Charge extra fees you didn’t agree to",
                  "Increase interest without notice",
                  "Trap you in hidden charges",
                  "Sell your personal data",
                  "Harass you or your contacts",
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.45 + i * 0.05 }}
                  >
                    ❌ {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
