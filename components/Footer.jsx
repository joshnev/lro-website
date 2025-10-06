"use client";

import React, { useState } from "react";
import { ArrowUp, X } from "lucide-react";

// Reusable Modal
function Modal({ title, isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60">
      <div className="relative w-full max-w-2xl p-6 bg-white rounded-lg shadow-lg">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute text-gray-500 top-3 right-3 hover:text-gray-700"
        >
          <X size={20} />
        </button>

        {/* Title */}
        <h2 className="mb-4 text-xl font-semibold text-gray-800">{title}</h2>

        {/* Content */}
        <div className="max-h-[60vh] overflow-y-auto text-gray-600">
          {children}
        </div>

        {/* Footer Close button */}
        <div className="mt-4 text-right">
          <button
            onClick={onClose}
            className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  const [modal, setModal] = useState(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="text-white bg-gray-900">
      <div className="border-t border-gray-800">
        <div className="container px-4 py-6 mx-auto sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <div className="mb-4 text-sm text-gray-400 md:mb-0">
              © {new Date().getFullYear()} LRO Contractors. All rights reserved.
            </div>
            <div className="flex items-center space-x-6">
              <button
                onClick={() => setModal("privacy")}
                className="text-sm text-gray-400 transition-colors hover:text-blue-400"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => setModal("terms")}
                className="text-sm text-gray-400 transition-colors hover:text-blue-400"
              >
                Terms of Service
              </button>
              <button
                onClick={scrollToTop}
                className="p-2 text-white transition-colors bg-gray-800 rounded-full hover:bg-blue-600"
                aria-label="Scroll to top"
              >
                <ArrowUp size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      <Modal
        title="Privacy Policy"
        isOpen={modal === "privacy"}
        onClose={() => setModal(null)}
      >
        <div className="space-y-6 text-gray-700">
          <p className="text-sm text-gray-500">Last updated: October 2025</p>

          <section>
            <h3 className="mb-2 text-lg font-semibold text-gray-900">
              1. Information We Collect
            </h3>
            <p>
              When you use our <strong>contact form</strong>, we may collect the
              following personal data:
            </p>
            <ul className="pl-6 mt-2 space-y-1 list-disc">
              <li>Your name</li>
              <li>Your email address</li>
              <li>Your phone number (if provided)</li>
              <li>Any information you include in the message field</li>
            </ul>
            <p className="mt-2">
              We do not collect sensitive personal data through our website.
            </p>
          </section>

          <section>
            <h3 className="mb-2 text-lg font-semibold text-gray-900">
              2. How We Use Your Information
            </h3>
            <p>We use the information you provide to:</p>
            <ul className="pl-6 mt-2 space-y-1 list-disc">
              <li>Respond to your enquiry</li>
              <li>Provide information about our services</li>
              <li>Keep a record of communications for business purposes</li>
            </ul>
            <p className="mt-2">
              We will not use your details for marketing without your consent.
            </p>
          </section>

          <section>
            <h3 className="mb-2 text-lg font-semibold text-gray-900">
              3. Legal Basis for Processing
            </h3>
            <p>
              We process your personal data on the basis of{" "}
              <strong>legitimate interests</strong> — namely, to respond to your
              enquiry and provide our services.
            </p>
          </section>

          <section>
            <h3 className="mb-2 text-lg font-semibold text-gray-900">
              4. Data Sharing
            </h3>
            <p>
              We do not sell or rent your personal information. We may share
              your information with:
            </p>
            <ul className="pl-6 mt-2 space-y-1 list-disc">
              <li>
                Trusted service providers who help us operate our website or
                business (e.g. email hosting providers)
              </li>
              <li>Regulatory or legal authorities if required by law</li>
            </ul>
          </section>

          <section>
            <h3 className="mb-2 text-lg font-semibold text-gray-900">
              5. Data Storage & Security
            </h3>
            <p>
              We take appropriate measures to protect your personal data from
              loss, misuse, or unauthorised access. Your personal data is stored
              securely and only for as long as necessary to fulfil the purposes
              outlined above.
            </p>
          </section>

          <section>
            <h3 className="mb-2 text-lg font-semibold text-gray-900">
              6. Your Rights
            </h3>
            <p>Under UK data protection law, you have the right to:</p>
            <ul className="pl-6 mt-2 space-y-1 list-disc">
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request erasure of your data (where applicable)</li>
              <li>Object to processing based on legitimate interests</li>
              <li>
                Request restriction of processing in certain circumstances
              </li>
            </ul>
            <p className="mt-2">
              To exercise your rights, please contact us using the details
              below.
            </p>
          </section>

          <section>
            <h3 className="mb-2 text-lg font-semibold text-gray-900">
              7. Contact Us
            </h3>
            <p>
              If you have any questions about this Privacy Policy or how we
              handle your data, please contact us at:
            </p>
            <p className="mt-2">
              <strong>LRO Contractors</strong>
              <br />
              Email:{" "}
              <a
                href="mailto:info@lrocontractors.co.uk"
                className="text-blue-600 hover:underline"
              >
                info@lrocontractors.co.uk
              </a>
              <br />
              Phone: +44 7765 638358
            </p>
          </section>

          <section>
            <h3 className="mb-2 text-lg font-semibold text-gray-900">
              8. Changes to This Policy
            </h3>
            <p>
              We may update this Privacy Policy from time to time. Any changes
              will be posted on this page with an updated revision date.
            </p>
          </section>
        </div>
      </Modal>

      <Modal
        title="Terms of Service"
        isOpen={modal === "terms"}
        onClose={() => setModal(null)}
      >
        <div className="space-y-6 text-gray-700">
          <p className="text-sm text-gray-500">Last updated: October 2025</p>

          <section>
            <h3 className="mb-2 text-lg font-semibold text-gray-900">
              1. Acceptance of Terms
            </h3>
            <p>
              By accessing or using the LRO Contractors website, you agree to be
              bound by these Terms of Service. If you do not agree with any part
              of these terms, you should not use this website.
            </p>
          </section>

          <section>
            <h3 className="mb-2 text-lg font-semibold text-gray-900">
              2. Website Use
            </h3>
            <p>
              This website is provided for general information about our
              shopfitting services. You agree to use the site only for lawful
              purposes and in a way that does not infringe the rights of,
              restrict, or inhibit anyone else’s use of the website.
            </p>
          </section>

          <section>
            <h3 className="mb-2 text-lg font-semibold text-gray-900">
              3. Contact Form
            </h3>
            <p>
              If you choose to contact us via the website form, you agree to
              provide accurate information. Misuse of the contact form for spam,
              unlawful, or misleading messages is prohibited.
            </p>
          </section>

          <section>
            <h3 className="mb-2 text-lg font-semibold text-gray-900">
              4. Intellectual Property
            </h3>
            <p>
              All content on this website, including text, graphics, logos, and
              images, is the property of LRO Contractors or its licensors and is
              protected by copyright and other intellectual property laws. You
              may not reproduce, distribute, or otherwise use our content
              without prior written consent.
            </p>
          </section>

          <section>
            <h3 className="mb-2 text-lg font-semibold text-gray-900">
              5. Limitation of Liability
            </h3>
            <p>
              While we strive to ensure the information on this website is
              accurate and up to date, we make no warranties or guarantees of
              any kind. LRO Contractors will not be liable for any loss or
              damage, direct or indirect, arising from your use of the website.
            </p>
          </section>

          <section>
            <h3 className="mb-2 text-lg font-semibold text-gray-900">
              6. External Links
            </h3>
            <p>
              Our website may contain links to third-party sites. We are not
              responsible for the content, privacy practices, or reliability of
              external websites linked from this site.
            </p>
          </section>

          <section>
            <h3 className="mb-2 text-lg font-semibold text-gray-900">
              7. Changes to Terms
            </h3>
            <p>
              We may update these Terms of Service from time to time. Any
              changes will be posted on this page with an updated revision date.
              Continued use of the website after changes are made constitutes
              acceptance of the new terms.
            </p>
          </section>

          <section>
            <h3 className="mb-2 text-lg font-semibold text-gray-900">
              8. Governing Law
            </h3>
            <p>
              These Terms of Service are governed by and construed in accordance
              with the laws of England and Wales. Any disputes will be subject
              to the exclusive jurisdiction of the courts of England and Wales.
            </p>
          </section>

          <section>
            <h3 className="mb-2 text-lg font-semibold text-gray-900">
              9. Contact Us
            </h3>
            <p>
              If you have any questions about these Terms of Service, please
              contact us at:
            </p>
            <p className="mt-2">
              <strong>LRO Contractors</strong>
              <br />
              Email:{" "}
              <a
                href="mailto:info@lrocontractors.co.uk"
                className="text-blue-600 hover:underline"
              >
                info@lrocontractors.co.uk
              </a>
              <br />
              Phone: +44 7765 638358
            </p>
          </section>
        </div>
      </Modal>
    </footer>
  );
}

export default Footer;
