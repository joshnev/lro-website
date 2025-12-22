import {
  Users,
  Target,
  Award,
  Globe,
  ChevronRight,
  ShieldCheck,
} from "lucide-react";

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative py-24 overflow-hidden text-white bg-gray-900"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 bg-blue-600 rounded-bl-full h-1/3 opacity-5" />
      <div className="absolute bottom-0 left-0 w-1/4 bg-blue-400 rounded-tr-full h-1/4 opacity-5" />

      <div className="relative z-10 max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-3xl mx-auto mb-20 text-center">
          <h2 className="mb-6 text-5xl font-bold md:text-6xl">Our Services</h2>
          <div className="w-24 h-1 mx-auto mb-8 bg-blue-500" />
          <p className="text-xl leading-relaxed text-gray-300">
            Comprehensive recruitment solutions tailored to your specific needs.
            Our expertise spans multiple industries with a focus on delivering
            exceptional results.
          </p>
        </div>

        {/* Services grid - 2x2 layout */}
        <div className="grid grid-cols-1 gap-8 mb-20 md:grid-cols-2">
          {/* Card 1 */}
          <div className="p-8 transition-all duration-300 bg-gray-800 border border-gray-700 rounded-lg group hover:-translate-y-1 hover:border-blue-600">
            <div className="flex items-center justify-between mb-5 text-blue-400">
              <Users
                size={32}
                className="transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <h3 className="mb-2 text-2xl font-semibold transition-colors group-hover:text-blue-400">
              Experienced Team
            </h3>
            <h4 className="mb-4 font-medium text-blue-400">Industry Experts</h4>
            <p className="mb-6 leading-relaxed text-gray-300">
              Our team brings deep industry know-how to every search and
              supplies the right people for the right roles.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-8 transition-all duration-300 bg-gray-800 border border-gray-700 rounded-lg group hover:-translate-y-1 hover:border-blue-600">
            <div className="flex items-center justify-between mb-5 text-blue-400">
              <Target
                size={32}
                className="transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <h3 className="mb-2 text-2xl font-semibold transition-colors group-hover:text-blue-400">
              Tailored Approach
            </h3>
            <h4 className="mb-4 font-medium text-blue-400">
              Personalised Service
            </h4>
            <p className="mb-6 leading-relaxed text-gray-300">
              We match to skills and culture, aligning client goals with
              candidate strengths for placements that last.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-8 transition-all duration-300 bg-gray-800 border border-gray-700 rounded-lg group hover:-translate-y-1 hover:border-blue-600">
            <div className="flex items-center justify-between mb-5 text-blue-400">
              <Award
                size={32}
                className="transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <h3 className="mb-2 text-2xl font-semibold transition-colors group-hover:text-blue-400">
              Client Satisfaction
            </h3>
            <h4 className="mb-4 font-medium text-blue-400">
              Excellence in Service
            </h4>
            <p className="mb-6 leading-relaxed text-gray-300">
              We’re easy to reach, straightforward to work with, and focused on
              delivering results you can count on.
            </p>
          </div>

          {/* Card 4 */}
          <div className="p-8 transition-all duration-300 bg-gray-800 border border-gray-700 rounded-lg group hover:-translate-y-1 hover:border-blue-600">
            <div className="flex items-center justify-between mb-5 text-blue-400">
              <Globe
                size={32}
                className="transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <h3 className="mb-2 text-2xl font-semibold transition-colors group-hover:text-blue-400">
              Local Reach
            </h3>
            <h4 className="mb-4 font-medium text-blue-400">Global Insights</h4>
            <p className="mb-6 leading-relaxed text-gray-300">
              Kent & South East coverage with an eye on wider market trends so
              you get the best talent quickly.
            </p>
          </div>
        </div>

        {/* Featured service with image */}
        <div className="overflow-hidden bg-gray-800 rounded-lg">
          <div className="flex flex-col lg:flex-row">
            {/* Image side */}
            <div className="relative w-full lg:w-1/2 min-h-[360px] overflow-hidden">
              {/* subtle tint */}
              <div
                className="absolute inset-0 z-10 bg-blue-600/10"
                aria-hidden="true"
              />
              <img
                src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&w=1200&q=80"
                alt="Professionals in a business meeting"
                loading="lazy"
                className="
                  absolute inset-0 h-full w-full object-cover
                  object-[30%_85%]    /* mobile: centre hands (left + bottom) */
                  md:object-[35%_80%] /* tablet */
                  lg:object-[40%_75%] /* desktop */"
              />
            </div>

            {/* Content side */}
            <div className="flex flex-col justify-center w-full p-8 lg:w-1/2 lg:p-12">
              <div className="mb-6">
                <ShieldCheck size={40} className="text-blue-400" />
              </div>
              <h3 className="mb-4 text-3xl font-bold">Our Commitment</h3>
              <p className="mb-6 text-xl leading-relaxed text-gray-300">
                We’re committed to excellence in every placement, matching the
                right people to the right roles and supporting both sides
                throughout.
              </p>
              <ul className="mb-8 space-y-3">
                <li className="flex items-start">
                  <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-600/20">
                    <div className="w-2 h-2 bg-blue-400 rounded-full" />
                  </div>
                  <span className="ml-3 text-gray-300">
                    In-depth industry knowledge
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-600/20">
                    <div className="w-2 h-2 bg-blue-400 rounded-full" />
                  </div>
                  <span className="ml-3 text-gray-300">
                    Personalised matching process
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-600/20">
                    <div className="w-2 h-2 bg-blue-400 rounded-full" />
                  </div>
                  <span className="ml-3 text-gray-300">
                    Continuous support & follow-up
                  </span>
                </li>
              </ul>
              <a
                href="#contact"
                className="inline-flex items-center justify-center w-full px-6 py-3 text-base font-medium text-white transition-colors bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 sm:w-auto"
              >
                Discuss your requirements
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
