import React from "react";

export default function Privacy() {
  return (
    <section className="bg-gray-50 text-gray-800 py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* HERO */}
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            Privacy Policy
          </h1>
          <p className="text-sm text-gray-500">Last updated: October 2025</p>
        </div>

        {/* INTRO */}
        <div className="space-y-6 text-sm leading-relaxed">
          <p>
            At CreditBuddy, your privacy is important to us. This Privacy Policy
            explains how we collect, use, and protect your information when you
            use our platform.
          </p>

          {/* SECTION */}
          <div>
            <h2 className="font-semibold text-lg mb-2">
              1. Information We Collect
            </h2>
            <ul className="list-disc ml-5 space-y-1">
              <li>Personal details (name, email, phone)</li>
              <li>Usage data (pages visited, interactions)</li>
              <li>Financial data (only when required)</li>
            </ul>
          </div>

          {/* SECTION */}
          <div>
            <h2 className="font-semibold text-lg mb-2">
              2. How We Use Your Data
            </h2>
            <ul className="list-disc ml-5 space-y-1">
              <li>To provide and improve our services</li>
              <li>To personalize user experience</li>
              <li>To ensure platform security</li>
            </ul>
          </div>

          {/* SECTION */}
          <div>
            <h2 className="font-semibold text-lg mb-2">3. Data Sharing</h2>
            <p>
              We do not sell your personal data. We may share information with
              trusted partners only when necessary to provide services.
            </p>
          </div>

          {/* SECTION */}
          <div>
            <h2 className="font-semibold text-lg mb-2">4. Security</h2>
            <p>
              We use industry-standard security measures including encryption
              and secure servers to protect your data.
            </p>
          </div>

          {/* SECTION */}
          <div>
            <h2 className="font-semibold text-lg mb-2">5. Your Rights</h2>
            <ul className="list-disc ml-5 space-y-1">
              <li>You can request access to your data</li>
              <li>You can request deletion of your data</li>
              <li>You can opt out of communications</li>
            </ul>
          </div>

          {/* SECTION */}
          <div>
            <h2 className="font-semibold text-lg mb-2">6. Contact Us</h2>
            <p>
              If you have any questions, contact us at:
              <br />
              <span className="text-blue-600">info@creditbuddy.org.in</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
