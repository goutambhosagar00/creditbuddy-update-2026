import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Rahul M.",
    college: "IIT Bhubaneswar, 2nd Year",
    text: "Banks told me to come back after I get a job. CreditBuddy helped me clear my hostel dues in minutes.",
  },
  {
    name: "Sneha T.",
    college: "VSSUT Burla, 3rd Year",
    text: "Honestly didn’t expect this. No hidden fees, no calls, no pressure. It actually feels fair.",
  },
  {
    name: "Arjun K.",
    college: "KIIT University, Final Year",
    text: "Used the Earn section for small tasks and repaid early. That feature really makes a difference.",
  },
  {
    name: "Priya S.",
    college: "Delhi University, 2nd Year",
    text: "Super simple process. No paperwork stress. Got money exactly when I needed it.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-gray-50 py-16 sm:py-24 overflow-hidden">
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className="max-w-6xl mx-auto px-4 sm:px-6 text-center mb-10 sm:mb-14"
      >
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold tracking-tight">
          Trusted by students across campuses.
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
        <div className="flex gap-4 sm:gap-6 animate-scroll w-max px-4 sm:px-6">
          {[...testimonials, ...testimonials].map((item, i) => (
            <div
              key={i}
              className="min-w-[240px] sm:min-w-[260px] md:min-w-[320px] 
              bg-white p-5 sm:p-6 rounded-2xl 
              shadow-sm border border-gray-100 
              transition-all duration-300 hover:shadow-md hover:-translate-y-[4px]"
            >
              {/* STARS */}
              <div className="text-yellow-400 mb-3 text-sm tracking-wide">
                ★★★★★
              </div>

              {/* TEXT */}
              <p className="text-gray-600 text-sm leading-relaxed mb-5">
                "{item.text}"
              </p>

              {/* USER */}
              <div className="flex items-center gap-3">
                {/* AVATAR */}
                <div className="w-9 h-9 bg-gray-900 text-white flex items-center justify-center rounded-full text-xs font-medium">
                  {item.name[0]}
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-900">
                    {item.name}
                  </p>
                  <p className="text-xs text-gray-400">{item.college}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
