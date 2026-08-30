"use client";

import { useState } from "react";
import Image from "next/image";
import { Puppy } from "@/types/puppy";
import { getPuppyEnquiryUrl } from "@/lib/whatsapp";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ArrowRight, CheckCircle2, ShieldCheck, MapPin } from "lucide-react";

interface PuppyDetailModalProps {
  puppy: Puppy | null;
  isOpen: boolean;
  onClose: () => void;
}

export function PuppyDetailModal({ puppy, isOpen, onClose }: PuppyDetailModalProps) {
  const [selectedImage, setSelectedImage] = useState(0);

  if (!puppy) return null;

  const whatsappUrl = getPuppyEnquiryUrl(puppy.name, puppy.breed);

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-3xl sm:max-w-4xl max-h-[92vh] overflow-y-auto bg-white border-stone-200 text-stone-900 p-6 sm:p-10 rounded-sm shadow-2xl">
        
        {/* Header */}
        <DialogHeader className="text-left border-b border-stone-100 pb-5">
          <div className="flex flex-col space-y-1">
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-stone-500 font-sans">
              {puppy.breed}
            </span>
            <DialogTitle className="text-3xl sm:text-4xl font-serif font-normal text-stone-950">
              {puppy.name}
            </DialogTitle>
            <div className="flex items-center gap-2 text-xs text-stone-500 font-sans pt-1">
              <MapPin className="w-3.5 h-3.5 text-stone-500" />
              <span className="font-medium text-stone-700">{puppy.location}</span>
            </div>
          </div>
        </DialogHeader>

        {/* Body Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 py-4 items-start">
          
          {/* Left Column: Image Gallery (7 Cols) */}
          <div className="md:col-span-7 space-y-4">
            <div className="relative aspect-[4/3] w-full rounded-sm overflow-hidden bg-stone-100 border border-stone-200 shadow-sm">
              <Image
                src={puppy.images[selectedImage] || puppy.images[0]}
                alt={puppy.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 500px"
              />
            </div>

            {/* Thumbnails */}
            {puppy.images.length > 1 && (
              <div className="flex gap-3">
                {puppy.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`relative w-20 h-14 rounded-sm overflow-hidden border transition-all ${
                      selectedImage === idx ? "border-stone-950 scale-105" : "border-stone-200 opacity-60 hover:opacity-100"
                    }`}
                  >
                    <Image src={img} alt={`${puppy.name} thumbnail ${idx}`} fill className="object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Information & Actions (5 Cols) */}
          <div className="md:col-span-5 flex flex-col justify-between space-y-6">
            
            <div className="space-y-5 text-xs font-sans text-stone-600">
              <div>
                <h4 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-stone-400 mb-2">
                  About {puppy.name}
                </h4>
                <p className="text-stone-700 leading-relaxed text-sm">
                  {puppy.description}
                </p>
              </div>

              <div>
                <h4 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-stone-400 mb-2">
                  Traits & Disposition
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {puppy.temperament.map((t) => (
                    <span key={t} className="bg-stone-100 text-stone-800 px-2.5 py-1 text-xs">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-stone-50 border border-stone-200 p-4 rounded-sm space-y-2">
                <h4 className="font-semibold text-stone-900 text-xs flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-700" />
                  <span>Veterinary Health Records</span>
                </h4>
                <div className="space-y-1 text-stone-600 text-xs">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                    <span>Vaccinated & Dewormed</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                    <span>15-Point Vet Clearance Certificate</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                    <span>12-Month Congenital Health Guarantee</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Primary Action Button */}
            <div className="pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-emerald-800 hover:bg-emerald-900 text-white font-semibold text-xs tracking-wider uppercase py-4 px-5 rounded-sm flex items-center justify-center gap-2 transition-colors shadow-sm text-center"
              >
                <span>Ask About {puppy.name} on WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>

      </DialogContent>
    </Dialog>
  );
}
