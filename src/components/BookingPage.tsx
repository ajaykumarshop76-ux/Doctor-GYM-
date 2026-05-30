import { useState, useEffect, FormEvent } from 'react';
import { Check, ArrowLeft, ArrowRight, Sparkles, CheckCircle2, User, Phone, Mail, Dumbbell } from 'lucide-react';
import { MEMBERSHIP_PLANS, COMPARISON_FEATURES } from '../data';
import { Booking } from '../types';

interface BookingPageProps {
  initialCategory?: string;
  initialDuration?: string;
  onSuccessReturn?: () => void;
}

export default function BookingPage({ initialCategory, initialDuration, onSuccessReturn }: BookingPageProps) {
  const [step, setStep] = useState(1);

  // Form State
  const [selectedCategory, setSelectedCategory] = useState("Premium Membership");
  const [selectedDuration, setSelectedDuration] = useState("12 Months");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [finalBooking, setFinalBooking] = useState<Booking | null>(null);

  // Set initial props if users pre-filled from Home or Plans screen
  useEffect(() => {
    if (initialCategory) {
      setSelectedCategory(initialCategory);
    }
    if (initialDuration) {
      setSelectedDuration(initialDuration);
    }
    // If both category and duration are pre-filled, skip directly to Step 3 comparison!
    if (initialCategory && initialDuration) {
      setStep(3);
    }
  }, [initialCategory, initialDuration]);

  const categories = [
    "Basic Membership",
    "Premium Membership",
    "Personal Training",
    "Cardio Package",
    "Weight Training Package"
  ];

  const durations = [
    "1 Month",
    "3 Months",
    "6 Months",
    "12 Months"
  ];

  // Dynamically calculate matching plan features + cost
  const getMatchingPlanDetails = () => {
    // Normal maps
    let matched = MEMBERSHIP_PLANS.find(
      p => p.category === selectedCategory && p.duration === selectedDuration
    );

    if (matched) return matched;

    // Fallbacks for Cardio Package / Weight Training Package
    // For these unpriced categories, let's designate smart simulated prices & features
    let basePrice = 1200;
    let baseFeatures: string[] = ["Gym Access", "Trainer Support"];

    if (selectedCategory === "Cardio Package") {
      basePrice = 1500;
      baseFeatures = ["Cardio Zone", "Gym Access", "Trainer Support", "BMI Checks"];
    } else if (selectedCategory === "Weight Training Package") {
      basePrice = 1800;
      baseFeatures = ["Weight Training Access", "Gym Access", "Locker Access", "Form Optimization Coaching"];
    }

    // Multiply by duration factor
    let factor = 1;
    if (selectedDuration === "3 Months") factor = 2.4;
    else if (selectedDuration === "6 Months") factor = 4.2;
    else if (selectedDuration === "12 Months") factor = 7.5;

    const computedPrice = Math.round(basePrice * factor);

    return {
      id: "computed_plan",
      name: selectedCategory.split(' ')[0],
      category: selectedCategory,
      duration: selectedDuration,
      price: computedPrice,
      features: baseFeatures
    };
  };

  const matchedPlan = getMatchingPlanDetails();

  const handleNextStep = () => {
    if (step < 4) {
      setStep(prev => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrevStep = () => {
    if (step > 1) {
      setStep(prev => prev - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleFinalSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !email.trim()) return;

    const booking: Booking = {
      id: `book_${Date.now()}`,
      name: name.trim(),
      phone: phone.trim(),
      email: email.trim(),
      category: selectedCategory,
      duration: selectedDuration,
      planName: matchedPlan.name,
      price: matchedPlan.price,
      status: 'pending',
      createdAt: new Date().toISOString()
    };

    // Store securely inside standard localStorage arrays
    const existing = localStorage.getItem('doctor_gym_bookings');
    let bookingsList: Booking[] = [];
    if (existing) {
      try {
        bookingsList = JSON.parse(existing);
      } catch (e) {
        bookingsList = [];
      }
    }
    bookingsList.push(booking);
    localStorage.setItem('doctor_gym_bookings', JSON.stringify(bookingsList));

    setFinalBooking(booking);
    setStep(5);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-black text-gray-350 min-h-screen py-16" id="booking-wizard-page">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        {/* Wizard Progression Breadcrumb (Hide if successful) */}
        {step < 5 && (
          <div className="mb-12" id="booking-progress-header">
            <div className="flex justify-between items-center text-xs font-mono text-gray-500 uppercase mb-4">
              <span>Step {step} of 4</span>
              <span className="text-amber-500 font-bold">
                {step === 1 && "Category Option"}
                {step === 2 && "Duration Variant"}
                {step === 3 && "Core Matrix Comparison"}
                {step === 4 && "Client Identification"}
              </span>
            </div>

            {/* Simulated segment bars */}
            <div className="flex gap-2 h-1.5 w-full bg-neutral-900 rounded-full overflow-hidden">
              {[1, 2, 3, 4].map((s) => (
                <div 
                  key={s} 
                  className={`h-full flex-1 rounded-full transition-all duration-300 ${
                    s <= step ? 'bg-amber-500' : 'bg-neutral-900'
                  }`} 
                />
              ))}
            </div>
          </div>
        )}

        {/* STEP 1: SELECT CATEGORY */}
        {step === 1 && (
          <div className="bg-neutral-950 border border-neutral-900 rounded-3xl p-6 sm:p-10 space-y-6 animate-[fadeIn_0.3s_ease]" id="booking-step-1">
            <div className="space-y-1">
              <span className="text-[10px] text-amber-500 font-mono uppercase bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/20 font-bold">
                PHASE 01
              </span>
              <h2 className="text-2xl sm:text-3xl text-white uppercase font-black tracking-tight mt-3">Select Program Category</h2>
              <p className="text-gray-450 text-xs sm:text-sm">
                Choose the workout curriculum configuration aligned to your physical goals.
              </p>
            </div>

            <div className="space-y-3 pt-4" id="category-selector-list">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all duration-150 flex justify-between items-center cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-gradient-to-r from-amber-500/15 to-amber-500/[0.01]' +
                        ' border-amber-500 text-white shadow-md shadow-amber-500/5'
                      : 'bg-black border-neutral-900/60 text-gray-400 hover:border-neutral-800'
                  }`}
                  id={`cat-option-${cat.toLowerCase().replace(' ', '-')}`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2.5 rounded-xl border ${
                      selectedCategory === cat ? 'bg-amber-500 text-black border-amber-400' : 'bg-neutral-900 text-gray-400 border-neutral-800'
                    }`}>
                      <Dumbbell className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="font-bold text-sm sm:text-base uppercase tracking-wider">{cat}</div>
                      <p className="text-[10px] text-gray-500 mt-0.5">Explore standard high performance details</p>
                    </div>
                  </div>
                  <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                    selectedCategory === cat ? 'border-amber-500 bg-amber-500 text-black' : 'border-neutral-700'
                  }`}>
                    {selectedCategory === cat && <Check className="h-3 w-3 stroke-[3]" />}
                  </div>
                </button>
              ))}
            </div>

            <div className="flex justify-end pt-6 border-t border-neutral-900">
              <button
                onClick={handleNextStep}
                className="bg-amber-500 hover:bg-amber-400 text-black px-6 py-3 rounded-full text-xs font-black uppercase tracking-widest inline-flex items-center gap-1.5 cursor-pointer"
                id="btn-step1-next"
              >
                Proceed To Duration <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 2: SELECT DURATION */}
        {step === 2 && (
          <div className="bg-neutral-950 border border-neutral-900 rounded-3xl p-6 sm:p-10 space-y-6 animate-[fadeIn_0.3s_ease]" id="booking-step-2">
            <div className="space-y-1">
              <span className="text-[10px] text-amber-500 font-mono uppercase bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/20 font-bold">
                PHASE 02
              </span>
              <h2 className="text-2xl sm:text-3xl text-white uppercase font-black tracking-tight mt-3">Select Program Duration</h2>
              <p className="text-gray-450 text-xs sm:text-sm">
                Commitment durations. Multi-month plans receive massive budget price concessions.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4" id="duration-selector-grid">
              {durations.map((dur) => (
                <button
                  key={dur}
                  onClick={() => setSelectedDuration(dur)}
                  className={`text-left p-6 rounded-2xl border transition-all duration-150 relative cursor-pointer ${
                    selectedDuration === dur
                      ? 'bg-gradient-to-b from-amber-500/10 to-amber-500/[0.01] border-amber-500 text-white shadow-md'
                      : 'bg-black border-neutral-900/60 text-gray-400 hover:border-neutral-800'
                  }`}
                  id={`dur-option-${dur.toLowerCase().replace(' ', '-')}`}
                >
                  {dur.includes('12') && (
                    <span className="absolute top-2.5 right-2.5 bg-amber-500 text-black text-[8px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded">
                      BEST RETENTION
                    </span>
                  )}
                  <span className="block text-gray-500 font-mono text-[10px] uppercase font-bold">DURATION TIER</span>
                  <div className="text-lg sm:text-xl font-black uppercase tracking-wider mt-2">{dur}</div>
                  <p className="text-[10px] text-gray-500 mt-1">Unlock maximum rewards</p>
                </button>
              ))}
            </div>

            <div className="flex justify-between pt-6 border-t border-neutral-900 mt-8">
              <button
                onClick={handlePrevStep}
                className="flex items-center gap-1 text-xs uppercase font-mono text-gray-500 hover:text-white"
                id="btn-step2-prev"
              >
                <ArrowLeft className="h-4 w-4" /> Category
              </button>
              <button
                onClick={handleNextStep}
                className="bg-amber-500 hover:bg-amber-400 text-black px-6 py-3 rounded-full text-xs font-black uppercase tracking-widest inline-flex items-center gap-1.5 cursor-pointer"
                id="btn-step2-next"
              >
                Proceed To Verification <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: DISPLAY PLAN COMPARISON */}
        {step === 3 && (
          <div className="bg-neutral-950 border border-neutral-900 rounded-3xl p-6 sm:p-10 space-y-6 animate-[fadeIn_0.3s_ease]" id="booking-step-3">
            <div className="space-y-1">
              <span className="text-[10px] text-amber-500 font-mono uppercase bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/20 font-bold">
                PHASE 03
              </span>
              <h2 className="text-2xl sm:text-3xl text-white uppercase font-black tracking-tight mt-3">Verify Package Inclusions</h2>
              <p className="text-gray-450 text-xs sm:text-sm">
                Confirm your price calculations alongside full feature deliverables before locking client info.
              </p>
            </div>

            {/* Current Selected Option Card snapshot */}
            <div className="bg-black rounded-2xl p-6 border border-amber-500/20 shadow-xl" id="matched-plan-snapshot-card">
              <div className="flex flex-wrap justify-between items-start gap-4 border-b border-neutral-900 pb-4 mb-4">
                <div>
                  <span className="text-[10px] bg-amber-500/10 text-amber-500 px-2.5 py-0.5 rounded font-mono uppercase border border-amber-500/20">
                    {matchedPlan.category}
                  </span>
                  <h3 className="text-xl font-bold uppercase text-white mt-1.5 tracking-wider">{matchedPlan.name} Tier</h3>
                </div>
                <div className="text-right">
                  <div className="text-lg text-gray-500 font-mono uppercase text-[10px] tracking-widest font-black">STATED VALUE</div>
                  <div className="text-2xl font-black text-amber-500 mt-0.5 font-mono">₹{matchedPlan.price}</div>
                  <span className="text-[9px] text-gray-600 block lowercase font-mono">inclusive of GOTA tax</span>
                </div>
              </div>

              <div className="space-y-3.5">
                <div className="text-[10px] text-gray-500 font-mono uppercase tracking-widest font-black">PACKAGE REWARDS & HIGHLIGHTS</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {matchedPlan.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-gray-300">
                      <Check className="h-4 w-4 text-amber-500 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Micro-Disclaimer */}
            <p className="text-[10px] text-gray-500 italic leading-relaxed text-center" id="contract-matrix-legal">
              * By progressing, you represent physical soundness for Gota activities. Registration provides 1 month active locker rights free.
            </p>

            <div className="flex justify-between pt-6 border-t border-neutral-900 mt-8">
              <button
                onClick={handlePrevStep}
                className="flex items-center gap-1 text-xs uppercase font-mono text-gray-500 hover:text-white"
                id="btn-step3-prev"
              >
                <ArrowLeft className="h-4 w-4" /> Duration
              </button>
              <button
                onClick={handleNextStep}
                className="bg-amber-500 hover:bg-amber-400 text-black px-6 py-3 rounded-full text-xs font-black uppercase tracking-widest inline-flex items-center gap-1.5 cursor-pointer"
                id="btn-step3-next"
              >
                Proceed To Customer Details <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 4: CUSTOMER DETAILS */}
        {step === 4 && (
          <div className="bg-neutral-950 border border-neutral-900 rounded-3xl p-6 sm:p-10 space-y-6 animate-[fadeIn_0.3s_ease]" id="booking-step-4">
            <div className="space-y-1">
              <span className="text-[10px] text-amber-500 font-mono uppercase bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/20 font-bold">
                PHASE 04
              </span>
              <h2 className="text-2xl sm:text-3xl text-white uppercase font-black tracking-tight mt-3">Client Registration</h2>
              <p className="text-gray-400 text-xs sm:text-sm leading-normal">
                Input your authentic contact details so that Vedant and coaching leaders can sync schedules.
              </p>
            </div>

            <form onSubmit={handleFinalSubmit} className="space-y-5" id="wizard-details-form">
              <div className="space-y-4">
                
                {/* Full name input */}
                <div>
                  <label className="block text-[10px] text-gray-550 uppercase font-mono mb-1.5 tracking-wider font-bold">Your Full Name *</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-gray-500 pointer-events-none">
                      <User className="h-4 w-4" />
                    </div>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Krutik Patel"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-black border border-neutral-850 focus:border-amber-500 text-white placeholder-gray-700 rounded-xl py-3 pl-10 pr-4 text-sm focus:outline-none"
                    />
                  </div>
                </div>

                {/* Mobile number input */}
                <div>
                  <label className="block text-[10px] text-gray-550 uppercase font-mono mb-1.5 tracking-wider font-bold">Phone / Mobile Number *</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-gray-500 pointer-events-none">
                      <Phone className="h-4 w-4" />
                    </div>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 78599 15024"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-black border border-neutral-850 focus:border-amber-500 text-white placeholder-gray-700 rounded-xl py-3 pl-10 pr-4 text-sm focus:outline-none font-mono"
                    />
                  </div>
                  <span className="text-[9px] text-gray-550 font-mono block mt-1/2">* Standard Indian contact formats supported</span>
                </div>

                {/* Email address input */}
                <div>
                  <label className="block text-[10px] text-gray-550 uppercase font-mono mb-1.5 tracking-wider font-bold">Email Address *</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-gray-500 pointer-events-none">
                      <Mail className="h-4 w-4" />
                    </div>
                    <input
                      type="email"
                      required
                      placeholder="e.g. krutik@domain.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-black border border-neutral-850 focus:border-amber-500 text-white placeholder-gray-700 rounded-xl py-3 pl-10 pr-4 text-sm focus:outline-none"
                    />
                  </div>
                </div>

              </div>

              {/* Package Summary Brief inside submit panel */}
              <div className="bg-neutral-900/50 p-4 rounded-xl border border-neutral-900 flex justify-between items-center text-xs">
                <div>
                  <span className="text-gray-500 block uppercase font-mono text-[9px] tracking-widest">SELECTED PACKAGE TICKET</span>
                  <span className="text-white font-extrabold uppercase">{matchedPlan.name} • {matchedPlan.duration}</span>
                </div>
                <div className="font-mono font-black text-amber-500 text-sm">₹{matchedPlan.price}</div>
              </div>

              <div className="flex justify-between pt-6 border-t border-neutral-900 mt-8">
                <button
                  type="button"
                  onClick={handlePrevStep}
                  className="flex items-center gap-1 text-xs uppercase font-mono text-gray-500 hover:text-white"
                  id="btn-step4-prev"
                >
                  <ArrowLeft className="h-4 w-4" /> Verification
                </button>
                <button
                  type="submit"
                  className="bg-amber-500 hover:bg-amber-400 text-black px-8 py-3.5 rounded-full text-xs font-black uppercase tracking-widest inline-flex items-center gap-1.5 cursor-pointer shadow-lg shadow-amber-500/10"
                  id="btn-step4-submit"
                >
                  Submit Booking <Sparkles className="h-4 w-4" />
                </button>
              </div>
            </form>
          </div>
        )}

        {/* STEP 5: SUCCESS MESSAGE AND BOOKING RECEIPT TICKET */}
        {step === 5 && finalBooking && (
          <div className="bg-neutral-950 border border-amber-500/35 rounded-3xl p-8 sm:p-12 text-center space-y-6 animate-[fadeIn_0.3s_ease]" id="booking-success-block">
            <div className="inline-flex bg-amber-500/10 border border-amber-500/30 p-4 rounded-full text-amber-500">
              <CheckCircle2 className="h-14 w-14" />
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl text-white uppercase font-black tracking-tight">Booking Confirmed!</h2>
              <p className="text-amber-500 font-mono text-xs uppercase tracking-widest font-black">
                "Thank you! Our team will contact you shortly."
              </p>
            </div>

            <p className="text-gray-405 text-sm max-w-md mx-auto leading-relaxed">
              We have successfully locked your schedule query into Gota client databases. Vedant Patel or representative coaches will coordinate a health assessment via calling within a few hours.
            </p>

            {/* Generated ticket visual layout */}
            <div className="bg-black border border-neutral-850 rounded-2xl p-6 text-left max-w-sm mx-auto space-y-4 font-mono shadow-xl relative overflow-hidden" id="booking-confirmed-ticket">
              <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/[0.03] rounded-bl-full pointer-events-none" />
              <div className="text-center border-b border-dashed border-neutral-800 pb-3">
                <span className="text-[10px] text-gray-550 block font-bold tracking-widest uppercase">OFFICIAL REGISTRATION REGISTRY</span>
                <span className="text-xs text-amber-500 font-bold block mt-1">DOCTOR GYM GOTA</span>
              </div>

              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-550">TICKET ID:</span>
                  <span className="text-white font-bold select-all">{finalBooking.id}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-550">MEMBER:</span>
                  <span className="text-white font-bold uppercase">{finalBooking.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-550">CONTACT DIAL:</span>
                  <span className="text-white font-bold font-mono">{finalBooking.phone}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-550">TIER PROGRAM:</span>
                  <span className="text-amber-500 font-bold uppercase">{finalBooking.category}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-550">DURATION:</span>
                  <span className="text-white font-bold uppercase">{finalBooking.duration}</span>
                </div>
                <div className="flex justify-between border-t border-neutral-900 pt-2 mt-2 font-bold select-all">
                  <span className="text-gray-400">TOTAL TARIFF:</span>
                  <span className="text-white font-black text-sm">₹{finalBooking.price}</span>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <button
                onClick={() => {
                  if (onSuccessReturn) {
                    onSuccessReturn();
                  } else {
                    // Fallback reset
                    setStep(1);
                  }
                }}
                className="bg-neutral-900 hover:bg-amber-500 hover:text-black hover:border-amber-400 text-white border border-neutral-800 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-150 inline-flex items-center gap-1.5"
                id="btn-success-close"
              >
                Go Back to Homepage
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
