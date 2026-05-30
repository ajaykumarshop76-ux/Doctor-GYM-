import { useState, useEffect, FormEvent } from 'react';
import { Star, MessageSquare, CheckCircle, ThumbsUp, Sparkles, UserCheck2, PenTool } from 'lucide-react';
import { GOOGLE_REVIEWS_STATS, REVIEWS_LIST } from '../data';
import { Review } from '../types';

export default function Reviews() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [newAuthor, setNewAuthor] = useState("");
  const [newRating, setNewRating] = useState(5);
  const [newText, setNewText] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);

  // Initialize reviews from localStorage or statutory fallback list
  useEffect(() => {
    const saved = localStorage.getItem('doctor_gym_user_reviews');
    if (saved) {
      try {
        setReviews(JSON.parse(saved));
      } catch (e) {
        setReviews(REVIEWS_LIST);
      }
    } else {
      setReviews(REVIEWS_LIST);
    }
  }, []);

  const handleSubmitReview = (e: FormEvent) => {
    e.preventDefault();
    if (!newAuthor.trim() || !newText.trim()) return;

    const addedReview: Review = {
      id: `custom_${Date.now()}`,
      author: newAuthor.trim(),
      rating: newRating,
      text: newText.trim(),
      date: "Just now"
    };

    const updated = [addedReview, ...reviews];
    setReviews(updated);
    localStorage.setItem('doctor_gym_user_reviews', JSON.stringify(updated));

    // Reset inputs
    setNewAuthor("");
    setNewRating(5);
    setNewText("");
    setIsSuccess(true);
    setIsFormOpen(false);

    // Timeout alert success
    setTimeout(() => {
      setIsSuccess(false);
    }, 4000);
  };

  return (
    <div className="bg-black text-gray-300 min-h-screen py-16" id="reviews-page">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16" id="reviews-header">
          <span className="text-xs uppercase font-mono tracking-[0.3em] text-amber-500 font-black">
            Endorsements & Ratings
          </span>
          <h1 className="text-4xl sm:text-5xl font-sans font-black text-white uppercase tracking-tight mt-2">
            Reviews & Feedback
          </h1>
          <p className="text-gray-400 mt-4 text-sm sm:text-base leading-relaxed">
            See actual Google rating logs and local reviews from members from Ahmedabad Gota who train daily at Doctor GYM.
          </p>
        </div>

        {/* Aggregate Stats Dashboard Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-stretch" id="reviews-stats-dashboard">
          
          {/* Card left: Aggregate Star Rating Widget */}
          <div className="lg:col-span-5 bg-gradient-to-b from-neutral-900 to-black border border-amber-500/10 rounded-3xl p-8 flex flex-col justify-between" id="reviews-aggregate-summary">
            <div>
              <span className="text-[10px] text-amber-500 font-mono uppercase bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/20">
                GOOGLE MAPS SUMMARY
              </span>
              
              <div className="flex items-baseline gap-3 mt-6">
                <span className="text-6xl font-black text-white tracking-tight">{GOOGLE_REVIEWS_STATS.rating}</span>
                <div>
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                  <span className="text-xs text-gray-500 font-mono block mt-1/2">OUT OF 5.0 STARS</span>
                </div>
              </div>

              <p className="text-sm text-gray-400 font-sans mt-4 leading-relaxed">
                Based on <span className="text-white font-bold">{GOOGLE_REVIEWS_STATS.count} Google Reviews</span> verified physically at Vandematram Road Gota.
              </p>
            </div>

            <div className="pt-8 border-t border-neutral-900 mt-8">
              <button
                onClick={() => setIsFormOpen(!isFormOpen)}
                className="w-full bg-amber-500 hover:bg-amber-400 text-black py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all duration-150 inline-flex items-center justify-center gap-2"
                id="btn-open-review-form"
              >
                <PenTool className="h-4 w-4" /> Write a Review
              </button>
            </div>
          </div>

          {/* Card Right: Gym Review Bullet Summary */}
          <div className="lg:col-span-7 bg-neutral-950 border border-neutral-900 rounded-3xl p-8" id="reviews-bullet-summaries">
            <h3 className="text-white font-bold tracking-widest uppercase text-sm border-l-2 border-amber-500 pl-3 mb-6">
              Primary Client Sentiment
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" id="review-sentiments-grid">
              {GOOGLE_REVIEWS_STATS.highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-2.5 p-3 rounded-xl bg-black border border-neutral-900/40">
                  <CheckCircle className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                  <span className="text-xs text-gray-300 font-medium font-sans leading-relaxed">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Dynamic / Collapsible Write Review Form */}
        {isFormOpen && (
          <div className="bg-neutral-950 border border-amber-500/25 rounded-3xl p-6 md:p-8 mb-16 animate-[fadeIn_0.3s_ease]" id="review-write-form-block">
            <h3 className="text-lg font-black text-white uppercase tracking-wider mb-6">Your Training Experience</h3>
            
            <form onSubmit={handleSubmitReview} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] text-gray-500 uppercase font-mono mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={newAuthor}
                    onChange={(e) => setNewAuthor(e.target.value)}
                    className="w-full bg-black border border-neutral-800 focus:border-amber-500 text-white placeholder-gray-600 rounded-lg py-2.5 px-4 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-[10px] text-gray-500 uppercase font-mono mb-1">Star Rating</label>
                  <div className="flex items-center gap-1.5 h-10">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setNewRating(star)}
                        className="focus:outline-none"
                      >
                        <Star 
                          className={`h-6 w-6 uppercase transition-colors ${
                            star <= newRating 
                              ? 'fill-amber-500 text-amber-500' 
                              : 'text-neutral-800 hover:text-amber-500/40'
                          }`} 
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-[10px] text-gray-500 uppercase font-mono mb-1">Detailed Comment</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Share details of your workout experience at Doctor GYM (trainers, machinery quality, spacing)..."
                  value={newText}
                  onChange={(e) => setNewText(e.target.value)}
                  className="w-full bg-black border border-neutral-800 focus:border-amber-500 text-white placeholder-gray-600 rounded-lg py-2.5 px-4 text-sm leading-relaxed"
                />
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setIsFormOpen(false)}
                  className="px-4 py-2 bg-neutral-900 text-gray-400 hover:text-white rounded-lg text-xs font-bold uppercase transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-amber-500 hover:bg-amber-400 text-black px-6 py-2 rounded-lg text-xs font-black uppercase tracking-wider transition-colors"
                >
                  Post Review
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Quick Success Toast */}
        {isSuccess && (
          <div className="mb-10 bg-amber-500/10 border border-amber-500 text-amber-500 p-4 rounded-xl text-center text-xs font-mono uppercase tracking-wider flex items-center justify-center gap-2" id="success-feedback-toast">
            <UserCheck2 className="h-5 w-5" /> Your review has been saved live inside local storage!
          </div>
        )}

        {/* Featured Reviews Grid list */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6" id="reviews-list-grid">
          {reviews.map((rev) => (
            <div 
              key={rev.id} 
              className="bg-neutral-950 border border-neutral-900 rounded-2xl p-6 flex flex-col justify-between hover:border-neutral-800 transition-colors duration-200"
              id={`review-item-${rev.id}`}
            >
              <div>
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <h4 className="text-white font-black uppercase text-base">{rev.author}</h4>
                    <span className="text-[10px] text-gray-500 font-mono tracking-wider block mt-0.5 uppercase">{rev.date}</span>
                  </div>
                  
                  {/* Rating Stars list */}
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-3.5 w-3.5 ${
                          i < rev.rating 
                            ? 'fill-amber-500 text-amber-500' 
                            : 'text-neutral-800'
                        }`} 
                      />
                    ))}
                  </div>
                </div>

                <p className="text-xs text-gray-400 leading-relaxed font-sans mt-4">
                  "{rev.text}"
                </p>
              </div>

              {/* Verified member footer badges */}
              <div className="border-t border-neutral-900 mt-6 pt-4 flex justify-between items-center text-[10px] font-mono">
                <span className="text-amber-500/70 uppercase flex items-center gap-1 font-bold">
                  <ThumbsUp className="h-3 w-3" /> VERIFIED GOTA MEMBER
                </span>
                <span className="text-gray-600">DOCTOR GYM REVIEWS</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
