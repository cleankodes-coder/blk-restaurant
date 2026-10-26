/**
 * Centralized BLK Restaurant Brand & Venue Information
 * Verified from client asset package, menu reference, and maps data.
 */

export interface RestaurantConfig {
  brandName: string;
  tagline: string;
  subtitle: string;
  locationName: string;
  city: string;
  fullAddress: string;
  approximateLocationNote: string;
  googleMapsSearchQuery: string;
  googleMapsUrl: string;
  instagramHandle: string;
  instagramUrl: string;
  deliverooNote: string;
  deliverooUrl: string | null;
  openingHoursDisplay: string;
  phoneDisplay: string;
  phoneTel: string | null;
  whatsAppDisplay: string;
  whatsAppNumber: string | null;
  isLivePreview: boolean;
  dietaryNote: string;
}

export const defaultRestaurantConfig: RestaurantConfig = {
  brandName: 'BLK Restaurant',
  tagline: 'EVERY PLATE. AN EXPERIENCE.',
  subtitle: 'Bold flavours, considered details, and a dining atmosphere that stays with you.',
  locationName: 'Khalifa Park, Zone 1',
  city: 'Abu Dhabi, UAE',
  fullAddress: 'Khalifa Park, Zone 1, Abu Dhabi, United Arab Emirates',
  approximateLocationNote: 'Approximate location in Khalifa Park, Zone 1. Exact street & valet entrance verified prior to launch.',
  googleMapsSearchQuery: 'BLK Restaurant Khalifa Park Abu Dhabi',
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=BLK+Restaurant+Khalifa+Park+Abu+Dhabi',
  instagramHandle: '@blk.restaurant.ae',
  instagramUrl: 'https://www.instagram.com/blk.restaurant.ae/',
  deliverooNote: 'BLK Restaurant is available on Deliveroo in Abu Dhabi. Link configurable for production launch.',
  deliverooUrl: null, // intentionally not invented; configurable in preview
  openingHoursDisplay: 'Dinner & Late Dining: 12:00 PM – 12:00 AM Daily',
  phoneDisplay: 'Contact details to confirm upon launch',
  phoneTel: null,
  whatsAppDisplay: 'WhatsApp concierge to confirm',
  whatsAppNumber: null,
  isLivePreview: true,
  dietaryNote: '100% Halal Ingredients & Prime Seared Cuts'
};
