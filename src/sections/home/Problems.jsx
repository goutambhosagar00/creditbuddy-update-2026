import React from "react";
import { motion } from "framer-motion";

const cards = [
  {
    title: "Banks say no.",
    desc: "No salary? No loans. No support if you're a student.",
    icon: "❌",
  },
  {
    title: "Apps will trap you.",
    desc: "Hidden charges and shady tactics everywhere.",
    icon: "💸",
  },
  {
    title: "Nobody teaches you.",
    desc: "No one teaches real money skills in college.",
    icon: "🎓",
  },
  {
    title: "Credit is broken.",
    desc: "System isn’t designed for students.",
    icon: "⚠️",
  },
];

export default function Problems() {
  return (
    <section className="bg-white text-black py-20 overflow-hidden">
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className="max-w-6xl mx-auto px-6 text-center mb-12"
      >
        <p className="text-xs tracking-widest text-blue-600 mb-3">
          WHY CREDITBUDDY EXISTS
        </p>

        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
          The system was never built for you.
        </h2>
      </motion.div>

      {/* SCROLL */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative"
      >
        <div className="flex gap-6 animate-scroll w-max px-6">
          {[...cards, ...cards].map((card, i) => (
            <div
              key={i}
              className="min-w-[260px] md:min-w-[300px] 
              bg-black text-white p-6 rounded-2xl 
              shadow-md hover:shadow-lg hover:-translate-y-[3px] 
              transition-all duration-300"
            >
              <div className="text-2xl mb-3">{card.icon}</div>

              <h3 className="font-semibold mb-2 text-lg">{card.title}</h3>

              <p className="text-sm text-gray-400 leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="max-w-xl mx-auto mt-16 px-6"
      >
        <div className="bg-gray-100 border border-gray-200 p-6 rounded-xl text-center">
          <p className="text-sm text-gray-700">
            We built the platform the system{" "}
            <span className="text-blue-600 font-medium">refused to build</span>{" "}
            for you.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
