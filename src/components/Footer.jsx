import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
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
            <h2 className="font-bold text-purple-400 mb-3">
              CreditBuddy Partners Pvt Ltd
            </h2>

            <p className="text-sm mb-4">
              Building a better financial ecosystem for students across India.
            </p>

            <p className="text-sm text-gray-400 leading-relaxed">
              Corporate office address: <br />
              Sambalpur, Odisha, India
            </p>

            <div className="mt-4 text-sm">
              <p>✉️ info@creditbuddy.org.in</p>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Important Links</h4>

            <ul className="space-y-2 text-sm">
              {[
                {
                  name: "Privacy",
                  file: "../../public/pdfs/02_CreditBuddy_Privacy_Policy.pdf.pdf",
                },
                {
                  name: "Terms of services",
                  file: "../../public/pdfs/01_CreditBuddy_Terms_of_Service.pdf.pdf",
                },
                {
                  name: "Disclaimer",
                  file: "../../public/pdfs/03_CreditBuddy_Disclaimer.pdf.pdf",
                },
                {
                  name: "Safety & security",
                  file: "../../public/pdfs/04_CreditBuddy_Safety_and_Security.pdf.pdf",
                },
                {
                  name: "Customer service",
                  file: "../../public/pdfs/05_CreditBuddy_Customer_Service.pdf.pdf",
                },
                {
                  name: "Rates & pricing",
                  file: "../../public/pdfs/06_CreditBuddy_Rates_and_Pricing.pdf.pdf",
                },
                {
                  name: "Policies",
                  file: "../../public/pdfs/07_CreditBuddy_Policies.pdf.pdf",
                },
                {
                  name: "Product info",
                  file: "../../public/pdfs/08_CreditBuddy_Product_Information.pdf.pdf",
                },
              ].map((item, i) => (
                <li key={i}>
                  <a
                    href={item.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition"
                  >
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

            {/* ✅ SOCIAL ICONS WITH LINKS */}
            <div className="flex flex-wrap gap-4 mb-6">
              <a
                href="https://x.com/CreditBuddyX"
                target="_blank"
                rel="noreferrer"
                className="icon"
              >
                <FaTwitter size={18} />
              </a>

              <a
                href="https://www.linkedin.com/company/creditbuddy/"
                target="_blank"
                rel="noreferrer"
                className="icon"
              >
                <FaLinkedin size={18} />
              </a>

              <a
                href="https://www.instagram.com/creditbuddy_official?igsh=ZzZuYXZ0NDgwb2x6"
                target="_blank"
                rel="noreferrer"
                className="icon"
              >
                <FaInstagram size={18} />
              </a>

              <a
                href="https://www.youtube.com/channel/UCW2mT5e2qFsDY1O58VXNzig"
                target="_blank"
                rel="noreferrer"
                className="icon"
              >
                <FaYoutube size={18} />
              </a>

              <a
                href="https://whatsapp.com/channel/0029VbBzvW7FMqrV5Qj8SG0T"
                target="_blank"
                rel="noreferrer"
                className="icon"
              >
                <FaWhatsapp size={18} />
              </a>

              <a
                href="https://t.me/creditbuddyofficialchannel"
                target="_blank"
                rel="noreferrer"
                className="icon"
              >
                <FaTelegram size={18} />
              </a>
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
        </div>
      </div>
    </footer>
  );
}
