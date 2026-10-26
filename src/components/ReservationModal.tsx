import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, Users, CheckCircle2, AlertCircle, Copy, Check } from 'lucide-react';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledItem?: string;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({
  isOpen,
  onClose,
  prefilledItem = ''
}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  });
  const [time, setTime] = useState('19:30');
  const [partySize, setPartySize] = useState('2');
  const [seating, setSeating] = useState('Main Dining Room');
  const [notes, setNotes] = useState('');

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (prefilledItem) {
      setNotes(`Interested in sampling: ${prefilledItem}`);
    }
  }, [prefilledItem]);

  // Lock background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setIsSubmitted(false);
      setErrors({});
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const timeSlots = [
    '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM',
    '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM',
    '8:00 PM', '8:30 PM', '9:00 PM', '9:30 PM',
    '10:00 PM', '10:30 PM'
  ];

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!fullName.trim()) errs.fullName = 'Please enter your name';
    if (!email.trim() || !email.includes('@')) errs.email = 'Valid email is required';
    if (!phone.trim() || phone.length < 7) errs.phone = 'Contact number is required';
    if (!date) errs.date = 'Select date';
    if (!time) errs.time = 'Select time';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
    }
  };

  const reservationSummaryText = `BLK Restaurant Table Request (Preview):
Guest: ${fullName}
Party: ${partySize} guests (${seating})
Date: ${date} at ${time}
Contact: ${phone} / ${email}
Notes: ${notes || 'None'}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(reservationSummaryText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Table Reservation Preview"
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-w-xl w-full bg-[#141615] border border-[#262928] rounded-lg p-6 sm:p-8 shadow-2xl my-8 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 text-[#AFB3AF] hover:text-[#F3F0EA] rounded-full hover:bg-white/5 transition-colors focus:outline-none"
          aria-label="Close reservation modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div className="space-y-6">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-[0.2em] text-[#B6A27E] font-medium block">
                Table Booking
              </span>
              <h3 className="text-2xl font-serif text-[#F3F0EA]">
                Reserve at BLK Abu Dhabi
              </h3>
              <p className="text-xs text-[#AFB3AF]">
                Khalifa Park, Zone 1 · Dinner & Late Dining
              </p>
            </div>

            {/* Preview notice */}
            <div className="p-3.5 rounded bg-[#0C0D0C] border border-[#B6A27E]/30 flex items-start gap-2.5 text-[11px] text-[#AFB3AF] leading-normal">
              <AlertCircle className="w-4 h-4 text-[#B6A27E] shrink-0 mt-0.5" />
              <span>
                <strong>Reservation Request Preview:</strong> This interactive form validates inputs for client review. Live integration hook available for SevenRooms or WhatsApp concierge.
              </span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label htmlFor="modal-guests" className="text-[11px] uppercase tracking-wider text-[#F3F0EA] block">
                    Guests
                  </label>
                  <select
                    id="modal-guests"
                    value={partySize}
                    onChange={(e) => setPartySize(e.target.value)}
                    className="w-full px-3 py-2 bg-[#0C0D0C] border border-[#262928] focus:border-[#B6A27E] text-xs text-[#F3F0EA] rounded-sm focus:outline-none"
                  >
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4 Guests</option>
                    <option value="5">5 Guests</option>
                    <option value="6">6 Guests</option>
                    <option value="7+">7+ Guests</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label htmlFor="modal-seating" className="text-[11px] uppercase tracking-wider text-[#F3F0EA] block">
                    Seating Area
                  </label>
                  <select
                    id="modal-seating"
                    value={seating}
                    onChange={(e) => setSeating(e.target.value)}
                    className="w-full px-3 py-2 bg-[#0C0D0C] border border-[#262928] focus:border-[#B6A27E] text-xs text-[#F3F0EA] rounded-sm focus:outline-none"
                  >
                    <option value="Main Dining Room">Main Dining Room</option>
                    <option value="Intimate Booth">Intimate Booth</option>
                    <option value="Outdoor Terrace">Outdoor Terrace</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label htmlFor="modal-date" className="text-[11px] uppercase tracking-wider text-[#F3F0EA] block">
                    Date *
                  </label>
                  <input
                    id="modal-date"
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-3 py-2 bg-[#0C0D0C] border border-[#262928] focus:border-[#B6A27E] text-xs text-[#F3F0EA] rounded-sm focus:outline-none"
                  />
                  {errors.date && <p className="text-[10px] text-red-400">{errors.date}</p>}
                </div>

                <div className="space-y-1">
                  <label htmlFor="modal-time" className="text-[11px] uppercase tracking-wider text-[#F3F0EA] block">
                    Time *
                  </label>
                  <select
                    id="modal-time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full px-3 py-2 bg-[#0C0D0C] border border-[#262928] focus:border-[#B6A27E] text-xs text-[#F3F0EA] rounded-sm focus:outline-none"
                  >
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                  {errors.time && <p className="text-[10px] text-red-400">{errors.time}</p>}
                </div>
              </div>

              <div className="space-y-1">
                <label htmlFor="modal-name" className="text-[11px] uppercase tracking-wider text-[#F3F0EA] block">
                  Full Name *
                </label>
                <input
                  id="modal-name"
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Sultan Al Suwaidi"
                  className="w-full px-3 py-2 bg-[#0C0D0C] border border-[#262928] focus:border-[#B6A27E] text-xs text-[#F3F0EA] rounded-sm focus:outline-none"
                />
                {errors.fullName && <p className="text-[10px] text-red-400">{errors.fullName}</p>}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label htmlFor="modal-email" className="text-[11px] uppercase tracking-wider text-[#F3F0EA] block">
                    Email *
                  </label>
                  <input
                    id="modal-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="guest@example.ae"
                    className="w-full px-3 py-2 bg-[#0C0D0C] border border-[#262928] focus:border-[#B6A27E] text-xs text-[#F3F0EA] rounded-sm focus:outline-none"
                  />
                  {errors.email && <p className="text-[10px] text-red-400">{errors.email}</p>}
                </div>

                <div className="space-y-1">
                  <label htmlFor="modal-phone" className="text-[11px] uppercase tracking-wider text-[#F3F0EA] block">
                    Phone / WhatsApp *
                  </label>
                  <input
                    id="modal-phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+971 50 123 4567"
                    className="w-full px-3 py-2 bg-[#0C0D0C] border border-[#262928] focus:border-[#B6A27E] text-xs text-[#F3F0EA] rounded-sm focus:outline-none"
                  />
                  {errors.phone && <p className="text-[10px] text-red-400">{errors.phone}</p>}
                </div>
              </div>

              <div className="space-y-1">
                <label htmlFor="modal-notes" className="text-[11px] uppercase tracking-wider text-[#F3F0EA] block">
                  Dietary Notes or Occasion
                </label>
                <input
                  id="modal-notes"
                  type="text"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="e.g. Birthday, window table requested..."
                  className="w-full px-3 py-2 bg-[#0C0D0C] border border-[#262928] focus:border-[#B6A27E] text-xs text-[#F3F0EA] rounded-sm focus:outline-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 text-xs uppercase tracking-[0.2em] font-semibold text-[#0C0D0C] bg-[#B6A27E] hover:bg-[#D5C7AE] rounded-sm transition-colors shadow-lg"
                >
                  Generate Simulated Booking Request
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="space-y-5 text-center py-4 animate-in fade-in">
            <div className="w-12 h-12 rounded-full bg-[#17382E] text-[#B6A27E] border border-[#B6A27E]/30 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>

            <div className="space-y-1">
              <span className="text-xs uppercase tracking-[0.2em] text-[#B6A27E] font-medium block">
                Demonstration Booking Summary
              </span>
              <h3 className="text-xl font-serif text-[#F3F0EA]">
                Request Formatted for Preview Review
              </h3>
            </div>

            <div className="text-left bg-[#0C0D0C] p-4 rounded border border-[#262928] space-y-2 text-xs font-mono text-[#AFB3AF]">
              <div className="flex justify-between border-b border-[#262928] pb-1.5">
                <span className="text-[#F3F0EA]">Guest:</span>
                <span>{fullName}</span>
              </div>
              <div className="flex justify-between border-b border-[#262928] pb-1.5">
                <span className="text-[#F3F0EA]">Party:</span>
                <span>{partySize} Guests · {seating}</span>
              </div>
              <div className="flex justify-between border-b border-[#262928] pb-1.5">
                <span className="text-[#F3F0EA]">Date & Time:</span>
                <span>{date} at {time}</span>
              </div>
              <div className="flex justify-between border-b border-[#262928] pb-1.5">
                <span className="text-[#F3F0EA]">Contact:</span>
                <span>{phone}</span>
              </div>
              {notes && (
                <div className="pt-1">
                  <span className="text-[#F3F0EA] block text-[11px]">Notes:</span>
                  <span className="text-[#B6A27E] font-sans text-xs italic">{notes}</span>
                </div>
              )}
            </div>

            <p className="text-[11px] text-[#AFB3AF] italic">
              This request was simulated for website evaluation. No live booking has been placed.
            </p>

            <div className="flex items-center justify-center gap-3 pt-2">
              <button
                type="button"
                onClick={handleCopy}
                className="px-4 py-2 text-xs uppercase tracking-wider font-medium text-[#F3F0EA] bg-[#171918] border border-[#262928] hover:border-[#B6A27E]/40 rounded-sm flex items-center gap-1.5"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-[#B6A27E]" />}
                <span>{copied ? 'Copied' : 'Copy Payload'}</span>
              </button>

              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2 text-xs uppercase tracking-wider font-semibold text-[#0C0D0C] bg-[#B6A27E] hover:bg-[#D5C7AE] rounded-sm transition-colors"
              >
                Close Preview
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
