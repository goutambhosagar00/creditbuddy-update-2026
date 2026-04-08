import React from "react";
import { motion } from "framer-motion";

const data = [
  {
    title: "Built for",
    other: "Everyone",
    ours: "Students (18–25)",
  },
  {
    title: "Fees",
    other: "Hidden and unclear",
    ours: "Transparent upfront pricing",
  },
  {
    title: "Collections",
    other: "Aggressive recovery",
    ours: "Support-first approach",
  },
  {
    title: "Earning options",
    other: "Not available",
    ours: "Gigs and micro-tasks",
  },
  {
    title: "Financial education",
    other: "Missing",
    ours: "Built-in and rewarded",
  },
  {
    title: "Compliance",
    other: "Inconsistent",
    ours: "RBI compliant and secure",
  },
  {
    title: "Credit building",
    other: "Not prioritized",
    ours: "Every repayment builds credit",
  },
];

export default function Comparison() {
  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className="max-w-6xl mx-auto px-4 sm:px-6 text-center mb-12 sm:mb-16"
      >
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold tracking-tight leading-tight">
          Built differently. <br />
          <span className="text-blue-600">Designed for students.</span>
        </h2>
      </motion.div>

      {/* TABLE */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="max-w-5xl mx-auto px-4 sm:px-6 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
      >
        {/* DESKTOP TABLE */}
        <div className="hidden md:block">
          {/* HEADER */}
          <div className="grid grid-cols-3 text-sm">
            <div className="p-4"></div>

            <div className="p-4 text-center text-gray-500 border-l border-gray-100">
              Other platforms
            </div>

            <div className="p-4 text-center font-semibold text-blue-600 bg-blue-50 border-l border-blue-100">
              CreditBuddy
            </div>
          </div>

          {/* ROWS */}
          {data.map((row, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="grid grid-cols-3 border-t border-gray-100 text-sm hover:bg-gray-50 transition"
            >
              <div className="p-4 font-medium text-gray-800">{row.title}</div>

              <div className="p-4 text-gray-400 border-l border-gray-100">
                {row.other}
              </div>

              <div className="p-4 border-l border-blue-100 bg-blue-50/40 text-gray-800 font-medium flex items-center gap-2">
                <span className="text-blue-600">✔</span>
                {row.ours}
              </div>
            </motion.div>
          ))}
        </div>

        {/* MOBILE STACK (IMPORTANT FIX) */}
        <div className="md:hidden divide-y">
          {data.map((row, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="p-4"
            >
              <p className="font-semibold text-gray-900 mb-2">{row.title}</p>

              <div className="text-sm mb-2">
                <span className="text-gray-400">Other: </span>
                {row.other}
              </div>

              <div className="text-sm font-medium text-gray-800 flex items-center gap-2">
                <span className="text-blue-600 font-semibold">✔</span>
                {row.ours}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
