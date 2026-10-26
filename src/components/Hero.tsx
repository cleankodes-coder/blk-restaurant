import React from 'react';
import { ArrowDown, Calendar, UtensilsCrossed, ShieldCheck, MapPin } from 'lucide-react';
import { defaultRestaurantConfig } from '../data/restaurantData';

interface HeroProps {
  onOpenReservation: () => void;
  onExploreMenu: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenReservation, onExploreMenu }) => {
  return (
    <section id="hero" className="relative min-h-[92vh] lg:min-h-screen pt-24 pb-16 flex items-center overflow-hidden">
      {/* Background ambient lighting - subtle deep emerald and coal tone */}
      <div className="absolute inset-0 bg-[#0C0D0C] pointer-events-none" />
      <div 
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#17382E]/25 blur-[120px] pointer-events-none"
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-10 right-10 w-[30rem] h-[30rem] rounded-full bg-[#B6A27E]/8 blur-[140px] pointer-events-none"
        aria-hidden="true" 
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Split Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Editorial Copy */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center space-y-7 z-10">
            {/* Unboxed Metadata Tagline */}
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#B6A27E] font-medium">
              <span>Abu Dhabi</span>
              <span aria-hidden="true" className="text-[#AFB3AF]/40">·</span>
              <span>Khalifa Park</span>
              <span aria-hidden="true" className="text-[#AFB3AF]/40">·</span>
              <span>Artisanal Dining</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-serif font-light text-[#F3F0EA] leading-[1.08] tracking-[-0.02em] text-balance">
              Every plate. <br />
              <span className="italic font-normal text-[#D5C7AE]">An experience.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#AFB3AF] font-light leading-relaxed max-w-xl">
              {defaultRestaurantConfig.subtitle}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                type="button"
                onClick={onOpenReservation}
                className="px-7 py-3.5 text-xs uppercase tracking-[0.2em] font-semibold text-[#0C0D0C] bg-[#B6A27E] hover:bg-[#D5C7AE] rounded-sm transition-all duration-300 shadow-lg shadow-[#B6A27E]/10 hover:shadow-[#B6A27E]/25 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F3F0EA]"
              >
                Reserve a Table
              </button>

              <button
                type="button"
                onClick={onExploreMenu}
                className="px-6 py-3.5 text-xs uppercase tracking-[0.2em] font-medium text-[#F3F0EA] bg-[#171918] hover:bg-[#222524] border border-[#262928] hover:border-[#B6A27E]/50 rounded-sm transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B6A27E]"
              >
                Explore Digital Menu
              </button>
            </div>

            {/* Trust and Key Attributes Strip */}
            <div className="pt-6 border-t border-[#262928]/80 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-[#AFB3AF]">
              <div className="space-y-1">
                <span className="text-[10px] uppercase tracking-widest text-[#B6A27E] block">Cuisine</span>
                <span className="text-[#F3F0EA] font-medium block">Prime Steaks, Burgers, Stone Pizza</span>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] uppercase tracking-widest text-[#B6A27E] block">Location</span>
                <span className="text-[#F3F0EA] font-medium block">Zone 1, Khalifa Park</span>
              </div>
              <div className="space-y-1 col-span-2 sm:col-span-1">
                <span className="text-[10px] uppercase tracking-widest text-[#B6A27E] block">Standards</span>
                <span className="text-[#F3F0EA] font-medium block">100% Halal Verified</span>
              </div>
            </div>
          </div>

          {/* Right Column: Genuine 3072x4080 Food Spread Photographic Feature */}
          <div className="lg:col-span-6 xl:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none rounded-lg p-2 sm:p-3 bg-[#151716] border border-[#262928] shadow-2xl shadow-black/80 group">
              {/* Image Container Preserving Portrait Composition */}
              <div className="relative aspect-[3/4] sm:aspect-[4/5] lg:aspect-[3/4] overflow-hidden rounded bg-[#0C0D0C]">
                <img
                  src="/assets/food/blk-food-spread-hero.jpg"
                  alt="BLK Restaurant overhead dining banquet with signature burgers, stone pizza, and authentic branded details"
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  width={3072}
                  height={4080}
                  loading="eager"
                  fetchPriority="high"
                />

                {/* Subtle gradient vignette to blend with dark canvas without obscuring food */}
                <div 
                  className="absolute inset-0 bg-gradient-to-t from-[#0C0D0C]/80 via-transparent to-black/20 pointer-events-none"
                  aria-hidden="true"
                />

                {/* Subtle authentic caption bar at bottom of photo */}
                <div className="absolute bottom-3 left-3 right-3 p-3 bg-[#0C0D0C]/85 backdrop-blur-md rounded border border-white/10 flex items-center justify-between text-xs">
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#B6A27E] block font-medium">
                      The BLK Banquet
                    </span>
                    <span className="text-[#F3F0EA] font-serif text-sm">
                      Authentic Charcoal & Stone-Oven Selection
                    </span>
                  </div>
                  <span className="text-[10px] text-[#AFB3AF] uppercase tracking-wider px-2 py-1 bg-white/5 rounded border border-white/5">
                    Khalifa Park
                  </span>
                </div>
              </div>

              {/* Decorative Corner Framing */}
              <div className="absolute -top-1.5 -left-1.5 w-4 h-4 border-t-2 border-l-2 border-[#B6A27E]" aria-hidden="true" />
              <div className="absolute -bottom-1.5 -right-1.5 w-4 h-4 border-b-2 border-r-2 border-[#B6A27E]" aria-hidden="true" />
            </div>
          </div>

        </div>
      </div>

      {/* Down Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1.5 text-[#AFB3AF]/60 hover:text-[#B6A27E] transition-colors cursor-pointer" onClick={onExploreMenu}>
        <span className="text-[10px] uppercase tracking-[0.25em]">Scroll</span>
        <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
      </div>
    </section>
  );
};
