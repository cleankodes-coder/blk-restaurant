import React, { useState } from 'react';
import { Calendar, Clock, Users, Utensils, AlertCircle, CheckCircle2, MessageSquare, Copy, Check } from 'lucide-react';
import { defaultRestaurantConfig } from '../data/restaurantData';

interface ReservationSectionProps {
  initialNotes?: string;
}

export const ReservationSection: React.FC<ReservationSectionProps> = ({ initialNotes = '' }) => {
  // Form states
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
  const [notes, setNotes] = useState(initialNotes);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const timeSlots = [
    '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM',
    '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM',
    '8:00 PM', '8:30 PM', '9:00 PM', '9:30 PM',
    '10:00 PM', '10:30 PM'
  ];

  const validateForm = () => {
    const errs: Record<string, string> = {};
    if (!fullName.trim()) errs.fullName = 'Please enter your full name';
    if (!email.trim() || !email.includes('@')) errs.email = 'Please provide a valid email address';
    if (!phone.trim() || phone.length < 7) errs.phone = 'Please provide a contact phone or WhatsApp number';
    if (!date) errs.date = 'Please select a reservation date';
    if (!time) errs.time = 'Please select a dining time slot';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitted(true);
    }
  };

  const reservationSummaryText = `BLK Restaurant Reservation Request (Preview):
Guest: ${fullName}
Party: ${partySize} guests
Date: ${date} at ${time}
Seating: ${seating}
Contact: ${phone} / ${email}
Notes: ${notes || 'None'}`;

  const handleCopySummary = () => {
    navigator.clipboard.writeText(reservationSummaryText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="reservations" className="py-24 sm:py-32 bg-[#0C0D0C] relative border-t border-[#262928]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#B6A27E] font-medium">
            <span>Table Booking</span>
            <span aria-hidden="true" className="text-[#AFB3AF]/40">·</span>
            <span>Client Preview Flow</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-[#F3F0EA] tracking-tight">
            Reserve Your Experience
          </h2>
          <p className="text-sm sm:text-base text-[#AFB3AF] font-light leading-relaxed">
            Experience the culinary craft of BLK. Interactive booking request simulator for client website review.
          </p>
        </div>

        {/* Main Card */}
        <div className="max-w-3xl mx-auto rounded-lg bg-[#141615] border border-[#262928] p-6 sm:p-10 shadow-2xl shadow-black/80">
          
          {/* Preview Demonstration Warning Callout */}
          <div className="mb-8 p-4 rounded bg-[#171918] border border-[#B6A27E]/30 flex items-start gap-3.5 text-xs text-[#AFB3AF]">
            <AlertCircle className="w-4 h-4 text-[#B6A27E] shrink-0 mt-0.5" />
            <div className="space-y-1">
              <span className="text-[#F3F0EA] font-semibold block uppercase tracking-wider text-[11px]">
                Interactive Demonstration Preview:
              </span>
              <p>
                This form validates real booking input for user experience evaluation. No real table reservations or personal data are transmitted to external servers. Ready for SevenRooms, OpenTable, or WhatsApp concierge integration.
              </p>
            </div>
          </div>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Row 1: Guests & Seating */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label htmlFor="party-size" className="block text-xs uppercase tracking-widest text-[#F3F0EA] font-medium">
                    Party Size
                  </label>
                  <div className="relative">
                    <Users className="w-4 h-4 text-[#AFB3AF] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <select
                      id="party-size"
                      value={partySize}
                      onChange={(e) => setPartySize(e.target.value)}
                      className="w-full pl-10 pr-8 py-3 bg-[#0C0D0C] border border-[#262928] focus:border-[#B6A27E] text-xs text-[#F3F0EA] rounded-sm focus:outline-none appearance-none"
                    >
                      <option value="1">1 Guest (Solo Table)</option>
                      <option value="2">2 Guests (Intimate Setting)</option>
                      <option value="3">3 Guests</option>
                      <option value="4">4 Guests</option>
                      <option value="5">5 Guests</option>
                      <option value="6">6 Guests</option>
                      <option value="7">7 Guests</option>
                      <option value="8">8 Guests (Large Gathering)</option>
                      <option value="9+">9+ Guests (Private Dining Enquiry)</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="seating-pref" className="block text-xs uppercase tracking-widest text-[#F3F0EA] font-medium">
                    Seating Preference
                  </label>
                  <select
                    id="seating-pref"
                    value={seating}
                    onChange={(e) => setSeating(e.target.value)}
                    className="w-full px-3.5 py-3 bg-[#0C0D0C] border border-[#262928] focus:border-[#B6A27E] text-xs text-[#F3F0EA] rounded-sm focus:outline-none"
                  >
                    <option value="Main Dining Room">Main Dining Room (Atmospheric)</option>
                    <option value="Intimate Booth">Intimate Booth</option>
                    <option value="Outdoor Terrace">Outdoor Terrace (Weather Permitting)</option>
                    <option value="First Available">First Available</option>
                  </select>
                </div>
              </div>

              {/* Row 2: Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label htmlFor="res-date" className="block text-xs uppercase tracking-widest text-[#F3F0EA] font-medium">
                    Date
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-[#AFB3AF] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      id="res-date"
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full pl-10 pr-3.5 py-2.5 bg-[#0C0D0C] border border-[#262928] focus:border-[#B6A27E] text-xs text-[#F3F0EA] rounded-sm focus:outline-none"
                    />
                  </div>
                  {errors.date && <p className="text-[11px] text-red-400">{errors.date}</p>}
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="res-time" className="block text-xs uppercase tracking-widest text-[#F3F0EA] font-medium">
                    Time
                  </label>
                  <div className="relative">
                    <Clock className="w-4 h-4 text-[#AFB3AF] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <select
                      id="res-time"
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      className="w-full pl-10 pr-8 py-3 bg-[#0C0D0C] border border-[#262928] focus:border-[#B6A27E] text-xs text-[#F3F0EA] rounded-sm focus:outline-none"
                    >
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot}>
                          {slot}
                        </option>
                      ))}
                    </select>
                  </div>
                  {errors.time && <p className="text-[11px] text-red-400">{errors.time}</p>}
                </div>
              </div>

              {/* Row 3: Name, Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <div className="space-y-1.5">
                  <label htmlFor="guest-name" className="block text-xs uppercase tracking-widest text-[#F3F0EA] font-medium">
                    Full Name *
                  </label>
                  <input
                    id="guest-name"
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Tariq Al Mansoori"
                    className="w-full px-3.5 py-2.5 bg-[#0C0D0C] border border-[#262928] focus:border-[#B6A27E] text-xs text-[#F3F0EA] placeholder-[#AFB3AF]/40 rounded-sm focus:outline-none"
                  />
                  {errors.fullName && <p className="text-[11px] text-red-400">{errors.fullName}</p>}
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="guest-email" className="block text-xs uppercase tracking-widest text-[#F3F0EA] font-medium">
                    Email Address *
                  </label>
                  <input
                    id="guest-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="guest@example.ae"
                    className="w-full px-3.5 py-2.5 bg-[#0C0D0C] border border-[#262928] focus:border-[#B6A27E] text-xs text-[#F3F0EA] placeholder-[#AFB3AF]/40 rounded-sm focus:outline-none"
                  />
                  {errors.email && <p className="text-[11px] text-red-400">{errors.email}</p>}
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="guest-phone" className="block text-xs uppercase tracking-widest text-[#F3F0EA] font-medium">
                    Phone / WhatsApp *
                  </label>
                  <input
                    id="guest-phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+971 50 000 0000"
                    className="w-full px-3.5 py-2.5 bg-[#0C0D0C] border border-[#262928] focus:border-[#B6A27E] text-xs text-[#F3F0EA] placeholder-[#AFB3AF]/40 rounded-sm focus:outline-none"
                  />
                  {errors.phone && <p className="text-[11px] text-red-400">{errors.phone}</p>}
                </div>
              </div>

              {/* Row 4: Notes / Special Requests */}
              <div className="space-y-1.5">
                <label htmlFor="guest-notes" className="block text-xs uppercase tracking-widest text-[#F3F0EA] font-medium">
                  Special Occasion, Dietary Requirements or Pre-Selected Dishes
                </label>
                <textarea
                  id="guest-notes"
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="e.g. Birthday anniversary dinner, desire for booth seating, wishing to sample the Saffron Lobster Risotto..."
                  className="w-full px-3.5 py-2.5 bg-[#0C0D0C] border border-[#262928] focus:border-[#B6A27E] text-xs text-[#F3F0EA] placeholder-[#AFB3AF]/40 rounded-sm focus:outline-none resize-none"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 text-xs uppercase tracking-[0.25em] font-semibold text-[#0C0D0C] bg-[#B6A27E] hover:bg-[#D5C7AE] rounded-sm transition-all shadow-xl shadow-[#B6A27E]/10 hover:shadow-[#B6A27E]/25"
                >
                  Generate Simulated Reservation Request
                </button>
              </div>

            </form>
          ) : (
            /* Submission Confirmation Demonstration State */
            <div className="space-y-6 text-center py-4 animate-in fade-in duration-300">
              <div className="w-12 h-12 rounded-full bg-[#17382E] text-[#B6A27E] border border-[#B6A27E]/30 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>

              <div className="space-y-2">
                <span className="text-xs uppercase tracking-[0.2em] text-[#B6A27E] font-medium block">
                  Demonstration Booking Summary
                </span>
                <h3 className="text-2xl font-serif text-[#F3F0EA]">
                  Request Preview Formatted Successfully
                </h3>
                <p className="text-xs text-[#AFB3AF] max-w-md mx-auto leading-relaxed">
                  This simulated reservation validates all guest parameters. In production, this connects to the restaurant's live booking API or WhatsApp concierge.
                </p>
              </div>

              {/* Formatted Summary Box */}
              <div className="text-left bg-[#0C0D0C] p-5 rounded border border-[#262928] space-y-2 text-xs font-mono text-[#AFB3AF] max-w-lg mx-auto">
                <div className="flex justify-between border-b border-[#262928] pb-2">
                  <span className="text-[#F3F0EA]">Guest Name:</span>
                  <span>{fullName}</span>
                </div>
                <div className="flex justify-between border-b border-[#262928] pb-2">
                  <span className="text-[#F3F0EA]">Party Size:</span>
                  <span>{partySize} Guests ({seating})</span>
                </div>
                <div className="flex justify-between border-b border-[#262928] pb-2">
                  <span className="text-[#F3F0EA]">Date & Time:</span>
                  <span>{date} at {time}</span>
                </div>
                <div className="flex justify-between border-b border-[#262928] pb-2">
                  <span className="text-[#F3F0EA]">Contact:</span>
                  <span>{phone}</span>
                </div>
                {notes && (
                  <div className="pt-1">
                    <span className="text-[#F3F0EA] block mb-1">Notes:</span>
                    <span className="text-[#B6A27E] font-sans text-xs italic">{notes}</span>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleCopySummary}
                  className="px-4 py-2.5 text-xs uppercase tracking-wider font-medium text-[#F3F0EA] bg-[#171918] border border-[#262928] hover:border-[#B6A27E]/40 rounded-sm flex items-center gap-2"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-[#B6A27E]" />}
                  <span>{copied ? 'Copied Summary' : 'Copy Payload'}</span>
                </button>

                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="px-5 py-2.5 text-xs uppercase tracking-wider font-semibold text-[#0C0D0C] bg-[#B6A27E] hover:bg-[#D5C7AE] rounded-sm transition-colors"
                >
                  Reset Form
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
