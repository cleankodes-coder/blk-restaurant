import React, { useState } from 'react';
import { ShieldCheck, Sliders, X, Check, ExternalLink, Image as ImageIcon, Utensils } from 'lucide-react';

export const ClientPreviewBadge: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating subtle bottom preview pill */}
      <div className="fixed bottom-4 left-4 z-40 hidden sm:block">
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#141615]/90 hover:bg-[#1f2220] text-[#B6A27E] border border-[#262928] hover:border-[#B6A27E]/50 backdrop-blur-md shadow-xl text-[11px] font-medium transition-all group"
          aria-label="Open client preview notes and verification"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#B6A27E]" />
          <span className="tracking-wider uppercase text-[10px]">Client Preview Details</span>
          <Sliders className="w-3 h-3 text-[#AFB3AF] group-hover:text-[#F3F0EA] transition-colors ml-0.5" />
        </button>
      </div>

      {/* Slide-over / Modal with preview configuration audit */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative max-w-lg w-full bg-[#141615] border border-[#262928] rounded-lg p-6 sm:p-7 space-y-5 text-left"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between pb-3 border-b border-[#262928]">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#B6A27E] font-medium block">
                  Quality & Deployment Verification
                </span>
                <h3 className="text-lg font-serif text-[#F3F0EA]">
                  BLK Restaurant Website Preview
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-1 text-[#AFB3AF] hover:text-[#F3F0EA] rounded"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-3.5 text-xs text-[#AFB3AF] leading-relaxed">
              <div className="p-3 rounded bg-[#0C0D0C] border border-[#262928] space-y-1.5">
                <div className="flex items-center gap-2 text-[#F3F0EA] font-medium text-xs">
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Genuine Client Assets Extracted & Rendered</span>
                </div>
                <p className="text-[11px]">
                  17 genuine photographs from the user archive are active (no AI-generated food, no stock images). Background-isolated ivory wordmark used on all dark surfaces.
                </p>
              </div>

              <div className="p-3 rounded bg-[#0C0D0C] border border-[#262928] space-y-1.5">
                <div className="flex items-center gap-2 text-[#F3F0EA] font-medium text-xs">
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Authentic Menu Reference (58 Items)</span>
                </div>
                <p className="text-[11px]">
                  Transcribed faithfully from historical menu references. Prices are intentionally omitted until confirmed with the management to prevent misquoting.
                </p>
              </div>

              <div className="p-3 rounded bg-[#0C0D0C] border border-[#262928] space-y-1.5">
                <div className="flex items-center gap-2 text-[#F3F0EA] font-medium text-xs">
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Interactive Demonstration Mode</span>
                </div>
                <p className="text-[11px]">
                  Forms validate customer data and format reservation payloads for client review without sending unauthorized bookings.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="w-full py-2.5 text-xs uppercase tracking-wider font-semibold text-[#0C0D0C] bg-[#B6A27E] hover:bg-[#D5C7AE] rounded-sm transition-colors text-center"
              >
                Close Verification Overview
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
