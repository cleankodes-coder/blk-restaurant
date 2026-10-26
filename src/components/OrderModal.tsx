import React, { useState } from 'react';
import { X, ExternalLink, ShoppingBag, Check, ShieldCheck, MapPin, AlertCircle } from 'lucide-react';
import { defaultRestaurantConfig } from '../data/restaurantData';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OrderModal: React.FC<OrderModalProps> = ({ isOpen, onClose }) => {
  const [copiedLink, setCopiedLink] = useState(false);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Order Online Options"
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-w-lg w-full bg-[#141615] border border-[#262928] rounded-lg p-6 sm:p-8 shadow-2xl text-left space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 text-[#AFB3AF] hover:text-[#F3F0EA] rounded-full hover:bg-white/5 transition-colors focus:outline-none"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#B6A27E] font-medium">
            <ShoppingBag className="w-4 h-4 text-[#B6A27E]" />
            <span>Delivery & Takeaway</span>
          </div>
          <h3 className="text-2xl font-serif text-[#F3F0EA]">
            Order from BLK Restaurant
          </h3>
          <p className="text-xs text-[#AFB3AF] leading-relaxed">
            Enjoy our flame-seared burgers, blistered stone pizzas, and artisan sides in the comfort of your home.
          </p>
        </div>

        {/* Partner Box */}
        <div className="p-4 rounded-lg bg-[#0C0D0C] border border-[#262928] space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded bg-[#00CDBC]/15 border border-[#00CDBC]/30 flex items-center justify-center text-[#00CDBC] font-bold text-xs">
                D
              </div>
              <div>
                <span className="text-xs font-semibold text-[#F3F0EA] block">Deliveroo Abu Dhabi</span>
                <span className="text-[10px] text-[#AFB3AF]">Serving Khalifa Park & surrounding zones</span>
              </div>
            </div>
            <span className="text-[10px] uppercase tracking-wider text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40">
              Active Provider
            </span>
          </div>

          <p className="text-[11px] text-[#AFB3AF] leading-normal">
            BLK Restaurant is listed on Deliveroo in Abu Dhabi. For the website launch, the restaurant management can paste their exact verified direct merchant link into the app settings.
          </p>
        </div>

        {/* Informational Callout */}
        <div className="text-xs text-[#AFB3AF] space-y-2 bg-[#171918] p-3.5 rounded border border-[#262928]">
          <div className="flex items-center gap-2 text-[#F3F0EA] font-medium text-[11px] uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-[#B6A27E]" />
            <span>Packaging & Heat Retention</span>
          </div>
          <p className="text-[11px] text-[#AFB3AF]">
            All takeaway burgers and steaks are packaged in ventilated thermal containers to maintain crust crispness and internal succulence during transit.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3 pt-2">
          <a
            href="https://deliveroo.ae/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 px-4 text-xs uppercase tracking-[0.18em] font-semibold text-[#0C0D0C] bg-[#B6A27E] hover:bg-[#D5C7AE] rounded-sm transition-colors flex items-center justify-center gap-2 text-center"
          >
            <span>Search BLK on Deliveroo.ae</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          <button
            type="button"
            onClick={onClose}
            className="w-full py-2.5 text-xs text-[#AFB3AF] hover:text-[#F3F0EA] uppercase tracking-wider transition-colors"
          >
            Return to Website Preview
          </button>
        </div>

      </div>
    </div>
  );
};
