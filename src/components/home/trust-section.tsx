import Image from "next/image";

export function TrustSection() {
  return (
    <section className="py-24 bg-white text-stone-900 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Large Editorial Photograph */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] w-full rounded-sm overflow-hidden bg-stone-100 border border-stone-200 shadow-sm">
              <Image
                src="https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&q=80&w=1200"
                alt="Healthy dog veterinary check"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 600px"
              />
            </div>
          </div>

          {/* Editorial Content */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-[11px] font-semibold tracking-[0.25em] text-stone-500 uppercase font-sans block">
              Responsible Care
            </span>

            <h2 className="text-3xl sm:text-5xl font-serif font-normal text-stone-950 leading-tight">
              Transparency Matters
            </h2>

            <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-sans">
              We believe finding a puppy should feel clear, personal, and trustworthy. We work directly with verified breeders to give you honest information at every step.
            </p>

            <div className="space-y-4 border-t border-stone-100 pt-6 text-xs text-stone-700 font-sans">
              <div>
                <h4 className="font-semibold text-stone-950 text-sm mb-1">• Complete Health & Vaccination Details</h4>
                <p className="text-stone-500 leading-relaxed">Official veterinary passports, vaccination records, and deworming schedules provided upfront.</p>
              </div>

              <div>
                <h4 className="font-semibold text-stone-950 text-sm mb-1">• Honest Breed Information</h4>
                <p className="text-stone-500 leading-relaxed">Transparent advice on temperament, exercise needs, and size expectations before committing.</p>
              </div>

              <div>
                <h4 className="font-semibold text-stone-950 text-sm mb-1">• Clear & Responsible Communication</h4>
                <p className="text-stone-500 leading-relaxed">Direct WhatsApp updates, video calls, and responsive guidance throughout your adoption journey.</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
