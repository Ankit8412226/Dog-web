"use client";

import { useState } from "react";
import Image from "next/image";
import { FEATURED_PUPPIES } from "@/data/puppies";
import { Puppy } from "@/types/puppy";
import { getBreedEnquiryUrl } from "@/lib/whatsapp";
import { PuppyDetailModal } from "@/components/home/puppy-detail-modal";
import { ArrowRight, Eye } from "lucide-react";

export function FeaturedPuppies() {
  const [selectedPuppy, setSelectedPuppy] = useState<Puppy | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenDetail = (puppy: Puppy) => {
    setSelectedPuppy(puppy);
    setModalOpen(true);
  };

  return (
    <section id="featured-puppies" className="py-24 bg-white text-stone-900 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <span className="text-[11px] font-semibold tracking-[0.25em] text-stone-500 uppercase font-sans">
            Available Breeds
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-normal text-stone-950">
            Explore Dog Breeds & Puppies
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-sans">
            Browse purebred puppy litters and get in touch directly on WhatsApp for photos and video calls.
          </p>
        </div>

        {/* Puppies Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURED_PUPPIES.map((puppy) => {
            const whatsappUrl = getBreedEnquiryUrl(puppy.breed);

            return (
              <div
                key={puppy.id}
                className="group flex flex-col justify-between border border-stone-200/80 p-4 rounded-sm bg-white hover:border-stone-400 transition-all shadow-sm"
              >
                <div>
                  {/* Large Premium Image */}
                  <div
                    onClick={() => handleOpenDetail(puppy)}
                    className="relative aspect-[4/5] w-full overflow-hidden bg-stone-100 mb-4 cursor-pointer rounded-sm"
                  >
                    <Image
                      src={puppy.images[0]}
                      alt={puppy.breed}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />

                    {/* Quick View Hover Overlay */}
                    <div className="absolute inset-0 bg-stone-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="bg-white text-stone-950 text-[11px] font-semibold tracking-wider uppercase px-3.5 py-1.5 rounded-sm shadow-md flex items-center gap-1.5">
                        <Eye className="w-3.5 h-3.5" />
                        <span>View Details</span>
                      </span>
                    </div>
                  </div>

                  {/* Information Below Image */}
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <h3
                        onClick={() => handleOpenDetail(puppy)}
                        className="font-serif font-normal text-xl text-stone-950 group-hover:underline cursor-pointer"
                      >
                        {puppy.breed}
                      </h3>
                      <button
                        type="button"
                        onClick={() => handleOpenDetail(puppy)}
                        className="text-[11px] font-semibold uppercase tracking-wider text-stone-400 hover:text-stone-950"
                      >
                        Details
                      </button>
                    </div>
                  </div>
                </div>

                {/* Card Actions Footer */}
                <div className="pt-4 mt-4 border-t border-stone-100 flex items-center justify-between gap-2 font-sans">
                  <button
                    type="button"
                    onClick={() => handleOpenDetail(puppy)}
                    className="text-xs font-semibold uppercase tracking-wider text-stone-700 hover:text-stone-950 underline underline-offset-4"
                  >
                    View Details
                  </button>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold tracking-wider text-emerald-800 hover:text-emerald-950 flex items-center gap-1 group/link"
                  >
                    <span>Ask About Breed</span>
                    <ArrowRight className="w-3.5 h-3.5 text-emerald-700 group-hover/link:translate-x-0.5 transition-transform" />
                  </a>
                </div>

              </div>
            );
          })}
        </div>

        {/* Modal */}
        <PuppyDetailModal
          puppy={selectedPuppy}
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
        />

      </div>
    </section>
  );
}
