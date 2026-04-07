import React from "react";
import { motion } from "framer-motion";

export default function StepThree() {
  return (
    <section className="relative bg-black text-white py-24 overflow-hidden">
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/20 blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/20 blur-[120px]"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Repaying is <br /> just as easy.
          </h2>

          <ul className="space-y-6 text-sm text-gray-300">
            {[
              {
                title: "Payment options",
                desc: "UPI · Net banking · Debit card · Wallet",
              },
              {
                title: "Flexible",
                desc: "Pay in full or split — easy repayments anytime.",
              },
              {
                title: "Extensions",
                desc: "Can’t pay? Extend due date — no heavy penalties.",
              },
              {
                title: "Collection policy",
                desc: "No harassment. No shame. Respect-first support.",
              },
              {
                title: "Credit building",
                desc: "Every repayment builds your credit history.",
              },
            ].map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.07 }}
              >
                <p className="text-green-400 font-medium">{item.title}</p>
                <p className="text-xs text-gray-400">{item.desc}</p>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* RIGHT CARD */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25, duration: 0.7 }}
          className="flex justify-center"
        >
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 w-full max-w-sm shadow-xl space-y-4">
            <motion.h3
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="font-semibold text-lg"
            >
              The part other apps don’t have.
            </motion.h3>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35 }}
              className="text-xs text-gray-400"
            >
              Earn money. Pay it back. Or just keep it.
            </motion.p>

            <div className="space-y-3 text-sm">
              {[
                { title: "Product Testing", value: "₹500–₹1000" },
                { title: "Freelance Tasks", value: "Based on work" },
                { title: "Campus Promotion", value: "Earnings grow" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.08 }}
                  className="bg-white/5 p-3 rounded-lg flex justify-between"
                >
                  <span>{item.title}</span>
                  <span className="text-green-400">{item.value}</span>
                </motion.div>
              ))}
            </div>

            <motion.button
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="w-full mt-4 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 font-medium"
            >
              Earn to Repay
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
