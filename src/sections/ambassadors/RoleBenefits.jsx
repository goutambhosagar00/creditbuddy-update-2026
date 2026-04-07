import React from "react";
import { motion } from "framer-motion";

export default function RoleBenefits() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-start">
        {/* LEFT - ROLE */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            What does an Ambassador actually do?
          </h2>

          <p className="text-gray-500 text-sm mb-8">
            This is leadership, not marketing.
          </p>

          <ul className="space-y-5 text-sm text-gray-600">
            {[
              {
                title: "Run",
                desc: "Financial literacy workshops — budgeting, credit, smart borrowing",
              },
              {
                title: "Organise",
                desc: "Awareness sessions, Q&As, campus events that matter",
              },
              {
                title: "Build",
                desc: "A peer community where students talk money without shame",
              },
              {
                title: "Feed back",
                desc: "Share real student insights with the CreditBuddy team",
              },
              {
                title: "Time",
                desc: "4–6 hours/month minimum. Studies always come first.",
              },
            ].map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.07 }}
              >
                <p className="font-medium text-black">{item.title}</p>
                <p className="text-xs text-gray-500">{item.desc}</p>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* RIGHT - BENEFITS */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm"
        >
          <h3 className="text-lg font-semibold mb-4">
            Here’s what’s in it for you.
          </h3>

          <div className="space-y-5 text-sm text-gray-600">
            {[
              {
                title: "Career capital",
                desc: "Leadership certificate, LinkedIn endorsement, founder recommendation",
              },
              {
                title: "Recognition",
                desc: "Featured on website, awards, exclusive events & meetups",
              },
              {
                title: "Perks",
                desc: "Early access, beta features, Buddy Coins, exclusive goodies",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.08 }}
              >
                <p className="font-medium text-black">✔ {item.title}</p>
                <p className="text-xs text-gray-500">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* QUOTE */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-6 text-xs text-gray-500 italic border-t pt-4"
          >
            “And the part that doesn’t fit a bullet: helping a fellow student
            access fair credit when they’re stuck is a genuinely good thing to
            do.”
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
