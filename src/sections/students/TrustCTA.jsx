import React from "react";
import { motion } from "framer-motion";

export default function TrustCTA() {
  return (
    <>
      {/* TRUST SECTION */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="text-3xl md:text-4xl font-bold mb-10"
          >
            Students trust us. Here's why.
          </motion.h2>

          {/* STATS */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                value: "75%",
                text: "Students use CreditBuddy for urgent needs",
              },
              {
                value: "62%",
                text: "Prefer us over traditional loan apps",
              },
              {
                value: "78%",
                text: "Report lower stress after using CreditBuddy",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <h3 className="text-3xl font-bold text-blue-600">
                  {item.value}
                </h3>
                <p className="text-sm text-gray-500">{item.text}</p>
              </motion.div>
            ))}
          </div>

          {/* TESTIMONIAL */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="bg-white border border-gray-200 rounded-xl p-6 max-w-2xl mx-auto text-sm text-gray-600"
          >
            <p className="italic">
              “I didn’t think a loan app could be ethical. Then I found
              CreditBuddy.”
            </p>
            <p className="mt-3 text-xs text-gray-400">— Karan T., Student</p>
          </motion.div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="relative py-24 text-white overflow-hidden">
        {/* BACKGROUND */}
        <div className="absolute inset-0 bg-black">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-700/30 blur-[120px]"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/20 blur-[120px]"></div>
        </div>

        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="text-3xl md:text-5xl font-bold"
          >
            Your financial life starts here.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 mt-4 mb-8 text-sm"
          >
            Join the waitlist. Get early access.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.96 }}
            className="px-8 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 font-medium hover:opacity-90"
          >
            Get Early Access →
          </motion.button>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-xs text-gray-500 mt-4"
          >
            Become a Campus Ambassador
          </motion.p>
        </div>
      </section>
    </>
  );
}
