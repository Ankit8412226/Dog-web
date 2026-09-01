export function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Explore",
      description: "Browse available puppies and breeds carefully raised by verified breeders.",
    },
    {
      number: "02",
      title: "Enquire",
      description: "Message us directly on WhatsApp for quick, personal assistance.",
    },
    {
      number: "03",
      title: "Get Complete Details",
      description: "We'll help you with health records, photo updates, consultations, and next steps.",
    },
    {
      number: "04",
      title: "Welcome Home",
      description: "Find the right companion for your family with safe door-step transport.",
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-stone-50 text-stone-900 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <span className="text-[11px] font-semibold tracking-[0.25em] text-stone-500 uppercase font-sans">
            Simple Process
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-normal text-stone-950">
            How It Works
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="border-t border-stone-900 pt-6 space-y-3"
            >
              <div className="font-serif text-3xl font-normal text-stone-400">
                {step.number} — {step.title}
              </div>
              <p className="text-xs text-stone-600 font-sans leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
