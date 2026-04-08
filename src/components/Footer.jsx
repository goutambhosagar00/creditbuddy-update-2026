import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 pt-14 pb-8 border-t border-white/10">
      {/* TOP GRID */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10"
      >
        {/* LOGO + INFO */}
        <div>
          <div className="bg-white text-black px-4 py-1.5 rounded-xl inline-block font-semibold mb-4">
            CreditBuddy
          </div>

          <p className="text-sm text-gray-400 mb-4 leading-relaxed">
            Building better financial tools for students across India.
          </p>

          {/* ✅ FIXED EMAIL + LOCATION */}
          <p className="text-xs text-gray-500">
            hello@creditbuddy.in <br />
            Sambalpur, Odisha, India
          </p>
        </div>

        {/* PRODUCT */}
        <div>
          <h4 className="text-white font-semibold mb-4">Product</h4>
          <ul className="space-y-2 text-sm">
            {[
              { name: "How it works", link: "/how-it-works" },
              { name: "For Students", link: "/students" },
              { name: "Borrow", link: "/borrow" },
              { name: "Earn", link: "/earn" },
            ].map((item, i) => (
              <li key={i}>
                <a href={item.link} className="hover:text-white transition">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* COMPANY */}
        <div>
          <h4 className="text-white font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            {[
              { name: "About", link: "/about" },
              { name: "Blog", link: "/blog" },
              { name: "Careers", link: "/careers" },
              { name: "Contact", link: "/contact" },
            ].map((item, i) => (
              <li key={i}>
                <a href={item.link} className="hover:text-white transition">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* CONNECT */}
        <div>
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
        </div>
      </motion.div>

      {/* BOTTOM */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="max-w-7xl mx-auto px-6 mt-10 pt-6 border-t border-white/10 text-xs flex flex-col md:flex-row justify-between gap-4"
      >
        {/* ✅ FIXED COPYRIGHT */}
        <p className="text-gray-500">
          © {new Date().getFullYear()} CreditBuddy Partners Private Limited. All
          rights reserved.
        </p>

        {/* ✅ FIXED LINKS */}
        <div className="flex gap-4">
          <a href="/privacy-policy" className="hover:text-white transition">
            Privacy Policy
          </a>
          <a href="/terms" className="hover:text-white transition">
            Terms
          </a>
        </div>
      </motion.div>
    </footer>
  );
}
