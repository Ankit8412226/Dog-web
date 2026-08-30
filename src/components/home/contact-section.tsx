import { getGeneralEnquiryUrl } from "@/lib/whatsapp";
import { ArrowRight, MessageCircle } from "lucide-react";

export function ContactSection() {
  const whatsappUrl = getGeneralEnquiryUrl();

  return (
    <section id="contact" className="py-24 bg-white text-stone-900 border-b border-stone-200">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-[11px] font-semibold tracking-[0.25em] text-stone-500 uppercase font-sans">
            Direct Concierge Support
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-normal text-stone-950">
            Let's Find Your Perfect Companion
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-sans">
            Have questions about a puppy, breed, availability, or the process? We're happy to help.
          </p>
        </div>

        {/* Contact Details Card */}
        <div className="bg-stone-50 border border-stone-200 rounded-sm p-8 sm:p-12 grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left shadow-sm">
          
          <div className="space-y-1">
            <span className="text-[10px] font-semibold uppercase tracking-widest text-stone-400 block font-sans">
              Primary Channel
            </span>
            <div className="font-serif font-semibold text-xl text-stone-950">
              WhatsApp Chat
            </div>
            <div className="text-xs text-stone-500 font-sans">
              Instant responses & video tours
            </div>
          </div>

          <div className="space-y-1 border-y md:border-y-0 md:border-x border-stone-200 py-6 md:py-0 md:px-8">
            <span className="text-[10px] font-semibold uppercase tracking-widest text-stone-400 block font-sans">
              Business Hours
            </span>
            <div className="font-serif font-semibold text-lg text-stone-950">
              9:00 AM – 8:00 PM IST
            </div>
            <div className="text-xs text-stone-500 font-sans">
              Monday through Sunday
            </div>
          </div>

          <div className="space-y-1">
            <span className="text-[10px] font-semibold uppercase tracking-widest text-stone-400 block font-sans">
              Service Locations
            </span>
            <div className="text-xs font-semibold text-stone-900 font-sans leading-relaxed">
              Delhi NCR · Bangalore · Mumbai · Hyderabad · Pune · Chandigarh
            </div>
          </div>

        </div>

        {/* Primary CTA */}
        <div className="mt-10 text-center">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-emerald-800 hover:bg-emerald-900 text-white font-semibold text-xs tracking-widest uppercase px-10 py-4 rounded-sm transition-colors shadow-sm"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat With Us on WhatsApp</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
