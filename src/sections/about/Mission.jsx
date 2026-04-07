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
          What we’re building.
        </motion.h2>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-6 text-left">
          {[
            {
              title: "Our Mission",
              color: "text-blue-400",
              desc: "Build India’s most trusted student financial ecosystem — fair credit, real earnings, and practical financial education.",
            },
            {
              title: "Our Vision",
              color: "text-green-400",
              desc: "Every Indian student has access to financial tools and knowledge to build their future — without debt traps.",
            },
            {
              title: "Our Promise",
              color: "text-yellow-400",
              desc: "Radical transparency. Zero harassment. Every decision made in the student’s interest. Always.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 + i * 0.1 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 
              hover:-translate-y-[3px] hover:border-white/20 transition-all duration-300"
            >
              <p className={`${item.color} text-xs mb-2 uppercase`}>
                {item.title}
              </p>
              <p className="text-sm text-gray-300">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
