import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Karan T.",
    text: "The transparent pricing is a relief. Other apps hit you with late fees out of nowhere.",
    role: "Delhi NCR",
  },
  {
    name: "Priya S.",
    text: "Banks told me to come back when I have a job. CreditBuddy just helped.",
    role: "Engineering Student",
  },
  {
    name: "Rahul M.",
    text: "Super fast approval. Money came within minutes. Clean UI too!",
    role: "Mumbai",
  },
  {
    name: "Anjali R.",
    text: "Finally something made for students. No hidden charges at all.",
    role: "Bangalore",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-gray-50 py-24 overflow-hidden">
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className="max-w-6xl mx-auto px-6 text-center mb-12"
      >
        <h2 className="text-3xl md:text-5xl font-bold">
          Straight from students.
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
        <div className="flex gap-6 animate-scroll w-max px-6">
          {[...testimonials, ...testimonials].map((item, i) => (
            <div
              key={i}
              className="min-w-[260px] md:min-w-[320px] bg-white p-6 rounded-2xl 
              shadow-sm border border-gray-100 
              transition-all duration-300 hover:shadow-md hover:-translate-y-[3px]"
            >
              {/* STARS */}
              <div className="text-yellow-400 mb-3">★★★★★</div>

              <p className="text-gray-600 text-sm mb-6">"{item.text}"</p>

              {/* USER */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-black text-white flex items-center justify-center rounded-full text-xs">
                  {item.name[0]}
                </div>

                <div>
                  <p className="text-sm font-medium">{item.name}</p>
                  <p className="text-xs text-gray-400">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
