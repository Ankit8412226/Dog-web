import Image from "next/image";
import { POPULAR_BREEDS } from "@/data/puppies";
import { getBreedEnquiryUrl } from "@/lib/whatsapp";

export function BreedShowcase() {
  return (
    <section id="breeds" className="py-24 bg-stone-50 text-stone-900 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <span className="text-[11px] font-semibold tracking-[0.25em] text-stone-500 uppercase font-sans">
            Directory
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-normal text-stone-950">
            Explore Popular Breeds
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-sans">
            Browse purebred litters by temperament, size, and activity requirements.
          </p>
        </div>

        {/* Breed Photography Tiles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {POPULAR_BREEDS.map((breed) => {
            const whatsappUrl = getBreedEnquiryUrl(breed.name);

            return (
              <a
                key={breed.id}
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block overflow-hidden bg-stone-200 border border-stone-200 aspect-[4/3] rounded-sm"
              >
                <Image
                  src={breed.image}
                  alt={breed.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, 400px"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent"></div>

                <div className="absolute bottom-6 left-6 right-6 text-white flex items-end justify-between">
                  <div>
                    <h3 className="font-serif font-normal text-2xl text-white">
                      {breed.name}
                    </h3>
                    <p className="text-xs text-stone-300 font-sans tracking-wide mt-0.5">
                      {breed.availableCount} Puppies Available · {breed.size} Breed
                    </p>
                  </div>
                  <span className="text-xs uppercase tracking-wider font-semibold text-amber-300 underline underline-offset-4 opacity-90 group-hover:opacity-100">
                    Enquire →
                  </span>
                </div>
              </a>
            );
          })}
        </div>

      </div>
    </section>
  );
}
