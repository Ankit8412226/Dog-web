import { TESTIMONIALS } from "@/data/puppies";

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white text-stone-900 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <span className="text-[11px] font-semibold tracking-[0.25em] text-stone-500 uppercase font-sans">
            Client Voices
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-normal text-stone-950">
            Adopter Experiences
          </h2>
        </div>

        {/* Editorial Quotes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 sm:gap-16">
          {TESTIMONIALS.map((test) => (
            <div key={test.id} className="space-y-6 flex flex-col justify-between border-t border-stone-200 pt-8">
              <p className="font-serif italic text-stone-800 text-base sm:text-lg leading-relaxed">
                "{test.comment}"
              </p>

              <div className="space-y-1 font-sans">
                <h4 className="font-semibold text-stone-950 text-sm">{test.author}</h4>
                <p className="text-xs text-stone-500">
                  {test.location} • Adopted {test.dogName} ({test.dogBreed})
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
