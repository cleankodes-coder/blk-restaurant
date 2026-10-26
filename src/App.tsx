/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TheExperience } from './components/TheExperience';
import { SignatureMoments } from './components/SignatureMoments';
import { MenuSection } from './components/MenuSection';
import { GallerySection } from './components/GallerySection';
import { VenueSection } from './components/VenueSection';
import { ReservationSection } from './components/ReservationSection';
import { Footer } from './components/Footer';
import { ReservationModal } from './components/ReservationModal';
import { OrderModal } from './components/OrderModal';
import { ClientPreviewBadge } from './components/ClientPreviewBadge';

export default function App() {
  const [reservationModalOpen, setReservationModalOpen] = useState(false);
  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const [activePhotoInLightbox, setActivePhotoInLightbox] = useState<string | null>(null);
  const [prefilledReservationItem, setPrefilledReservationItem] = useState<string>('');

  const handleOpenReservation = (prefillItem = '') => {
    setPrefilledReservationItem(prefillItem);
    setReservationModalOpen(true);
  };

  const handleExploreMenu = () => {
    const menuEl = document.getElementById('menu');
    if (menuEl) {
      menuEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectPhoto = (imagePath: string) => {
    setActivePhotoInLightbox(imagePath);
    // Smooth scroll down to gallery if not nearby
    const galleryEl = document.getElementById('gallery');
    if (galleryEl) {
      galleryEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0C0D0C] text-[#F3F0EA] flex flex-col font-sans selection:bg-[#B6A27E] selection:text-[#0C0D0C]">
      {/* 1. Dark Sticky Header */}
      <Navbar
        onOpenReservation={() => handleOpenReservation()}
        onOpenOrderModal={() => setOrderModalOpen(true)}
      />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero
          onOpenReservation={() => handleOpenReservation()}
          onExploreMenu={handleExploreMenu}
        />

        {/* 3. The BLK Experience (Our Story) */}
        <TheExperience />

        {/* 4. Signature Moments (6 Genuine Food Assets Grid) */}
        <SignatureMoments onSelectPhoto={handleSelectPhoto} />

        {/* 5. Actual Digital Menu (58 Selections + Category & Search) */}
        <MenuSection
          onOpenReservationWithItem={(itemName) => handleOpenReservation(itemName)}
          onOpenOrderModal={() => setOrderModalOpen(true)}
          onSelectPhoto={handleSelectPhoto}
        />

        {/* 6. Image Gallery (All Genuine Food & Venue Assets + Lightbox) */}
        <GallerySection
          activePhotoPath={activePhotoInLightbox}
          onClearActivePhoto={() => setActivePhotoInLightbox(null)}
        />

        {/* 7. The Venue & Atmosphere (Khalifa Park, Abu Dhabi) */}
        <VenueSection
          onSelectPhoto={handleSelectPhoto}
          onOpenReservation={() => handleOpenReservation()}
        />

        {/* 8. Reservations & Contact (Front-end Form with Preview Validation) */}
        <ReservationSection initialNotes={prefilledReservationItem} />
      </main>

      {/* 9. Footer */}
      <Footer
        onOpenReservation={() => handleOpenReservation()}
        onOpenOrderModal={() => setOrderModalOpen(true)}
      />

      {/* Interactive Global Reservation Modal */}
      <ReservationModal
        isOpen={reservationModalOpen}
        onClose={() => setReservationModalOpen(false)}
        prefilledItem={prefilledReservationItem}
      />

      {/* Order Online / Deliveroo Modal */}
      <OrderModal
        isOpen={orderModalOpen}
        onClose={() => setOrderModalOpen(false)}
      />

      {/* Client Preview Verification Badge */}
      <ClientPreviewBadge />
    </div>
  );
}
