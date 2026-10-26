import React, { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2, Camera } from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem } from '../data/galleryData';

interface GallerySectionProps {
  activePhotoPath?: string | null;
  onClearActivePhoto?: () => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({
  activePhotoPath,
  onClearActivePhoto
}) => {
  const [filter, setFilter] = useState<'All' | 'Plates & Craft' | 'Atmosphere & Venue'>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = GALLERY_ITEMS.filter(
    (item) => filter === 'All' || item.category === filter
  );

  // If parent triggered a photo view by path
  useEffect(() => {
    if (activePhotoPath) {
      const idx = filteredItems.findIndex((item) => item.imagePath === activePhotoPath);
      if (idx !== -1) {
        setLightboxIndex(idx);
      } else {
        // Find in full array
        const allIdx = GALLERY_ITEMS.findIndex((item) => item.imagePath === activePhotoPath);
        if (allIdx !== -1) {
          setFilter('All');
          setLightboxIndex(allIdx);
        }
      }
    }
  }, [activePhotoPath, filteredItems]);

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
    if (onClearActivePhoto) onClearActivePhoto();
  }, [onClearActivePhoto]);

  const nextLightbox = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  }, [lightboxIndex, filteredItems.length]);

  const prevLightbox = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  }, [lightboxIndex, filteredItems.length]);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextLightbox();
      if (e.key === 'ArrowLeft') prevLightbox();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, closeLightbox, nextLightbox, prevLightbox]);

  return (
    <section id="gallery" className="py-24 sm:py-32 bg-[#0C0D0C] relative border-t border-[#262928]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl space-y-3">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#B6A27E] font-medium">
              <span>Visual Archive</span>
              <span aria-hidden="true" className="text-[#AFB3AF]/40">·</span>
              <span>17 Authentic Photos</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-[#F3F0EA] tracking-tight">
              Atmosphere & Craft Gallery
            </h2>
            <p className="text-sm sm:text-base text-[#AFB3AF] font-light leading-relaxed">
              Every photograph is an authentic capture of BLK’s kitchen, dining table presentations, or Khalifa Park venue architecture.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 text-xs shrink-0 bg-[#141615] p-1 rounded-sm border border-[#262928]">
            {(['All', 'Plates & Craft', 'Atmosphere & Venue'] as const).map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setFilter(tab)}
                className={`px-3.5 py-1.5 rounded-sm uppercase tracking-wider text-[11px] font-medium transition-all duration-200 ${
                  filter === tab
                    ? 'bg-[#B6A27E] text-[#0C0D0C] font-semibold'
                    : 'text-[#AFB3AF] hover:text-[#F3F0EA]'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetrical Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(index)}
              className={`group relative rounded-lg overflow-hidden bg-[#151716] border border-[#262928] hover:border-[#B6A27E]/60 transition-all duration-300 cursor-pointer shadow-md hover:shadow-xl hover:shadow-black/70 ${
                item.isFeatured ? 'sm:col-span-2 sm:row-span-2' : ''
              }`}
            >
              <div className={`relative w-full overflow-hidden ${item.isFeatured ? 'aspect-[4/5]' : 'aspect-square'}`}>
                <img
                  src={item.imagePath}
                  alt={item.title}
                  className="w-full h-full object-cover object-center filter brightness-95 group-hover:brightness-100 group-hover:scale-105 transition-all duration-500"
                  loading="lazy"
                />

                {/* Dark Hover Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

                {/* Expand Icon */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center text-white/80 group-hover:text-[#B6A27E] group-hover:scale-110 transition-all">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>

                {/* Bottom Caption Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 space-y-1">
                  <span className="text-[10px] uppercase tracking-widest text-[#B6A27E] block font-medium">
                    {item.category}
                  </span>
                  <h3 className="text-sm sm:text-base font-serif text-[#F3F0EA] line-clamp-1 group-hover:text-[#D5C7AE] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-[#AFB3AF] line-clamp-2 font-light">
                    {item.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Image Lightbox Preview"
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-6 animate-in fade-in duration-200"
        >
          {/* Top Bar of Lightbox */}
          <div className="flex items-center justify-between z-10 max-w-7xl mx-auto w-full pb-3 border-b border-white/10">
            <div className="flex items-center gap-3">
              <span className="text-xs uppercase tracking-widest text-[#B6A27E] font-medium">
                {filteredItems[lightboxIndex].category}
              </span>
              <span className="text-xs text-[#AFB3AF]/50">|</span>
              <span className="text-xs text-[#AFB3AF] font-mono">
                {lightboxIndex + 1} of {filteredItems.length}
              </span>
            </div>

            <button
              type="button"
              onClick={closeLightbox}
              className="p-2 text-[#AFB3AF] hover:text-[#F3F0EA] hover:bg-white/10 rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B6A27E]"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Central Image and Prev/Next Navigation */}
          <div className="relative flex-1 flex items-center justify-center p-2 sm:p-6 min-h-0">
            {/* Prev Button */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                prevLightbox();
              }}
              className="absolute left-2 sm:left-6 z-10 p-3 text-[#F3F0EA] hover:text-[#B6A27E] bg-black/50 hover:bg-black/80 backdrop-blur-md rounded-full border border-white/10 transition-all"
              aria-label="Previous Image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Displayed Image */}
            <div className="relative max-h-full max-w-4xl flex items-center justify-center">
              <img
                src={filteredItems[lightboxIndex].imagePath}
                alt={filteredItems[lightboxIndex].title}
                className="max-h-[72vh] max-w-full object-contain rounded shadow-2xl border border-white/10"
              />
            </div>

            {/* Next Button */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                nextLightbox();
              }}
              className="absolute right-2 sm:right-6 z-10 p-3 text-[#F3F0EA] hover:text-[#B6A27E] bg-black/50 hover:bg-black/80 backdrop-blur-md rounded-full border border-white/10 transition-all"
              aria-label="Next Image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Bottom Captions */}
          <div className="max-w-2xl mx-auto w-full text-center space-y-1.5 pt-3 border-t border-white/10 z-10">
            <h4 className="text-lg font-serif text-[#F3F0EA]">
              {filteredItems[lightboxIndex].title}
            </h4>
            <p className="text-xs text-[#AFB3AF] font-light max-w-lg mx-auto">
              {filteredItems[lightboxIndex].caption}
            </p>
            <p className="text-[11px] text-[#B6A27E]/80 italic">
              {filteredItems[lightboxIndex].detailedNote}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};
