"use client";

import { useState } from "react";
import { getGeneralEnquiryUrl } from "@/lib/whatsapp";
import { Volume2, VolumeX, ArrowRight, Video } from "lucide-react";

export function VideoShowcase() {
  const [isMuted, setIsMuted] = useState(true);
  const whatsappUrl = getGeneralEnquiryUrl();

  return (
    <section className="py-24 bg-white text-stone-900 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-3">
          <span className="text-[11px] font-semibold tracking-[0.25em] text-stone-500 uppercase font-sans flex items-center gap-2">
            <Video className="w-3.5 h-3.5 text-stone-700" />
            <span>Live HD Video Verification</span>
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-normal text-stone-950">
            Observe Litter Health & Vitality in Motion
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-sans">
            We provide live HD video tours over WhatsApp so you can watch your puppy play, interact with littermates, and observe their healthy living environment before making a decision.
          </p>
        </div>

        {/* Full-Width Video Showcase Container */}
        <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full rounded-sm overflow-hidden bg-stone-950 border border-stone-200 shadow-md group">
          
          <video
            id="puppy-showcase-video"
            autoPlay
            loop
            muted={isMuted}
            playsInline
            className="w-full h-full object-cover"
            poster="https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&q=80&w=1600"
          >
            <source src="/videos/hero-puppy.mp4" type="video/mp4" />
            <source src="/videos/24541-343454486_medium.mp4" type="video/mp4" />
          </video>

          {/* Dark Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-stone-950/20 pointer-events-none"></div>

          {/* Top Video Controls Overlay */}
          <div className="absolute top-4 right-4 flex items-center gap-2 z-10">
            <button
              onClick={() => {
                const el = document.getElementById("puppy-showcase-video") as HTMLVideoElement;
                if (el) {
                  el.muted = !isMuted;
                  setIsMuted(!isMuted);
                }
              }}
              className="p-2.5 rounded-full bg-white/90 hover:bg-white text-stone-900 backdrop-blur-md transition-colors shadow-sm"
              title={isMuted ? "Unmute Video" : "Mute Video"}
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>
          </div>

          {/* Bottom Video Info Overlay */}
          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-white z-10">
            <div className="space-y-1">
              <span className="text-[10px] uppercase tracking-widest text-stone-300 block font-sans">
                Live Breeder Field Recording
              </span>
              <h3 className="font-serif text-xl sm:text-2xl text-white font-normal">
                Golden Retriever & German Shepherd Litters at Play
              </h3>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-emerald-800 hover:bg-emerald-900 text-white font-semibold text-xs tracking-wider uppercase px-6 py-3 rounded-sm transition-colors shadow-sm"
            >
              <span>Request Live Video Call on WhatsApp</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
