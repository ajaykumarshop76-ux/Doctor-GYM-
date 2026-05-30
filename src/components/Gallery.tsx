import { useState, MouseEvent } from 'react';
import { X, ZoomIn, ChevronLeft, ChevronRight, Image } from 'lucide-react';
import { GALLERY_ITEMS, GALLERY_CATEGORIES } from '../data';
import { GalleryItem } from '../types';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Filter gallery items based on activeCategory
  const filteredItems = activeCategory === "All" 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category === activeCategory);

  const handleOpenLightbox = (item: GalleryItem) => {
    const originalIndex = GALLERY_ITEMS.findIndex(x => x.id === item.id);
    if (originalIndex !== -1) {
      setLightboxIndex(originalIndex);
    }
  };

  const handleNext = (e: MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => {
        if (prev === null) return null;
        return (prev + 1) % GALLERY_ITEMS.length;
      });
    }
  };

  const handlePrev = (e: MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => {
        if (prev === null) return null;
        return prev === 0 ? GALLERY_ITEMS.length - 1 : prev - 1;
      });
    }
  };

  const handleClose = () => {
    setLightboxIndex(null);
  };

  const currentLightboxItem = lightboxIndex !== null ? GALLERY_ITEMS[lightboxIndex] : null;

  return (
    <div className="bg-black text-gray-350 min-h-screen py-16" id="gallery-page">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-12" id="gallery-header">
          <span className="text-xs uppercase font-mono tracking-[0.3em] text-amber-500 font-black">
            STADIUM HARDWARE TOUR
          </span>
          <h1 className="text-4xl sm:text-5xl font-sans font-black text-white uppercase tracking-tight mt-2">
            The Media Gallery
          </h1>
          <p className="text-gray-400 mt-4 text-sm sm:text-base leading-relaxed">
            See the full visual walkthrough of our high-contrast training studio, containing real plate isolation decks, advanced dumbbell stacks, locker suites, and group CrossFit fields.
          </p>
        </div>

        {/* Category Filters Bar (Supports desktop wrapping & mobile horizontal scroll) */}
        <div className="overflow-x-auto scroller-hide mb-10 pb-2" id="gallery-filters-wrapper">
          <div className="flex flex-nowrap md:flex-wrap items-center justify-start md:justify-center gap-2" id="gallery-filter-buttons">
            {GALLERY_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4.5 py-2.5 rounded-full text-[10px] md:text-xs font-bold tracking-widest uppercase transition-all whitespace-nowrap cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-amber-500 text-black shadow-md shadow-amber-500/10'
                    : 'bg-neutral-950 border border-neutral-900/60 text-gray-400 hover:text-white hover:border-amber-500/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry / Responsive Grid (Displaying 24 elegant images) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4" id="gallery-photos-grid">
          {filteredItems.map((item, index) => (
            <div 
              key={item.id}
              onClick={() => handleOpenLightbox(item)}
              className="group relative overflow-hidden rounded-xl bg-neutral-950 border border-neutral-900 cursor-pointer h-64"
              id={`gallery-item-${item.id}`}
            >
              {/* Image element with required referrer policy */}
              <img 
                src={`${item.imageUrl}`} 
                alt={item.title} 
                className="w-full h-full object-cover object-center filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-300"
                referrerPolicy="no-referrer"
              />

              {/* Hover Dark overlay details */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex flex-col justify-between p-5">
                <div className="flex justify-end">
                  <div className="bg-black/60 backdrop-blur-md p-2 rounded-lg text-amber-500">
                    <ZoomIn className="h-4 w-4" />
                  </div>
                </div>
                <div>
                  <span className="text-[9px] text-amber-400 font-mono uppercase bg-black/80 px-2 py-0.5 rounded font-black border border-amber-500/10">
                    {item.category}
                  </span>
                  <h3 className="text-white text-sm font-black uppercase tracking-wider mt-1">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State if filter returns nothing */}
        {filteredItems.length === 0 && (
          <div className="text-center py-20 bg-neutral-950 border border-neutral-900 rounded-2xl" id="gallery-empty-state">
            <Image className="h-10 w-10 text-gray-600 mx-auto mb-3" />
            <p className="text-gray-400 text-sm font-medium">No photos found in this category.</p>
            <button 
              onClick={() => setActiveCategory("All")} 
              className="text-amber-500 uppercase font-mono text-xs font-black mt-2 underline"
            >
              Show All Photos
            </button>
          </div>
        )}

        {/* 25-Image Count Indicator Badge */}
        <div className="text-center mt-12 text-xs font-mono text-gray-500 uppercase" id="gallery-total-badge">
          Showing <span className="text-amber-500 font-bold">{filteredItems.length}</span> images of <span className="text-white font-bold">{GALLERY_ITEMS.length}</span> verified facility visuals.
        </div>

        {/* Lightbox Modal Box */}
        {currentLightboxItem && (
          <div 
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={handleClose}
            id="lightbox-container"
          >
            {/* Close trigger */}
            <button 
              onClick={handleClose}
              className="absolute top-6 right-6 text-gray-400 hover:text-white p-2.5 bg-neutral-900 rounded-full border border-neutral-800 focus:outline-none"
              id="lightbox-close"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Navigation Left */}
            <button 
              onClick={handlePrev}
              className="absolute left-4 sm:left-8 text-gray-400 hover:text-white p-2 sm:p-3 bg-neutral-900/60 hover:bg-neutral-900 rounded-full border border-neutral-800/20"
              id="lightbox-prev"
            >
              <ChevronLeft className="h-6 w-6 sm:h-8 sm:w-8" />
            </button>

            {/* Interactive Image Display */}
            <div 
              className="max-w-4xl max-h-[85vh] flex flex-col justify-center items-center gap-4 relative"
              onClick={(e) => e.stopPropagation()}
              id="lightbox-content"
            >
              <div className="relative rounded-xl overflow-hidden border border-neutral-800 max-h-[70vh]">
                <img 
                  src={currentLightboxItem.imageUrl} 
                  alt={currentLightboxItem.title} 
                  className="max-w-full max-h-[70vh] object-contain rounded-xl"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Caption and meta */}
              <div className="text-center space-y-1.5" id="lightbox-caption">
                <span className="text-[10px] text-amber-500 font-mono uppercase tracking-widest bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
                  {currentLightboxItem.category}
                </span>
                <h4 className="text-lg font-bold text-white uppercase tracking-wider">{currentLightboxItem.title}</h4>
                <p className="text-[10px] text-gray-500 font-mono">
                  Visual {lightboxIndex !== null ? lightboxIndex + 1 : 0} of {GALLERY_ITEMS.length} • Doctor GYM Ahmedabad Gota
                </p>
              </div>
            </div>

            {/* Navigation Right */}
            <button 
              onClick={handleNext}
              className="absolute right-4 sm:right-8 text-gray-400 hover:text-white p-2 sm:p-3 bg-neutral-900/60 hover:bg-neutral-900 rounded-full border border-neutral-800/20"
              id="lightbox-next"
            >
              <ChevronRight className="h-6 w-6 sm:h-8 sm:w-8" />
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
