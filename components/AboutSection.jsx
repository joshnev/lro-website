import React from "react";
import { CheckCircle, Award, Clock, Users, ArrowRight } from "lucide-react";

/** CSS-only Shelf Bracket Underline */
function ShelfBracketUnderline({
  children,
  lineClass = "bg-gray-700", // underline color
  bracketClass = "bg-blue-400/70", // bracket tab color
  className = "",
}) {
  return (
    <div className={`relative inline-block ${className}`}>
      {/* global keyframes for subtle drift */}
      <style>{`
        @keyframes bracketDriftRight { 0%{transform:translateX(0)} 50%{transform:translateX(6px)} 100%{transform:translateX(0)} }
        @keyframes bracketDriftLeft  { 0%{transform:translateX(0)} 50%{transform:translateX(-6px)} 100%{transform:translateX(0)} }
      `}</style>

      <span className="relative z-10">{children}</span>

      {/* underline */}
      <div className={`relative mt-3 h-[2px] w-full ${lineClass}`}>
        {/* left bracket tab */}
        <span
          className={`absolute -top-[3px] left-0 h-[7px] w-[10px] rounded-[2px] ${bracketClass}`}
          style={{ animation: "bracketDriftRight 4s ease-in-out infinite" }}
        />
        {/* right bracket tab */}
        <span
          className={`absolute -top-[3px] right-0 h-[7px] w-[10px] rounded-[2px] ${bracketClass}`}
          style={{ animation: "bracketDriftLeft 4s ease-in-out infinite" }}
        />
      </div>
    </div>
  );
}

export default function AboutSection() {
  return (
    <section
      id="about"
      className="pt-20 pb-12 text-white bg-gray-900 md:pt-24 md:pb-16"
    >
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="mb-10 text-5xl font-bold md:text-6xl">
          About LRO Contractors
        </h2>

        {/* Two-column */}
        <div className="flex flex-col items-start gap-16 mb-14 lg:flex-row">
          {/* Left: text */}
          <div className="w-full lg:w-1/2">
            <ShelfBracketUnderline className="mb-6">
              <h3 className="text-xl font-medium text-blue-400">Who We Are</h3>
            </ShelfBracketUnderline>

            <p className="mb-6 text-xl leading-relaxed text-gray-300">
              LRO Contractors is a family-run business with extensive combined
              experience in the industry. We build strong relationships with our
              clients and aim to be a one-stop shop for construction services.
            </p>

            <p className="mb-8 text-xl leading-relaxed text-gray-300">
              Our focus covers construction, shopfitting and more across Kent
              &amp; the South East and nationwide. With a combined 20 years’
              experience, we’re known for reliability, quality and personal
              service.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8 mb-8">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-blue-400">2025</span>
                <span className="mt-1 font-medium text-gray-400">Founded</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-blue-400">24/7</span>
                <span className="mt-1 font-medium text-gray-400">
                  Availability
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-blue-400">100%</span>
                <span className="mt-1 font-medium text-gray-400">
                  Dedicated skilled workers
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-blue-400">100%</span>
                <span className="mt-1 font-medium text-gray-400">
                  Skilled professionals supplied every time
                </span>
              </div>
            </div>
          </div>

          {/* Right: image */}
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <div className="relative overflow-hidden rounded-lg shadow-2xl">
                <div
                  className="absolute inset-0 z-10 rounded-lg bg-blue-600/10"
                  aria-hidden="true"
                />
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80"
                  alt="Team reviewing plans for a construction project"
                  className="object-cover w-full h-auto rounded-lg"
                  loading="lazy"
                />
              </div>
              {/* Decorative blocks */}
              <div
                className="absolute z-0 w-32 h-32 rounded-lg -bottom-4 -right-4 bg-blue-600/20"
                aria-hidden="true"
              />
              <div
                className="absolute z-0 w-20 h-20 rounded-lg -top-4 -left-4 bg-blue-400/10"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
        {/* Core values */}
        <div id="journey" className="mb-16">
          <h3 className="relative inline-block mb-12 text-3xl font-bold">
            Our Core Values
            <span className="absolute -bottom-3 left-0 h-[3px] w-16 rounded-full bg-blue-400" />
          </h3>

          <div className="grid max-w-6xl grid-cols-1 gap-8 mx-auto sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
            {[
              {
                icon: CheckCircle,
                title: "Quality",
                text: "We don’t compromise on the calibre of our workers or the standards we uphold.",
              },
              {
                icon: Award,
                title: "Reliability",
                text: "When we make a commitment, we deliver. Our reputation depends on it.",
              },
              {
                icon: Clock,
                title: "Timeliness",
                text: "In construction, time is money. We respond quickly and keep projects moving.",
              },
              {
                icon: Users,
                title: "Relationships",
                text: "We build lasting connections with clients, workers and the communities we serve.",
              },
            ].map(({ icon: Icon, title, text }) => (
              <article
                key={title}
                className="flex flex-col h-full p-8 transition-shadow border shadow-md rounded-xl bg-gray-800/80 border-white/10 hover:shadow-xl"
              >
                <div className="mb-4 text-blue-400">
                  <Icon aria-hidden className="w-10 h-10" />
                </div>
                <h4 className="mb-3 text-xl font-semibold text-white">
                  {title}
                </h4>
                <p className="flex-1 text-base leading-relaxed text-white/80">
                  {text}
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* Team section kept but disabled */}
        {false && <div>…team cards…</div>}
      </div>
    </section>
  );
}
