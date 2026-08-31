"use client";

import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import { getGeneralEnquiryUrl, WHATSAPP_NUMBER } from "@/lib/whatsapp";

function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.53 7.34C9.36 7.34 9.09 7.4 8.87 7.65C8.65 7.89 8.02 8.48 8.02 9.69C8.02 10.9 8.9 12.06 9.02 12.23C9.14 12.4 10.73 14.86 13.18 15.91C13.76 16.17 14.21 16.31 14.57 16.43C15.15 16.61 15.68 16.59 16.1 16.53C16.57 16.46 17.54 15.94 17.74 15.37C17.94 14.81 17.94 14.33 17.88 14.23C17.82 14.12 17.66 14.06 17.41 13.94C17.17 13.81 15.96 13.22 15.74 13.14C15.51 13.05 15.35 13.01 15.19 13.26C15.02 13.5 14.56 14.06 14.41 14.23C14.27 14.39 14.13 14.41 13.88 14.29C13.64 14.16 12.85 13.91 11.91 13.08C11.19 12.43 10.69 11.64 10.55 11.4C10.41 11.15 10.53 11.02 10.66 10.89C10.77 10.78 10.91 10.6 11.03 10.45C11.16 10.31 11.2 10.2 11.28 10.04C11.36 9.87 11.32 9.73 11.26 9.61C11.2 9.49 10.71 8.27 10.5 7.78C10.3 7.31 10.1 7.37 9.94 7.36C9.79 7.35 9.66 7.34 9.53 7.34Z" />
    </svg>
  );
}

export function FloatingContactButtons() {
  const [isVisible, setIsVisible] = useState(true);
  const whatsappUrl = getGeneralEnquiryUrl();
  const phoneCallUrl = `tel:+${WHATSAPP_NUMBER}`;

  useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // When footer comes into view or near contact, hide the floating buttons
        setIsVisible(!entry.isIntersecting);
      },
      {
        root: null,
        // Margin triggers hiding before floating buttons reach footer content
        rootMargin: "0px 0px 60px 0px",
        threshold: 0,
      }
    );

    observer.observe(footer);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* Left Call Button */}
      <div
        className={`fixed bottom-6 left-6 z-40 transition-all duration-300 ease-out ${
          isVisible
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-8 pointer-events-none"
        }`}
      >
        <a
          href={phoneCallUrl}
          aria-label="Call Us Directly"
          className="group flex items-center gap-2.5 px-4 py-3 sm:px-5 sm:py-3.5 rounded-full bg-stone-950 text-stone-50 border border-stone-800 shadow-[0_8px_30px_rgba(0,0,0,0.18)] hover:bg-stone-800 hover:shadow-[0_12px_36px_rgba(0,0,0,0.25)] transition-all duration-300 active:scale-95"
        >
          <div className="flex items-center justify-center w-7 h-7 rounded-full bg-white/10 text-white group-hover:scale-110 transition-transform">
            <Phone className="w-3.5 h-3.5" />
          </div>
          <span className="text-xs font-semibold uppercase tracking-widest font-sans pr-1">
            Call Us
          </span>
        </a>
      </div>

      {/* Right WhatsApp Button */}
      <div
        className={`fixed bottom-6 right-6 z-40 transition-all duration-300 ease-out ${
          isVisible
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-8 pointer-events-none"
        }`}
      >
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="group flex items-center gap-2.5 px-4 py-3 sm:px-5 sm:py-3.5 rounded-full bg-emerald-700 text-white border border-emerald-600 shadow-[0_8px_30px_rgba(4,120,87,0.28)] hover:bg-emerald-800 hover:shadow-[0_12px_36px_rgba(4,120,87,0.38)] transition-all duration-300 active:scale-95"
        >
          <div className="flex items-center justify-center w-7 h-7 rounded-full bg-white/15 text-white group-hover:scale-110 transition-transform">
            <WhatsAppIcon className="w-4 h-4" />
          </div>
          <span className="text-xs font-semibold uppercase tracking-widest font-sans pr-1">
            WhatsApp
          </span>
        </a>
      </div>
    </>
  );
}
