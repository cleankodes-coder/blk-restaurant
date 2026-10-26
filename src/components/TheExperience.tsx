import React from 'react';
import { Flame, Sparkles, Compass } from 'lucide-react';

export const TheExperience: React.FC = () => {
  return (
    <section id="story" className="py-24 sm:py-32 bg-[#141615] relative overflow-hidden border-t border-b border-[#262928]">
      {/* Subtle background motif */}
      <div 
        className="absolute top-0 right-1/4 w-80 h-80 rounded-full bg-[#17382E]/15 blur-[100px] pointer-events-none"
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Authentic Photograph Left */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative aspect-[4/5] rounded-lg overflow-hidden bg-[#0C0D0C] border border-[#262928] shadow-2xl">
                <img
                  src="/assets/food/blk-plated-dish-01.jpg"
                  alt="Contemporary dining presentation at BLK Restaurant Abu Dhabi"
                  className="w-full h-full object-cover object-center filter brightness-95 contrast-105 hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                  width={512}
                  height={640}
                />
                <div 
                  className="absolute inset-0 bg-gradient-to-t from-[#0C0D0C]/80 via-transparent to-transparent pointer-events-none" 
                  aria-hidden="true"
                />
                
                {/* Quiet caption */}
                <div className="absolute bottom-4 left-4 right-4 text-xs text-[#AFB3AF]">
                  <p className="font-serif italic text-sm text-[#F3F0EA]">
                    “Every ingredient given purpose; every flame controlled.”
                  </p>
                  <p className="text-[10px] uppercase tracking-widest text-[#B6A27E] mt-1">
                    Artisanal Plating · BLK Kitchen
                  </p>
                </div>
              </div>

              {/* Offset decorative hairline frame */}
              <div 
                className="hidden sm:block absolute -bottom-3 -left-3 w-full h-full border border-[#B6A27E]/30 rounded-lg -z-10 pointer-events-none" 
                aria-hidden="true"
              />
            </div>
          </div>

          {/* Editorial Narrative Right */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#B6A27E] font-medium">
              <span>Our Philosophy</span>
              <span aria-hidden="true" className="text-[#AFB3AF]/40">·</span>
              <span>The BLK Experience</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-[#F3F0EA] tracking-tight leading-[1.15] text-balance">
              Dark cinematic dining, <br />
              <span className="italic font-normal text-[#D5C7AE]">crafted with intention.</span>
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#AFB3AF] font-light leading-relaxed">
              <p>
                At BLK Restaurant, dining is conceived as a multi-sensory retreat from the pace of Abu Dhabi. 
                Our space in Khalifa Park is intentionally designed with low-key incandescent amber lighting, 
                rich charcoal stone textures, and an unhurried atmosphere where food takes center stage.
              </p>
              <p>
                We believe that premium dining does not require ostentation. Instead, we invest our passion in the 
                charcoal grill, the heat of our stone ovens, and the careful reduction of broths and glazes. From hand-crafted 
                prime beef burgers and blistered artisan pizzas to delicate saffron risotto and slow-braised short ribs, 
                every preparation honours honest ingredients.
              </p>
            </div>

            {/* Three Pillar Points */}
            <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-[#262928]">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-[#B6A27E]">
                  <Flame className="w-4 h-4 text-[#B6A27E]" />
                  <h3 className="text-xs uppercase tracking-widest font-semibold text-[#F3F0EA]">Wood & Embers</h3>
                </div>
                <p className="text-xs text-[#AFB3AF] leading-normal">
                  Natural charcoal searing that locks in natural juices and rich smoky depth.
                </p>
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-[#B6A27E]">
                  <Sparkles className="w-4 h-4 text-[#B6A27E]" />
                  <h3 className="text-xs uppercase tracking-widest font-semibold text-[#F3F0EA]">Considered Detail</h3>
                </div>
                <p className="text-xs text-[#AFB3AF] leading-normal">
                  Custom ceramic plateware, balance of acid and rich fats, and intentional garnish.
                </p>
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-[#B6A27E]">
                  <Compass className="w-4 h-4 text-[#B6A27E]" />
                  <h3 className="text-xs uppercase tracking-widest font-semibold text-[#F3F0EA]">Abu Dhabi Setting</h3>
                </div>
                <p className="text-xs text-[#AFB3AF] leading-normal">
                  Khalifa Park dining sanctuary welcoming intimate gatherings, friends, and family.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
