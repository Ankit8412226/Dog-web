"use client";

export function VideoShowcase() {
  return (
    <section className="py-24 bg-white text-stone-900 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-3">
          <h2 className="text-3xl sm:text-5xl font-serif font-normal text-stone-950">
            Observe Litter Health & Vitality in Motion
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-sans">
            We provide live HD video tours over WhatsApp so you can watch your puppy play, interact with littermates, and observe their healthy living environment before making a decision.
          </p>
        </div>

        {/* Full-Width Video Showcase Container */}
        <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full rounded-sm overflow-hidden bg-stone-950 border border-stone-200 shadow-md">
          <video
            id="puppy-showcase-video"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/videos/hero-puppy.mp4" type="video/mp4" />
            <source src="/videos/24541-343454486_medium.mp4" type="video/mp4" />
          </video>
        </div>

      </div>
    </section>
  );
}
