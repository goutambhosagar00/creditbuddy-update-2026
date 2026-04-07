import React from "react";
import { motion } from "framer-motion";

const data = [
  {
    title: "Built for",
    other: "Anyone with a phone",
    ours: "Students only (18–30)",
  },
  {
    title: "Fees",
    other: "Hidden & unclear",
    ours: "Full cost shown before you start",
  },
  {
    title: "Collections",
    other: "Harassment calls",
    ours: "Support-first. Always.",
  },
  {
    title: "Earning options",
    other: "None",
    ours: "Campus gigs & micro-tasks",
  },
  {
    title: "Financial education",
    other: "None",
    ours: "Built-in. Rewarded.",
  },
  {
    title: "Compliance",
    other: "Varies",
    ours: "RBI compliant & secure",
  },
  {
    title: "Credit building",
    other: "Not a focus",
    ours: "Every repayment builds your score",
  },
];

export default function Comparison() {
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
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
          Not just different. <br />
          <span className="text-blue-600">Actually better.</span>
        </h2>
      </motion.div>

      {/* TABLE */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="max-w-5xl mx-auto px-6 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
      >
        {/* HEADER */}
        <div className="grid grid-cols-3 text-sm">
          <div className="p-4"></div>

          <div className="p-4 text-center text-gray-500 border-l border-gray-100">
            Other loan apps
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
            transition={{
              duration: 0.5,
              delay: i * 0.06, // 👈 subtle stagger
            }}
            className="grid grid-cols-3 border-t border-gray-100 text-sm hover:bg-gray-50 transition"
          >
            {/* TITLE */}
            <div className="p-4 font-medium text-gray-800">{row.title}</div>

            {/* OTHER */}
            <div className="p-4 text-gray-400 border-l border-gray-100">
              {row.other}
            </div>

            {/* OURS */}
            <div className="p-4 border-l border-blue-100 bg-blue-50/40 text-gray-800 font-medium flex items-center gap-2">
              <span className="text-blue-600">✔</span>
              {row.ours}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
