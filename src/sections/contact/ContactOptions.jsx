import React from "react";
import { motion } from "framer-motion";

export default function ContactOptions({ openInvestorModal }) {
  return (
    <section className="bg-gray-50 pb-24">
      {/* HEADING */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto px-6 text-center mb-12"
      >
        <h2 className="text-2xl md:text-3xl font-semibold">
          What brings you here?
        </h2>
        <p className="text-gray-500 text-sm mt-2">
          Pick your path — we’ll take you there.
        </p>
      </motion.div>

      {/* GRID */}
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6">
        {/* STUDENT */}
        <motion.div
          whileHover={{ y: -4 }}
          className="bg-white border border-gray-200 rounded-2xl p-6 text-center shadow-sm"
        >
          <div className="text-3xl mb-4">🎓</div>
          <h3 className="font-semibold mb-2 text-gray-900">I’m a student</h3>
          <p className="text-sm text-gray-500 mb-6">
            Waitlist, earnings, and credit access.
          </p>

          <button className="w-full py-2 rounded-lg bg-blue-600 text-white text-sm hover:opacity-90">
            Join Waitlist →
          </button>
        </motion.div>

        {/* PARTNER */}
        <motion.div
          whileHover={{ y: -4 }}
          className="bg-white border border-gray-200 rounded-2xl p-6 text-center shadow-sm"
        >
          <div className="text-3xl mb-4">🤝</div>
          <h3 className="font-semibold mb-2 text-gray-900">
            I want to partner
          </h3>
          <p className="text-sm text-gray-500 mb-6">
            Colleges, NBFCs, brands — let’s collaborate.
          </p>

          <button className="w-full py-2 rounded-lg bg-green-600 text-white text-sm hover:opacity-90">
            Start a Conversation →
          </button>
        </motion.div>

        {/* INVESTOR */}
        <motion.div
          whileHover={{ y: -4 }}
          className="bg-white border border-gray-200 rounded-2xl p-6 text-center shadow-sm"
        >
          <div className="text-3xl mb-4">💼</div>
          <h3 className="font-semibold mb-2 text-gray-900">I’m an investor</h3>
          <p className="text-sm text-gray-500 mb-6">
            Deck, metrics, and traction insights.
          </p>

          <button
            onClick={openInvestorModal}
            className="w-full py-2 rounded-lg bg-black text-white text-sm hover:opacity-90"
          >
            Request Deck →
          </button>
        </motion.div>
      </div>
    </section>
  );
}
