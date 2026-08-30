"use client";

import { useState } from "react";
import Link from "next/link";
import { getGeneralEnquiryUrl } from "@/lib/whatsapp";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ArrowRight } from "lucide-react";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: "Puppies", href: "#featured-puppies" },
    { label: "Breeds", href: "#breeds" },
    { label: "About Us", href: "#why-choose-us" },
    { label: "Contact", href: "#contact" },
  ];

  const whatsappUrl = getGeneralEnquiryUrl();

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-stone-200 text-stone-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="font-serif font-bold text-xl tracking-[0.15em] text-stone-950 uppercase group-hover:text-stone-700 transition-colors">
            Paws & Heritage
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-xs font-semibold uppercase tracking-widest text-stone-600 hover:text-stone-950 transition-colors py-1 relative group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-stone-950 transition-all duration-200 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* Action Button: WhatsApp Us */}
        <div className="hidden sm:flex items-center">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-800 hover:bg-emerald-900 text-white font-semibold text-xs tracking-wider uppercase px-6 py-3 transition-colors flex items-center gap-2 shadow-sm rounded-sm"
          >
            <span>WhatsApp Us</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Menu */}
        <div className="flex md:hidden items-center gap-3">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-800 text-white font-semibold text-[11px] tracking-wider uppercase px-4 py-2 rounded-sm"
          >
            WhatsApp
          </a>

          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger className="p-2 text-stone-900 hover:text-stone-600">
              <Menu className="w-6 h-6 stroke-[1.5]" />
              <span className="sr-only">Toggle navigation menu</span>
            </SheetTrigger>
            <SheetContent side="right" className="bg-white border-stone-200 text-stone-900 w-80 p-8 flex flex-col justify-between">
              <div>
                <SheetHeader className="text-left mb-8 border-b border-stone-100 pb-4">
                  <SheetTitle className="font-serif text-lg tracking-widest uppercase text-stone-950">
                    Paws & Heritage
                  </SheetTitle>
                </SheetHeader>

                <div className="flex flex-col gap-5">
                  {navLinks.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="text-sm font-semibold uppercase tracking-wider text-stone-800 hover:text-stone-950 py-2 border-b border-stone-100"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-stone-200">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="w-full inline-flex items-center justify-center gap-2 bg-emerald-800 text-white font-semibold text-xs tracking-widest uppercase py-3.5 rounded-sm"
                >
                  <span>Chat on WhatsApp</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>

      </div>
    </header>
  );
}
