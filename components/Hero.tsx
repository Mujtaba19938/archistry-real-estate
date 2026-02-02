import React from 'react';
import { PlayIcon, DocumentIcon, ArrowRightIcon } from './Icons';

export const Hero: React.FC = () => {
  return (
    <div id="home" className="relative w-full min-h-screen overflow-hidden bg-slate-900">

      {/* Background Image Layer */}
      <div
        className="absolute inset-0 w-full h-full z-0"
        style={{
          // Dark modern exterior with vertical slats, matching the latest reference
          backgroundImage: `url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2653&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/50"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 pt-20 text-center">

        {/* Main Heading */}
        <h1 className="w-full max-w-[95%] mx-auto font-semibold text-white tracking-tight leading-[1.1] drop-shadow-2xl">
          {/* First Line */}
          <span className="block text-5xl md:text-7xl lg:text-8xl mb-4 md:mb-6">
            Archistry — Your
          </span>

          {/* Second Line - Enforced single line on desktop */}
          <span className="flex flex-col md:flex-row flex-nowrap items-center justify-center gap-3 md:gap-6 text-4xl md:text-6xl lg:text-8xl whitespace-normal md:whitespace-nowrap">
            <span>Partner in</span>

            {/* Icon */}
            <span className="inline-flex items-center justify-center w-14 h-14 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-white/10 backdrop-blur-md rounded-2xl md:rounded-3xl border border-white/20 transform -rotate-6 shadow-2xl shrink-0 my-2 md:my-0">
              <span className="text-white drop-shadow-md transform scale-125 md:scale-150">
                <DocumentIcon />
              </span>
            </span>

            <span>Real Estate Expertise</span>
          </span>
        </h1>

        {/* Subheading */}
        <p className="mt-10 md:mt-12 max-w-4xl mx-auto text-lg md:text-2xl text-white/90 font-light leading-relaxed drop-shadow-lg text-shadow-md">
          We bring exceptional properties to life through strategic insight and unmatched market expertise. From buying to selling, we create real estate experiences that inspire and endure.
        </p>

        {/* CTA Buttons */}
        <div className="mt-12 md:mt-14 flex flex-col md:flex-row items-center gap-6 md:gap-8">
          <button className="bg-white text-slate-900 px-8 md:px-10 py-4 md:py-5 text-lg rounded-full font-bold hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.2)] flex items-center gap-3">
            Contact us
          </button>

          <button className="flex items-center gap-4 text-white text-lg font-medium hover:text-white/80 transition-colors group drop-shadow-xl">
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 group-hover:bg-white/30 transition-all">
              <PlayIcon />
            </div>
            <span>Our Showreel</span>
          </button>
        </div>

      </div>

    </div>
  );
};