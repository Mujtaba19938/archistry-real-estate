import React, { useState, useEffect } from 'react';
import { PhoneIcon, MenuIcon } from './Icons';
import { X } from 'lucide-react';

interface NavbarProps {
  onChatClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onChatClick }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const menuItems = ['Home', 'Search', 'Pricing', 'Blog', 'About', 'FAQ'];

  const handleInternalChatClick = () => {
    setIsMobileMenuOpen(false);
    onChatClick();
  }

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 w-full flex justify-center pt-6 px-4 transition-all duration-300 ${isMobileMenuOpen ? 'pt-4' : 'pt-6'}`}>
        <div className="w-full max-w-[1400px] flex items-center justify-between relative z-50">

          {/* Logo Section */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 text-white/90">
              {/* Simple Logo SVG */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="text-xl font-medium tracking-wide">Archistry</span>
            </div>
            <div className="hidden md:flex items-center justify-center bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-3 py-1 text-xs text-white/90 font-medium">
              \ +20 years
            </div>
          </div>

          {/* Center Menu (Desktop) */}
          <div className="hidden lg:flex items-center bg-white/80 backdrop-blur-xl border border-white/40 rounded-full px-1.5 py-1.5 shadow-2xl shadow-black/5">
            {menuItems.map((item, index) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${index === 0
                    ? 'bg-slate-900 text-white shadow-md'
                    : 'text-slate-900 hover:text-slate-600 hover:bg-black/5'
                  }`}
              >
                {item}
              </a>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-2 text-white/90 text-sm font-medium">
              <PhoneIcon />
              <span>+1 (271) 637-7290</span>
            </div>

            <button
              onClick={onChatClick}
              className="hidden md:block bg-white text-slate-900 px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              Let's Chat
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden text-white/90 p-2 relative z-50 hover:bg-white/10 rounded-full transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <MenuIcon />}
            </button>
          </div>

        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-slate-900 flex flex-col items-center justify-center transition-all duration-300 ease-in-out lg:hidden ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
          }`}
      >
        <div className="flex flex-col items-center gap-6 w-full max-w-sm px-6">
          {menuItems.map((item) => (
            <a
              key={item}
              href={`/`}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-2xl font-medium text-white/90 hover:text-white transition-colors"
            >
              {item}
            </a>
          ))}

          <div className="h-px w-24 bg-white/10 my-4"></div>

          <div className="flex flex-col items-center gap-4 w-full">
            <div className="flex items-center gap-2 text-white/80 text-lg">
              <PhoneIcon />
              <span>+1 (271) 637-7290</span>
            </div>

            <button
              onClick={handleInternalChatClick}
              className="w-full bg-white text-slate-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              Let's Chat
            </button>
          </div>
        </div>
      </div>
    </>
  );
};