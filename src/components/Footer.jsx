import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 pt-14 pb-8 border-t border-white/10">
      {/* TOP GRID */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10"
      >
        {/* LOGO + INFO */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <div className="bg-white text-black px-4 py-1.5 rounded-xl inline-block font-semibold mb-4">
            CreditBuddy
          </div>

          <p className="text-sm text-gray-400 mb-4 leading-relaxed">
            Building better financial tools for students across India.
          </p>

          <p className="text-xs text-gray-500">
            hello@creditbuddy.app <br />
            Bangalore, India
          </p>
        </motion.div>

        {/* PRODUCT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
        >
          <h4 className="text-white font-semibold mb-4">Product</h4>
          <ul className="space-y-2 text-sm">
            {["How it works", "For Students", "Borrow", "Earn"].map(
              (item, i) => (
                <li
                  key={i}
                  className="hover:text-white transition cursor-pointer"
                >
                  {item}
                </li>
              ),
            )}
          </ul>
        </motion.div>

        {/* COMPANY */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <h4 className="text-white font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            {["About", "Blog", "Careers", "Contact"].map((item, i) => (
              <li
                key={i}
                className="hover:text-white transition cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* CONNECT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
        >
          <h4 className="text-white font-semibold mb-4">Connect</h4>

          {/* SOCIAL */}
          <div className="flex gap-3 mb-5">
            {["in", "ig", "tw"].map((item, i) => (
              <div
                key={i}
                className="w-9 h-9 bg-white/10 flex items-center justify-center rounded-full 
                hover:bg-white/20 hover:scale-105 transition duration-300 cursor-pointer text-sm"
              >
                {item}
              </div>
            ))}
          </div>

          {/* TRUST BOX */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-xs space-y-2 text-gray-400">
            <p>✔ RBI Compliant</p>
            <p>✔ Data Security</p>
            <p>✔ Student First</p>
          </div>
        </motion.div>
      </motion.div>

      {/* BOTTOM */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="max-w-7xl mx-auto px-6 mt-10 pt-6 border-t border-white/10 text-xs flex flex-col md:flex-row justify-between gap-4"
      >
        <p className="text-gray-500">
          © {new Date().getFullYear()} CreditBuddy. All rights reserved.
        </p>

        <div className="flex gap-4">
          <span className="hover:text-white transition cursor-pointer">
            Privacy Policy
          </span>
          <span className="hover:text-white transition cursor-pointer">
            Terms
          </span>
        </div>
      </motion.div>
    </footer>
  );
}
