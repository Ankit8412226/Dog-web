import { FAQS } from "@/data/puppies";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export function FAQ() {
  return (
    <section className="py-24 bg-stone-50 text-stone-900 border-b border-stone-200">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mb-14 space-y-3">
          <span className="text-[11px] font-semibold tracking-[0.25em] text-stone-500 uppercase font-sans">
            Information
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-normal text-stone-950">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Accordion */}
        <Accordion className="w-full space-y-0 divide-y divide-stone-200 border-t border-b border-stone-200">
          {FAQS.map((faq, idx) => (
            <AccordionItem
              key={idx}
              value={`item-${idx}`}
              className="py-2 bg-transparent"
            >
              <AccordionTrigger className="text-stone-950 font-serif font-normal text-base hover:text-stone-600 text-left py-4 no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-stone-600 text-xs sm:text-sm font-sans leading-relaxed pb-4 pt-1">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

      </div>
    </section>
  );
}
