import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PUPPY CLUB | Premium Canine Marketplace",
  description: "An editorial marketplace connecting discerning families with health-certified, ethically bred purebred puppies.",
  keywords: [
    "puppy club",
    "ethical dog marketplace",
    "golden retriever puppies",
    "purebred puppies",
    "certified dog breeders"
  ],
  openGraph: {
    title: "PUPPY CLUB | Premium Canine Marketplace",
    description: "Fill your home with unconditional love and happiness. Discover healthy, well-bred puppies for sale from trusted dog breeders, including Golden Retrievers, Toy Poodles, and more.",
    url: "https://puppyclub.in",
    siteName: "PUPPY CLUB",
    images: [
      {
        url: "/images/dog_images/golden_retriever.jpeg",
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
      className="scroll-smooth h-full antialiased"
    >
      <body className="min-h-full flex flex-col bg-white text-stone-900 font-sans selection:bg-stone-900 selection:text-white">
        {children}
      </body>
    </html>
  );
}
