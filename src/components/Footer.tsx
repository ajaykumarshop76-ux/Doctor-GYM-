import { Dumbbell, Phone, MapPin, Instagram, Mail, Shield, ChevronRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data';

interface FooterProps {
  setActiveTab: (tab: string) => void;
}

export default function Footer({ setActiveTab }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleNavigate = (tabId: string) => {
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-neutral-950 border-t border-amber-500/15 pt-16 pb-8 text-gray-400" id="gym-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Column 1: Info */}
          <div className="space-y-4" id="footer-col-about">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => handleNavigate('home')}>
              <div className="bg-amber-500 text-black p-1.5 rounded flex items-center justify-center font-bold">
                <Dumbbell className="h-5 w-5" />
              </div>
              <span className="text-lg font-black tracking-wider text-white uppercase">
                {BUSINESS_INFO.name}
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed font-sans mt-2">
              Transform your physique and lift with intensity. Doctor GYM provides premium strength, cardio, and personalized training programs for results that speak for themselves.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a 
                href={BUSINESS_INFO.instagramUrl} 
                target="_blank" 
                rel="noreferrer" 
                className="w-10 h-10 rounded-full bg-neutral-900 border border-amber-500/20 flex items-center justify-center text-white hover:text-amber-500 hover:border-amber-500 transition-all duration-200"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href={`tel:${BUSINESS_INFO.phone}`} 
                className="w-10 h-10 rounded-full bg-neutral-900 border border-amber-500/20 flex items-center justify-center text-white hover:text-amber-500 hover:border-amber-500 transition-all duration-200"
              >
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4" id="footer-col-links">
            <h4 className="text-white font-bold tracking-widest uppercase text-sm border-l-2 border-amber-500 pl-3">
              Explore
            </h4>
            <ul className="space-y-2 mt-4 text-sm">
              {[
                { id: 'home', label: 'Home Page' },
                { id: 'about', label: 'Our Story' },
                { id: 'membership', label: 'Membership Tiers' },
                { id: 'gallery', label: 'Gym Gallery' },
                { id: 'reviews', label: 'Client Feedback' },
                { id: 'contact', label: 'Get in Touch' }
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleNavigate(link.id)}
                    className="flex items-center gap-1.5 hover:text-amber-500 transition-colors duration-150 py-1"
                  >
                    <ChevronRight className="h-3 w-3 text-amber-500/60" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Hours */}
          <div className="space-y-4" id="footer-col-hours">
            <h4 className="text-white font-bold tracking-widest uppercase text-sm border-l-2 border-amber-500 pl-3">
              Operating Hours
            </h4>
            <div className="space-y-2 text-sm mt-4 font-mono">
              <div className="flex justify-between border-b border-neutral-900 pb-1">
                <span className="text-gray-400">Monday - Saturday</span>
                <span className="text-white font-bold">5:30 AM - 10:30 PM</span>
              </div>
              <div className="flex justify-between border-b border-neutral-900 pb-1">
                <span className="text-gray-400">Cardio Floor Hours</span>
                <span className="text-amber-500">6:00 AM - 9:30 PM</span>
              </div>
              <div className="flex justify-between pb-1">
                <span className="text-gray-400">Sunday</span>
                <span className="text-red-500 uppercase font-bold text-xs">Closed / Rest Day</span>
              </div>
              <p className="text-xs text-gray-500 leading-normal mt-2 italic">
                *Personal Training sessions are scheduled individually during gym hours.
              </p>
            </div>
          </div>

          {/* Column 4: Contact Drop */}
          <div className="space-y-4" id="footer-col-contact">
            <h4 className="text-white font-bold tracking-widest uppercase text-sm border-l-2 border-amber-500 pl-3">
              Locate Us
            </h4>
            <div className="space-y-3 mt-4 text-sm font-sans text-gray-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  {BUSINESS_INFO.address}
                </span>
              </div>
              <div className="flex items-center gap-2.5 pt-1.5">
                <Phone className="h-4 w-4 text-amber-500" />
                <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-amber-400 underline decoration-amber-500/40">
                  {BUSINESS_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5 pt-1.5">
                <Instagram className="h-4 w-4 text-amber-500" />
                <a href={BUSINESS_INFO.instagramUrl} target="_blank" rel="noreferrer" className="hover:text-amber-400 font-mono">
                  {BUSINESS_INFO.instagram}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-900 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono" id="footer-bottom">
          <div>
            &copy; {currentYear} <span className="text-amber-500 font-bold">{BUSINESS_INFO.name}</span>. All Rights Reserved.
          </div>
          <div className="flex items-center gap-4 text-gray-500">
            <span className="flex items-center gap-1"><Shield className="h-3 w-3 text-amber-500/50" /> Approved by Vedant Fitness Club</span>
            <span>|</span>
            <span>Gota, Ahmedabad</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
