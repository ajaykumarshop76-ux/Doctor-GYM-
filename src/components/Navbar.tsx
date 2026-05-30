import { useState } from 'react';
import { Menu, X, Dumbbell, Award } from 'lucide-react';
import { BUSINESS_INFO } from '../data';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  openBookingWithPlan?: (cat?: string, dur?: string) => void;
}

export default function Navbar({ activeTab, setActiveTab, openBookingWithPlan }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'membership', label: 'Membership Plans' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavigate = (tabId: string) => {
    setActiveTab(tabId);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="sticky top-0 z-50 bg-black/90 backdrop-blur-md border-b border-amber-500/10" id="gym-navbar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div 
            className="flex items-center gap-2.5 cursor-pointer group"
            onClick={() => handleNavigate('home')}
            id="nav-logo"
          >
            <div className="bg-amber-500 text-black p-2 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:bg-amber-400 font-bold">
              <Dumbbell className="h-6 w-6 stroke-[2.5]" />
            </div>
            <div>
              <div className="flex items-center gap-1.5 leading-none">
                <span className="text-xl font-black tracking-wider text-white uppercase font-sans">
                  {BUSINESS_INFO.name.split(' ')[0]}
                </span>
                <span className="text-xl font-black tracking-wider text-amber-500 uppercase font-sans">
                  {BUSINESS_INFO.name.split(' ')[1] || 'GYM'}
                </span>
              </div>
              <span className="text-[10px] tracking-[0.25em] text-gray-400 font-mono uppercase block -mt-0.5">
                {BUSINESS_INFO.subName}
              </span>
            </div>
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2" id="nav-desktop-links">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`nav-${item.id}`}
                onClick={() => handleNavigate(item.id)}
                className={`px-3 py-2 rounded-md text-xs lg:text-sm font-medium tracking-wider uppercase transition-all duration-200 ${
                  activeTab === item.id
                    ? 'text-amber-500 border-b-2 border-amber-500/80 rounded-b-none'
                    : 'text-gray-300 hover:text-amber-400 hover:bg-neutral-900/50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center" id="nav-desktop-cta">
            <button
              onClick={() => openBookingWithPlan ? openBookingWithPlan() : handleNavigate('booking')}
              className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-md shadow-amber-500/20 active:scale-95 transition-all duration-200"
              id="cta-free-trial-nav"
            >
              Book Free Trial
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center" id="nav-mobile-hamburger">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-amber-500 hover:bg-neutral-900 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Open Drawer */}
      {isOpen && (
        <div className="md:hidden bg-black/95 border-b border-amber-500/10 px-2 pt-2 pb-6 space-y-1 sm:px-3" id="nav-mobile-menu">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavigate(item.id)}
              className={`block w-full text-left px-4 py-3 rounded-md text-xs font-bold tracking-widest uppercase transition-colors duration-150 ${
                activeTab === item.id
                  ? 'bg-amber-500 text-black'
                  : 'text-gray-300 hover:bg-neutral-900 hover:text-amber-400'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-4 px-4">
            <button
              onClick={() => {
                setIsOpen(false);
                if (openBookingWithPlan) {
                  openBookingWithPlan();
                } else {
                  setActiveTab('booking');
                }
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-black py-3 rounded-full text-xs font-bold uppercase tracking-widest text-center shadow-lg shadow-amber-500/20 block"
              id="cta-free-trial-nav-mobile"
            >
              Book Free Trial
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
