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
    <section className="bg-gray-50 py-24">
      {/* HEADING */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-6xl mx-auto px-6 text-center mb-12"
      >
        <h2 className="text-3xl md:text-5xl font-bold">How we work.</h2>
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
            hover:shadow-md hover:-translate-y-[2px] transition-all duration-300"
          >
            {/* ICON */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1 + i * 0.08 }}
              className="text-2xl mb-3"
            >
              {item.icon}
            </motion.div>

            {/* TITLE */}
            <h3 className="font-semibold mb-2 text-gray-900">{item.title}</h3>

            {/* DESC */}
            <p className="text-sm text-gray-600">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
