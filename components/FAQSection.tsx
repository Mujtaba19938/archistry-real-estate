import React, { useState } from 'react';
import { ChevronDownIcon } from './Icons';

const faqs = [
  {
    question: "What services does your architecture firm provide?",
    answer: "We offer a full suite of services including architectural design, interior design, urban planning, 3D visualization, and sustainable building consultations."
  },
  {
    question: "How involved will I be in the design process?",
    answer: "We believe in a collaborative approach. You will be involved at every key stage, from initial concept to final material selection, ensuring the result aligns with your vision."
  },
  {
    question: "How long does a typical project take?",
    answer: "Timeline varies by scope, but a typical residential project takes 8-12 months from concept to completion. Commercial projects may vary depending on complexity."
  },
  {
    question: "Do you handle permits and approvals?",
    answer: "Yes, we handle all necessary permitting and zoning approvals with local authorities to ensure a smooth construction process without administrative headaches."
  },
  {
    question: "Can you work with a specific budget?",
    answer: "Absolutely. We respect your financial parameters and work creatively to deliver exceptional value and design quality within your specified budget."
  }
];

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="w-full bg-white py-24 px-4 md:px-8">
      <div className="max-w-[1000px] mx-auto flex flex-col items-center">

        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-slate-900 mb-6 tracking-tight leading-[1.1]">
            Frequently Asked <br />
            <div className="inline-flex items-center gap-3 mt-2">
              <span className="w-10 h-10 md:w-12 md:h-12 border border-gray-200 rounded-xl flex items-center justify-center text-xl md:text-2xl shadow-sm text-slate-900 font-medium bg-white">?</span>
              <span>Questions</span>
            </div>
          </h2>
          <p className="text-gray-400 text-sm md:text-base font-medium mt-4">
            Each project highlights our focus on creativity.
          </p>
        </div>

        {/* FAQ List */}
        <div className="w-full flex flex-col">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-100 last:border-0"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between py-6 md:py-8 text-left focus:outline-none group"
              >
                <span className="text-lg md:text-xl font-semibold text-slate-900 group-hover:text-black transition-colors">
                  {faq.question}
                </span>
                <span className={`transform transition-transform duration-300 text-gray-400 ${openIndex === index ? 'rotate-180' : 'rotate-0'}`}>
                  <div className="scale-125">
                    <ChevronDownIcon />
                  </div>
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="pb-8 text-gray-400 leading-relaxed text-sm md:text-base max-w-3xl">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};