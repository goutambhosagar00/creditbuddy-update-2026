import React from "react";
import { motion } from "framer-motion";
import {
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
  FaWhatsapp,
  FaTelegram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative text-gray-200 antialiased">
      {/* BACKGROUND with premium gradient overlay + enhanced blur */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
          alt="bg"
          className="w-full h-full object-cover"
        />
        {/* Modern gradient overlay: deep indigo to purple with increased opacity for richness */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-indigo-950/85 to-purple-950/85 backdrop-blur-md"></div>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 py-12 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="grid md:grid-cols-4 gap-10 md:gap-12"
        >
          {/* INFO COLUMN */}
          <div>
            <h2 className="font-bold text-2xl bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent mb-3 tracking-tight">
              CreditBuddy Partners Pvt Ltd
            </h2>

            <p className="text-sm leading-relaxed text-gray-300 mb-4 max-w-xs">
              Building a better financial ecosystem for students across India.
            </p>

            <p className="text-sm text-gray-400 flex items-center gap-2">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
              Sambalpur, Odisha, India
            </p>

            <p className="mt-4 text-sm text-gray-300 font-medium tracking-wide">
              ✉️ info@creditbuddy.org.in
            </p>
          </div>

          {/* IMPORTANT LINKS (FIXED) */}
          <div>
            <h4 className="text-white font-semibold tracking-wide text-sm uppercase mb-5 border-l-2 border-indigo-400 pl-3">
              Important Links
            </h4>

            <ul className="space-y-2.5 text-sm">
              {[
                {
                  name: "Privacy",
                  file: "/pdfs/privacy-policy.pdf",
                },
                {
                  name: "Terms of services",
                  file: "/pdfs/terms-of-service.pdf",
                },
                {
                  name: "Disclaimer",
                  file: "/pdfs/disclaimer.pdf",
                },
                {
                  name: "Safety & security",
                  file: "/pdfs/safety-security.pdf",
                },
                {
                  name: "Regulatory Disclosure",
                  file: "/pdfs/Regulatory_Disclosure.pdf",
                },
                {
                  name: "User Agreement",
                  file: "/pdfs/User_Agreement.pdf",
                },
              ].map((item, i) => (
                <li key={i}>
                  <a
                    href={item.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-all duration-200 hover:translate-x-1 inline-block"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h4 className="text-white font-semibold tracking-wide text-sm uppercase mb-5 border-l-2 border-indigo-400 pl-3">
              Company
            </h4>

            <ul className="space-y-2.5 text-sm">
              {[
                "Careers",
                "Help center",
                "Contact us",
                "Report fraud",
                "Press",
                "About Us",
              ].map((item, i) => (
                <li
                  key={i}
                  className="text-gray-300 hover:text-white cursor-pointer transition-all duration-200 hover:translate-x-1"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* SOCIAL + SECURITY */}
          <div>
            <h4 className="text-white font-semibold tracking-wide text-sm uppercase mb-5 border-l-2 border-indigo-400 pl-3">
              Connect with us
            </h4>

            <div className="flex flex-wrap gap-3 mb-8">
              <a
                href="https://x.com/CreditBuddyX"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm text-gray-200 hover:text-white hover:bg-indigo-500/60 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                aria-label="Twitter"
              >
                <FaTwitter size={18} />
              </a>

              <a
                href="https://www.linkedin.com/company/creditbuddy/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm text-gray-200 hover:text-white hover:bg-indigo-500/60 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={18} />
              </a>

              <a
                href="https://www.instagram.com/creditbuddy_official"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm text-gray-200 hover:text-white hover:bg-indigo-500/60 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                aria-label="Instagram"
              >
                <FaInstagram size={18} />
              </a>

              <a
                href="https://www.youtube.com/channel/UCW2mT5e2qFsDY1O58VXNzig"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm text-gray-200 hover:text-white hover:bg-indigo-500/60 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                aria-label="YouTube"
              >
                <FaYoutube size={18} />
              </a>

              <a
                href="https://whatsapp.com/channel/0029VbBzvW7FMqrV5Qj8SG0T"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm text-gray-200 hover:text-white hover:bg-indigo-500/60 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={18} />
              </a>

              <a
                href="https://t.me/creditbuddyofficialchannel"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm text-gray-200 hover:text-white hover:bg-indigo-500/60 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                aria-label="Telegram"
              >
                <FaTelegram size={18} />
              </a>
            </div>

            <div className="space-y-2 text-sm bg-white/5 rounded-xl p-3 backdrop-blur-sm border border-white/10">
              <p className="flex items-center gap-2 text-gray-300">
                <span className="text-indigo-400 text-base">🔒</span>
                256 Bit SSL Security
              </p>
              <p className="flex items-center gap-2 text-gray-300">
                <span className="text-indigo-400 text-base">✔</span>
                RBI Guidelines Followed
              </p>
            </div>
          </div>
        </motion.div>

        {/* BOTTOM BAR */}
        <div className="mt-12 md:mt-16 pt-6 border-t border-white/15 text-xs text-gray-400 flex flex-col md:flex-row justify-between items-center gap-3">
          <span>
            © {new Date().getFullYear()} CreditBuddy Pvt Ltd. All Rights
            Reserved.
          </span>
          <span className="hidden md:inline text-gray-500">•</span>
          <span className="flex items-center gap-1">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-indigo-400/60"></span>
            Built with precision
          </span>
        </div>
      </div>
    </footer>
  );
}
