"use client";
import React, { useState, useMemo, useRef } from "react";
import { Mail, Phone, Send, User, MessageSquare } from "lucide-react";

const isEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v || "");

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    website: "",
    t0: Date.now(),
  });

  React.useEffect(() => {
    setFormData((p) => ({ ...p, t0: Date.now() }));
  }, []);

  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState({ loading: false, ok: null, msg: "" });
  const rootRef = useRef(null);

  const errors = useMemo(() => {
    const e = {};
    if (!formData.name.trim()) e.name = "Please enter your full name.";
    if (!formData.email.trim()) e.email = "Please enter your email.";
    else if (!isEmail(formData.email)) e.email = "Please enter a valid email.";
    if (!formData.subject) e.subject = "Please choose a subject.";
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      e.message = "Message must be at least 10 characters.";
    }
    return e;
  }, [formData]);

  const isValid = Object.keys(errors).length === 0;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((t) => ({ ...t, [name]: true }));
  };

  const handleSubmit = async () => {
    setTouched({ name: true, email: true, subject: true, message: true });

    if (!isValid) {
      const order = ["name", "email", "subject", "message"];
      const first = order.find((k) => errors[k]);
      if (first) rootRef.current?.querySelector(`[name="${first}"]`)?.focus();
      return;
    }

    setStatus({ loading: true, ok: null, msg: "" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const text = await res.text();
      let data = {};
      try {
        data = text ? JSON.parse(text) : {};
      } catch {
        data = {};
      }

      if (!res.ok) throw new Error(data?.error || "Something went wrong");

      setStatus({
        loading: false,
        ok: true,
        msg: "Thanks! We'll be in touch.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        website: "",
        t0: Date.now(),
      });
      setTouched({});
    } catch (err) {
      setStatus({ loading: false, ok: false, msg: err.message });
    }
  };

  const inputClasses = (field, extra = "") => {
    const showError = touched[field] && errors[field];
    return `bg-gray-800/50 text-white w-full ${extra} rounded-lg border transition-colors
      ${
        showError
          ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/40"
          : "border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50"
      }`;
  };

  return (
    <section
      id="contact"
      className="relative w-full py-24 overflow-hidden"
      onSubmit={(e) => e.preventDefault()}
      onInvalidCapture={(e) => e.preventDefault()}
      onInvalid={(e) => e.preventDefault()}
      ref={rootRef}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage: "url('/home-hero.png')",
          backgroundSize: "cover",
          filter: "brightness(0.5)",
        }}
      />

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 to-gray-900/90" />

      <div className="container relative z-10 px-4 mx-auto sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            Get In Touch
          </h2>
          <div className="w-24 h-1 mx-auto mb-6 bg-blue-500" />
          <p className="max-w-2xl mx-auto text-xl text-gray-200">
            Have a question or need to discuss your recruitment needs? Fill out
            the form below and our team will get back to you promptly.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Form */}
          <form
            noValidate
            onSubmit={(e) => e.preventDefault()}
            onInvalid={(e) => e.preventDefault()}
            onInvalidCapture={(e) => e.preventDefault()}
            onKeyDown={(e) => {
              if (e.key === "Enter") e.preventDefault();
            }}
            className="p-8 border shadow-2xl backdrop-blur-md bg-white/10 rounded-xl md:p-10 border-white/20"
          >
            <div className="grid grid-cols-1 gap-6 mb-6 md:grid-cols-2">
              {/* Name Field */}
              <div className="relative">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-blue-300"
                >
                  Full Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <User size={18} className="text-gray-400" />
                  </div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-invalid={!!(touched.name && errors.name)}
                    className={inputClasses("name", "pl-10 pr-4 py-3")}
                    placeholder="John Smith"
                  />
                </div>
                {touched.name && errors.name && (
                  <p className="mt-1 text-sm text-red-400">{errors.name}</p>
                )}
              </div>

              {/* Email Field */}
              <div className="relative">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-blue-300"
                >
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Mail size={18} className="text-gray-400" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-invalid={!!(touched.email && errors.email)}
                    className={inputClasses("email", "pl-10 pr-4 py-3")}
                    placeholder="your.email@example.com"
                  />
                </div>
                {touched.email && errors.email && (
                  <p className="mt-1 text-sm text-red-400">{errors.email}</p>
                )}
              </div>

              {/* Phone Field (optional) */}
              <div className="relative">
                <label
                  htmlFor="phone"
                  className="block mb-2 text-sm font-medium text-blue-300"
                >
                  Phone Number (optional)
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Phone size={18} className="text-gray-400" />
                  </div>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={inputClasses("", "pl-10 pr-4 py-3")}
                    placeholder="+44 (0) 1234 567890"
                  />
                </div>
              </div>

              {/* Subject Field */}
              <div className="relative">
                <label
                  htmlFor="subject"
                  className="block mb-2 text-sm font-medium text-blue-300"
                >
                  Subject
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <MessageSquare size={18} className="text-gray-400" />
                  </div>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-invalid={!!(touched.subject && errors.subject)}
                    className={inputClasses(
                      "subject",
                      "pl-10 pr-4 py-3 appearance-none"
                    )}
                  >
                    <option value="" disabled>
                      Select a subject
                    </option>
                    <option value="general">General Inquiry</option>
                    <option value="job">Job Application</option>
                    <option value="quote">Request a Quote</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                {touched.subject && errors.subject && (
                  <p className="mt-1 text-sm text-red-400">{errors.subject}</p>
                )}
              </div>
            </div>

            {/* Message Field */}
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-blue-300"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                onBlur={handleBlur}
                aria-invalid={!!(touched.message && errors.message)}
                rows={6}
                className={inputClasses("message", "px-4 py-3 resize-none")}
                placeholder="Please provide details about your inquiry..."
              />
              {touched.message && errors.message && (
                <p className="mt-1 text-sm text-red-400">{errors.message}</p>
              )}
            </div>

            <div
              style={{
                position: "absolute",
                left: "-9999px",
                width: "1px",
                height: "1px",
                overflow: "hidden",
              }}
            >
              <label htmlFor="website">Company Website</label>
              <input
                type="text"
                id="website"
                name="website"
                value={formData.website || ""}
                onChange={handleChange}
                autoComplete="off"
                tabIndex="-1"
              />
            </div>

            {/* Time-gate start */}
            <input type="hidden" name="t0" value={Date.now()} />

            {/* Submit Button (manual; no native submit) */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="button"
                onClick={handleSubmit}
                disabled={status.loading || !isValid}
                className={`${
                  status.loading || !isValid
                    ? "opacity-70 cursor-not-allowed"
                    : ""
                } bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 flex items-center group w-full sm:w-auto justify-center`}
              >
                {status.loading ? "Sending..." : "Send Message"}
                {!status.loading && (
                  <Send
                    size={18}
                    className="ml-2 transition-transform group-hover:translate-x-1"
                  />
                )}
              </button>
            </div>

            {/* Server Feedback */}
            {status.msg && (
              <p
                className={`mt-4 text-sm ${
                  status.ok ? "text-green-400" : "text-red-400"
                }`}
              >
                {status.msg}
              </p>
            )}
          </form>

          {/* Contact Information Separate Cards */}
          <div className="grid grid-cols-1 gap-6 mt-12 sm:grid-cols-2">
            {/* Call Us */}
            <div className="flex flex-col items-center justify-center p-6 text-center shadow-md backdrop-blur-md bg-white/10 rounded-xl">
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-blue-600/20">
                <Phone size={24} className="text-blue-400" />
              </div>
              <h3 className="mb-2 font-semibold text-white">Call Us</h3>
              <p className="text-gray-300">+44 7765 638358</p>
              <p className="text-gray-400">Mon-Fri, 9am-5pm</p>
            </div>

            {/* Email Us */}
            <div className="flex flex-col items-center justify-center p-6 text-center shadow-md backdrop-blur-md bg-white/10 rounded-xl">
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-blue-600/20">
                <Mail size={24} className="text-blue-400" />
              </div>
              <h3 className="mb-2 font-semibold text-white">Email Us</h3>
              <p className="text-gray-300">contact@lrocontractors.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
