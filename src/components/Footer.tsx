import React from 'react';
import { Instagram, MapPin, Clock, ArrowUp } from 'lucide-react';
import { defaultRestaurantConfig } from '../data/restaurantData';

interface FooterProps {
  onOpenReservation: () => void;
  onOpenOrderModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenReservation, onOpenOrderModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0C0D0C] border-t border-[#262928] relative text-xs text-[#AFB3AF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Column 1: Brand & Logo (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <a href="#hero" onClick={scrollToTop} className="inline-block">
              <img
                src="/assets/brand/blk-logo-ivory-transparent.png"
                alt="BLK Restaurant"
                className="h-10 w-auto object-contain"
                width={120}
                height={40}
              />
            </a>

            <p className="text-xs text-[#AFB3AF] font-light leading-relaxed max-w-sm">
              Dark cinematic dining and artisanal flame craft in Abu Dhabi. Every dish considered, every plate an experience.
            </p>

            <div className="flex items-center gap-3 pt-1">
              <a
                href={defaultRestaurantConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-[#141615] border border-[#262928] hover:border-[#B6A27E] text-[#F3F0EA] hover:text-[#B6A27E] transition-colors"
                aria-label="BLK Restaurant Instagram"
              >
                <Instagram className="w-3.5 h-3.5 text-[#B6A27E]" />
                <span className="font-mono text-[11px]">{defaultRestaurantConfig.instagramHandle}</span>
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#F3F0EA]">
              Explore
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#hero" className="hover:text-[#B6A27E] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#story" className="hover:text-[#B6A27E] transition-colors">
                  The BLK Experience
                </a>
              </li>
              <li>
                <a href="#signature" className="hover:text-[#B6A27E] transition-colors">
                  Signature Moments
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-[#B6A27E] transition-colors">
                  Digital Menu (58 Selections)
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#B6A27E] transition-colors">
                  Photography Archive
                </a>
              </li>
              <li>
                <a href="#venue" className="hover:text-[#B6A27E] transition-colors">
                  The Venue & Location
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Destination & Hours (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#F3F0EA]">
              Location & Hours
            </h4>
            
            <div className="space-y-3">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-[#B6A27E] shrink-0 mt-0.5" />
                <span>
                  Khalifa Park, Zone 1, Abu Dhabi, United Arab Emirates
                </span>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-3.5 h-3.5 text-[#B6A27E] shrink-0 mt-0.5" />
                <span>
                  12:00 PM – 12:00 AM Daily
                </span>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-2.5">
              <button
                type="button"
                onClick={onOpenReservation}
                className="px-4 py-2 text-[11px] uppercase tracking-wider font-semibold text-[#0C0D0C] bg-[#B6A27E] hover:bg-[#D5C7AE] rounded-sm transition-colors"
              >
                Reserve a Table
              </button>
              <button
                type="button"
                onClick={onOpenOrderModal}
                className="px-3.5 py-2 text-[11px] uppercase tracking-wider font-medium text-[#F3F0EA] bg-[#141615] border border-[#262928] hover:border-[#B6A27E]/40 rounded-sm transition-colors"
              >
                Delivery Info
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="mt-14 pt-8 border-t border-[#171918] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#AFB3AF]/60">
          <p>
            © {new Date().getFullYear()} BLK Restaurant. All rights reserved. Client Preview Release.
          </p>

          <div className="flex items-center gap-6">
            <span>Confidential Website Preview</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="hover:text-[#B6A27E] transition-colors flex items-center gap-1 focus:outline-none"
              aria-label="Scroll back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
