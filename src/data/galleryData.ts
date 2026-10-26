/**
 * Verified Authentic Photography Assets for BLK Restaurant
 * Only genuine assets extracted from user bundle are included.
 */

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Plates & Craft' | 'Atmosphere & Venue';
  imagePath: string;
  aspectRatio: string;
  width: number;
  height: number;
  caption: string;
  detailedNote: string;
  isFeatured?: boolean;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'The BLK Feast Table',
    category: 'Plates & Craft',
    imagePath: '/assets/food/blk-food-spread-hero.jpg',
    aspectRatio: '3:4',
    width: 3072,
    height: 4080,
    caption: 'Overhead banquet spread showcasing artisanal burgers, stone-baked pizzas, and signature sides',
    detailedNote: 'High-resolution authentic overhead spread captured with the official BLK uniform and monogram brand.',
    isFeatured: true
  },
  {
    id: 'gal-2',
    title: 'Artisanal Burger Close-Up',
    category: 'Plates & Craft',
    imagePath: '/assets/food/blk-burger-closeup.jpg',
    aspectRatio: '1:1',
    width: 640,
    height: 640,
    caption: 'Prime seared beef patty, melted aged cheese, and caramelised glaze under warm cinematic lighting',
    detailedNote: 'Captured under BLK’s signature controlled warm amber lighting.'
  },
  {
    id: 'gal-3',
    title: 'Stone-Baked Signature Pizza',
    category: 'Plates & Craft',
    imagePath: '/assets/food/blk-pizza-hero.jpg',
    aspectRatio: '1:1',
    width: 640,
    height: 640,
    caption: 'Blistered crust pizza with fresh burrata, balsamic reduction, and fresh garden basil',
    detailedNote: 'Artisan pizza prepared in traditional high-temperature stone ovens.'
  },
  {
    id: 'gal-4',
    title: 'Prime Burger & Rustic Cut Fries',
    category: 'Plates & Craft',
    imagePath: '/assets/food/blk-burger-and-fries.jpg',
    aspectRatio: '1:1',
    width: 622,
    height: 640,
    caption: 'Signature beef burger served alongside golden seasoned rustic skin-on fries',
    detailedNote: 'A guest favourite, served with signature house dipping relishes.'
  },
  {
    id: 'gal-5',
    title: 'Contemporary Plated Composition',
    category: 'Plates & Craft',
    imagePath: '/assets/food/blk-plated-dish-01.jpg',
    aspectRatio: '4:5',
    width: 512,
    height: 640,
    caption: 'Modern culinary plating featuring contrasting textures and reduction swirls',
    detailedNote: 'Fine-dining presentation on textured dark slate ceramic tableware.'
  },
  {
    id: 'gal-6',
    title: 'Charcoal Skewer Presentation',
    category: 'Plates & Craft',
    imagePath: '/assets/food/blk-plated-dish-02.jpg',
    aspectRatio: '4:5',
    width: 512,
    height: 640,
    caption: 'Marinated tender skewers flame-kissed over natural charcoal embers',
    detailedNote: 'Aromatic smoky skewers garnished with micro herbs and savory pan glaze.'
  },
  {
    id: 'gal-7',
    title: 'Crisp Culinary Entrée',
    category: 'Plates & Craft',
    imagePath: '/assets/food/blk-plated-dish-03.jpg',
    aspectRatio: '1:1',
    width: 640,
    height: 640,
    caption: 'Artfully plated crisp entrée accented with rich botanical sauce reduction',
    detailedNote: 'Showcasing the precision plating standards maintained in the BLK kitchen.'
  },
  {
    id: 'gal-8',
    title: 'Artisan Skewer Artistry',
    category: 'Plates & Craft',
    imagePath: '/assets/food/blk-plated-dish-04.jpg',
    aspectRatio: '1:1',
    width: 640,
    height: 640,
    caption: 'Carefully arranged skewers seasoned with house spice rubs',
    detailedNote: 'Balanced savory skewers plated on matte charcoal ceramic.'
  },
  {
    id: 'gal-9',
    title: 'Gourmet Course with Crisp Garnish',
    category: 'Plates & Craft',
    imagePath: '/assets/food/blk-plated-dish-05.jpg',
    aspectRatio: '1:1',
    width: 640,
    height: 640,
    caption: 'Delicate crisp garnish crowning an exquisite contemporary main course',
    detailedNote: 'Layered textures highlighting culinary balance and seasonal freshness.'
  },
  {
    id: 'gal-10',
    title: 'Seared Catch & Garden Sides',
    category: 'Plates & Craft',
    imagePath: '/assets/food/blk-plated-dish-06.jpg',
    aspectRatio: '1:1',
    width: 640,
    height: 640,
    caption: 'Pan-seared seafood fillet served alongside vibrant garden vegetables',
    detailedNote: 'Fresh Mediterranean-inspired preparation with citrus herb dressing.'
  },
  {
    id: 'gal-11',
    title: 'Artisanal Dessert Presentation',
    category: 'Plates & Craft',
    imagePath: '/assets/food/blk-dessert-presentation.jpg',
    aspectRatio: '9:16',
    width: 361,
    height: 640,
    caption: 'Dramatic dessert composition with sculpted dark chocolate and confections',
    detailedNote: 'A decadent finale served under intimate warm restaurant spotlights.'
  },
  {
    id: 'gal-12',
    title: 'Intimate Table Setting',
    category: 'Plates & Craft',
    imagePath: '/assets/food/blk-table-plated-dish.jpg',
    aspectRatio: '3:4',
    width: 253,
    height: 336,
    caption: 'Plated delicacy set against the dark stone table textures of the dining room',
    detailedNote: 'Reflecting the quiet, mood-lit atmosphere of an evening at BLK.'
  },
  {
    id: 'gal-13',
    title: 'Restaurant Facade at Twilight',
    category: 'Atmosphere & Venue',
    imagePath: '/assets/venue/blk-exterior-evening.jpg',
    aspectRatio: '9:16',
    width: 408,
    height: 725,
    caption: 'Exterior architectural signage illuminated against the Abu Dhabi evening sky',
    detailedNote: 'The warm glow of the BLK facade welcoming dinner guests in Khalifa Park.'
  },
  {
    id: 'gal-14',
    title: 'Monolithic Logo Wall',
    category: 'Atmosphere & Venue',
    imagePath: '/assets/venue/blk-logo-wall.jpg',
    aspectRatio: '9:16',
    width: 189,
    height: 336,
    caption: 'Textured charcoal feature wall bearing the sculpted BLK brand identity',
    detailedNote: 'The signature photo backdrop inside the restaurant lounge.'
  },
  {
    id: 'gal-15',
    title: 'Interior Ambience & Pendant Glow',
    category: 'Atmosphere & Venue',
    imagePath: '/assets/venue/blk-sign-interior-01.jpg',
    aspectRatio: '9:16',
    width: 320,
    height: 569,
    caption: 'Suspended warm filament pendants highlighting textured dark brick and interior branding',
    detailedNote: 'Cinematic low-light dining ambiance designed for memorable evenings.'
  },
  {
    id: 'gal-16',
    title: 'Daylight Architectural Entrance',
    category: 'Atmosphere & Venue',
    imagePath: '/assets/venue/blk-exterior-day.jpg',
    aspectRatio: '2:3',
    width: 221,
    height: 336,
    caption: 'Clean contemporary lines of the restaurant entrance in Khalifa Park',
    detailedNote: 'Daytime perspective showing the architectural canopy and entrance pavilion.'
  },
  {
    id: 'gal-17',
    title: 'Arrival Stairwell & Feature Lighting',
    category: 'Atmosphere & Venue',
    imagePath: '/assets/venue/blk-entry-interior.jpg',
    aspectRatio: '9:16',
    width: 189,
    height: 336,
    caption: 'Entrance vestibule staircase leading guests up into the dining hall',
    detailedNote: 'Dramatic transition from the bustling street into the intimate dark dining room.'
  }
];
