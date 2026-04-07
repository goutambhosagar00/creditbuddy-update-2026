import React from "react";
import { motion } from "framer-motion";

export default function Earn() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200"
        >
          {/* HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-10 h-10 bg-green-600 text-white flex items-center justify-center rounded-lg">
              💰
            </div>
            <h2 className="text-xl md:text-2xl font-semibold">Earn</h2>
          </motion.div>

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-gray-600 mb-8 text-sm md:text-base"
          >
            Real income. Real flexibility. We don’t just give you money — we
            help you make it. Connect with verified, flexible opportunities.
          </motion.p>

          {/* CARDS */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "🧪",
                title: "Product Testing",
                desc: "Test apps and services. Earn ₹500–₹1000 per task.",
              },
              {
                icon: "💻",
                title: "Freelance Work",
                desc: "Writing, design, social media — based on your skills.",
              },
              {
                icon: "📢",
                title: "Campus Gigs",
                desc: "Promote events & brands. Flexible work, real pay.",
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.08 }}
                className="bg-gray-50 p-5 rounded-xl 
                hover:shadow-sm hover:-translate-y-[2px] transition-all duration-300"
              >
                <div className="text-2xl mb-3">{card.icon}</div>
                <h3 className="font-medium mb-2">{card.title}</h3>
                <p className="text-xs text-gray-500">{card.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* FOOTER STRIP */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-8 bg-black text-white rounded-xl p-4 text-sm flex flex-col md:flex-row justify-between gap-2"
          >
            <span>
              Earn-to-Repay: Apply your earnings directly to your loan.
            </span>
            <span className="text-green-400">Reduce interest & stress.</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
