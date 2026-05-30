import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import Home from './components/Home';
import About from './components/About';
import MembershipPlans from './components/MembershipPlans';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import BookingPage from './components/BookingPage';
import { 
  Phone, 
  MessageSquare, 
  Dumbbell, 
  BadgeAlert, 
  ChevronRight, 
  MapPin, 
  Clock 
} from 'lucide-react';
import { BUSINESS_INFO } from './data';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [bookingPrefill, setBookingPrefill] = useState<{ category?: string; duration?: string } | null>(null);

  // Helper function to navigate to booking page and populate package values automatically
  const openBookingWithPlan = (category?: string, duration?: string) => {
    if (category && duration) {
      setBookingPrefill({ category, duration });
    } else {
      setBookingPrefill(null); // Normal free trial clean state
    }
    setActiveTab('booking');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleReturnToHome = () => {
    setBookingPrefill(null);
    setActiveTab('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-black text-gray-300 min-h-screen flex flex-col justify-between selection:bg-amber-500 selection:text-black antialiased font-sans" id="doctor-gym-app-root">
      
      {/* Small top broadcast ticker header strip */}
      <header className="bg-amber-500 text-black py-2 px-4 text-center font-mono text-[10px] uppercase font-black tracking-[0.2em] flex items-center justify-center gap-1.5 sm:gap-4 z-40 relative">
        <span className="flex items-center gap-1">
          <Clock className="h-3.5 w-3.5" /> 5:30 AM - 10:30 PM DAILY OPERATIONS
        </span>
        <span className="hidden sm:inline">|</span>
        <span className="flex items-center gap-1">
          <MapPin className="h-3.5 w-3.5" /> GOTA, AHMEDABAD PLATES POWERHOUSE
        </span>
      </header>

      {/* Main Premium Navbar Component */}
      <Navbar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        openBookingWithPlan={openBookingWithPlan} 
      />

      {/* Dynamic Main Body Content Stage */}
      <main className="flex-grow">
        
        {/* Render HERO ONLY on the home page view */}
        {activeTab === 'home' && (
          <HeroSection 
            setActiveTab={setActiveTab} 
            openBookingWithPlan={openBookingWithPlan} 
          />
        )}

        <div className="animate-[fadeIn_0.4s_ease-out]">
          {activeTab === 'home' && (
            <Home 
              setActiveTab={setActiveTab} 
              openBookingWithPlan={openBookingWithPlan} 
            />
          )}

          {activeTab === 'about' && (
            <About 
              openBookingWithPlan={openBookingWithPlan} 
            />
          )}

          {activeTab === 'membership' && (
            <MembershipPlans 
              openBookingWithPlan={openBookingWithPlan} 
            />
          )}

          {activeTab === 'gallery' && (
            <Gallery />
          )}

          {activeTab === 'reviews' && (
            <Reviews />
          )}

          {activeTab === 'contact' && (
            <Contact />
          )}

          {activeTab === 'booking' && (
            <BookingPage 
              initialCategory={bookingPrefill?.category}
              initialDuration={bookingPrefill?.duration}
              onSuccessReturn={handleReturnToHome}
            />
          )}
        </div>

      </main>

      {/* Modern Signature Footer */}
      <Footer setActiveTab={setActiveTab} />

      {/* Floating Action Utilities Buttons (WhatsApp & Direct Phone calling) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3" id="floating-interaction-buttons">
        
        {/* Quick Phone Calling key */}
        <a 
          href={`tel:${BUSINESS_INFO.phone}`}
          className="bg-neutral-900 border border-amber-500/35 hover:border-amber-500 text-amber-500 hover:text-white p-3.5 rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200 flex items-center justify-center group"
          title="Direct Reception Call"
          id="floating-call-btn"
        >
          <Phone className="h-5.5 w-5.5 stroke-[2]" />
          <span className="absolute right-14 bg-black border border-amber-500/20 text-white font-mono text-[9px] uppercase tracking-widest px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none">
            Call Reception
          </span>
        </a>

        {/* WhatsApp Floating Chat */}
        <a 
          href={`https://wa.me/917859915024?text=Hello%20Doctor%20GYM,%20I%20want%20to%20discuss%20membership%20packages%20and%2520book%20a%20free%20trial.`}
          target="_blank"
          rel="noreferrer"
          className="bg-[#25D366] hover:bg-[#20ba56] text-white p-3.5 rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200 flex items-center justify-center group"
          title="WhatsApp Support"
          id="floating-whatsapp-btn"
        >
          <MessageSquare className="h-5.5 w-5.5 fill-white text-[#25D366]" />
          <span className="absolute right-14 bg-black border border-[#25D366]/20 text-white font-mono text-[9px] uppercase tracking-widest px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none">
            WhatsApp Chat
          </span>
        </a>

      </div>

    </div>
  );
}
