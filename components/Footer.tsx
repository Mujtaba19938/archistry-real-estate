import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative w-full bg-white pt-32 pb-0 overflow-hidden">
      
      {/* Cloud Background Layer - Positioned behind the form content */}
      <div className="absolute top-0 left-0 w-full h-[70%] pointer-events-none z-0">
         <img 
            src="https://images.unsplash.com/photo-1501630834273-4b5604d2ee31?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            className="w-full h-full object-cover opacity-90"
            alt="Clouds"
         />
         {/* Gradients to fade edges into white */}
         <div className="absolute inset-0 bg-gradient-to-b from-white via-white/40 to-white"></div>
         <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 flex flex-col items-center">
        
        {/* Logo */}
        <div className="flex items-center gap-2 mb-10">
            <span className="text-[#3B82F6]">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C13.5 2 14.8 3.1 15 4.5C16.4 4.1 17.9 4.8 18.5 6.2C19.7 6.4 20.8 7.5 21 8.8C22.4 9.2 23.1 10.7 22.7 12C23.1 13.3 22.4 14.8 21 15.2C20.8 16.5 19.7 17.6 18.5 17.8C17.9 19.2 16.4 19.9 15 19.5C14.8 20.9 13.5 22 12 22C10.5 22 9.2 20.9 9 19.5C7.6 19.9 6.1 19.2 5.5 17.8C4.3 17.6 3.2 16.5 3 15.2C1.6 14.8 0.9 13.3 1.3 12C0.9 10.7 1.6 9.2 3 8.8C3.2 7.5 4.3 6.4 5.5 6.2C6.1 4.8 7.6 4.1 9 4.5C9.2 3.1 10.5 2 12 2ZM12 9C10.3 9 9 10.3 9 12C9 13.7 10.3 15 12 15C13.7 15 15 13.7 15 12C15 10.3 13.7 9 12 9Z" />
                </svg>
            </span>
            <span className="text-2xl font-bold text-[#3B82F6] tracking-tight">Archistry</span>
        </div>

        {/* Navigation */}
        <nav className="flex flex-wrap justify-center gap-6 md:gap-10 mb-14">
            {['Home', 'Search', 'Pricing', 'Blog', 'About', 'FAQ'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-base font-semibold text-slate-800 hover:text-blue-600 transition-colors">
                    {item}
                </a>
            ))}
        </nav>

        {/* Subscription Form */}
        <div className="w-full max-w-[500px] bg-white p-2 rounded-2xl shadow-2xl border border-blue-50/50 flex items-center mb-16 relative z-20">
            <input 
                type="email" 
                placeholder="email@example.com"
                className="flex-1 bg-transparent px-6 py-3 text-base text-slate-900 placeholder-gray-400 focus:outline-none"
            />
            <button className="bg-[#1A1A1A] text-white px-8 py-3.5 rounded-xl text-sm font-semibold hover:bg-black transition-colors shadow-lg">
                Subscribe
            </button>
        </div>

        {/* Social Links */}
        <div className="flex gap-10 mb-28 relative z-20">
            {['Telegram', 'Instagram', 'Facebook', 'X'].map((social) => (
                <a key={social} href="#" className="text-sm font-semibold text-slate-800 hover:text-blue-600 transition-colors">
                    {social}
                </a>
            ))}
        </div>

        {/* Bottom Links Row */}
        <div className="w-full flex flex-col md:flex-row justify-between items-end text-xs text-gray-400 font-medium px-4 mb-2 relative z-20">
            <a href="#" className="hover:text-slate-900 transition-colors mb-4 md:mb-0">Terms & Conditions</a>
            <a href="#" className="hover:text-slate-900 transition-colors mb-4 md:mb-0">Open our location google map</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Privacy Policy</a>
        </div>
      </div>

      {/* Massive Footer Text */}
      <div className="w-full overflow-hidden leading-[0.7] select-none pointer-events-none mt-4">
           <h1 className="text-[21vw] font-bold text-slate-900 text-center tracking-tighter transform translate-y-[8%] -rotate-2 origin-bottom">
               Archistry
           </h1>
      </div>

    </footer>
  );
};