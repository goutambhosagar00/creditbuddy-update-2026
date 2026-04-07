import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    title: "Borrow",
    desc: "Get ₹500–₹10,000 in minutes. No salary needed. Pay on time, builds growth.",
    color: "from-blue-500 to-blue-600",
    border: "hover:border-blue-500",
    tag: "Fair, Fast, Simple",
    icon: "💳",
  },
  {
    title: "Earn",
    desc: "Complete gigs. Micro tasks. Earn money and cash rewards.",
    color: "from-green-500 to-green-600",
    border: "hover:border-green-500",
    tag: "Real Work, Real Money",
    icon: "💰",
  },
  {
    title: "Learn",
    desc: "Master financial literacy: budgeting, credit scores, and smart habits.",
    color: "from-yellow-500 to-yellow-600",
    border: "hover:border-yellow-500",
    tag: "Free Practical Lessons",
    icon: "📘",
  },
];

export default function Features() {
  return (
    <section className="bg-gray-50 py-20">
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className="max-w-6xl mx-auto px-6 text-center mb-14"
      >
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4">
          One app. Three things <br /> that change everything.
        </h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="text-gray-500 max-w-xl mx-auto text-sm md:text-base leading-relaxed"
        >
          Not a loan app. A complete financial toolkit built for student life.
        </motion.p>
      </motion.div>

      {/* CARDS */}
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6">
        {features.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.6,
              delay: i * 0.08, // 👈 smoother stagger
              ease: "easeOut",
            }}
            className={`group bg-white rounded-2xl p-6 border border-gray-200 transition-all duration-300 ${item.border}`}
          >
            {/* ICON */}
            <div
              className={`w-11 h-11 flex items-center justify-center rounded-xl text-white 
              bg-gradient-to-r ${item.color} mb-5 
              transition-transform duration-300 group-hover:scale-105`}
            >
              {item.icon}
            </div>

            {/* TITLE */}
            <h3 className="text-lg font-semibold mb-2 text-gray-900">
              {item.title}
            </h3>

            {/* DESC */}
            <p className="text-gray-500 text-sm leading-relaxed mb-4">
              {item.desc}
            </p>

            {/* TAG */}
            <span className="text-xs font-medium text-gray-400">
              {item.tag}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
