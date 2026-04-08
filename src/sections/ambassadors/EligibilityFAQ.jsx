import React from "react";
import { motion } from "framer-motion";

export default function EligibilityFAQ() {
  return (
    <section className="bg-gray-50 py-20 md:py-24">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-10">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-2xl md:text-4xl font-bold mb-6">
            Are you the right person?
          </h2>

          {/* YES BOX */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="bg-green-50 border border-green-100 rounded-2xl p-6 mb-6"
          >
            <p className="text-xs text-gray-500 mb-4">YES IF YOU ARE:</p>

            <ul className="space-y-3 text-sm text-gray-700">
              {[
                "Passionate about student financial wellness",
                "Comfortable speaking & organizing small events",
                "Reliable — if you say you'll do it, you do it",
                "Connected to at least one student community",
                "Creative — you bring your own ideas",
                "Empathetic — talk about finance without judgment",
              ].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.05 }}
                >
                  ✔ {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* NO REQUIREMENTS */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white border border-gray-200 rounded-2xl p-6"
          >
            <p className="text-xs text-gray-500 mb-4">WE DO NOT REQUIRE:</p>

            <ul className="space-y-3 text-sm text-gray-600">
              {[
                "Previous ambassador experience",
                "A large social media following",
                "A specific course or stream",
                "Perfect grades",
                "Already using CreditBuddy",
              ].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.35 + i * 0.05 }}
                >
                  ❌ {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* RIGHT FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          <h2 className="text-2xl md:text-4xl font-bold mb-6">
            Quick answers.
          </h2>

          <div className="space-y-4 text-sm">
            {[
              {
                q: "Do I get paid?",
                a: "Top ambassadors earn Buddy Coins (redeemable for cash credits in-app), exclusive brand perks, and a founder-signed LinkedIn recommendation. High-performers get early access to paid gigs on the platform.",
              },
              {
                q: "How much time?",
                a: "4–6 hours/month. Flexible based on your schedule.",
              },
              {
                q: "My campus doesn’t know CreditBuddy?",
                a: "Even better. You’ll be the pioneer — we support you fully.",
              },
              {
                q: "Alongside studies?",
                a: "Yes. Academics always come first.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.08 }}
                className="bg-white border border-gray-200 rounded-xl p-4 
                hover:shadow-sm hover:-translate-y-[2px] transition-all duration-300"
              >
                <p className="font-medium">{item.q}</p>
                <p className="text-gray-500 text-xs mt-1">{item.a}</p>
              </motion.div>
            ))}
          </div>

          {/* ✅ EXTRA CTA (conversion boost) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-6 text-center"
          >
            <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium shadow hover:scale-[1.03] transition">
              Apply Now →
            </button>

            <p className="text-xs text-gray-400 mt-2">
              Takes 5 minutes. No long essays.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
