import React from "react";
import { motion } from "framer-motion";

const advisors = [
  {
    name: "CS Saurav Pradhan",
    role: "Legal Advisor",
    desc: "RBI frameworks and governance — keeps us regulation-right.",
  },
  {
    name: "CMA Vishal Pathak",
    role: "Finance & Audit",
    desc: "Unit economics, financial models, and audit processes.",
  },
  {
    name: "Karan Agrawal",
    role: "Business Strategy",
    desc: "NBFC partnerships, lending structure, capital management.",
  },
  {
    name: "Shashank Kumar Purohit",
    role: "Growth",
    desc: "Go-to-market strategy and revenue scaling.",
  },
  {
    name: "Ish Kumar Thakar",
    role: "Tech Advisor",
    desc: "Fullstack + Mobile architecture. Scaled with 1L+ students.",
  },
];

export default function Advisors() {
  return (
    <section className="relative py-24 text-white overflow-hidden">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-blue-500/20 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-600/20 blur-[120px]" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6">
        {/* CARD */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl"
        >
          {/* TITLE */}
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl font-semibold mb-6"
          >
            Advisory Board
          </motion.h2>

          {/* LIST */}
          <div className="space-y-6">
            {advisors.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 + i * 0.07 }}
                className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 border-b border-white/10 pb-4 last:border-none"
              >
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-xs text-blue-400 uppercase">{item.role}</p>
                </div>

                <p className="text-sm text-gray-300 max-w-md">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
