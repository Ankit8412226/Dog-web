"use client";

import { useState } from "react";
import Image from "next/image";
import { getGeneralEnquiryUrl } from "@/lib/whatsapp";
import { ArrowRight, Volume2, VolumeX, Video } from "lucide-react";

export function Hero() {
  const [isMuted, setIsMuted] = useState(true);
  const whatsappUrl = getGeneralEnquiryUrl();

  return (
    <section className="bg-white text-stone-900 pt-8 pb-20 overflow-hidden border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text Content */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-6 text-left">
            <div className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.25em] text-stone-500 uppercase font-sans">
              <span className="w-2 h-2 rounded-full bg-emerald-700 animate-pulse"></span>
              <span>Live Litter Video Available</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-serif font-normal text-stone-950 tracking-tight leading-[1.08]">
              Find a companion you'll love for life.
            </h1>

            <p className="text-stone-600 text-base leading-relaxed font-sans max-w-md">
              Explore carefully raised puppies and watch live HD video tours of their healthy living environment.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <a
                href="#featured-puppies"
                className="bg-stone-950 hover:bg-stone-800 text-white font-semibold text-xs tracking-widest uppercase px-8 py-4 transition-colors flex items-center gap-2 shadow-sm rounded-sm"
              >
                <span>View Available Puppies</span>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold uppercase tracking-wider text-emerald-800 hover:text-emerald-950 flex items-center gap-1 py-2"
              >
                <span>Talk to Us on WhatsApp</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Photographic & Live Video Block */}
          <div className="lg:col-span-7 relative">
            <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full rounded-sm overflow-hidden bg-stone-950 shadow-md border border-stone-200 group">
              
              {/* Autoplay Local High-Definition Video */}
              <video
                id="hero-puppy-video"
                autoPlay
                loop
                muted={isMuted}
                playsInline
                className="w-full h-full object-cover"
                poster="/images/hero-dog.png"
              >
                <source src="/videos/hero-puppy.mp4" type="video/mp4" />
                <source src="/videos/24541-343454486_medium.mp4" type="video/mp4" />
              </video>

              {/* Top Mute Control Button */}
              <button
                onClick={() => {
                  const el = document.getElementById("hero-puppy-video") as HTMLVideoElement;
                  if (el) {
                    el.muted = !isMuted;
                    setIsMuted(!isMuted);
                  }
                }}
                className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-white/90 hover:bg-white text-stone-900 backdrop-blur-md transition-colors shadow-sm"
                title={isMuted ? "Unmute Video" : "Mute Video"}
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>

              {/* Bottom Video Label Overlay */}
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between z-10">
                <div className="bg-white/90 backdrop-blur-md px-4 py-2.5 text-stone-900 border border-stone-200">
                  <span className="font-serif italic text-xs block flex items-center gap-1.5">
                    <Video className="w-3.5 h-3.5 text-emerald-800" />
                    <span>Live Puppy Video Feed — Bella</span>
                  </span>
                  <span className="text-[10px] font-sans uppercase tracking-widest text-stone-500">Golden Retriever • Delhi</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
