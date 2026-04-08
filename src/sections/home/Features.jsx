import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    title: "Borrow",
    desc: "Get ₹500–₹10,000 instantly. No salary, no credit history. Repay on time and start building your credit.",
    color: "from-blue-500 to-blue-600",
    border: "hover:border-blue-500",
    tag: "Fast • Fair • Transparent",
    icon: "💳",
  },
  {
    title: "Earn",
    desc: "Complete simple tasks and gigs. Earn real money directly to your account.",
    color: "from-green-500 to-green-600",
    border: "hover:border-green-500",
    tag: "Real Work • Real Money",
    icon: "💰",
  },
  {
    title: "Learn",
    desc: "Understand credit, budgeting, and money basics — step by step.",
    color: "from-yellow-500 to-yellow-600",
    border: "hover:border-yellow-500",
    tag: "Simple • Practical • Free",
    icon: "📘",
  },
];

export default function Features() {
  return (
    <section className="bg-gray-50 py-16 sm:py-20">
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className="max-w-6xl mx-auto px-4 sm:px-6 text-center mb-12 sm:mb-16"
      >
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold tracking-tight mb-4 leading-tight">
          Everything you need to manage money.
        </h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="text-gray-500 max-w-xl mx-auto text-sm sm:text-base leading-relaxed"
        >
          Credit, earnings, and financial learning — built for student life.
        </motion.p>
      </motion.div>

      {/* CARDS */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6">
        {features.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.6,
              delay: i * 0.08,
              ease: "easeOut",
            }}
            className={`group bg-white rounded-2xl p-5 sm:p-6 border border-gray-200 
            transition-all duration-300 ${item.border} 
            hover:shadow-lg hover:-translate-y-[4px]`}
          >
            {/* ICON */}
            <div
              className={`w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-xl text-white 
              bg-gradient-to-r ${item.color} mb-4 sm:mb-5 
              transition-transform duration-300 group-hover:scale-105`}
            >
              {item.icon}
            </div>

            {/* TITLE */}
            <h3 className="text-base sm:text-lg font-semibold mb-2 text-gray-900">
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
