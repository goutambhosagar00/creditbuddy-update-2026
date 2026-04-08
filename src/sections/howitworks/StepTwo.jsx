import React from "react";
import { motion } from "framer-motion";

export default function StepTwo() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col lg:flex-row gap-10 lg:gap-12 items-center">
        {/* LEFT PHONE UI */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="w-full lg:w-1/2 flex justify-center order-2 lg:order-1"
        >
          <div className="w-[240px] sm:w-[260px] h-[460px] sm:h-[500px] bg-black rounded-3xl border-[6px] border-gray-800 shadow-xl p-3 sm:p-4">
            <div className="bg-white rounded-2xl h-full p-4 flex flex-col justify-between">
              <div>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-xs text-gray-400 text-center mb-2"
                >
                  SELECT AMOUNT
                </motion.p>

                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.25 }}
                  className="text-2xl font-semibold text-center mb-4"
                >
                  ₹5,000
                </motion.h2>

                {/* SLIDER */}
                <div className="w-full h-2 bg-gray-200 rounded-full mb-4 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "50%" }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="h-full bg-blue-600 rounded-full"
                  />
                </div>

                {/* CARD */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="bg-gray-100 rounded-xl p-4 text-xs space-y-2"
                >
                  <div className="flex justify-between">
                    <span>Term</span>
                    <span>30 Days</span>
                  </div>

                  <div className="flex justify-between">
                    <span>Platform Fee</span>
                    <span>₹150</span>
                  </div>

                  <div className="flex justify-between font-medium">
                    <span>Total you'll repay</span>
                    <span className="text-blue-600">₹5,150</span>
                  </div>
                </motion.div>

                {/* 🔥 NEW TRUST LINE (IMPORTANT FIX) */}
                <p className="text-[11px] text-gray-500 mt-3 text-center">
                  ₹150 flat fee. No interest. No hidden charges. Ever.
                </p>
              </div>

              <motion.button
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="mt-4 w-full py-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-green-500 text-white text-sm font-medium"
              >
                Confirm & Disburse
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="w-full lg:w-1/2 order-1 lg:order-2"
        >
          <span className="bg-blue-100 text-blue-600 text-xs px-3 py-1 rounded-full">
            STEP 2
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mt-4 mb-6 leading-tight">
            Pick your amount and confirm.
          </h2>

          <ul className="space-y-5 text-gray-600 text-sm sm:text-base">
            {[
              {
                title: "Loan range",
                desc: "₹500 to ₹10,000. Start small — limits grow with on-time repayments.",
              },
              {
                title: "Terms",
                desc: "20-day or 30-day. You pick based on your allowance cycle.",
              },
              {
                title: "Full cost upfront",
                desc: "Total repayment shown before confirm — no surprises.",
              },
              {
                title: "Interest waivers",
                desc: "Upload proof for books/medical — we may waive interest.",
              },
              {
                title: "Disbursal",
                desc: "Instant to UPI / bank / wallet within minutes.",
              },
            ].map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.06 }}
                className="flex gap-3"
              >
                <span className="text-blue-600 mt-[2px]">✔</span>
                <div>
                  <p className="font-medium text-gray-900">{item.title}</p>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
