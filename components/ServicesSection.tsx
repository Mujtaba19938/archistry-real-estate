import React, { useState } from 'react';
import { PlusIcon } from './Icons';

const services = [
  {
    id: '01',
    title: 'Home Buying Guidance',
    description: 'Find the right home, hassle-free.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: '02',
    title: 'Property Valuation',
    description: 'Know your property\'s true market value.',
    image: 'https://images.unsplash.com/photo-1554469384-e58fac16e23a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: '03',
    title: 'Investment Opportunities',
    description: 'Smart real estate opportunities for growth.',
    image: 'https://images.unsplash.com/photo-1460472178825-e5240623afd5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: '04',
    title: 'Seamless Closings',
    description: 'Smooth, stress-free transactions.',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  }
];

export const ServicesSection: React.FC = () => {
  const [activeId, setActiveId] = useState<string | null>('02');

  return (
    <section className="relative w-full bg-white pt-24 pb-48 px-4 md:px-8 overflow-hidden">
      
      {/* Background Watermark (Top Left) */}
      <div className="absolute -top-20 -left-20 w-96 h-96 opacity-[0.03] pointer-events-none transition-transform duration-1000 hover:rotate-12">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-black">
          <path d="M100 0C120 40 160 50 160 50C160 50 120 60 100 100C80 60 40 50 40 50C40 50 80 40 100 0Z" fill="currentColor" transform="rotate(0 100 100)" />
          <path d="M100 0C120 40 160 50 160 50C160 50 120 60 100 100C80 60 40 50 40 50C40 50 80 40 100 0Z" fill="currentColor" transform="rotate(72 100 100)" />
          <path d="M100 0C120 40 160 50 160 50C160 50 120 60 100 100C80 60 40 50 40 50C40 50 80 40 100 0Z" fill="currentColor" transform="rotate(144 100 100)" />
          <path d="M100 0C120 40 160 50 160 50C160 50 120 60 100 100C80 60 40 50 40 50C40 50 80 40 100 0Z" fill="currentColor" transform="rotate(216 100 100)" />
          <path d="M100 0C120 40 160 50 160 50C160 50 120 60 100 100C80 60 40 50 40 50C40 50 80 40 100 0Z" fill="currentColor" transform="rotate(288 100 100)" />
        </svg>
      </div>

      {/* Cloud Bottom Overlay */}
      <div className="absolute bottom-0 left-0 w-full h-64 pointer-events-none z-10">
         <img 
            src="https://images.unsplash.com/photo-1534088568595-a066f410bcda?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            className="w-full h-full object-cover opacity-40 mask-image-gradient"
            style={{ maskImage: 'linear-gradient(to top, rgba(0,0,0,1), transparent)' }}
            alt="Clouds"
         />
         <div className="absolute bottom-10 left-0 w-full text-center z-20">
             <div className="inline-flex items-center gap-2 text-white/90 text-sm font-medium drop-shadow-md animate-fade-in">
                 <span className="opacity-80">Happy customers from all around the globe</span>
             </div>
         </div>
      </div>

      <div className="max-w-[1000px] mx-auto flex flex-col items-center relative z-20">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-20">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-gray-200 bg-gray-50 text-sm font-medium text-gray-800 shadow-sm mb-8 hover:shadow-md transition-shadow">
                • Services
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-slate-900 mb-6 tracking-tight">
                What We Offer?
            </h2>
            <p className="text-gray-500 text-lg max-w-md">
                Buying or selling a property can be overwhelming — we make it effortless.
            </p>
        </div>

        {/* Services List */}
        <div className="w-full flex flex-col">
            {services.map((service) => (
                <div 
                    key={service.id}
                    className="group relative border-t border-gray-100 last:border-b"
                    onMouseEnter={() => setActiveId(service.id)}
                >
                    <div className={`py-10 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12 cursor-pointer transition-all duration-500 ease-out ${activeId === service.id ? 'opacity-100' : 'opacity-40'}`}>
                        
                        {/* Title - Left */}
                        <div className="w-full md:w-1/3 text-left">
                            <h3 className={`text-2xl md:text-3xl font-medium flex items-center gap-3 transition-colors duration-300 ${activeId === service.id ? 'text-black' : 'text-gray-400'}`}>
                                <div 
                                  className={`flex items-center justify-center overflow-hidden transition-all duration-500 ease-in-out ${activeId === service.id ? 'w-6 opacity-100 rotate-0' : 'w-0 opacity-0 -rotate-90'}`}
                                >
                                    <PlusIcon /> 
                                </div>
                                <span>{service.title}</span>
                            </h3>
                        </div>

                        {/* Description - Center */}
                        <div className="w-full md:w-1/3 text-left md:text-center">
                            <p className={`text-lg font-medium transition-colors duration-300 ${activeId === service.id ? 'text-gray-900' : 'text-gray-500'}`}>
                                {service.description}
                            </p>
                        </div>

                        {/* Number/Action - Right */}
                        <div className="w-full md:w-1/3 flex justify-end items-center">
                            <div className="relative h-8 flex items-center justify-end overflow-hidden">
                                {/* "More info" Slide Up */}
                                <span className={`absolute right-0 text-lg font-bold text-black border-b border-black pb-0.5 transition-all duration-500 ease-out ${activeId === service.id ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
                                    More info
                                </span>
                                {/* ID Slide Up/Down */}
                                <span className={`absolute right-0 text-xl font-medium text-gray-300 transition-all duration-500 ease-out ${activeId === service.id ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'}`}>
                                    {service.id}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Floating Hover Image */}
                    <div 
                        className={`hidden lg:block absolute right-[10%] xl:right-[15%] top-1/2 z-30 pointer-events-none transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                            activeId === service.id 
                            ? 'opacity-100 -translate-y-1/2 rotate-6 scale-100 blur-none' 
                            : 'opacity-0 -translate-y-[20%] rotate-0 scale-95 blur-sm'
                        }`}
                    >
                        <div className="w-64 h-48 rounded-2xl overflow-hidden border-[6px] border-white shadow-2xl">
                            <img 
                                src={service.image} 
                                alt={service.title} 
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            ))}
        </div>

      </div>
    </section>
  );
};