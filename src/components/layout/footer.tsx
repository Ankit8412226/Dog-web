import Link from "next/link";
import { getGeneralEnquiryUrl } from "@/lib/whatsapp";
import { ArrowRight } from "lucide-react";

export function Footer() {
  const whatsappUrl = getGeneralEnquiryUrl();

  return (
    <footer className="bg-stone-50 border-t border-stone-200 text-stone-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Main Footer Directory */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-stone-200">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <span className="font-serif font-bold text-xl tracking-[0.15em] text-stone-950 uppercase">
                Paws & Heritage
              </span>
            </Link>
            <p className="text-stone-600 text-xs leading-relaxed max-w-xs font-sans">
              Connecting caring families with health-certified, ethically bred purebred puppies from verified responsible breeders.
            </p>
          </div>

          {/* Navigation Column */}
          <div className="space-y-4">
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-stone-400 font-sans">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs text-stone-700 font-sans">
              <li><a href="#featured-puppies" className="hover:text-stone-950 transition-colors">Available Puppies</a></li>
              <li><a href="#breeds" className="hover:text-stone-950 transition-colors">Explore Breeds</a></li>
              <li><a href="#why-choose-us" className="hover:text-stone-950 transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-stone-950 transition-colors">Contact</a></li>
              <li><a href="#faq" className="hover:text-stone-950 transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Service Locations */}
          <div className="space-y-4">
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-stone-400 font-sans">
              Service Locations
            </h4>
            <ul className="space-y-2 text-xs text-stone-700 font-sans leading-relaxed">
              <li>Delhi NCR</li>
              <li>Bangalore</li>
              <li>Mumbai</li>
              <li>Hyderabad</li>
              <li>Pune & Chandigarh</li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div className="space-y-4">
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-stone-400 font-sans">
              Direct Contact
            </h4>
            <div className="space-y-3 font-sans text-xs text-stone-700">
              <p>Message us anytime for quick photos, video calls, and puppy availability.</p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-emerald-800 hover:text-emerald-950 font-semibold tracking-wider uppercase text-xs pt-1"
              >
                <span>WhatsApp Us</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-stone-500 font-sans">
          <p>© {new Date().getFullYear()} Paws & Heritage Fine Canine Ltd. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-stone-900 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-stone-900 transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
