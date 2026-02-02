import React from 'react';
import { ArrowRightIcon, BedIcon, BathIcon, DollarIcon, ChatIcon } from './Icons';

export const TrustedPartnersSection: React.FC = () => {
  return (
    <section className="w-full bg-white py-20 px-4 md:px-8 overflow-hidden">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Left Column: Image & Floating Cards */}
        <div className="relative">
            {/* Main Background Image */}
            <div className="rounded-[2.5rem] overflow-hidden aspect-[4/5] relative">
                <img 
                    src="https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80" 
                    alt="Modern Villa at Sunset" 
                    className="w-full h-full object-cover"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-black/10"></div>
            </div>

            {/* Floating Card 1: Sales Statistics */}
            <div className="absolute top-[25%] -right-4 md:-right-12 bg-white p-5 rounded-3xl shadow-2xl w-[260px] md:w-[300px] animate-fade-in-up">
                <h4 className="font-semibold text-gray-900 mb-4">Sales Statistics</h4>
                <div className="flex items-end justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600">
                            <DollarIcon />
                        </div>
                        <div>
                            <p className="text-xs text-gray-500 font-medium">Total Profit</p>
                            <p className="text-xl font-bold text-gray-900">$89.3K</p>
                        </div>
                    </div>
                    {/* Mini Chart SVG */}
                    <div className="w-16 h-8 text-blue-500">
                        <svg viewBox="0 0 60 30" fill="none" className="w-full h-full">
                            <path d="M0 25 C10 25, 10 10, 20 15 C30 20, 30 5, 40 10 C50 15, 50 0, 60 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            <circle cx="60" cy="5" r="2" fill="currentColor" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Floating Card 2: Property Card */}
            <div className="absolute top-[48%] -left-4 md:-left-8 bg-white p-4 rounded-3xl shadow-2xl w-[280px] md:w-[320px] animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <h4 className="font-semibold text-gray-900 mb-3 px-1">Sales Statistics</h4>
                <div className="flex gap-4">
                    {/* Thumbnail */}
                    <div className="w-20 h-20 rounded-2xl overflow-hidden shrink-0">
                        <img 
                            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=200&q=80" 
                            alt="Property Thumb" 
                            className="w-full h-full object-cover"
                        />
                    </div>
                    {/* Details */}
                    <div className="flex-1 flex flex-col justify-between py-0.5">
                        <div className="flex items-center gap-4 text-xs text-gray-500 font-medium">
                            <span className="flex items-center gap-1"><BedIcon /> 3 Beds</span>
                            <span className="flex items-center gap-1"><BathIcon /> 2 Bathrooms</span>
                        </div>
                        <div className="flex items-center justify-between mt-2">
                            <div>
                                <span className="text-lg font-bold text-gray-900">$780</span>
                                <span className="text-xs text-gray-500">/m</span>
                            </div>
                            <div className="flex items-center gap-1 text-xs text-gray-500 font-medium bg-gray-50 px-2 py-1 rounded-lg">
                                <span className="text-gray-400"><ChatIcon /></span>
                                <span>62 Reviews</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Right Column: Text Content */}
        <div className="flex flex-col items-start">
             {/* Pill Tag */}
             <div className="mb-6">
                <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-gray-200 bg-gray-50 text-sm font-medium text-gray-800 shadow-sm">
                    • About us
                </span>
            </div>

            {/* Headline */}
            <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.15] font-semibold text-slate-900 mb-8 tracking-tight">
                More Than Agents, 
                <span className="inline-flex items-center align-middle mx-3 -mt-2">
                    <div className="flex -space-x-3">
                        <img className="w-12 h-12 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" alt="Agent 1" />
                        <img className="w-12 h-12 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&q=80" alt="Agent 2" />
                    </div>
                </span>
                Your Trusted Partners in Every Property 
                <span className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-black text-white rounded-full mx-3 align-middle rotate-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 5v14M5 12h14" />
                    </svg>
                </span>
                Decision
            </h2>

            {/* Description */}
            <p className="text-gray-500 text-lg leading-relaxed mb-10 max-w-lg">
                At Archistry, we're more than just real estate experts, we're your neighbors, your advisors, and your partners in finding the perfect place to call home.
            </p>

            {/* CTA Button */}
            <button className="group flex items-center gap-2 px-6 py-3 rounded-full border border-gray-200 text-gray-900 font-medium hover:bg-black hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg">
                <span>Learn more</span>
                <span className="group-hover:translate-x-1 transition-transform">
                    <ArrowRightIcon />
                </span>
            </button>
        </div>

      </div>
    </section>
  );
};