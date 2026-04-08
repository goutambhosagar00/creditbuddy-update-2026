import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

export default function ContactForm() {
  const formRef = useRef();
  const investorRef = useRef();

  const [loading, setLoading] = useState(false);
  const [investorLoading, setInvestorLoading] = useState(false);
  const [open, setOpen] = useState(false);

  // ================= NORMAL CONTACT =================
  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_ddx4hml",
        "template_vdh7k5b",
        formRef.current,
        "K1pRcwo5jf5qnjgYN",
      )
      .then(() => {
        toast.success("Message sent successfully 🚀");
        formRef.current.reset();
        setLoading(false);
      })
      .catch(() => {
        toast.error("Failed to send message ❌");
        setLoading(false);
      });
  };

  // ================= INVESTOR FORM =================
  const sendInvestor = (e) => {
    e.preventDefault();
    setInvestorLoading(true);

    emailjs
      .sendForm(
        "service_ddx4hml",
        "template_investor", // 👉 create new template
        investorRef.current,
        "K1pRcwo5jf5qnjgYN",
      )
      .then(() => {
        toast.success("Deck sent to your email 📩");
        investorRef.current.reset();
        setInvestorLoading(false);
        setOpen(false);
      })
      .catch(() => {
        toast.error("Failed to send ❌");
        setInvestorLoading(false);
      });
  };

  return (
    <section className="bg-gray-50 pb-24">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-8">
        {/* ================= LEFT FORM ================= */}
        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm"
        >
          <h2 className="text-lg font-semibold mb-6">Send us a message.</h2>

          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <input
              name="name"
              placeholder="Full Name"
              required
              className="input"
            />
            <input
              name="email"
              placeholder="Email Address"
              required
              className="input"
            />
            <input name="phone" placeholder="Mobile Number" className="input" />

            <select name="type" className="input">
              <option>Select</option>
              <option>Student</option>
              <option>Partner</option>
              <option>Investor</option>
            </select>
          </div>

          <input
            name="subject"
            placeholder="Subject"
            className="input mt-4 w-full"
          />

          <textarea
            name="message"
            placeholder="Message"
            rows="4"
            required
            className="input mt-4 w-full"
          />

          <button
            type="submit"
            disabled={loading}
            className="mt-6 px-6 py-2 bg-purple-600 text-white rounded-lg"
          >
            {loading ? "Sending..." : "Send Message →"}
          </button>
        </motion.form>

        {/* ================= RIGHT SIDE ================= */}
        <div className="space-y-6">
          {/* CONTACT INFO */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6">
            <h3 className="font-semibold mb-4">Find us directly.</h3>
            <p className="text-sm text-gray-600">📧 hello@creditbuddy.in</p>
            <p className="text-sm text-gray-600">📍 Sambalpur, Odisha, India</p>
          </div>

          {/* INVESTOR BOX */}
          <div className="bg-black text-white rounded-2xl p-6">
            <h3 className="text-green-400 font-semibold mb-3">
              For investors — the 60-sec version.
            </h3>

            <p className="text-sm text-gray-300 mb-4">
              India’s student credit market is broken. We’re building a fair,
              RBI-aligned system.
            </p>

            <ul className="text-xs text-gray-400 space-y-1 mb-4">
              <li>Market: $20B+</li>
              <li>Model: Earn + Borrow</li>
              <li>Stage: Pre-seed</li>
              <li>Raising: ₹X Cr</li>
              <li>Traction: X waitlist users</li>
            </ul>

            <button
              onClick={() => setOpen(true)}
              className="w-full py-2 bg-white text-black rounded-lg"
            >
              Request Deck →
            </button>
          </div>
        </div>
      </div>

      {/* ================= MODAL ================= */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.form
              ref={investorRef}
              onSubmit={sendInvestor}
              className="bg-white p-6 rounded-2xl w-full max-w-md"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
            >
              <h3 className="text-lg font-semibold mb-4">
                Request Investor Deck
              </h3>

              <input
                name="name"
                placeholder="Your Name"
                required
                className="input mb-3"
              />
              <input
                name="email"
                placeholder="Email"
                required
                className="input mb-3"
              />
              <input
                name="fund"
                placeholder="Fund / Company"
                required
                className="input mb-4"
              />

              <button
                type="submit"
                disabled={investorLoading}
                className="w-full py-2 bg-black text-white rounded-lg"
              >
                {investorLoading ? "Sending..." : "Send Deck →"}
              </button>

              <button
                type="button"
                onClick={() => setOpen(false)}
                className="text-xs mt-3 text-gray-500"
              >
                Close
              </button>
            </motion.form>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
