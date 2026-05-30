import { Star, Shield, Users, ArrowRight, Trophy } from 'lucide-react';
import { BUSINESS_INFO } from '../data';

interface HeroSectionProps {
  setActiveTab: (tab: string) => void;
  openBookingWithPlan: (cat?: string, dur?: string) => void;
}

export default function HeroSection({ setActiveTab, openBookingWithPlan }: HeroSectionProps) {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-black overflow-hidden pt-12 pb-24" id="home-hero">
      
      {/* Visual Background with dark high-contrast parallax overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/60 z-10" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent z-10" />
        <img 
          src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1920" 
          alt="Doctor GYM Interior Atmosphere" 
          className="w-full h-full object-cover object-center filter grayscale opacity-45 scale-105 animate-[pulse_10s_infinite]"
          referrerPolicy="no-referrer"
        />
        
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-yellow-600/10 rounded-full blur-[100px] pointer-events-none" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left w-full h-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content Section (7/12 Equivalent) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Rating Widget Tagline */}
            <div className="inline-flex flex-wrap items-center gap-3 bg-neutral-900/95 border border-amber-500/20 px-5 py-2.5 rounded-sm shadow-xl shadow-black/80" id="hero-rating-badge">
              <div className="flex items-center text-amber-500">
                ★★★★★
              </div>
              <div className="text-xs font-mono uppercase tracking-widest text-[#C5A059]">
                <span className="text-white font-medium">{BUSINESS_INFO.googleRating} Rating</span>
                <span className="text-[#C5A059]/40 mx-2">·</span>
                <span className="text-[#C5A059]/90 font-bold">{BUSINESS_INFO.reviewsCount} Google Reviews</span>
              </div>
            </div>

            {/* Majestic Hero Headline and Title */}
            <div className="space-y-4" id="hero-title-group">
              <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.4em] text-amber-500 font-black block">
                GOTA'S FIRST-CLASS POWERHOUSE
              </span>
              <h1 className="text-5xl sm:text-7xl md:text-8xl font-sans font-black tracking-tighter uppercase leading-[0.85]">
                DOCTOR <br />
                <span className="text-outline-gold" style={{ WebkitTextStroke: "1px #C5A059" }}>GYM</span> <span className="text-amber-500">.</span>
              </h1>
              <h2 className="text-lg sm:text-xl font-sans font-medium text-gray-400 tracking-[0.1em] uppercase">
                {BUSINESS_INFO.subName}
              </h2>
            </div>

            {/* Professional Copy */}
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed max-w-md" id="hero-caption">
              Ahmedabad's premier fitness destination. Experience world-class equipment, certified personal training, and a motivating community designed to support you.
            </p>

            {/* CTA Buttons Row */}
            <div className="flex flex-wrap items-center gap-4 pt-2" id="hero-ctas">
              
              <button
                onClick={() => openBookingWithPlan('Premium Membership', '12 Months')}
                className="px-8 py-4 bg-amber-500 text-black text-xs font-black uppercase tracking-widest shadow-[0_10px_30px_rgba(197,160,89,0.3)] hover:bg-amber-400 hover:scale-[1.02] active:scale-95 transition-all duration-200 cursor-pointer"
                id="hero-cta-join"
              >
                Join Now
              </button>

              <button
                onClick={() => {
                  setActiveTab('membership');
                  window.scrollTo({ top: 750, behavior: 'smooth' });
                }}
                className="px-8 py-4 bg-white/5 border border-white/10 text-white text-xs font-black uppercase tracking-widest hover:bg-white/10 hover:scale-[1.02] active:scale-95 transition-all duration-200 cursor-pointer"
                id="hero-cta-plans"
              >
                Membership Plans
              </button>

              <button
                onClick={() => openBookingWithPlan()}
                className="text-amber-500 hover:text-amber-400 underline decoration-amber-500/40 hover:decoration-amber-400/80 px-4 py-3 font-bold uppercase tracking-widest text-xs transition-all text-center"
                id="hero-cta-trial"
              >
                Book Free Trial
              </button>

            </div>

            {/* Quick Core Mini-Values Grid */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-white/5" id="hero-quick-features">
              <div>
                <div className="text-white text-sm font-bold uppercase tracking-wider font-mono">100% Real</div>
                <div className="text-gray-500 text-[10px] uppercase tracking-wider">Premium Results</div>
              </div>
              
              <div>
                <div className="text-white text-sm font-bold uppercase tracking-wider font-mono">Certified</div>
                <div className="text-gray-500 text-[10px] uppercase tracking-wider">Supportive Coaches</div>
              </div>

              <div>
                <div className="text-white text-sm font-bold uppercase tracking-wider font-mono">5,000 SQ FT</div>
                <div className="text-gray-500 text-[10px] uppercase tracking-wider">Luxurious Floor</div>
              </div>
            </div>

          </div>

          {/* Right: Premium Dynamic Stats Column (5/12 Equivalent) */}
          <div className="lg:col-span-5 bg-gradient-to-l from-white/[0.03] to-transparent flex flex-col justify-center p-8 gap-6 border border-white/10 rounded-sm backdrop-blur-md shadow-2xl relative" id="hero-right-metrics-panel">
            
            {/* Ambient accent spot in background of the container */}
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/5 to-transparent pointer-events-none rounded-sm" />

            {/* Metric 1 */}
            <div className="bg-white/5 border border-white/10 p-6 backdrop-blur-md relative hover:border-amber-500/30 transition-all duration-300">
              <div className="text-[10px] text-amber-500 uppercase font-black tracking-widest mb-1.5">Available Workout Space</div>
              <div className="text-3xl font-black tracking-tight text-white font-sans">5,000+ SQ.FT</div>
              
              {/* Premium Progress Bar */}
              <div className="w-full h-1.5 bg-neutral-900 mt-4 rounded-full overflow-hidden">
                <div className="w-[85%] h-full bg-gradient-to-r from-amber-500 to-amber-600 rounded-full" />
              </div>
              <div className="flex justify-between items-center mt-2">
                <span className="text-[9px] font-mono text-gray-500 uppercase tracking-widest">Gota's Biggest Hub</span>
                <span className="text-[10px] font-bold text-amber-500 font-mono">85% Utilized Capacity</span>
              </div>
            </div>

            {/* Metric 2 */}
            <div className="bg-white/5 border border-white/10 p-6 backdrop-blur-md relative hover:border-amber-500/30 transition-all duration-300">
              <div className="text-[10px] text-amber-500 uppercase font-black tracking-widest mb-1.5 font-sans">Elite Directing staff</div>
              <div className="text-3xl font-black tracking-tight text-white">12+ CERTIFIED</div>
              <p className="text-[10px] text-gray-400 mt-2 uppercase tracking-wider italic">National & International Athletes</p>
            </div>

            {/* Metric 3 */}
            <div className="bg-white/5 border border-white/10 p-6 backdrop-blur-md relative hover:border-amber-500/30 transition-all duration-300">
              <div className="text-[10px] text-amber-500 uppercase font-black tracking-widest mb-1.5">Biomechanical Setup</div>
              <div className="text-3xl font-black tracking-tight text-white">MODERN US-TECH</div>
              <p className="text-[10px] text-gray-400 mt-2 uppercase tracking-wider">Cardio · Strength · Crossfit · Plate Loaded</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
