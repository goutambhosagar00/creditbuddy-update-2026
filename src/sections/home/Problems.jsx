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
    <section className="bg-gradient-to-b from-white via-gray-50 to-white text-gray-900 py-20 sm:py-24 overflow-hidden">
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-6xl mx-auto px-5 sm:px-8 text-center mb-14 sm:mb-20"
      >
        <p className="text-sm uppercase tracking-[0.2em] font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
          WHY WE EXIST
        </p>

        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.2]">
          The financial system <br className="hidden sm:block" />
          <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
            ignores students.
          </span>
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
        {/* Gradient fades on edges for smoother infinite scroll effect */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

        <div className="flex gap-5 sm:gap-7 animate-scroll w-max px-5 sm:px-8">
          {[...cards, ...cards].map((card, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="min-w-[260px] sm:min-w-[280px] md:min-w-[320px] 
                bg-white/90 backdrop-blur-sm border border-gray-100/80 
                p-6 sm:p-7 rounded-2xl 
                shadow-lg hover:shadow-2xl 
                transition-all duration-300 ease-out
                group"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(249,250,251,0.98) 100%)",
              }}
            >
              <div className="text-3xl sm:text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {card.icon}
              </div>

              <h3 className="font-bold mb-3 text-lg sm:text-xl text-gray-800 tracking-tight">
                {card.title}
              </h3>

              <p className="text-sm sm:text-base text-gray-500 leading-relaxed">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CTA BOX */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
        className="max-w-2xl mx-auto mt-16 sm:mt-20 px-5 sm:px-8"
      >
        <div className="relative bg-gradient-to-br from-gray-50/90 to-white/90 backdrop-blur-sm border border-gray-200/80 p-6 sm:p-8 rounded-2xl text-center shadow-md hover:shadow-xl transition-all duration-300">
          {/* Subtle background glow */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-100/20 via-indigo-100/20 to-purple-100/20 blur-xl -z-10" />

          <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-medium">
            So we built what the system{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent font-semibold">
              never did
            </span>{" "}
            — for you.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
