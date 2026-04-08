import React from "react";
import { motion } from "framer-motion";

export default function WhyCTA() {
  return (
    <>
      {/* WHY SECTION */}
      <section className="bg-gray-50 py-20 md:py-24">
        <div className="max-w-5xl mx-auto px-6">
          {/* HEADING */}
          <motion.h2
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-3xl md:text-5xl font-bold mb-10 text-center"
          >
            Why this isn’t just another app.
          </motion.h2>

          {/* POINTS */}
          <div className="space-y-6">
            {[
              {
                title: "Tech platform, not a lender",
                desc: "We partner with RBI-regulated NBFCs to ensure fairness and compliance.",
              },
              {
                title: "Compliance from day one",
                desc: "Built with legal frameworks first — not fixed later.",
              },
              {
                title: "Earn, not just borrow",
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
                transition={{ delay: i * 0.08 }}
              >
                <p className="font-semibold text-gray-900">{item.title}</p>
                <p className="text-sm text-gray-600">{item.desc}</p>
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
                desc: "Join the waitlist and get early access.",
                color: "bg-blue-50",
                btn: "Join Waitlist",
              },
              {
                title: "I want to lead",
                desc: "Become a campus ambassador and grow with us.",
                color: "bg-green-50",
                btn: "Apply Now",
              },
              {
                title: "I want to partner",
                desc: "Colleges, NBFCs, brands — let’s build together.",
                color: "bg-yellow-50",
                btn: "Contact Us",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`${item.color} rounded-2xl p-6 text-left 
                hover:-translate-y-[4px] hover:shadow-lg transition-all duration-300`}
              >
                <h3 className="font-semibold mb-2 text-gray-900">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-600 mb-5">{item.desc}</p>

                {/* BUTTON */}
                <button className="px-5 py-2 rounded-lg bg-black text-white text-sm font-medium hover:opacity-90">
                  {item.btn} →
                </button>
              </motion.div>
            ))}
          </div>

          {/* TRUST LINE */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-6 text-xs text-gray-500"
          >
            No spam. No hidden charges. Just a better financial system.
          </motion.p>

          {/* INVESTOR LINK */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-3 text-xs text-gray-400"
          >
            For investor enquiries: hello@creditbuddy.in
          </motion.div>
        </div>
      </section>
    </>
  );
}
