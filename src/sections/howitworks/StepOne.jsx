import React from "react";
import { motion } from "framer-motion";

export default function StepOne() {
  return (
    <section className="bg-gray-50 py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col lg:flex-row gap-10 lg:gap-12 items-center">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="w-full lg:w-1/2"
        >
          <span className="bg-blue-100 text-blue-600 text-xs px-3 py-1 rounded-full">
            STEP 1
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mt-4 mb-6 leading-tight">
            Create your account. 2 minutes.
          </h2>

          <ul className="space-y-5 text-gray-600 text-sm sm:text-base">
            {[
              {
                title: "What you need",
                desc: "Phone number · Student ID or college email · Aadhaar card · PAN card",
              },
              {
                title: "Download",
                desc: "Android app — download free. iOS coming Q3 2026.",
              },
              {
                title: "Phone verify",
                desc: "Enter mobile → OTP → done. 15 seconds.",
              },
              {
                title: "Student verify",
                desc: "Upload student ID OR verify with college email.",
              },
              {
                title: "KYC",
                desc: "Aadhaar + PAN + selfie. Under 2 minutes. Instant approval.",
              },
            ].map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.06 }}
                className="flex gap-3"
              >
                <span className="text-blue-600 mt-[2px]">✔</span>
                <div>
                  <p className="font-medium text-gray-900">{item.title}</p>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* RIGHT PHONE MOCK */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="w-full lg:w-1/2 flex justify-center"
        >
          <div className="w-[240px] sm:w-[260px] h-[460px] sm:h-[500px] bg-black rounded-3xl border-[6px] border-gray-800 shadow-xl p-3 sm:p-4">
            <div className="bg-white rounded-2xl h-full p-4 flex flex-col justify-between">
              <h3 className="text-center text-sm font-medium mb-4 text-gray-900">
                Verify Identity
              </h3>

              <div className="space-y-3 text-xs sm:text-sm">
                {["Phone Verified", "Student ID Verified", "KYC Complete"].map(
                  (item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + i * 0.1 }}
                      className={`flex justify-between items-center p-3 rounded-lg ${
                        i === 2 ? "bg-green-500 text-white" : "bg-gray-100"
                      }`}
                    >
                      <span>{item}</span>
                      <span className={i === 2 ? "" : "text-blue-600"}>✔</span>
                    </motion.div>
                  ),
                )}
              </div>

              <motion.button
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
                className="mt-6 w-full py-2.5 rounded-lg bg-blue-600 text-white text-sm font-medium hover:opacity-90 transition"
              >
                Continue
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
