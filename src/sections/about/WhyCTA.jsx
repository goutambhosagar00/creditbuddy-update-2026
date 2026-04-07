import React from "react";
import { motion } from "framer-motion";

export default function WhyCTA() {
  return (
    <>
      {/* WHY SECTION */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-5xl mx-auto px-6">
          {/* HEADING */}
          <motion.h2
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-3xl md:text-5xl font-bold mb-10 text-center"
          >
            Why this isn't just another app.
          </motion.h2>

          {/* POINTS */}
          <div className="space-y-6 text-sm text-gray-600">
            {[
              {
                title: "Tech platform, not a lender",
                desc: "We don’t lend directly. We partner with RBI-regulated NBFCs to ensure fairness.",
              },
              {
                title: "Compliance from day one",
                desc: "Built with legal frameworks first — not fixed later.",
              },
              {
                title: "We help you earn, not just borrow",
                desc: "Unique earn + repay model to reduce dependency on loans.",
              },
              {
                title: "Built with students",
                desc: "Every feature is validated with real student feedback.",
              },
              {
                title: "Transparent to a fault",
                desc: "No hidden charges. What you see is what you pay.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <p className="font-semibold text-black">{item.title}</p>
                <p className="text-xs text-gray-500">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-gray-50 pb-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          {/* HEADING */}
          <motion.h2
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-3xl md:text-5xl font-bold mb-12"
          >
            There’s a place for everyone here.
          </motion.h2>

          {/* CARDS */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "I’m a student",
                desc: "Join the waitlist. Get early access.",
                color: "bg-blue-50 text-blue-600",
                btn: "Join Now →",
              },
              {
                title: "I want to lead",
                desc: "Become a campus ambassador.",
                color: "bg-green-50 text-green-600",
                btn: "Apply Now →",
              },
              {
                title: "I want to partner",
                desc: "Colleges, NBFCs, brands — let’s build together.",
                color: "bg-yellow-50 text-yellow-600",
                btn: "Contact Us →",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`${item.color} rounded-2xl p-6 
                hover:-translate-y-[3px] hover:shadow-md transition-all duration-300`}
              >
                <h3 className="font-semibold mb-2 text-black">{item.title}</h3>

                <p className="text-xs text-gray-600 mb-4">{item.desc}</p>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-sm font-medium"
                >
                  {item.btn}
                </motion.button>
              </motion.div>
            ))}
          </div>

          {/* SMALL LINKS */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-8 flex flex-wrap justify-center gap-4 text-xs text-gray-400"
          >
            <span>Investor enquiries</span>
            <span>•</span>
            <span>Subject investor inquiry →</span>
          </motion.div>
        </div>
      </section>
    </>
  );
}
