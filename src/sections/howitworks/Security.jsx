import React from "react";
import { motion } from "framer-motion";

export default function Security() {
  return (
    <section className="bg-gray-50 py-16 sm:py-24">
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className="max-w-6xl mx-auto px-4 sm:px-6 text-center mb-10 sm:mb-14"
      >
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold tracking-tight leading-tight">
          Your money and data are safe. <br />
          <span className="text-blue-600">Here’s exactly how.</span>
        </h2>
      </motion.div>

      {/* CARDS */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6">
        {[
          {
            icon: "🔒",
            title: "Data Security",
            items: [
              "AES-256 bank-level encryption",
              "End-to-end data protection",
              "2FA enabled",
              "User data is never sold",
            ],
          },
          {
            icon: "⚖️",
            title: "Financial Safety",
            items: [
              "RBI-aligned NBFC partner",
              "Full pricing shown upfront",
              "No hidden charges",
              "Fair collections policy",
            ],
          },
          {
            icon: "🛡️",
            title: "Legal Compliance",
            items: [
              "Registered legal partners (India)",
              "Secure infra (AWS / GCP)",
              "NBFC partner model",
              "Full KYC & RBI compliance",
            ],
          },
        ].map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.6,
              delay: i * 0.08,
              ease: "easeOut",
            }}
            className="bg-white rounded-2xl p-5 sm:p-6 border border-gray-200 
            shadow-sm hover:shadow-lg hover:-translate-y-[4px] 
            transition-all duration-300"
          >
            {/* ICON */}
            <div className="text-xl sm:text-2xl mb-3">{card.icon}</div>

            {/* TITLE */}
            <h3 className="font-semibold mb-3 text-gray-900">{card.title}</h3>

            {/* LIST */}
            <ul className="text-sm text-gray-600 space-y-2">
              {card.items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-blue-600 mt-[2px]">✔</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
