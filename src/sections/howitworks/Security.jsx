import React from "react";
import { motion } from "framer-motion";

export default function Security() {
  return (
    <section className="bg-gray-50 py-24">
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className="max-w-6xl mx-auto px-6 text-center mb-12"
      >
        <h2 className="text-3xl md:text-5xl font-bold">
          Your money and data are safe. <br />
          <span className="text-blue-600">Here’s exactly how.</span>
        </h2>
      </motion.div>

      {/* CARDS */}
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6">
        {[
          {
            icon: "🔒",
            title: "Data Security",
            items: [
              "AES-256 bank-level encryption",
              "Edge-to-edge data safety",
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
              "CivilJudiciary Partner (India)",
              "Tech partners AWS / GCP",
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
              delay: i * 0.08, // 👈 subtle stagger
              ease: "easeOut",
            }}
            className="bg-white rounded-2xl p-6 border border-gray-200 
            shadow-sm hover:shadow-md hover:-translate-y-[3px] 
            transition-all duration-300"
          >
            <div className="text-2xl mb-3">{card.icon}</div>

            <h3 className="font-semibold mb-3">{card.title}</h3>

            <ul className="text-sm text-gray-600 space-y-2">
              {card.items.map((item, idx) => (
                <li key={idx}>✔ {item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
