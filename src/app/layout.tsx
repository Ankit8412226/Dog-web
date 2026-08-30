import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PAWS & HERITAGE | Fine Canine Marketplace",
  description: "An editorial marketplace connecting discerning families with health-certified, ethically bred purebred puppies.",
  keywords: [
    "ethical dog marketplace",
    "golden retriever puppies",
    "purebred puppies",
    "certified dog breeders",
    "paws and heritage"
  ],
  openGraph: {
    title: "PAWS & HERITAGE | Fine Canine Marketplace",
    description: "An editorial marketplace connecting discerning families with health-certified, ethically bred purebred puppies.",
    url: "https://pawsheritage.com",
    siteName: "PAWS & HERITAGE",
    images: [
      {
        url: "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&q=80&w=1200",
        width: 1200,
        height: 630,
        alt: "Golden Retriever puppy",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${jakartaSans.variable} ${playfair.variable} scroll-smooth h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-stone-900 font-sans selection:bg-stone-900 selection:text-white">
        {children}
      </body>
    </html>
  );
}
