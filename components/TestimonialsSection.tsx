import React from 'react';
import { ChevronLeftIcon, ChevronRightIcon, QuoteIcon } from './Icons';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="w-full bg-white py-24 px-4 md:px-8 overflow-hidden relative">
      <div className="max-w-[1400px] mx-auto flex flex-col items-center">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24 z-10 relative">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-gray-200 bg-gray-50 text-sm font-medium text-gray-800 shadow-sm mb-6">
                • Testimonial
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-slate-900 mb-4 tracking-tight">
                Hear From Our Clients
            </h2>
            <p className="text-gray-400 text-sm md:text-base font-medium">
                Real Stories From Real Clients, Backed by Real Results.
            </p>
        </div>

        {/* Carousel Container */}
        <div className="relative w-full max-w-6xl flex items-center justify-center">
            
            {/* Left Decor / Navigation (Simulating previous card) */}
            <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-48 h-80 bg-gray-50 rounded-r-[2rem] rounded-l-none -ml-24 pointer-events-none"></div>
            
            {/* Prev Button */}
            <button className="absolute left-4 md:left-12 z-20 w-12 h-12 rounded-full bg-white border border-gray-100 shadow-lg flex items-center justify-center text-gray-400 hover:text-black hover:scale-110 transition-all">
                <ChevronLeftIcon />
            </button>

            {/* Main Card */}
            <div className="relative w-full max-w-4xl bg-white rounded-[2.5rem] shadow-xl border border-gray-100 overflow-hidden flex flex-col md:flex-row min-h-[400px] z-10">
                
                {/* Image Section */}
                <div className="w-full md:w-2/5 h-64 md:h-auto relative">
                    <img 
                        src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Jason Todd" 
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Content Section */}
                <div className="w-full md:w-3/5 p-8 md:p-12 lg:p-16 flex flex-col justify-center relative bg-white">
                    {/* Background Quote Icon */}
                    <div className="absolute top-12 right-12 text-gray-100 opacity-50 transform scale-[4] -rotate-12 pointer-events-none">
                        <QuoteIcon />
                    </div>

                    <div className="relative z-10">
                        {/* Quote */}
                        <p className="text-lg md:text-xl lg:text-2xl text-slate-900 font-medium leading-relaxed mb-10">
                            <span className="text-gray-300 mr-2 text-3xl align-top">"</span>
                            Working with Archistry was amazing it was an absolute pleasure. From the initial consultation to closing day, they guided us through every step with patience and expertise. They truly listened to our needs and helped us find the perfect home. We couldn't be happier!
                            <span className="text-gray-300 ml-2 text-3xl align-top">"</span>
                        </p>

                        {/* Author */}
                        <div className="flex flex-col">
                            <h4 className="text-lg font-bold text-slate-900">Jason Todd</h4>
                            <p className="text-sm text-gray-500">Founder of optic affiliate</p>
                        </div>
                    </div>
                </div>

            </div>

            {/* Next Button */}
            <button className="absolute right-4 md:right-12 z-20 w-12 h-12 rounded-full bg-white border border-gray-100 shadow-lg flex items-center justify-center text-gray-400 hover:text-black hover:scale-110 transition-all">
                <ChevronRightIcon />
            </button>

            {/* Right Decor / Navigation (Simulating next card) */}
            <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-48 h-80 bg-gray-50 rounded-l-[2rem] rounded-r-none -mr-24 pointer-events-none"></div>

        </div>

        {/* Optional: Bottom visual anchor if needed, keeping it clean for now as per image */}
      </div>
    </section>
  );
};