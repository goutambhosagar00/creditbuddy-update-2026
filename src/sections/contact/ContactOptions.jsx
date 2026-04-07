import React from "react";
import { motion } from "framer-motion";

export default function ContactOptions() {
  return (
    <section className="bg-gray-50 pb-24">
      {/* HEADING */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto px-6 text-center mb-10"
      >
        <h2 className="text-xl font-semibold">What brings you here?</h2>
      </motion.div>

      {/* GRID */}
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6">
        {[
          {
            icon: "🎓",
            title: "I’m a student",
            desc: "Waitlist, earnings, credit access.",
            color: "text-blue-600",
            btn: "Join Waitlist →",
          },
          {
            icon: "🤝",
            title: "I want to partner",
            desc: "Colleges, NBFCs, brands.",
            color: "text-green-600",
            btn: "Start a Conversation →",
          },
          {
            icon: "💼",
            title: "I’m an investor",
            desc: "Deck & metrics.",
            color: "text-yellow-600",
            btn: "Investor Inquiry →",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-white border border-gray-200 rounded-2xl p-6 text-center
            hover:shadow-md hover:-translate-y-[3px] transition-all duration-300"
          >
            {/* ICON */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1 + i * 0.1 }}
              className="text-2xl mb-3"
            >
              {item.icon}
            </motion.div>

            {/* TITLE */}
            <h3 className="font-semibold mb-2 text-gray-900">{item.title}</h3>

            {/* DESC */}
            <p className="text-xs text-gray-500 mb-4">{item.desc}</p>

            {/* BUTTON */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`${item.color} text-sm font-medium`}
            >
              {item.btn}
            </motion.button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
