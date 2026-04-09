import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative text-gray-300">
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
          alt="bg"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-14">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-4 gap-10"
        >
          {/* LOGO + INFO */}
          <div>
            <h2 className=" font-bold text-purple-400 mb-3">
              CreditBuddy Partners Pvt Ltd
            </h2>

            <p className="text-sm mb-4">
              Building a better financial ecosystem for students across India.
            </p>

            {/* ADDRESS */}
            <p className="text-sm text-gray-400 leading-relaxed">
              Corporate office address: <br />
              Sambalpur, Odisha, India
            </p>

            {/* CONTACT */}
            <div className="mt-4 text-sm">
              +<p>✉️ info@creditbuddy.org.in</p>
            </div>
          </div>

          {/* IMPORTANT LINKS */}
          <div>
            <h4 className="text-white font-semibold mb-4">Important Links</h4>

            <ul className="space-y-2 text-sm">
              {[
                "Privacy",
                "Terms of services",
                "Disclaimer",
                "Safety & security",
                "Customer service",
                "Rates & pricing",
                "Policies",
                "Product info",
              ].map((item, i) => (
                <li key={i} className="hover:text-white cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>

            <ul className="space-y-2 text-sm">
              {[
                "Careers",
                "Help center",
                "Contact us",
                "Report fraud",
                "Press",
                "About Us",
              ].map((item, i) => (
                <li key={i} className="hover:text-white cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* CONNECT */}
          <div>
            <h4 className="text-white font-semibold mb-4">Connect with us</h4>

            <div className="flex gap-4 mb-6">
              {["X", "in", "f", "ig"].map((icon, i) => (
                <div
                  key={i}
                  className="w-10 h-10 bg-white/10 flex items-center justify-center rounded-full 
                  hover:bg-white/20 transition cursor-pointer"
                >
                  {icon}
                </div>
              ))}
            </div>

            {/* SECURITY */}
            <div className="text-sm space-y-2">
              <p>🔒 256 Bit SSL Security</p>
              <p>✔ RBI Guidelines Followed</p>
            </div>
          </div>
        </motion.div>

        {/* BOTTOM */}
        <div className="mt-10 pt-6 border-t border-white/10 text-xs text-gray-400 flex flex-col md:flex-row justify-between">
          <p>
            © {new Date().getFullYear()} CreditBuddy Pvt Ltd. All Rights
            Reserved.
          </p>

          <div className="flex gap-4 mt-3 md:mt-0">
            <a href="#" className="hover:text-white">
              Privacy
            </a>
            <a href="#" className="hover:text-white">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
