import React from 'react';
import { MapPinIcon, BookmarkIcon, SparklesIcon, ChatIcon, BellIcon } from './Icons';

export const FeaturesSection: React.FC = () => {
  return (
    <section className="relative w-full bg-white pb-32 overflow-hidden">
      
      {/* Header Section with Clouds & Number */}
      {/* Using negative margin to pull it up into the previous section's whitespace/clouds if desired, or just standard spacing.
          Given the screenshot shows it merging with clouds, we'll create a dedicated cloud header area. */}
      <div className="relative h-[500px] w-full flex flex-col items-center justify-center -mt-20 z-10">
        
        {/* Cloud Background Layer */}
        <div className="absolute inset-0 z-0">
             <img 
                src="https://images.unsplash.com/photo-1534088568595-a066f410bcda?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
                className="w-full h-full object-cover opacity-80"
                style={{ maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 40%, transparent 100%)' }}
                alt="Sky Background"
             />
             <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-white"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center flex flex-col items-center animate-fade-in-up">
            <div className="flex items-center gap-2 mb-2 opacity-80">
                <span className="text-slate-600 font-medium text-sm md:text-base tracking-wide uppercase">Happy customers from all around the globe</span>
            </div>
            <h2 className="text-[8rem] md:text-[10rem] lg:text-[12rem] font-bold text-white leading-none tracking-tighter drop-shadow-xl mix-blend-overlay">
                21,519
            </h2>
        </div>

        {/* Decorative Vertical Lines */}
        <div className="absolute top-0 bottom-0 left-8 md:left-12 w-px bg-gradient-to-b from-transparent via-slate-300 to-transparent opacity-50"></div>
        <div className="absolute top-0 bottom-0 right-8 md:right-12 w-px bg-gradient-to-b from-transparent via-slate-300 to-transparent opacity-50"></div>
      </div>

      {/* Feature Cards Grid */}
      <div className="relative z-20 max-w-[1200px] mx-auto px-4 md:px-8 -mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Card 1: Map Search */}
              <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-lg border border-gray-100 flex flex-col justify-between h-[500px] group hover:shadow-2xl transition-all duration-300">
                  {/* Visual Area */}
                  <div className="flex-1 flex flex-col items-center justify-center relative">
                      {/* Floating Elements */}
                      <div className="flex gap-4 mb-6 animate-bounce-slow">
                          <button className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-full shadow-sm text-gray-700 font-medium hover:border-gray-300">
                              <MapPinIcon />
                              <span>Map</span>
                          </button>
                          <button className="w-12 h-12 flex items-center justify-center bg-white border border-gray-200 rounded-full shadow-sm text-gray-700 hover:border-gray-300">
                              <BookmarkIcon />
                          </button>
                      </div>
                      <button className="flex items-center gap-2 px-8 py-4 bg-[#5B95FF] text-white rounded-full shadow-blue-200 shadow-xl text-lg font-medium hover:bg-blue-600 transition-colors transform group-hover:scale-105 duration-300">
                          <SparklesIcon />
                          <span>Search with AI</span>
                      </button>
                      
                      {/* Glow Effect */}
                      <div className="absolute inset-0 bg-blue-100/30 filter blur-3xl rounded-full transform scale-75 -z-10"></div>
                  </div>

                  {/* Text Content */}
                  <div className="mt-8 text-center md:text-left">
                      <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">Find Places Smarter, Faster.</h3>
                      <p className="text-gray-500 leading-relaxed">Let our AI help you find top-rated spots, hidden gems, and everything in between — all personalized just for you.</p>
                  </div>
              </div>

              {/* Card 2: Chat Interface */}
              <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-lg border border-gray-100 flex flex-col justify-between h-[500px] overflow-hidden group hover:shadow-2xl transition-all duration-300">
                   {/* Visual Area */}
                   <div className="flex-1 flex items-center justify-center relative pt-8">
                       <div className="w-[280px] bg-white rounded-t-3xl shadow-2xl border border-gray-200 p-4 pb-0 transform translate-y-4 group-hover:translate-y-2 transition-transform duration-500">
                           {/* Chat Header */}
                           <div className="bg-black text-white p-4 rounded-2xl flex items-center gap-3 mb-4">
                               <span className="text-white/80"><SparklesIcon /></span>
                               <span className="font-medium text-sm">Talk to Zapp</span>
                           </div>
                           {/* Chat Bubbles */}
                           <div className="space-y-3 px-1">
                               <div className="bg-gray-100 rounded-2xl rounded-tl-none p-3 text-xs text-gray-600 leading-relaxed">
                                   Hi Zapp, I'm looking for a 3-bedroom apartment in downtown.
                                   <div className="absolute -right-2 -top-2 w-6 h-6 rounded-full border-2 border-white overflow-hidden">
                                       <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80" alt="User" />
                                   </div>
                               </div>
                               <div className="bg-blue-50 rounded-2xl rounded-tr-none p-3 text-xs text-gray-600 flex gap-2">
                                   <div className="w-5 h-5 rounded-full bg-gray-300 flex-shrink-0"></div>
                                   <p>Sure! What's your budget range and preferred move-in date?</p>
                               </div>
                           </div>
                       </div>
                       {/* Blue Glow Behind */}
                       <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-blue-200/50 filter blur-3xl rounded-full -z-10"></div>
                   </div>

                   {/* Text Content */}
                   <div className="mt-8 text-center md:text-left relative z-20 bg-white">
                      <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">Find your next home with Zapp</h3>
                      <p className="text-gray-500 leading-relaxed">Let our AI-powered assistant guide you through your home search. Instantly get recommendations, compare listings, and ask anything.</p>
                   </div>
              </div>

              {/* Card 3: Notification (Blue Gradient) */}
              <div className="bg-gradient-to-b from-[#DCEAFF] to-white rounded-[2.5rem] p-8 md:p-12 shadow-lg border border-gray-100 flex flex-col justify-between h-[400px] md:h-[500px] group hover:shadow-2xl transition-all duration-300">
                  {/* Visual Area */}
                  <div className="flex-1 flex items-center justify-center relative">
                      <div className="bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-xl w-full max-w-sm transform group-hover:-translate-y-2 transition-transform duration-500">
                          <div className="flex items-start gap-4">
                              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-slate-700 shrink-0">
                                  {/* Flower Icon Placeholder */}
                                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M2 12h20M12 2a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5zM12 12a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5z"/></svg>
                              </div>
                              <div className="flex-1">
                                  <div className="flex justify-between items-center mb-1">
                                      <span className="font-bold text-slate-900">Archistry</span>
                                      <span className="text-xs text-gray-400">3m ago</span>
                                  </div>
                                  <p className="text-sm text-gray-600 font-medium">Check new list in your favorite neighborhood</p>
                              </div>
                          </div>
                      </div>
                  </div>

                  {/* Text Content */}
                  <div className="mt-8 text-center md:text-left">
                      <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">Discover New Listings Near You</h3>
                      <p className="text-gray-500 leading-relaxed">Explore fresh properties in your saved areas. Schedule visits, save favorites, and make your next move with confidence.</p>
                  </div>
              </div>

              {/* Card 4: Expert Agents */}
              <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-lg border border-gray-100 flex flex-col justify-between h-[400px] md:h-[500px] group hover:shadow-2xl transition-all duration-300">
                  {/* Visual Area */}
                  <div className="flex-1 flex flex-col items-center justify-center relative">
                      
                      {/* Profile Pill */}
                      <div className="flex items-center gap-3 bg-gray-50 pr-6 pl-2 py-2 rounded-full shadow-sm mb-6 transform rotate-[-2deg] group-hover:rotate-0 transition-transform duration-300">
                          <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="Agent" className="w-10 h-10 rounded-full object-cover border-2 border-white" />
                          <div className="text-left">
                              <p className="text-xs font-bold text-slate-900">James O'Conner</p>
                              <p className="text-[10px] text-gray-500">Helping you find your perfect place.</p>
                          </div>
                      </div>

                      {/* 3D Avatar (using an image to replicate the look) */}
                      <div className="relative w-40 h-40">
                         {/* This assumes a transparent PNG or similar cutout style image */}
                         <img 
                            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                            className="w-full h-full object-cover rounded-full shadow-2xl" 
                            alt="3D Avatar"
                            style={{ clipPath: 'circle(50% at 50% 50%)' }} // Making it circular as placeholder for the 3D head
                         />
                         {/* Thumb up icon overlay to simulate gesture */}
                         <div className="absolute -bottom-2 -right-2 bg-yellow-400 p-2 rounded-full text-white shadow-lg animate-bounce-slow">
                             <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/></svg>
                         </div>
                      </div>
                  </div>

                  {/* Text Content */}
                  <div className="mt-8 text-center md:text-left">
                      <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">Expert Agents. Real Results.</h3>
                      <p className="text-gray-500 leading-relaxed">Our agents are more than just salespeople — they're trusted advisors.</p>
                  </div>
              </div>

          </div>
      </div>
    </section>
  );
};