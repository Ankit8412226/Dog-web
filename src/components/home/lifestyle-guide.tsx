import Image from "next/image";
import { getLifestyleEnquiryUrl } from "@/lib/whatsapp";
import { ArrowRight } from "lucide-react";

export function LifestyleGuide() {
  const whatsappUrl = getLifestyleEnquiryUrl();

  return (
    <section className="py-24 bg-white text-stone-900 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Large Lifestyle Image (6 Cols) */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] w-full rounded-sm overflow-hidden bg-stone-100 border border-stone-200 shadow-sm">
              <Image
                src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80&w=1200"
                alt="Family with healthy dog in outdoor park"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 600px"
              />
            </div>
          </div>

          {/* Right Editorial Copy (6 Cols) */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-[11px] font-semibold tracking-[0.25em] text-stone-500 uppercase font-sans block">
              Personalized Guidance
            </span>

            <h2 className="text-3xl sm:text-5xl font-serif font-normal text-stone-950 leading-tight">
              Find the Right Dog for You
            </h2>

            <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-sans">
              Choosing the ideal companion depends on your daily schedule, living space, and personal preferences. We help match you with a breed that fits naturally into your home.
            </p>

            <div className="grid grid-cols-2 gap-4 text-xs font-sans text-stone-700 pt-2 border-t border-stone-100">
              <div>
                <span className="font-semibold text-stone-950 block mb-1">• Family Lifestyle</span>
                <span>Active outdoor activities vs. cozy indoor routines.</span>
              </div>
              <div>
                <span className="font-semibold text-stone-950 block mb-1">• Living Space</span>
                <span>Apartment suitability vs. open yard requirements.</span>
              </div>
              <div>
                <span className="font-semibold text-stone-950 block mb-1">• Activity & Exercise</span>
                <span>High stamina working breeds vs. gentle lap companions.</span>
              </div>
              <div>
                <span className="font-semibold text-stone-950 block mb-1">• Grooming Care</span>
                <span>Low-shed hypoallergenic coats vs. double coat maintenance.</span>
              </div>
            </div>

            <div className="pt-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-800 hover:bg-emerald-900 text-white font-semibold text-xs tracking-wider uppercase px-7 py-3.5 rounded-sm transition-colors shadow-sm"
              >
                <span>Ask Us on WhatsApp</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
