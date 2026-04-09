import React from "react";
import { motion } from "framer-motion";

export default function Borrow() {
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
            <div className="w-10 h-10 bg-blue-600 text-white flex items-center justify-center rounded-lg">
              💳
            </div>
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">
              Borrow
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
            When you need it, it’s there. No salary slip. No credit history. No
            panic situations — just get started in minutes.
          </motion.p>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* LEFT FEATURES */}
            <div className="space-y-5 text-sm sm:text-base text-gray-600">
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
                  desc: "Min flat fees No interest. No hidden charges.",
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
                  <p className="font-medium text-gray-900">✔ {item.title}</p>
                  <p className="text-xs sm:text-sm text-gray-500">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* RIGHT WARNING BOX */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="bg-red-50 border border-red-200 rounded-xl p-5 sm:p-6"
            >
              <h3 className="text-red-600 font-semibold mb-4 text-sm sm:text-base">
                What CreditBuddy will NEVER do:
              </h3>

              <ul className="space-y-3 text-xs sm:text-sm text-gray-700">
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
                    className="flex gap-2"
                  >
                    <span className="text-red-500">✖</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* 🔥 CTA (CRITICAL FIX) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-8 sm:mt-10 text-center"
          >
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 sm:px-7 py-3 rounded-full font-medium hover:scale-[1.03] active:scale-[0.97] transition">
              Join the Waitlist →
            </button>

            <p className="text-xs text-gray-500 mt-2">
              We’ll notify you the moment we go live in your city.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
