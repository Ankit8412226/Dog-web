import Link from "next/link";
import { Dog } from "lucide-react";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`flex items-center gap-2.5 group ${className}`}>
      <div className="w-9 h-9 rounded-full bg-stone-950 text-amber-400 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
        <Dog className="w-5 h-5 text-amber-300 stroke-[2.2]" />
      </div>
      <div className="flex flex-col">
        <span className="font-serif font-bold text-xl tracking-[0.12em] text-stone-950 uppercase leading-none group-hover:text-stone-700 transition-colors">
          Puppy Club
        </span>
        <span className="text-[9px] font-semibold tracking-[0.22em] text-stone-500 uppercase font-sans mt-0.5">
          Premium Canines
        </span>
      </div>
    </Link>
  );
}
