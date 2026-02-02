import React, { useRef } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { TrustedPartnersSection } from './components/TrustedPartnersSection';
import { RecentProjectsSection } from './components/RecentProjectsSection';
import { ServicesSection } from './components/ServicesSection';
import { FeaturesSection } from './components/FeaturesSection';
import { PopularListingsSection } from './components/PopularListingsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { FAQSection } from './components/FAQSection';
import { PricingSection } from './components/PricingSection';
import { Footer } from './components/Footer';
import { ChatWidget } from './components/ChatWidget';

const App: React.FC = () => {
  // Use a ref to trigger the chat widget from the navbar
  // In a real app with context, this would be cleaner, but for this structure, we can just let them operate independently
  // OR we can make the ChatWidget handle its own open/close state publicly.
  // For simplicity: The "Let's Chat" button in Navbar will simply scroll to/focus the floating chat or toggle it if we lifted state.
  
  // Actually, to replicate the "Let's Chat" button functionality properly, I will simulate it by 
  // having the Navbar button trigger a custom event or context. 
  // Let's implement a simple state lift for the chat open status here.
  
  // Since ChatWidget has local state, I'll just render it. The prompt implies visual replication primarily.
  // However, linking the Navbar button is a nice touch.
  
  // Let's stick to the visual replication + functionality requested.
  // I will make the ChatWidget visually sticky as per screenshot standards.
  
  const handleChatClick = () => {
    // Dispatch a custom event to open the chat
    window.dispatchEvent(new CustomEvent('open-chat'));
  };

  return (
    <div className="relative w-full bg-white text-slate-900 font-sans selection:bg-blue-200">
      <Navbar onChatClick={handleChatClick} />
      <main>
        <Hero />
        <AboutSection />
        <TrustedPartnersSection />
        <RecentProjectsSection />
        <ServicesSection />
        <FeaturesSection />
        <PopularListingsSection />
        <TestimonialsSection />
        <ContactSection />
        <FAQSection />
        <PricingSection />
      </main>
      <Footer />
      
      {/* 
         We wrap ChatWidget to listen for the event.
         This is a quick way to connect siblings without Context API boilerplate for a single interaction. 
      */}
      <ConnectedChatWidget />
    </div>
  );
};

// Wrapper to connect Navbar click to ChatWidget
const ConnectedChatWidget: React.FC = () => {
    const [forceOpen, setForceOpen] = React.useState(false);
    
    React.useEffect(() => {
        const handleOpen = () => {
            const chatButton = document.querySelector('button[aria-label="Open chat"]');
            if (chatButton instanceof HTMLElement) {
                chatButton.click();
            }
        };
        window.addEventListener('open-chat', handleOpen);
        return () => window.removeEventListener('open-chat', handleOpen);
    }, []);

    return <ChatWidget />;
}

export default App;