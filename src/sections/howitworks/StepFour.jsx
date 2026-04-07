import React from "react";
import { motion } from "framer-motion";

export default function StepFour() {
  return (
    <section className="bg-gray-50 py-24">
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className="max-w-6xl mx-auto px-6 text-center mb-12"
      >
        <h2 className="text-3xl md:text-5xl font-bold">
          Financial confidence. <br />
          <span className="text-gray-900">5 minutes a day.</span>
        </h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="text-gray-500 mt-4 text-sm max-w-xl mx-auto"
        >
          School taught you Pythagoras. Nobody taught you how a credit score
          affects your entire life.
        </motion.p>
      </motion.div>

      {/* CONTENT GRID */}
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-10">
        {/* LEFT - MODULE LIST */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm"
        >
          <h3 className="font-semibold mb-4">📚 Module Topics</h3>

          <ul className="space-y-3 text-sm text-gray-600">
            {[
              "Credit scores",
              "Budgeting & smart use",
              "APR explained simply",
              "Smart savings",
              "Low vs credit card",
              "Investing basics",
            ].map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.05 }}
                className="bg-gray-50 px-4 py-2 rounded-lg"
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
          className="grid gap-6"
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
              hover:shadow-sm hover:-translate-y-[2px] transition-all duration-300"
            >
              <h4 className="font-semibold mb-2">{card.title}</h4>
              <p className="text-sm text-gray-600">{card.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
