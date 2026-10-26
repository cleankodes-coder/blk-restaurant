import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, Clock, MapPin } from 'lucide-react';
import { defaultRestaurantConfig } from '../data/restaurantData';

interface NavbarProps {
  onOpenReservation: () => void;
  onOpenOrderModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenReservation, onOpenOrderModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Our Story', href: '#story' },
    { label: 'Signature', href: '#signature' },
    { label: 'Menu', href: '#menu' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'The Venue', href: '#venue' }
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0C0D0C]/95 backdrop-blur-md border-b border-[#262928] py-3.5 shadow-2xl shadow-black/80'
            : 'bg-gradient-to-b from-[#0C0D0C]/90 via-[#0C0D0C]/60 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-8">
            {/* Zone 1: Authentic Brand Wordmark Logo */}
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#hero');
              }}
              className="flex items-center gap-3 shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B6A27E] rounded-sm group"
              aria-label="BLK Restaurant Home"
            >
              <img
                src="/assets/brand/blk-logo-ivory-transparent.png"
                alt="BLK Restaurant"
                className="h-8 sm:h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                width={120}
                height={40}
              />
              <span className="sr-only">{defaultRestaurantConfig.brandName} Abu Dhabi</span>
            </a>

            {/* Zone 2: Navigation Links (Single-line, whitespace-nowrap) */}
            <nav className="hidden md:flex items-center gap-7 lg:gap-8" aria-label="Main Navigation">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="text-xs uppercase tracking-[0.2em] font-medium text-[#AFB3AF] hover:text-[#F3F0EA] transition-colors duration-200 whitespace-nowrap shrink-0 relative py-1 group focus:outline-none focus-visible:ring-1 focus-visible:ring-[#B6A27E]"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#B6A27E] transition-all duration-200 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Zone 3: Primary Actions */}
            <div className="hidden sm:flex items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={onOpenOrderModal}
                className="px-3.5 py-2 text-xs uppercase tracking-[0.15em] font-medium text-[#AFB3AF] hover:text-[#F3F0EA] border border-transparent hover:border-[#262928] rounded-sm transition-all duration-200 whitespace-nowrap shrink-0"
              >
                Delivery
              </button>
              <button
                type="button"
                onClick={onOpenReservation}
                className="relative px-5 py-2.5 text-xs uppercase tracking-[0.18em] font-semibold text-[#0C0D0C] bg-[#B6A27E] hover:bg-[#D5C7AE] rounded-sm transition-all duration-300 shadow-md shadow-[#B6A27E]/10 hover:shadow-[#B6A27E]/25 hover:translate-y-[-1px] whitespace-nowrap shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F3F0EA]"
              >
                Reserve a Table
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 md:hidden">
              <button
                type="button"
                onClick={onOpenReservation}
                className="px-3 py-1.5 text-[11px] uppercase tracking-wider font-semibold text-[#0C0D0C] bg-[#B6A27E] rounded-sm"
              >
                Reserve
              </button>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-[#F3F0EA] hover:text-[#B6A27E] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B6A27E] rounded-sm"
                aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 md:hidden bg-black/80 backdrop-blur-lg animate-in fade-in duration-200">
          <div className="pt-24 pb-8 px-6 flex flex-col justify-between h-full max-w-sm ml-auto bg-[#141615] border-l border-[#262928]">
            <div className="space-y-6">
              <div className="pb-4 border-b border-[#262928]">
                <img
                  src="/assets/brand/blk-logo-ivory-transparent.png"
                  alt="BLK Restaurant"
                  className="h-8 w-auto object-contain"
                />
                <p className="mt-2 text-xs text-[#AFB3AF] tracking-wider uppercase">
                  Khalifa Park, Abu Dhabi
                </p>
              </div>

              <nav className="flex flex-col space-y-4" aria-label="Mobile Navigation">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="text-base uppercase tracking-[0.2em] font-serif text-[#F3F0EA] hover:text-[#B6A27E] transition-colors py-1.5"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            <div className="space-y-4 pt-6 border-t border-[#262928]">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenReservation();
                }}
                className="w-full py-3 text-center text-xs uppercase tracking-[0.2em] font-semibold text-[#0C0D0C] bg-[#B6A27E] hover:bg-[#D5C7AE] rounded-sm transition-colors"
              >
                Reserve a Table
              </button>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenOrderModal();
                }}
                className="w-full py-3 text-center text-xs uppercase tracking-[0.2em] font-medium text-[#F3F0EA] bg-[#171918] border border-[#262928] hover:border-[#B6A27E]/40 rounded-sm transition-colors"
              >
                Delivery Options
              </button>
              <div className="text-[11px] text-[#AFB3AF] space-y-1 pt-2">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#B6A27E]" />
                  <span>12:00 PM – 12:00 AM Daily</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#B6A27E]" />
                  <span>Khalifa Park, Zone 1, Abu Dhabi</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
