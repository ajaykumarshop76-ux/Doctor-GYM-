import { useState } from 'react';
import { Check, X, ShieldCheck, CreditCard, ChevronRight, Sparkles, HelpCircle } from 'lucide-react';
import { MEMBERSHIP_PLANS, COMPARISON_FEATURES, MEMBERSHIP_CATEGORIES } from '../data';
import { MembershipPlan } from '../types';

interface MembershipPlansProps {
  openBookingWithPlan: (cat?: string, dur?: string) => void;
}

export default function MembershipPlans({ openBookingWithPlan }: MembershipPlansProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("Premium Membership");

  // Filter plans based on categories
  const filteredPlans = MEMBERSHIP_PLANS.filter(p => p.category === selectedCategory);

  // Flipkart comparison card samples requested in instructions:
  const flipkartPlans = [
    { plan: 'Basic', duration: '1 Month', features: 'Gym Access only', price: '₹999' },
    { plan: 'Basic', duration: '3 Months', features: 'Gym Access only', price: '₹2499' },
    { plan: 'Premium', duration: '6 Months', features: 'Gym + Cardio zones', price: '₹4999' },
    { plan: 'Premium', duration: '12 Months', features: 'Full Access benefits', price: '₹8999' },
  ];

  return (
    <div className="bg-black text-gray-300 min-h-screen py-16" id="plans-page">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-12" id="plans-header">
          <span className="text-xs uppercase font-mono tracking-[0.3em] text-amber-500 font-black">
            Affordable Tier Selections
          </span>
          <h1 className="text-4xl sm:text-5xl font-sans font-black text-white uppercase tracking-tight mt-2">
            Membership Packages
          </h1>
          <p className="text-gray-400 mt-4 text-sm sm:text-base leading-relaxed">
            With Gota's highly cost-efficient rates, we ensure physical growth is fully financially viable. Pick your tier, select your optimal months, and start today.
          </p>
        </div>

        {/* Categories Tab Selector with Luxury styling */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12" id="plans-category-tabs">
          {MEMBERSHIP_CATEGORIES.map((cat) => (
            <button
              key={cat}
              id={`tab-${cat.toLowerCase().replace(' ', '-')}`}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-3 rounded-xl text-xs sm:text-sm font-bold tracking-widest uppercase transition-all duration-200 cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/10'
                  : 'bg-neutral-950 border border-neutral-900 text-gray-400 hover:text-white hover:border-amber-500/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Tier Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20" id="plans-grid">
          {filteredPlans.map((plan) => {
            const isTwelveMonths = plan.duration.includes('12');
            return (
              <div 
                key={plan.id}
                className={`border rounded-2xl p-6 relative flex flex-col justify-between transition-all duration-300 ${
                  isTwelveMonths 
                    ? 'bg-gradient-to-b from-neutral-900 to-black border-amber-500/80 shadow-xl shadow-amber-500/5 -translate-y-1' 
                    : 'bg-neutral-950 border-neutral-900 hover:border-neutral-800'
                }`}
                id={`plan-card-${plan.id}`}
              >
                {isTwelveMonths && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-500 text-black text-[9px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full whitespace-nowrap">
                    MEGA VALUE SAVE
                  </div>
                )}

                <div>
                  <div className="flex justify-between items-start gap-2 mb-3">
                    <span className="text-xs text-amber-500 font-mono uppercase tracking-widest font-black">
                      {plan.duration} VALUE
                    </span>
                    <span className="text-gray-500 font-mono text-[10px] uppercase font-bold">STRENGTH</span>
                  </div>

                  <h3 className="text-2xl font-black text-white uppercase tracking-tight font-sans">
                    {plan.name} <span className="text-gray-400 text-xs font-semibold">{plan.duration}</span>
                  </h3>

                  <div className="flex items-baseline gap-1 mt-4">
                    <span className="text-gray-400 text-sm font-bold">₹</span>
                    <span className="text-4xl font-black text-white tracking-tight">{plan.price}</span>
                    <span className="text-gray-500 text-xs font-mono">/ total</span>
                  </div>

                  {/* Monthly average for perspective */}
                  <div className="text-[10px] text-gray-500 font-mono uppercase mt-1">
                    AVG: ₹{Math.round(plan.price / parseInt(plan.duration))} / month
                  </div>

                  <ul className="space-y-2.5 mt-6 pt-5 border-t border-neutral-900">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-gray-300">
                        <Check className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-4 border-t border-neutral-900/50">
                  <button
                    onClick={() => openBookingWithPlan(plan.category, plan.duration)}
                    className="w-full bg-neutral-900 hover:bg-amber-500 hover:text-black hover:border-amber-500 text-white border border-neutral-800 py-3 rounded-lg text-xs font-black uppercase tracking-widest transition-all duration-150"
                  >
                    Select {plan.duration}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Similar to Flipkart comparison cards block */}
        <div className="bg-neutral-950 border border-neutral-900 rounded-3xl p-6 sm:p-10 mb-20" id="plans-compare-highlights">
          <div className="mb-8">
            <span className="text-amber-500 text-xs font-mono uppercase tracking-widest font-bold">QUICK DURATION SUMMARY</span>
            <h2 className="text-2xl sm:text-3xl text-white font-black uppercase tracking-tight mt-1">
              Top Value Comparisons
            </h2>
            <p className="text-gray-400 text-xs sm:text-sm mt-1">
              Based on our requested Gota fitness database models. Standard billing options listed with features.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4" id="compare-summary-cards">
            {flipkartPlans.map((item, index) => (
              <div 
                key={index}
                className="bg-black border border-neutral-900/80 rounded-2xl p-5 hover:border-amber-500/20 transition-colors"
                id={`summary-card-${index}`}
              >
                <div className="flex justify-between items-center border-b border-neutral-900 pb-2 mb-3">
                  <span className="text-gray-400 font-mono uppercase text-xs font-bold">{item.plan} Tier</span>
                  <span className="text-[10px] bg-neutral-900 text-amber-500 font-mono uppercase px-2 py-0.5 rounded">
                    {item.duration}
                  </span>
                </div>
                
                <div className="space-y-1">
                  <div className="text-xs text-gray-500 font-sans uppercase">BENEFITS</div>
                  <div className="text-sm text-white font-bold font-sans">{item.features}</div>
                </div>

                <div className="flex justify-between items-center mt-5 pt-3 border-t border-neutral-900/50">
                  <span className="text-[10px] text-gray-500 font-mono">BILLING:</span>
                  <span className="text-base font-black text-amber-500 font-mono">{item.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Feature Comparison Matrix Section */}
        <div className="bg-neutral-950 border border-amber-500/10 rounded-3xl p-6 sm:p-10" id="plans-compare-matrix">
          <div className="max-w-3xl mb-8">
            <span className="text-amber-500 text-xs font-mono uppercase tracking-widest font-bold">FULL MATRIX</span>
            <h2 className="text-2xl sm:text-3xl text-white font-black uppercase tracking-tight mt-1">
              Detailed Feature Blueprint
            </h2>
            <p className="text-gray-400 text-xs sm:text-sm mt-1">
              Contrast what you get in different tiers. Select the plan type that represents your ideal path structure.
            </p>
          </div>

          <div className="overflow-x-auto" id="comparison-table-wrapper">
            <table className="w-full text-left border-collapse" id="comparison-matrix-table">
              <thead>
                <tr className="border-b border-neutral-800">
                  <th className="py-4 text-xs font-mono uppercase tracking-widest text-gray-500">Feature Deliverables</th>
                  <th className="py-4 text-center text-xs font-mono uppercase tracking-widest text-amber-500">Basic Tier</th>
                  <th className="py-4 text-center text-xs font-mono uppercase tracking-widest text-white">Premium Tier</th>
                  <th className="py-4 text-center text-xs font-mono uppercase tracking-widest text-amber-500">Personal Trainer (PT)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-900/50">
                {COMPARISON_FEATURES.map((feat, i) => (
                  <tr key={i} className="hover:bg-neutral-900/30 transition-colors">
                    <td className="py-4 pr-4 text-sm font-sans text-gray-300 font-semibold">{feat.name}</td>
                    
                    <td className="py-4 text-center">
                      <div className="inline-flex justify-center items-center">
                        {feat.basic ? (
                          <Check className="h-5 w-5 text-amber-500/80 stroke-[2.5]" />
                        ) : (
                          <X className="h-4 w-4 text-gray-700 stroke-[2.5]" />
                        )}
                      </div>
                    </td>

                    <td className="py-4 text-center bg-amber-500/[0.01]">
                      <div className="inline-flex justify-center items-center">
                        {feat.premium ? (
                          <Check className="h-5 w-5 text-amber-500 stroke-[2.5]" />
                        ) : (
                          <X className="h-4 w-4 text-gray-700 stroke-[2.5]" />
                        )}
                      </div>
                    </td>

                    <td className="py-4 text-center">
                      <div className="inline-flex justify-center items-center">
                        {feat.pt ? (
                          <Check className="h-5 w-5 text-amber-500 stroke-[2.5]" />
                        ) : (
                          <X className="h-4 w-4 text-gray-700 stroke-[2.5]" />
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 border-t border-neutral-900 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-gray-500 leading-normal font-mono uppercase">
              *All prices are billed as flat rates and are fully inclusive of GST.
            </span>
            <button
              onClick={() => openBookingWithPlan('Premium Membership', '12 Months')}
              className="bg-amber-500 hover:bg-amber-400 text-black px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all inline-flex items-center gap-1.5"
            >
              Secure 12-Month Access <Sparkles className="h-4 w-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
