import React from "react";
import { motion } from "framer-motion";

const values = [
  {
    title: "Student-first. Always.",
    desc: "Every product decision starts with one question: is this actually good for the student?",
    icon: "🎓",
  },
  {
    title: "Radical transparency.",
    desc: "No small print. No surprises. Everything is clear upfront.",
    icon: "🔍",
  },
  {
    title: "Compliance is non-negotiable.",
    desc: "RBI-aligned, legal-first approach. We build for trust.",
    icon: "🛡️",
  },
  {
    title: "Zero harassment. Full stop.",
    desc: "No calls, no threats. Just respectful communication.",
    icon: "🤝",
  },
  {
    title: "Education is a right.",
    desc: "Financial literacy should be accessible to every student.",
    icon: "📚",
  },
  {
    title: "Long game, always.",
    desc: "We build systems that help students grow for life.",
    icon: "📈",
  },
];

export default function Values() {
  return (
    <section className="bg-gray-50 py-20 md:py-24">
      {/* HEADING */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-6xl mx-auto px-6 text-center mb-14"
      >
        <h2 className="text-3xl md:text-5xl font-bold leading-tight">
          The values behind <span className="text-blue-600">CreditBuddy</span>.
        </h2>
      </motion.div>

      {/* GRID */}
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {values.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="bg-white border border-gray-200 rounded-2xl p-6 text-left 
            hover:shadow-lg hover:-translate-y-[3px] transition-all duration-300"
          >
            {/* ICON BOX */}
            <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-100 mb-4 text-xl">
              {item.icon}
            </div>

            {/* TITLE */}
            <h3 className="font-semibold text-base md:text-lg mb-2 text-gray-900">
              {item.title}
            </h3>

            {/* DESC */}
            <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
