import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 text-gray-900 overflow-hidden">
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[500px] h-[300px] bg-purple-500/20 blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-500/20 blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-16 grid lg:grid-cols-2 gap-10 items-center">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* EYEBROW */}
          <p className="text-sm text-gray-600 mb-3 font-medium">
            Borrow. Earn. Learn. Build the Future.
          </p>

          {/* HEADLINE */}
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-5">
            India’s student-first financial ecosystem.
            {/* <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              Credit, earning, and financial literacy — all in one place.
            </span> */}
          </h1>

          {/* SUBHEADLINE */}
          <p className="text-gray-700 max-w-xl text-sm md:text-base leading-relaxed mb-4">
            No more predatory loans. No more financial stress. CreditBuddy is
            built by students, for students — giving you fair access to credit,
            ways to earn, and the knowledge to manage your money wisely.
          </p>

          {/* MICRO TRUST */}
          <p className="text-gray-500 text-xs mb-6">
            No salary slip. No credit history needed. No hidden charges. Ever.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <button className="px-6 py-3 rounded-full text-white font-medium bg-gradient-to-r from-blue-600 to-purple-700 hover:scale-105 transition">
              Get Early Access →
            </button>

            <button className="px-6 py-3 rounded-full text-purple-600 hover:underline">
              See How It Works →
            </button>
          </div>

          {/* TRUST CHIPS */}
          <div className="flex flex-wrap gap-4 text-sm text-gray-700">
            <span>✔ RBI-Compliant</span>
            <span>✔ No Data Selling</span>
            <span>⚡ Disbursed in Minutes</span>
          </div>
        </motion.div>

        {/* RIGHT CARD */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex justify-center lg:justify-end"
        >
          <div className="bg-white/30 backdrop-blur-xl p-6 rounded-3xl shadow-xl w-[90%] max-w-[340px]">
            <p className="text-xs text-green-600 mb-2">✔ Verified Profile</p>

            <h2 className="text-2xl font-bold">₹5,000</h2>
            <p className="text-gray-500 text-xs mb-4">Available Limit</p>

            <button className="w-full py-2.5 bg-black text-white rounded-lg">
              Withdraw to Bank
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
