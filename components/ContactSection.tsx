import React from 'react';
import { PhoneIcon, MapPinIcon, MailIcon, UserIcon } from './Icons';

export const ContactSection: React.FC = () => {
  return (
    <section className="relative w-full min-h-[900px] flex flex-col justify-center py-20 overflow-hidden bg-white">
      
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Modern House Background" 
            className="w-full h-full object-cover object-bottom"
          />
          {/* Overlay to fade top to white/sky for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#EFF6FF] via-[#EFF6FF]/80 to-transparent pb-[40%]"></div>
          {/* Additional bottom fade for integration */}
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent opacity-20"></div>
      </div>

      <div className="relative z-10 max-w-[1100px] mx-auto px-4 w-full h-full flex flex-col justify-between flex-1">
        
        {/* Top Labels */}
        <div className="flex justify-between text-xs md:text-sm font-medium text-gray-400 uppercase tracking-wider mb-12 px-2">
           <span>Luxury living</span>
           <span className="hidden md:block">Client first approach</span>
           <span>Trustworthy</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end pb-12">
           
           {/* Left Column: Headline & Info Card */}
           <div className="flex flex-col justify-center h-full">
              
              <h1 className="text-5xl md:text-7xl font-semibold text-slate-900 leading-[1.1] mb-12 tracking-tight">
                 Excellence <br/>
                 – Professionalism <br/>
                 Client-First
              </h1>

              {/* Contact Info Card */}
              <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-xl w-full">
                 <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-4 text-slate-800 font-medium text-lg">
                       <span className="text-gray-500"><PhoneIcon /></span> 
                       (555) 019-2837
                    </div>
                    <div className="flex items-center gap-4 text-slate-800 font-medium text-lg">
                       <span className="text-gray-500 flex-shrink-0"><MapPinIcon /></span> 
                       <span>7428 Highland Crest Blvd, Suite 302, San Viero, CA 90211</span>
                    </div>
                    <div className="flex items-center gap-4 text-slate-800 font-medium text-lg">
                       <span className="text-gray-500"><MailIcon /></span> 
                       info@archistryrealestate.com
                    </div>
                 </div>
              </div>
           </div>

           {/* Right Column: Contact Form */}
           <div className="flex justify-center lg:justify-start lg:pl-8">
              <div className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-2xl w-full max-w-md border border-gray-100">
                 
                 <div className="mb-8">
                     <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2 mb-2">
                         Lets Have a Chat <span className="text-3xl">👋</span>
                     </h3>
                     <p className="text-gray-400 text-sm">Lorem ipsum dolor sit amet consectetur.</p>
                 </div>

                 <form className="space-y-4">
                     {/* Name Input */}
                     <div className="relative">
                         <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                             <UserIcon />
                         </div>
                         <input 
                            type="text" 
                            placeholder="Full Name"
                            className="w-full bg-gray-50 rounded-2xl py-4 pl-12 pr-4 text-slate-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all"
                         />
                     </div>

                     <div className="flex gap-4">
                        {/* Phone Input */}
                        <div className="relative flex-1">
                             <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                                 <PhoneIcon />
                             </div>
                             <input 
                                type="tel" 
                                placeholder="Phone Number"
                                className="w-full bg-gray-50 rounded-2xl py-4 pl-12 pr-4 text-slate-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all"
                             />
                        </div>
                        
                        {/* Email Input */}
                        <div className="relative flex-1">
                             <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                                 <MailIcon />
                             </div>
                             <input 
                                type="email" 
                                placeholder="Email Address"
                                className="w-full bg-gray-50 rounded-2xl py-4 pl-12 pr-4 text-slate-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all"
                             />
                        </div>
                     </div>

                     {/* Message Input */}
                     <div className="relative">
                         <textarea 
                            placeholder="How can we help you?"
                            rows={4}
                            className="w-full bg-gray-50 rounded-2xl p-4 text-slate-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all resize-none"
                         ></textarea>
                     </div>

                     <button className="w-full bg-[#1A1A1A] text-white font-medium py-4 rounded-2xl mt-4 hover:bg-black transition-colors shadow-lg">
                         Send
                     </button>
                 </form>

              </div>
           </div>

        </div>
      </div>
    </section>
  );
};