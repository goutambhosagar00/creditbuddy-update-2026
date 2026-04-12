import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import "../../index.css";
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
  const [activeIndex, setActiveIndex] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef(null);

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-16 sm:py-24 overflow-hidden">
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto px-4 sm:px-6 text-center mb-12"
      >
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold tracking-tight text-gray-900">
          Trusted by students across campuses.
        </h2>
        <p className="text-gray-500 mt-3 text-sm sm:text-base">
          Real stories from real students using CreditBuddy
        </p>
      </motion.div>

      {/* SCROLL AREA */}
      <div
        ref={scrollRef}
        className="overflow-x-auto no-scrollbar scroll-smooth px-4 sm:px-6 cursor-grab active:cursor-grabbing"
      >
        <div
          className={`flex gap-4 sm:gap-6 w-max ${
            isPaused ? "" : "animate-scroll"
          }`}
        >
          {[...testimonials, ...testimonials].map((item, i) => (
            <div
              key={i}
              onClick={() => {
                setActiveIndex(i);
                setIsPaused(true);
              }}
              onTouchStart={() => {
                setActiveIndex(i);
                setIsPaused(true);
              }}
              className={`snap-center min-w-[260px] sm:min-w-[300px] md:min-w-[340px] 
              
              backdrop-blur-xl bg-white/80
              border rounded-2xl p-5 sm:p-6
              transition-all duration-300 cursor-pointer
              
              ${
                activeIndex === i
                  ? "border-black shadow-lg scale-[1.03]"
                  : "border-gray-200 hover:shadow-md hover:scale-[1.02]"
              }`}
            >
              {/* STARS */}
              <div className="text-yellow-400 text-sm mb-3">★★★★★</div>

              {/* TEXT */}
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                "{item.text}"
              </p>

              {/* USER */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-black text-white flex items-center justify-center rounded-full text-sm font-medium">
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
      </div>
    </section>
  );
}
