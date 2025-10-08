import React from "react";
import { ArrowRight, HardHat, Building, Users } from "lucide-react";
export default function Hero() {
  return (
    <div className="relative w-full overflow-hidden bg-gray-900">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage: "url('/home-hero.webp')",
          backgroundSize: "cover",
          filter: "brightness(0.7)",
        }}
      ></div>
      {/* Content */}
      <div className="container relative z-10 px-4 py-20 mx-auto sm:px-6 lg:px-8 md:py-28 lg:py-36">
        <div className="max-w-4xl mx-auto">
          {/* Hero badges */}
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-blue-500 bg-opacity-30 text-blue-100">
              <HardHat size={14} /> Construction Specialists
            </span>
            <span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-blue-500 bg-opacity-30 text-blue-100">
              <Users size={14} /> Family-Run Business
            </span>
            <span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-blue-500 bg-opacity-30 text-blue-100">
              <Building size={14} /> Nationwide Cover
            </span>
          </div>
          {/* Main heading */}
          <h1 className="mb-6 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
            Skilled trades, <span className="text-blue-400">on site</span> when
            you need them
          </h1>
          {/* Subheading */}
          <p className="max-w-3xl mb-8 text-lg leading-relaxed text-gray-200 md:text-xl">
            We are a family-run business based in Kent, supplying skilled
            labour, trades, and site support for construction and shopfitting
            projects Nationwide.
          </p>
          {/* CTA buttons */}
          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white transition-colors bg-blue-600 border border-transparent rounded-md hover:bg-blue-700"
            >
              Contact Us
              <ArrowRight size={18} className="ml-2" />
            </a>
          </div>
        </div>
      </div>
      {/* Gradient overlay at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-900 to-transparent"></div>
    </div>
  );
}
