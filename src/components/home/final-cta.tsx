import { getGeneralEnquiryUrl } from "@/lib/whatsapp";
import { ArrowRight } from "lucide-react";

export function FinalCTA() {
  const whatsappUrl = getGeneralEnquiryUrl();

  return (
    <section className="py-28 bg-white text-stone-900 border-b border-stone-200">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 text-center space-y-6">
        
        <span className="text-[11px] font-semibold tracking-[0.25em] text-stone-500 uppercase font-sans">
          Begin Your Journey
        </span>

        <h2 className="text-4xl sm:text-6xl font-serif font-normal text-stone-950 leading-[1.1] max-w-3xl mx-auto">
          Your new best friend might be waiting.
        </h2>

        <p className="text-stone-600 text-sm sm:text-base max-w-xl mx-auto font-sans leading-relaxed">
          Explore available puppies or talk to us directly to find the right companion.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-4">
          <a
            href="#featured-puppies"
            className="bg-stone-950 hover:bg-stone-800 text-white font-semibold text-xs tracking-widest uppercase px-8 py-4 transition-colors shadow-sm flex items-center gap-2 rounded-sm"
          >
            <span>Browse Available Puppies</span>
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-800 hover:bg-emerald-900 text-white font-semibold text-xs tracking-widest uppercase px-8 py-4 transition-colors flex items-center gap-2 shadow-sm rounded-sm"
          >
            <span>WhatsApp Us</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
