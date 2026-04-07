import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

export default function ContactForm() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);

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
      .then(
        () => {
          toast.success("Message sent successfully 🚀");
          formRef.current.reset();
          setLoading(false);
        },
        (error) => {
          console.log(error);
          toast.error("Failed to send message ❌");
          setLoading(false);
        },
      );
  };

  return (
    <section className="bg-gray-50 pb-24">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-8">
        {/* LEFT - FORM */}
        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
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

          <motion.button
            type="submit"
            disabled={loading}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 px-6 py-2 bg-purple-600 text-white rounded-lg text-sm hover:opacity-90 transition"
          >
            {loading ? "Sending..." : "Send Message →"}
          </motion.button>
        </motion.form>

        {/* RIGHT - INFO */}
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm"
          >
            <h3 className="font-semibold mb-4">Find us directly.</h3>

            <div className="space-y-3 text-sm text-gray-600">
              <p>📧 hello@creditbuddy.in</p>
              <p>📍 Sambalpur, Odisha, India</p>

              <div className="flex gap-3 text-gray-400 text-sm">
                <span>🌐</span>
                <span>🔗</span>
                <span>📷</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-black text-white rounded-2xl p-6"
          >
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
              <li>Stage: Early</li>
            </ul>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-2 bg-white text-black rounded-lg text-sm"
            >
              Request Deck →
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
