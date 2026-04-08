import React from "react";
import { motion } from "framer-motion";

export default function Mission() {
  return (
    <section className="relative py-24 text-white overflow-hidden">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/20 blur-[120px]"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-600/20 blur-[120px]"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 text-center">
        {/* HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-5xl font-bold mb-12"
        >
          Built for students. Backed by purpose.
        </motion.h2>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-6 text-left">
          {[
            {
              label: "Mission",
              title: "What we do",
              color: "text-blue-400",
              desc: "Build India’s most trusted student financial ecosystem — fair credit, real earnings, and practical financial education.",
            },
            {
              label: "Vision",
              title: "Where we're going",
              color: "text-green-400",
              desc: "Every Indian student has access to financial tools and knowledge to build their future — without debt traps.",
            },
            {
              label: "Promise",
              title: "What we stand for",
              color: "text-yellow-400",
              desc: "Radical transparency. Zero harassment. Every decision made in the student’s interest — always.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 + i * 0.1 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 
              hover:-translate-y-[4px] hover:border-white/20 transition-all duration-300"
            >
              {/* LABEL */}
              <p
                className={`${item.color} text-xs uppercase tracking-wide mb-2`}
              >
                {item.label}
              </p>

              {/* TITLE */}
              <h3 className="text-lg font-semibold mb-2 text-white">
                {item.title}
              </h3>

              {/* DESC */}
              <p className="text-sm text-gray-300 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
