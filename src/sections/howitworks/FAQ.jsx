import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "Who can use CreditBuddy?",
    a: "College students aged 18–30 with valid ID and KYC.",
  },
  {
    q: "How much can I borrow?",
    a: "₹500 to ₹10,000 initially. Limits increase over time.",
  },
  {
    q: "What does it cost?",
    a: "Transparent pricing shown before you confirm. No hidden fees.",
  },
  {
    q: "How fast is disbursal?",
    a: "Usually within minutes via UPI or bank.",
  },
  {
    q: "What if I can’t repay on time?",
    a: "You can extend your due date with minimal charges.",
  },
  {
    q: "Is CreditBuddy a bank or NBFC?",
    a: "We partner with RBI-regulated NBFCs.",
  },
  {
    q: "What are Buddy Coins?",
    a: "Rewards earned from tasks and learning modules.",
  },
  {
    q: "Is my data safe?",
    a: "Yes. Bank-level encryption and strict privacy policies.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-4xl mx-auto px-6">
        {/* HEADER */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-5xl font-bold text-center mb-10"
        >
          Quick answers.
        </motion.h2>

        {/* FAQ LIST */}
        <div className="space-y-4">
          {faqs.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden"
            >
              {/* QUESTION */}
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex justify-between items-center p-4 text-left"
              >
                <span className="font-medium">{item.q}</span>

                {/* ICON ROTATION */}
                <motion.span
                  animate={{ rotate: openIndex === i ? 45 : 0 }}
                  className="text-gray-400 text-lg"
                >
                  +
                </motion.span>
              </button>

              {/* ANSWER */}
              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 pb-4 text-sm text-gray-600">
                      {item.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
