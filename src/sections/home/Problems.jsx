import React from "react";
import { motion } from "framer-motion";

const cards = [
  {
    title: "Banks don’t see you.",
    desc: "No salary. No history. So they shut the door before you even start.",
    icon: "❌",
  },
  {
    title: "Apps take advantage.",
    desc: "Hidden fees, traps, and fine print designed to cost you more.",
    icon: "💸",
  },
  {
    title: "No one shows you how.",
    desc: "Real money skills? Missing from classrooms and real life.",
    icon: "🎓",
  },
  {
    title: "The system isn’t built for you.",
    desc: "Credit was never designed with students in mind.",
    icon: "⚠️",
  },
];

export default function Problems() {
  return (
    <section className="bg-white text-black py-16 sm:py-20 overflow-hidden">
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className="max-w-6xl mx-auto px-4 sm:px-6 text-center mb-10 sm:mb-14"
      >
        <p className="text-xs tracking-widest text-blue-600 mb-3">
          WHY WE EXIST
        </p>

        <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold tracking-tight leading-tight">
          The financial system ignores students.
        </h2>
      </motion.div>

      {/* SCROLL CARDS */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative"
      >
        <div className="flex gap-4 sm:gap-6 animate-scroll w-max px-4 sm:px-6">
          {[...cards, ...cards].map((card, i) => (
            <div
              key={i}
              className="min-w-[240px] sm:min-w-[260px] md:min-w-[300px] 
              bg-black text-white p-5 sm:p-6 rounded-2xl 
              shadow-md hover:shadow-lg hover:-translate-y-[4px] 
              transition-all duration-300"
            >
              <div className="text-xl sm:text-2xl mb-3">{card.icon}</div>

              <h3 className="font-semibold mb-2 text-base sm:text-lg">
                {card.title}
              </h3>

              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* CTA BOX */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="max-w-xl mx-auto mt-12 sm:mt-16 px-4 sm:px-6"
      >
        <div className="bg-gray-100 border border-gray-200 p-5 sm:p-6 rounded-xl text-center">
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            So we built what the system{" "}
            <span className="text-blue-600 font-medium">never did</span> — for
            you.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
