import React from "react";
import { motion } from "framer-motion";

export default function TrustCTA() {
  return (
    <>
      {/* TRUST SECTION */}
      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-8 sm:mb-10"
          >
            Students trust us. Here's why.
          </motion.h2>

          {/* STATS */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-12">
            {[
              {
                value: "79%",
                text: "Students use CreditBuddy for urgent needs",
              },
              {
                value: "67%",
                text: "Prefer us over traditional loan apps",
              },
              {
                value: "86%",
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
                <h3 className="text-2xl sm:text-3xl font-bold text-blue-600">
                  {item.value}
                </h3>
                <p className="text-sm text-gray-500 mt-1">{item.text}</p>
              </motion.div>
            ))}
          </div>

          {/* TESTIMONIAL */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="bg-white border border-gray-200 rounded-xl p-5 sm:p-6 max-w-2xl mx-auto text-sm text-gray-600"
          >
            <p className="italic">
              “I didn’t think a loan app could be ethical. Then I found
              CreditBuddy.”
            </p>
            <p className="mt-3 text-xs text-gray-400">
              — Sneha Agrawal T., IIM Bangalore
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="relative py-16 sm:py-24 text-white overflow-hidden">
        {/* BACKGROUND */}
        <div className="absolute inset-0 bg-black">
          <div className="absolute top-0 right-0 w-[400px] sm:w-[500px] h-[300px] sm:h-[500px] bg-purple-700/30 blur-[120px]"></div>
          <div className="absolute bottom-0 left-0 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-blue-500/20 blur-[120px]"></div>
        </div>

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="text-2xl sm:text-3xl md:text-5xl font-semibold leading-tight"
          >
            Your financial life <br className="hidden sm:block" />
            starts here.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 mt-4 mb-6 sm:mb-8 text-sm sm:text-base"
          >
            Join the waitlist. Get early access before everyone else.
          </motion.p>

          {/* CTA BUTTON */}
          <motion.button
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.96 }}
            className="w-full sm:w-auto px-6 sm:px-8 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 font-medium shadow-lg"
          >
            Get Early Access →
          </motion.button>

          {/* MICRO COPY */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-xs text-gray-500 mt-3"
          >
            No spam. No calls. Just early access.
          </motion.p>

          {/* SECONDARY CTA */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.45 }}
            className="text-xs text-gray-400 mt-2 underline cursor-pointer"
          >
            Become a Campus Ambassador
          </motion.p>
        </div>
      </section>
    </>
  );
}
