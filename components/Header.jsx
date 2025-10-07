// "use client";
// import React, { useEffect, useState } from "react";
// import { MenuIcon, X } from "lucide-react";

// export default function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const THRESHOLD = 20;
//     let ticking = false;

//     const onScroll = () => {
//       if (!ticking) {
//         window.requestAnimationFrame(() => {
//           setIsScrolled((window.scrollY || 0) > THRESHOLD);
//           ticking = false;
//         });
//         ticking = true;
//       }
//     };

//     window.addEventListener("scroll", onScroll, { passive: true });
//     onScroll(); // initialise on mount
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   return (
//     <header
//       className={`w-full sticky top-0 z-50 backdrop-blur-md transform-gpu
//       transition-[background-color,box-shadow,backdrop-filter] duration-300
//       ${isScrolled ? "bg-white/10 shadow-md" : "bg-white/40 shadow-sm"}`}
//     >
//       <div className="container px-4 mx-auto sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16 md:h-20 lg:h-24">
//           {/* Logo */}
//           <div className="flex-shrink-0 h-full">
//             <a href="/" className="block h-full">
//               <img
//                 src="/LRO-logo-edit.png"
//                 alt="LRO Contractors Logo"
//                 className={`h-full w-auto rounded-md object-contain origin-left transform-gpu
//                 transition-transform duration-300
//                 ${isScrolled ? "scale-90 md:scale-95" : "scale-100"}`}
//               />
//             </a>
//           </div>

//           {/* Desktop Navigation */}
//           <nav className="items-center hidden space-x-8 md:flex">
//             {[
//               ["About", "#about"],
//               ["Services", "#services"],
//               ["Join Us", "#contact"],
//             ].map(([label, href]) => (
//               <a
//                 key={href}
//                 href={href}
//                 className={`font-medium transition-colors ${
//                   isScrolled
//                     ? "text-white hover:text-blue-200"
//                     : "text-gray-800 hover:text-blue-600"
//                 }`}
//               >
//                 {label}
//               </a>
//             ))}
//             <a
//               href="#contact"
//               className={`px-5 py-2 font-medium rounded-md transition-colors ${
//                 isScrolled
//                   ? "bg-white text-blue-600 hover:bg-gray-100"
//                   : "bg-blue-600 text-white hover:bg-blue-700"
//               }`}
//             >
//               Contact Us
//             </a>
//           </nav>

//           {/* Mobile menu button */}
//           <div className="md:hidden">
//             <button
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               className="p-2 text-gray-700 rounded-md hover:bg-gray-100"
//               aria-label="Toggle menu"
//             >
//               {isMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Navigation */}
//       {isMenuOpen && (
//         <div className="bg-white border-t border-gray-100 shadow-lg md:hidden">
//           <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//             {[
//               ["About", "#about"],
//               ["Services", "#services"],
//               ["Join Us", "#contact"], // NEW
//               ["Contact", "#contact"],
//             ].map(([label, href]) => (
//               <a
//                 key={href}
//                 href={href}
//                 onClick={() => setIsMenuOpen(false)}
//                 className="block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:bg-gray-100"
//               >
//                 {label}
//               </a>
//             ))}
//             <a
//               href="#contact"
//               onClick={() => setIsMenuOpen(false)}
//               className="block px-3 py-2 mt-3 text-base font-medium text-center text-white bg-blue-600 rounded-md hover:bg-blue-700"
//             >
//               Get in touch
//             </a>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }

"use client";
import React, { useEffect, useState } from "react";
import { MenuIcon, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const THRESHOLD = 20;
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled((window.scrollY || 0) > THRESHOLD);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`w-full sticky top-0 z-50 backdrop-blur-md transform-gpu
      transition-[background-color,box-shadow,backdrop-filter] duration-300
      ${isScrolled ? "bg-white/10 shadow-md" : "bg-white/40 shadow-sm"}`}
    >
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20 lg:h-24">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0 h-full">
            <a href="/" className="flex items-center block h-full">
              <div
                className={`h-full w-[160px] rounded-md bg-no-repeat bg-left bg-contain origin-left transform-gpu
      transition-transform duration-300
      ${isScrolled ? "scale-90 md:scale-95" : "scale-100"}`}
                style={{
                  backgroundImage: "url('/LRO-logo-edit.png')",
                }}
                aria-label="LRO Contractors Logo"
                role="img"
              ></div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="items-center hidden space-x-8 md:flex">
            {[
              ["About", "#about"],
              ["Services", "#services"],
              ["Join Us", "#contact"],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                className={`font-medium transition-colors ${
                  isScrolled
                    ? "text-white hover:text-blue-200"
                    : "text-gray-800 hover:text-blue-600"
                }`}
              >
                {label}
              </a>
            ))}
            <a
              href="#contact"
              className={`px-5 py-2 font-medium rounded-md transition-colors ${
                isScrolled
                  ? "bg-white text-blue-600 hover:bg-gray-100"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
            >
              Contact Us
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-700 rounded-md hover:bg-gray-100"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="bg-white border-t border-gray-100 shadow-lg md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {[
              ["About", "#about"],
              ["Services", "#services"],
              ["Join Us", "#contact"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:bg-gray-100"
              >
                {label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-2 mt-3 text-base font-medium text-center text-white bg-blue-600 rounded-md hover:bg-blue-700"
            >
              Get in touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
