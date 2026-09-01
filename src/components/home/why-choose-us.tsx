export function WhyChooseUs() {
  const reasons = [
    {
      title: "Personal Guidance",
      description: "Get personalized help choosing the right dog breed for your family schedule, space, and lifestyle.",
    },
    {
      title: "Direct Communication",
      description: "Talk to us directly on WhatsApp for fast answers, breed guidance, and puppy photo updates.",
    },
    {
      title: "Clear Information",
      description: "Get important puppy health, vaccination, and parent details before making any decision.",
    },
    {
      title: "Helpful Support",
      description: "We're available to answer questions and offer veterinary guidance throughout the entire process.",
    },
  ];

  return (
    <section className="py-24 bg-stone-50 text-stone-900 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <span className="text-[11px] font-semibold tracking-[0.25em] text-stone-500 uppercase font-sans">
            Our Commitment
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-normal text-stone-950">
            Why Families Choose Us
          </h2>
        </div>

        {/* 2-Column Clean Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16">
          {reasons.map((item, idx) => (
            <div key={idx} className="border-t border-stone-300 pt-6 space-y-2">
              <h3 className="font-serif font-semibold text-xl text-stone-950">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 font-sans leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
