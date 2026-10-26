import React from 'react';
import { Eye, ArrowUpRight } from 'lucide-react';

interface SignatureItem {
  id: string;
  imagePath: string;
  title: string;
  category: string;
  caption: string;
  spanClass?: string;
  aspectClass?: string;
}

interface SignatureMomentsProps {
  onSelectPhoto: (imagePath: string) => void;
}

export const SignatureMoments: React.FC<SignatureMomentsProps> = ({ onSelectPhoto }) => {
  const items: SignatureItem[] = [
    {
      id: 'sm-1',
      imagePath: '/assets/food/blk-burger-closeup.jpg',
      title: 'The Artisanal Burger',
      category: 'Burgers & Embers',
      caption: 'A BLK favourite: flame-seared prime beef patty, melted aged cheese, and reduction glaze under controlled warm light',
      spanClass: 'sm:col-span-2 lg:col-span-2',
      aspectClass: 'aspect-square sm:aspect-[4/3] lg:aspect-square'
    },
    {
      id: 'sm-2',
      imagePath: '/assets/food/blk-pizza-hero.jpg',
      title: 'Stone-Oven Crust Craft',
      category: 'Artisanal Pizza',
      caption: 'A BLK favourite: blistered high-temperature crust with creamy mozzarella, reduction drizzle, and fresh herbs',
      spanClass: 'sm:col-span-1 lg:col-span-1',
      aspectClass: 'aspect-square'
    },
    {
      id: 'sm-3',
      imagePath: '/assets/food/blk-burger-and-fries.jpg',
      title: 'Burger & Rustic Cut Sides',
      category: 'Handcrafted Comfort',
      caption: 'Signature burger presentation paired with golden seasoned rustic fries on branded service cloth',
      spanClass: 'sm:col-span-1 lg:col-span-1',
      aspectClass: 'aspect-square'
    },
    {
      id: 'sm-4',
      imagePath: '/assets/food/blk-plated-dish-03.jpg',
      title: 'Crisp Entrée Composition',
      category: 'Contemporary Plating',
      caption: 'Delicate crisp culinary architecture balanced with concentrated savoury reduction',
      spanClass: 'sm:col-span-1 lg:col-span-1',
      aspectClass: 'aspect-square'
    },
    {
      id: 'sm-5',
      imagePath: '/assets/food/blk-plated-dish-05.jpg',
      title: 'Artisan Herb Plating',
      category: 'Modern Course',
      caption: 'Sophisticated plate geometry highlighting fresh micro-garnish and sauce contours',
      spanClass: 'sm:col-span-1 lg:col-span-1',
      aspectClass: 'aspect-square'
    },
    {
      id: 'sm-6',
      imagePath: '/assets/food/blk-dessert-presentation.jpg',
      title: 'The Confection Finale',
      category: 'Pastry & Dessert',
      caption: 'A BLK favourite: sculpted dark Belgian chocolate confection served under intimate dining room spotlights',
      spanClass: 'sm:col-span-2 lg:col-span-2',
      aspectClass: 'aspect-square sm:aspect-[16/9] lg:aspect-[16/10]'
    }
  ];

  return (
    <section id="signature" className="py-24 sm:py-32 bg-[#0C0D0C] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14 space-y-3">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#B6A27E] font-medium">
            <span>Culinary Highlights</span>
            <span aria-hidden="true" className="text-[#AFB3AF]/40">·</span>
            <span>Genuine Photography</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-[#F3F0EA] tracking-tight">
            Signature Moments
          </h2>
          <p className="text-sm sm:text-base text-[#AFB3AF] font-light leading-relaxed">
            Every dish photographed live from the BLK kitchen. Honest portions, authentic smoke, and meticulous presentation without stock fabrication.
          </p>
        </div>

        {/* Asymmetrical Grid of 6 Genuine Food Assets */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectPhoto(item.imagePath)}
              className={`group relative rounded-lg overflow-hidden bg-[#151716] border border-[#262928] hover:border-[#B6A27E]/60 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-black/80 ${item.spanClass || ''}`}
            >
              {/* Image Frame */}
              <div className={`w-full overflow-hidden relative ${item.aspectClass || 'aspect-square'}`}>
                <img
                  src={item.imagePath}
                  alt={item.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-95 group-hover:brightness-100"
                  loading="lazy"
                />

                {/* Permanent subtle dark gradient for legibility */}
                <div 
                  className="absolute inset-0 bg-gradient-to-t from-[#0C0D0C] via-[#0C0D0C]/40 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-85"
                  aria-hidden="true"
                />

                {/* Top Corner Badge and Expand Icon */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                  <span className="text-[11px] uppercase tracking-widest text-[#B6A27E] font-medium bg-[#0C0D0C]/80 backdrop-blur-sm px-2.5 py-1 rounded border border-white/10">
                    {item.category}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#0C0D0C]/80 backdrop-blur-sm border border-white/10 flex items-center justify-center text-[#F3F0EA] group-hover:text-[#B6A27E] group-hover:scale-110 transition-all duration-200">
                    <Eye className="w-4 h-4" />
                  </div>
                </div>

                {/* Bottom Content Area */}
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 space-y-1.5">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-lg sm:text-xl font-serif text-[#F3F0EA] group-hover:text-[#D5C7AE] transition-colors">
                      {item.title}
                    </h3>
                    <ArrowUpRight className="w-4 h-4 text-[#B6A27E] opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-200" />
                  </div>
                  <p className="text-xs text-[#AFB3AF] font-light leading-relaxed line-clamp-2">
                    {item.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
