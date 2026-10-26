import React from 'react';
import { MapPin, Navigation, Clock, Car, PhoneCall, ExternalLink, ShieldCheck } from 'lucide-react';
import { defaultRestaurantConfig } from '../data/restaurantData';

interface VenueSectionProps {
  onSelectPhoto: (imagePath: string) => void;
  onOpenReservation: () => void;
}

export const VenueSection: React.FC<VenueSectionProps> = ({ onSelectPhoto, onOpenReservation }) => {
  return (
    <section id="venue" className="py-24 sm:py-32 bg-[#141615] relative overflow-hidden border-t border-[#262928]">
      {/* Background glow */}
      <div 
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[#17382E]/20 blur-[120px] pointer-events-none"
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14 space-y-3">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#B6A27E] font-medium">
            <span>The Space & Location</span>
            <span aria-hidden="true" className="text-[#AFB3AF]/40">·</span>
            <span>Khalifa Park, Abu Dhabi</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-[#F3F0EA] tracking-tight">
            The Venue & Atmosphere
          </h2>
          <p className="text-sm sm:text-base text-[#AFB3AF] font-light leading-relaxed">
            A sanctuary of dark textures, glowing incandescent filament pendants, and an embossed stone brand wall. Designed for memorable dining.
          </p>
        </div>

        {/* 2-Column Main Section: Gallery Grid Left & Location Info Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Authentic Venue Photography Showcase */}
          <div className="lg:col-span-7 grid grid-cols-2 gap-4">
            {/* Large Evening Exterior Photo */}
            <div
              onClick={() => onSelectPhoto('/assets/venue/blk-exterior-evening.jpg')}
              className="col-span-2 relative aspect-[16/9] sm:aspect-[21/9] rounded-lg overflow-hidden bg-[#0C0D0C] border border-[#262928] hover:border-[#B6A27E]/60 transition-all cursor-pointer group shadow-xl"
            >
              <img
                src="/assets/venue/blk-exterior-evening.jpg"
                alt="BLK Restaurant evening illuminated facade in Khalifa Park Abu Dhabi"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-95"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#B6A27E] block font-medium">Evening Facade</span>
                  <span className="text-[#F3F0EA] font-serif text-sm">Street Presence at Twilight</span>
                </div>
                <span className="text-[10px] text-[#AFB3AF] px-2 py-0.5 rounded bg-black/60 border border-white/10">
                  Click to Expand
                </span>
              </div>
            </div>

            {/* Logo Wall Close-Up */}
            <div
              onClick={() => onSelectPhoto('/assets/venue/blk-logo-wall.jpg')}
              className="relative aspect-square sm:aspect-[4/3] rounded-lg overflow-hidden bg-[#0C0D0C] border border-[#262928] hover:border-[#B6A27E]/60 transition-all cursor-pointer group shadow-lg"
            >
              <img
                src="/assets/venue/blk-logo-wall.jpg"
                alt="BLK sculpted brand feature wall in dining lounge"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 text-xs">
                <span className="text-[10px] uppercase tracking-widest text-[#B6A27E] block font-medium">Brand Artistry</span>
                <span className="text-[#F3F0EA] font-serif text-xs line-clamp-1">Monolithic Logo Feature Wall</span>
              </div>
            </div>

            {/* Interior Ambient Lighting */}
            <div
              onClick={() => onSelectPhoto('/assets/venue/blk-sign-interior-01.jpg')}
              className="relative aspect-square sm:aspect-[4/3] rounded-lg overflow-hidden bg-[#0C0D0C] border border-[#262928] hover:border-[#B6A27E]/60 transition-all cursor-pointer group shadow-lg"
            >
              <img
                src="/assets/venue/blk-sign-interior-01.jpg"
                alt="Interior incandescent pendant lighting and dark textures"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 text-xs">
                <span className="text-[10px] uppercase tracking-widest text-[#B6A27E] block font-medium">Atmosphere</span>
                <span className="text-[#F3F0EA] font-serif text-xs line-clamp-1">Incandescent Ambient Glow</span>
              </div>
            </div>
          </div>

          {/* Location & Visit Details Card Right */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-7 rounded-lg bg-[#0C0D0C] border border-[#262928] space-y-6 shadow-xl">
              <div className="space-y-2 border-b border-[#262928] pb-5">
                <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#B6A27E] font-medium">
                  <MapPin className="w-4 h-4 text-[#B6A27E]" />
                  <span>Verified Destination</span>
                </div>
                <h3 className="text-2xl font-serif text-[#F3F0EA]">
                  Khalifa Park, Zone 1
                </h3>
                <p className="text-xs text-[#AFB3AF] leading-relaxed">
                  {defaultRestaurantConfig.fullAddress}
                </p>
                <p className="text-[11px] text-[#B6A27E]/80 italic pt-1">
                  {defaultRestaurantConfig.approximateLocationNote}
                </p>
              </div>

              {/* Operating Hours & Timing */}
              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3 text-[#AFB3AF]">
                  <Clock className="w-4 h-4 text-[#B6A27E] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#F3F0EA] font-medium block">Hours of Operation</span>
                    <span className="text-[#AFB3AF]">12:00 PM – 12:00 AM (Midnight) Daily</span>
                    <span className="text-[11px] text-[#AFB3AF]/60 block mt-0.5">
                      Kitchen serves until 11:30 PM.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-[#AFB3AF]">
                  <Car className="w-4 h-4 text-[#B6A27E] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#F3F0EA] font-medium block">Parking & Valet</span>
                    <span>Complimentary guest parking available adjacent to venue pavilion.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-[#AFB3AF]">
                  <PhoneCall className="w-4 h-4 text-[#B6A27E] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#F3F0EA] font-medium block">Direct Telephone Line</span>
                    <span className="text-[#B6A27E]">Dedicated restaurant line to confirm upon launch</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 space-y-3">
                <a
                  href={defaultRestaurantConfig.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 text-xs uppercase tracking-[0.18em] font-medium text-[#F3F0EA] bg-[#171918] hover:bg-[#222524] border border-[#262928] hover:border-[#B6A27E]/60 rounded-sm transition-all duration-200 flex items-center justify-center gap-2 text-center group"
                >
                  <Navigation className="w-4 h-4 text-[#B6A27E] group-hover:translate-x-0.5 transition-transform" />
                  <span>Get Directions on Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#AFB3AF]" />
                </a>

                <button
                  type="button"
                  onClick={onOpenReservation}
                  className="w-full py-3.5 px-4 text-xs uppercase tracking-[0.2em] font-semibold text-[#0C0D0C] bg-[#B6A27E] hover:bg-[#D5C7AE] rounded-sm transition-colors text-center"
                >
                  Reserve an Evening Table
                </button>
              </div>
            </div>

            {/* Atmosphere Cue Box */}
            <div className="p-4 rounded-lg bg-[#17382E]/15 border border-[#17382E]/40 text-xs text-[#AFB3AF] flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-[#B6A27E] shrink-0" />
              <span>
                Dress Code: Smart casual. Children and families warmly welcomed. Indoor dining and terrace seating available.
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
