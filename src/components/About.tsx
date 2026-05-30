import { Award, Compass, ShieldCheck, HeartPulse, Sparkles, Building2, Eye, Shield } from 'lucide-react';
import { BUSINESS_INFO, TRAINERS } from '../data';

interface AboutProps {
  openBookingWithPlan: (cat?: string, dur?: string) => void;
}

export default function About({ openBookingWithPlan }: AboutProps) {
  return (
    <div className="bg-black text-gray-350 min-h-screen py-16" id="about-page">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16" id="about-header">
          <span className="text-xs uppercase font-mono tracking-[0.3em] text-amber-500 font-black">
            Our Legacy & Philosophy
          </span>
          <h1 className="text-4xl sm:text-5xl font-sans font-black text-white uppercase tracking-tight mt-2">
            The Story of Doctor GYM
          </h1>
          <p className="text-gray-400 mt-4 text-sm sm:text-base leading-relaxed">
            Founded with a vision to build a pure state-of-the-art training hub, Doctor GYM is Ahmedabad Gota's elite fitness ecosystem for raw physical transformation.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24" id="about-story-grid">
          <div className="relative" id="about-story-visual">
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
            <img 
              src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=800" 
              alt="Doctor GYM Interior Atmosphere" 
              className="rounded-3xl border border-neutral-900 object-cover w-full h-[450px] filter grayscale"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-6 left-6 z-20 bg-neutral-950/90 border border-amber-500/15 p-5 rounded-2xl max-w-xs backdrop-blur-md">
              <span className="text-amber-500 font-mono text-3xl font-black block">1 Year+</span>
              <span className="text-xs text-white uppercase tracking-widest font-bold font-sans">Empowering Gota Fitness Community</span>
            </div>
          </div>

          <div className="space-y-6" id="about-story-text">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-500 font-bold">ESTABLISHED LEADERSHIP</span>
            <h2 className="text-3xl font-sans font-black text-white uppercase tracking-wider">
              Vedant Fitness Club Core Ideals
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed font-sans">
              Doctor GYM was established to combat the rise of highly superficial, low-guidance workout lounges. We believe a gym should be a technical workspace where ergonomics meet raw lifting passion. By organizing highly accessible membership rates, we opened elite fitness access to students, corporate workers, and fitness veterans of Ahmedabad.
            </p>
            <p className="text-gray-400 text-sm leading-relaxed font-sans">
              Our floor space is divided thoughtfully: high ceiling premium cardio zones with direct ventilation, high load mechanical platforms, dedicated dumbbells and dumbbells cages, and private consultation areas for personalized fitness checkups.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-neutral-950 border border-neutral-900">
                <Compass className="h-5 w-5 text-amber-500" />
                <div>
                  <h4 className="text-white font-bold text-xs uppercase tracking-wider">Our Mission</h4>
                  <p className="text-gray-500 text-[11px]">Uncompromising coaching at budget rates.</p>
                </div>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-neutral-950 border border-neutral-900">
                <Eye className="h-5 w-5 text-amber-500" />
                <div>
                  <h4 className="text-white font-bold text-xs uppercase tracking-wider">Our Vision</h4>
                  <p className="text-gray-500 text-[11px]">To design Gota’s highly trusted athletic tier.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Clean & Spacious Facility Details */}
        <div className="bg-neutral-950 border border-amber-500/10 rounded-3xl p-8 md:p-12 mb-24" id="about-facility">
          <div className="max-w-3xl mb-12">
            <span className="text-amber-500 text-xs font-mono uppercase tracking-[0.2em] font-bold">HYGIENE & STANDARDS</span>
            <h2 className="text-2xl sm:text-3xl text-white uppercase font-black tracking-tight mt-1">
              Spacious & Sanitized Workspace Floor
            </h2>
            <p className="text-gray-400 text-sm mt-3 leading-relaxed">
              At Doctor GYM, health is paramount. We implement structured multi-phase sanitation routines everyday. Our facility provides:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6" id="facility-specs-grid">
            <div className="space-y-2">
              <div className="text-amber-500 font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2">
                <ShieldCheck className="h-4 w-4" /> 01 / Sanitize Routines
              </div>
              <h4 className="text-white font-bold text-sm uppercase">Daily Floor Wash</h4>
              <p className="text-gray-400 text-xs leading-relaxed">
                Complete facility floor wipes and machine handles antibacterial cleaning every 3 hours.
              </p>
            </div>

            <div className="space-y-2">
              <div className="text-amber-500 font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2">
                <ShieldCheck className="h-4 w-4" /> 02 / Fresh Air Cycling
              </div>
              <h4 className="text-white font-bold text-sm uppercase">Active Air Exhaust</h4>
              <p className="text-gray-400 text-xs leading-relaxed">
                Advanced ventilation filters out odors and dust, ensuring fresh oxygen feeds every workout session.
              </p>
            </div>

            <div className="space-y-2">
              <div className="text-amber-500 font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2">
                <ShieldCheck className="h-4 w-4" /> 03 / Client Comfort
              </div>
              <h4 className="text-white font-bold text-sm uppercase">Private Lockers & Showers</h4>
              <p className="text-gray-400 text-xs leading-relaxed">
                Extremely safe client locker zones with personal locks and quick access to standard changing facilities.
              </p>
            </div>
          </div>
        </div>

        {/* Trainer Profiles Section */}
        <div id="trainers-profiles-section" className="scroll-mt-24 mb-16">
          <div className="text-center max-w-2xl mx-auto mb-16" id="trainers-header">
            <span className="text-xs uppercase font-mono tracking-[0.3em] text-amber-500 font-black">
              Certified Instructors
            </span>
            <h2 className="text-3xl sm:text-4xl font-sans font-black text-white uppercase tracking-tight mt-1">
              Our Expert Trainers
            </h2>
            <p className="text-gray-400 mt-3 text-sm leading-relaxed">
              Work with Ahmedabad’s highly motivating fitness coaches. Dedicated to form, progressive overload, and safe, science-backed recovery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" id="trainers-profiles-grid">
            {TRAINERS.map((trainer) => (
              <div 
                key={trainer.id} 
                className="bg-neutral-950 border border-neutral-900 rounded-2xl overflow-hidden group hover:border-amber-500/25 transition-all duration-300"
                id={`profile-${trainer.id}`}
              >
                <div className="h-72 relative overflow-hidden bg-neutral-900">
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent z-10" />
                  <img 
                    src={trainer.image} 
                    alt={trainer.name} 
                    className="w-full h-full object-cover object-center filter grayscale group-hover:grayscale-0 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="p-6 relative z-20">
                  <div className="flex justify-between items-start gap-2">
                    <div>
                      <h3 className="text-lg font-black text-white uppercase tracking-wide">{trainer.name}</h3>
                      <p className="text-xs text-amber-500 font-mono tracking-wider uppercase mt-0.5">{trainer.role}</p>
                    </div>
                    <div className="bg-amber-500/10 text-amber-500 p-1.5 rounded-lg">
                      <Shield className="h-4 w-4" />
                    </div>
                  </div>

                  <p className="text-xs text-gray-400 leading-normal mt-4 font-sans font-medium">
                    Certified professional expert specializing in Gota fitness club client assessments. Helping members bypass stagnation and achieve consistent, elite body compositions.
                  </p>

                  <div className="mt-5 pt-4 border-t border-neutral-900">
                    <div className="text-[10px] text-gray-500 font-mono uppercase font-bold tracking-wider mb-2">Trainer Specialties</div>
                    <div className="flex flex-wrap gap-1.5">
                      {trainer.specialties.map((spec, i) => (
                        <span key={i} className="text-[10px] bg-black text-gray-300 border border-neutral-800 px-2.5 py-1 rounded-md font-bold uppercase">
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* About CTA */}
        <div className="text-center mt-12 bg-gradient-to-r from-amber-500/10 to-amber-500/[0.01] border border-amber-500/15 rounded-3xl p-8 sm:p-12" id="about-cta">
          <h3 className="text-2xl text-white font-sans font-black uppercase tracking-wide">
            Ready to train with Gota's Elite?
          </h3>
          <p className="text-gray-400 text-xs sm:text-sm max-w-xl mx-auto mt-2 leading-relaxed">
            Choose your budget membership plan and register on our dedicated booking terminal. We will organize your health checkup.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => openBookingWithPlan('Personal Training', '1 Month')}
              className="bg-amber-500 hover:bg-amber-400 text-black px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all shadow-md shadow-amber-500/10"
            >
              Book Personal Coach
            </button>
            <button
              onClick={() => openBookingWithPlan()}
              className="border border-neutral-700 hover:border-amber-500/50 hover:bg-neutral-900 text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all"
            >
              Secure Free 1-Day Trial
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
