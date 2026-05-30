import { useState } from 'react';
import { 
  Dumbbell, Users, Maximize, Calendar, Star, Armchair, Sparkles, 
  ArrowRight, ShieldCheck, Instagram, Phone, MapPin, Play, HeartHandshake, CheckCircle2
} from 'lucide-react';
import { 
  BUSINESS_INFO, GYM_HIGHLIGHTS, TRAINERS, MEMBERSHIP_PLANS, GALLERY_ITEMS, TRANSFORMATION_CARDS 
} from '../data';

interface HomeProps {
  setActiveTab: (tab: string) => void;
  openBookingWithPlan: (cat?: string, dur?: string) => void;
}

export default function Home({ setActiveTab, openBookingWithPlan }: HomeProps) {
  const [activeTransformId, setActiveTransformId] = useState(TRANSFORMATION_CARDS[0].id);

  // Take a small sample of plans (3 basic preview durations)
  const previewPlans = [
    MEMBERSHIP_PLANS.find(p => p.id === 'basic_3m'),
    MEMBERSHIP_PLANS.find(p => p.id === 'premium_3m'),
    MEMBERSHIP_PLANS.find(p => p.id === 'pt_1m'),
  ].filter(Boolean);

  // Take a sample of 6 gallery pictures for a beautiful gallery grid teaser
  const galleryTeaser = GALLERY_ITEMS.slice(0, 6);

  // Helper to map string key to icon
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Dumbbell': return <Dumbbell className="h-6 w-6 text-amber-500" />;
      case 'Users': return <Users className="h-6 w-6 text-amber-500" />;
      case 'Maximize': return <Maximize className="h-6 w-6 text-amber-500" />;
      case 'Calendar': return <Calendar className="h-6 w-6 text-amber-500" />;
      default: return <Dumbbell className="h-6 w-6 text-amber-500" />;
    }
  };

  return (
    <div className="bg-black text-gray-300 font-sans" id="home-view">
      
      {/* 1. Interactive Highlights Section */}
      <section className="py-20 bg-neutral-950 border-y border-amber-500/10" id="home-highlights">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase font-mono tracking-[0.3em] text-amber-500 font-black">
              Why Doctor GYM?
            </span>
            <h2 className="text-3xl sm:text-4xl font-sans font-black text-white uppercase tracking-tight mt-2">
              Unrivaled Training Highlights
            </h2>
            <p className="text-gray-400 mt-3 text-sm sm:text-base leading-relaxed">
              We offer elite class hardware and tailored training methodologies that empower Gota's fitness community to conquer boundaries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" id="highlights-grid">
            {GYM_HIGHLIGHTS.map((hl, index) => (
              <div 
                key={index} 
                className="bg-black/40 border border-neutral-900 hover:border-amber-500/30 p-6 rounded-2xl shadow-lg relative group transition-all duration-300 hover:-translate-y-2"
                id={`hl-${index}`}
              >
                <div className="absolute top-0 right-0 w-16 h-16 bg-amber-500/5 rounded-bl-3xl rounded-tr-2xl group-hover:bg-amber-500/10 transition-colors" />
                <div className="bg-neutral-900 border border-neutral-800 p-3 rounded-xl inline-flex items-center justify-center mb-6">
                  {getIcon(hl.icon)}
                </div>
                <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-2 font-sans">
                  {hl.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed font-sans">
                  {hl.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Custom Heavy Equipment Showcase */}
      <section className="py-20 bg-black" id="home-equipment">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            
            <div className="w-full lg:w-1/2 space-y-6" id="equipment-text">
              <span className="text-xs uppercase font-mono tracking-[0.3em] text-amber-500 font-black block">
                Premium Hardware
              </span>
              <h2 className="text-3xl sm:text-4xl font-sans font-black text-white uppercase tracking-tight">
                Modern Biomechanical Machines & Free Weights
              </h2>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                Doctor GYM houses prime chest press isolators, multi-cable modules, advanced squat configurations, rubberized dumbbells up to premium training weights, and dynamic plate ranges. Experience isolated load curves that optimize muscle tension without risk.
              </p>
              
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-300">Targeted isolation machines with zero friction cables</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-300">Clean rubber grip anti-rust professional dumbbells</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-300">Premium impact-absorbing lifting platforms</span>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => setActiveTab('gallery')}
                  className="bg-neutral-900 hover:bg-neutral-800 text-white border border-neutral-700 hover:border-amber-500 text-xs font-bold uppercase tracking-wider py-3 px-6 rounded-full transition-all duration-200 inline-flex items-center gap-2"
                >
                  Explore Equipment Gallery <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="w-full lg:w-1/2 relative" id="equipment-visual">
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/10 to-transparent rounded-2xl pointer-events-none" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-amber-500/30 rounded-bl-3xl pointer-events-none" />
              <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-amber-500/30 rounded-tr-3xl pointer-events-none" />
              <img 
                src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=800" 
                alt="Strength isolated machines" 
                className="rounded-2xl border border-neutral-800 object-cover w-full h-[380px] hover:scale-[1.02] transition-transform duration-300"
                referrerPolicy="no-referrer"
              />
            </div>

          </div>
        </div>
      </section>

      {/* 3. Real Transformation Results */}
      <section className="py-20 bg-neutral-950 border-y border-amber-500/10" id="home-transformations">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase font-mono tracking-[0.3em] text-amber-500 font-black">
              Proven Results
            </span>
            <h2 className="text-3xl sm:text-4xl font-sans font-black text-white uppercase tracking-tight mt-2">
              Transformations That Inspire
            </h2>
            <p className="text-gray-400 mt-3 text-sm sm:text-base">
              Real Gota locals who trained with discipline and elite guidance at Doctor GYM. See their physical evolutions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Selection Column */}
            <div className="lg:col-span-4 space-y-4" id="transform-select-list">
              {TRANSFORMATION_CARDS.map((tc) => (
                <button
                  key={tc.id}
                  onClick={() => setActiveTransformId(tc.id)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all duration-200 block ${
                    activeTransformId === tc.id
                      ? 'bg-gradient-to-r from-amber-500/10 to-amber-500/[0.02] border-amber-500 text-white'
                      : 'bg-black/30 border-neutral-900 text-gray-400 hover:border-neutral-800 hover:bg-black/50'
                  }`}
                >
                  <div className="font-bold text-white text-base font-sans">{tc.name}</div>
                  <div className="text-xs text-amber-500 font-mono uppercase font-semibold mt-1">
                    Duration: {tc.duration}
                  </div>
                  <p className="text-xs mt-2 line-clamp-1 text-gray-400 leading-relaxed font-sans font-medium">
                    {tc.achievement}
                  </p>
                </button>
              ))}
            </div>

            {/* Slider Comparison Display Frame */}
            <div className="lg:col-span-8 bg-black border border-neutral-900 rounded-3xl p-6 sm:p-8" id="transform-slider-frame">
              {TRANSFORMATION_CARDS.map((tc) => {
                if (tc.id !== activeTransformId) return null;
                return (
                  <div key={tc.id} className="space-y-6 animate-[fadeIn_0.3s_ease]">
                    <div className="flex flex-wrap justify-between items-center gap-4 border-b border-neutral-900 pb-4">
                      <div>
                        <h4 className="text-xl font-bold text-white">{tc.name}</h4>
                        <span className="text-xs text-amber-500 font-mono tracking-wider">MEMBER TRANSFORMATION STORY</span>
                      </div>
                      <div className="flex gap-4">
                        <div className="bg-neutral-900 border border-neutral-800 px-3 py-1.5 rounded-xl text-center">
                          <span className="block text-[10px] text-gray-500 uppercase font-mono font-bold leading-none">Before</span>
                          <span className="text-red-500 font-black text-sm">{tc.beforeWeight}</span>
                        </div>
                        <div className="bg-amber-500/10 border border-amber-500/20 px-3 py-1.5 rounded-xl text-center">
                          <span className="block text-[10px] text-gray-500 uppercase font-mono font-bold leading-none">After</span>
                          <span className="text-amber-500 font-black text-sm">{tc.afterWeight}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-sm text-gray-300 italic font-medium leading-relaxed font-sans bg-neutral-900/50 p-4 rounded-xl border-l-2 border-amber-500">
                      "{tc.achievement}"
                    </p>

                    {/* Dual Before / After Image Cards */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="relative group overflow-hidden rounded-xl bg-neutral-900 border border-neutral-800">
                        <div className="absolute top-2 left-2 bg-black/80 backdrop-blur-md px-2.0 py-0.5 rounded text-[10px] text-gray-400 font-mono uppercase tracking-wider font-bold z-10 px-2 py-1 border border-neutral-800">
                          Before Weight
                        </div>
                        <img 
                          src={tc.beforeImg} 
                          alt="Before pic" 
                          className="w-full h-64 object-cover object-center grayscale brightness-75 group-hover:scale-105 transition-transform duration-300" 
                          referrerPolicy="no-referrer"
                        />
                      </div>

                      <div className="relative group overflow-hidden rounded-xl bg-neutral-900 border border-neutral-800">
                        <div className="absolute top-2 left-2 bg-amber-500 text-black px-2 py-1 rounded text-[10px] font-mono uppercase tracking-wider font-bold z-10 border border-amber-400/20">
                          After Transformation
                        </div>
                        <img 
                          src={tc.afterImg} 
                          alt="After pic" 
                          className="w-full h-64 object-cover object-center group-hover:scale-105 transition-transform duration-300" 
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    </div>

                    <div className="text-center pt-2">
                      <button
                        onClick={() => openBookingWithPlan('Personal Training', '3 Months')}
                        className="bg-amber-500 hover:bg-amber-400 text-black font-extrabold px-6 py-3 rounded-full text-xs uppercase tracking-wider transition-all duration-150 inline-flex items-center gap-2 font-sans"
                      >
                        Launch My Transformation <Sparkles className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* 4. Elite Trainers Preview */}
      <section className="py-20 bg-black" id="home-trainers">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
            <div>
              <span className="text-xs uppercase font-mono tracking-[0.3em] text-amber-500 font-black">
                Pro Mentorship
              </span>
              <h2 className="text-3xl sm:text-4xl font-sans font-black text-white uppercase tracking-tight mt-1">
                Meet Elite Fitness Instructors
              </h2>
            </div>
            <div>
              <button
                onClick={() => {
                  setActiveTab('about');
                  setTimeout(() => {
                    const targetEl = document.getElementById('trainers-profiles-section');
                    if(targetEl) targetEl.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
                className="text-amber-500 hover:text-amber-400 font-bold uppercase text-xs tracking-widest inline-flex items-center gap-2 group border-b border-transparent hover:border-amber-400 pb-1"
              >
                View Full Team & Bio <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" id="trainers-teaser-grid">
            {TRAINERS.slice(0, 3).map((trainer) => (
              <div 
                key={trainer.id} 
                className="bg-neutral-950 border border-neutral-900 rounded-2xl overflow-hidden group hover:border-amber-500/25 transition-all duration-300"
                id={`teaser-${trainer.id}`}
              >
                <div className="relative h-80 overflow-hidden bg-neutral-900">
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black via-black/60 to-transparent z-10" />
                  <img 
                    src={trainer.image} 
                    alt={trainer.name} 
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 filter grayscale"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 z-20 bg-amber-500/90 text-black px-2.5 py-1 rounded text-[10px] font-mono tracking-wider font-extrabold uppercase">
                    PRO STATUS
                  </div>
                </div>

                <div className="p-6 relative z-20" id={`teaser-details-${trainer.id}`}>
                  <h3 className="text-xl font-bold text-white uppercase tracking-wide">{trainer.name}</h3>
                  <p className="text-xs text-amber-500 font-mono tracking-wider uppercase mt-1">{trainer.role}</p>
                  
                  <div className="flex flex-wrap gap-1.5 mt-4" id={`teaser-specs-${trainer.id}`}>
                    {trainer.specialties.map((spec, i) => (
                      <span key={i} className="text-[10px] bg-neutral-900 text-gray-400 px-2 py-1 rounded font-sans uppercase font-bold">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Custom Membership Plans Sneak Peek */}
      <section className="py-20 bg-neutral-950 border-t border-amber-500/10" id="home-plans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase font-mono tracking-[0.3em] text-amber-500 font-black">
              Budget Tier Options
            </span>
            <h2 className="text-3xl sm:text-4xl font-sans font-black text-white uppercase tracking-tight mt-1">
              Select Your Membership Tier
            </h2>
            <p className="text-gray-400 mt-3 text-sm sm:text-base">
              Extremely affordable, tailored fitness pricing. Select a plan and lock in Gota's lowest budget rates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" id="plans-teaser-grid">
            {previewPlans.map((plan) => {
              if(!plan) return null;
              const isPremium = plan.category.includes('Premium');
              const isPT = plan.category.includes('Personal');
              
              return (
                <div 
                  key={plan.id}
                  className={`border rounded-3xl p-8 relative flex flex-col justify-between ${
                    isPremium 
                      ? 'bg-gradient-to-b from-neutral-900 to-black border-amber-500 shadow-2xl shadow-amber-500/5' 
                      : 'bg-black border-neutral-900'
                  }`}
                  id={`teaser-plan-${plan.id}`}
                >
                  {isPremium && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-amber-500 text-black text-[10px] font-mono font-bold tracking-widest uppercase px-4 py-1.5 rounded-full border border-amber-400/20">
                      RECOMMENDED TIER
                    </div>
                  )}

                  <div>
                    <span className="text-xs text-amber-500 font-mono tracking-widest uppercase font-semibold block mb-1">
                      {plan.category}
                    </span>
                    <h3 className="text-2xl font-sans font-black text-white uppercase tracking-wide">
                      {plan.name} <span className="text-gray-400 text-sm font-medium">{plan.duration}</span>
                    </h3>
                    
                    <div className="flex items-baseline gap-1 mt-4">
                      <span className="text-gray-400 text-lg font-medium">₹</span>
                      <span className="text-4xl font-black text-white tracking-tight">{plan.price}</span>
                      <span className="text-gray-500 text-xs font-mono lowercase">/ {plan.duration}</span>
                    </div>

                    <ul className="space-y-3 mt-8 border-t border-neutral-900 pt-6">
                      {plan.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-gray-300">
                          <CheckCircle2 className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8">
                    <button
                      onClick={() => openBookingWithPlan(plan.category, plan.duration)}
                      className={`w-full py-3.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all duration-150 ${
                        isPremium 
                          ? 'bg-amber-500 text-black hover:bg-amber-400' 
                          : 'bg-neutral-900 hover:bg-neutral-800 text-white border border-neutral-800 hover:border-amber-500/45'
                      }`}
                    >
                      Book Membership
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => {
                setActiveTab('membership');
                window.scrollTo({ top: 300, behavior: 'smooth' });
              }}
              className="text-amber-500 hover:text-amber-400 font-bold uppercase text-xs tracking-widest underline decoration-amber-500/20 hover:decoration-amber-400"
            >
              See All Durations & Multi-Month Comparison Matrix
            </button>
          </div>

        </div>
      </section>

      {/* 6. Gym Gallery Snippet Teaser */}
      <section className="py-20 bg-black" id="home-gallery">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
            <div>
              <span className="text-xs uppercase font-mono tracking-[0.3em] text-amber-500 font-black">
                Gym Visuals
              </span>
              <h2 className="text-3xl sm:text-4xl font-sans font-black text-white uppercase tracking-tight mt-1">
                Take a Virtual Tour
              </h2>
            </div>
            <div>
              <button
                onClick={() => {
                  setActiveTab('gallery');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-amber-500 hover:text-amber-400 font-bold uppercase text-xs tracking-widest inline-flex items-center gap-2 group border-b border-transparent hover:border-amber-400 pb-1"
              >
                View Full 25-Image Gallery <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4" id="gallery-teaser-grid">
            {galleryTeaser.map((item, i) => (
              <div 
                key={item.id} 
                onClick={() => {
                  setActiveTab('gallery');
                  window.scrollTo({ top: 250, behavior: 'smooth' });
                }}
                className="relative group overflow-hidden rounded-xl bg-neutral-900 aspect-square border border-neutral-900 cursor-pointer"
                id={`teaser-gal-${i}`}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4" />
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300 filter grayscale group-hover:grayscale-0"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-3 left-3 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-[10px] text-amber-400 font-mono uppercase bg-black/70 px-2 py-0.5 rounded">
                    {item.category}
                  </span>
                  <div className="text-white text-xs font-bold leading-normal mt-1">{item.title}</div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. Quick Contact Overview Map Integration Teaser */}
      <section className="py-20 bg-neutral-950 border-t border-amber-500/10" id="home-quick-contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-black border border-neutral-900 rounded-3xl p-8 md:p-12" id="quick-contact-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              
              <div className="space-y-6" id="quick-contact-text">
                <span className="text-xs uppercase font-mono tracking-[0.3em] text-amber-500 font-black block">
                  Connect & Play
                </span>
                <h2 className="text-3xl font-sans font-black text-white uppercase tracking-tight">
                  Stop Wishing. Start Lifting Today.
                </h2>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                  Have questions about our Gota facility hours, custom meal planners, or trainers availability? Visit our reception desk or dial us directly. We are ready to coach you.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="flex items-start gap-2 text-sm">
                    <MapPin className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-white font-bold text-xs uppercase font-mono">Location Address</div>
                      <p className="text-gray-400 text-xs mt-0.5">Center Point, Vandematram Gota, Ahmedabad</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                    <Phone className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-white font-bold text-xs uppercase font-mono">Reception Desk</div>
                      <a href={`tel:${BUSINESS_INFO.phone}`} className="text-amber-500 text-xs mt-0.5 font-bold hover:underline block">
                        {BUSINESS_INFO.phone}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 pt-4">
                  <button
                    onClick={() => openBookingWithPlan()}
                    className="bg-amber-500 hover:bg-amber-400 text-black px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all"
                  >
                    Claim 1-Day Free Trial
                  </button>
                  <button
                    onClick={() => {
                      setActiveTab('contact');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="border border-neutral-700 hover:border-amber-500 hover:bg-neutral-900 text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all"
                  >
                    View Contact Details
                  </button>
                </div>
              </div>

              {/* Styled Maps iframe preview */}
              <div className="rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900 h-64 relative" id="quick-map-iframe">
                <iframe 
                  src={BUSINESS_INFO.mapEmbedUrl}
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Doctor Gym Gota Location"
                  className="grayscale invert opacity-80"
                />
              </div>

            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
