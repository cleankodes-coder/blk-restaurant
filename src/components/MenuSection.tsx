import React, { useState, useMemo } from 'react';
import { Search, Info, ExternalLink, Calendar, Sparkles, Filter, X } from 'lucide-react';
import { MENU_ITEMS, MENU_CATEGORIES, MenuCategory, MenuItem } from '../data/menuData';

interface MenuSectionProps {
  onOpenReservationWithItem?: (itemName: string) => void;
  onOpenOrderModal: () => void;
  onSelectPhoto: (imagePath: string) => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  onOpenReservationWithItem,
  onOpenOrderModal,
  onSelectPhoto
}) => {
  const [selectedCategory, setSelectedCategory] = useState<MenuCategory | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesCategory =
        selectedCategory === 'All' || item.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === '' ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Group items by category when 'All' is selected, or display flat list when a specific category is chosen
  const groupedItems = useMemo(() => {
    if (selectedCategory !== 'All') {
      return [{ category: selectedCategory, items: filteredItems }];
    }
    const groups: { category: MenuCategory; items: MenuItem[] }[] = [];
    MENU_CATEGORIES.forEach((cat) => {
      const items = filteredItems.filter((item) => item.category === cat);
      if (items.length > 0) {
        groups.push({ category: cat, items });
      }
    });
    return groups;
  }, [selectedCategory, filteredItems]);

  return (
    <section id="menu" className="py-24 sm:py-32 bg-[#141615] relative border-t border-[#262928]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl space-y-3">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#B6A27E] font-medium">
              <span>Gastronomy Reference</span>
              <span aria-hidden="true" className="text-[#AFB3AF]/40">·</span>
              <span>58 Verified Offerings</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-[#F3F0EA] tracking-tight">
              The Digital Menu
            </h2>
            <p className="text-sm sm:text-base text-[#AFB3AF] font-light leading-relaxed">
              Curated from verified restaurant menu references. Honest culinary descriptions, artisanal flame craft, and premium ingredients.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={onOpenOrderModal}
              className="px-4 py-2.5 text-xs uppercase tracking-[0.18em] font-medium text-[#F3F0EA] bg-[#171918] hover:bg-[#222524] border border-[#262928] hover:border-[#B6A27E]/40 rounded-sm transition-colors flex items-center gap-2"
            >
              <span>Order via Deliveroo</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#B6A27E]" />
            </button>
          </div>
        </div>

        {/* Verification and Price Transparency Banner */}
        <div className="mb-10 p-4 sm:p-5 rounded-lg bg-[#0C0D0C] border border-[#262928] flex items-start gap-3.5 text-xs text-[#AFB3AF] leading-relaxed">
          <Info className="w-4 h-4 text-[#B6A27E] shrink-0 mt-0.5" />
          <div className="space-y-1">
            <p className="text-[#F3F0EA] font-medium">
              Client Preview Transparency Note:
            </p>
            <p>
              Menu item names are faithfully transcribed from authentic BLK historical menu records. 
              In accordance with high-standard hospitality practices, daily market prices and current seasonal cuts are intentionally unprinted here until finalized by the restaurant team.
            </p>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="space-y-5 mb-12">
          {/* Search Input */}
          <div className="relative max-w-md">
            <Search className="w-4 h-4 text-[#AFB3AF] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search burgers, ribs, risotto, pizzas, coffee..."
              className="w-full pl-10 pr-10 py-2.5 bg-[#0C0D0C] border border-[#262928] focus:border-[#B6A27E] text-xs text-[#F3F0EA] placeholder-[#AFB3AF]/50 rounded-sm focus:outline-none transition-colors"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#AFB3AF] hover:text-[#F3F0EA] p-1"
                aria-label="Clear search"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Category Navigation Pills / Segmented Controls */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 custom-scrollbar text-xs">
            <button
              type="button"
              onClick={() => setSelectedCategory('All')}
              className={`px-4 py-2 rounded-sm whitespace-nowrap shrink-0 uppercase tracking-widest text-[11px] font-medium transition-all duration-200 border ${
                selectedCategory === 'All'
                  ? 'bg-[#B6A27E] text-[#0C0D0C] border-[#B6A27E] font-semibold'
                  : 'bg-[#0C0D0C] text-[#AFB3AF] border-[#262928] hover:text-[#F3F0EA] hover:border-[#B6A27E]/40'
              }`}
            >
              All Selections ({MENU_ITEMS.length})
            </button>
            {MENU_CATEGORIES.map((cat) => {
              const count = MENU_ITEMS.filter((i) => i.category === cat).length;
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-sm whitespace-nowrap shrink-0 uppercase tracking-widest text-[11px] font-medium transition-all duration-200 border ${
                    isSelected
                      ? 'bg-[#B6A27E] text-[#0C0D0C] border-[#B6A27E] font-semibold'
                      : 'bg-[#0C0D0C] text-[#AFB3AF] border-[#262928] hover:text-[#F3F0EA] hover:border-[#B6A27E]/40'
                  }`}
                >
                  {cat} ({count})
                </button>
              );
            })}
          </div>
        </div>

        {/* Menu Listings by Category */}
        {groupedItems.length === 0 ? (
          <div className="text-center py-16 px-4 bg-[#0C0D0C] rounded-lg border border-[#262928] space-y-3">
            <p className="text-base text-[#F3F0EA] font-serif">No menu items match "{searchQuery}"</p>
            <p className="text-xs text-[#AFB3AF]">Try searching for "Burger", "Ribs", "Pizza", or "Steak"</p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="mt-2 px-4 py-2 text-xs uppercase tracking-widest text-[#B6A27E] border border-[#B6A27E]/30 rounded-sm hover:bg-[#B6A27E]/10"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="space-y-16">
            {groupedItems.map((group) => (
              <div key={group.category} className="space-y-6">
                {/* Category Section Header */}
                <div className="flex items-center justify-between pb-3 border-b border-[#262928]">
                  <div className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B6A27E]" aria-hidden="true" />
                    <h3 className="text-xl sm:text-2xl font-serif text-[#F3F0EA] tracking-wide">
                      {group.category}
                    </h3>
                  </div>
                  <span className="text-xs text-[#AFB3AF] uppercase tracking-widest font-mono">
                    {group.items.length} {group.items.length === 1 ? 'item' : 'items'}
                  </span>
                </div>

                {/* Grid of Dishes in Category */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {group.items.map((item) => (
                    <div
                      key={item.id}
                      className="group p-5 rounded-lg bg-[#0C0D0C] border border-[#262928] hover:border-[#B6A27E]/50 transition-all duration-300 flex flex-col justify-between space-y-4 hover:shadow-xl hover:shadow-black/60 relative"
                    >
                      {/* Optional authentic photo thumbnail if verified */}
                      {item.photoPath && (
                        <div
                          onClick={() => onSelectPhoto(item.photoPath!)}
                          className="relative aspect-[16/9] w-full rounded overflow-hidden cursor-pointer mb-1 group/img"
                        >
                          <img
                            src={item.photoPath}
                            alt={item.name}
                            className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500 filter brightness-95"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-black/30 group-hover/img:opacity-0 transition-opacity" />
                          <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-black/75 text-[10px] text-[#B6A27E] uppercase tracking-wider backdrop-blur-sm">
                            View Dish
                          </div>
                        </div>
                      )}

                      <div className="space-y-2">
                        <div className="flex items-start justify-between gap-3">
                          <h4 className="text-base sm:text-lg font-serif font-medium text-[#F3F0EA] group-hover:text-[#D5C7AE] transition-colors">
                            {item.name}
                          </h4>
                          {item.tag && (
                            <span className="text-[10px] uppercase tracking-widest text-[#B6A27E] font-medium shrink-0 px-2 py-0.5 rounded bg-[#171918] border border-[#262928]">
                              {item.tag}
                            </span>
                          )}
                        </div>

                        <p className="text-xs text-[#AFB3AF] font-light leading-relaxed">
                          {item.description}
                        </p>
                      </div>

                      {/* Footer of Card */}
                      <div className="pt-3 border-t border-[#171918] flex items-center justify-between text-xs">
                        <span className="text-[11px] text-[#AFB3AF]/60 italic font-serif">
                          Prepared to order
                        </span>

                        {onOpenReservationWithItem && (
                          <button
                            type="button"
                            onClick={() => onOpenReservationWithItem(item.name)}
                            className="text-[11px] uppercase tracking-wider font-medium text-[#B6A27E] hover:text-[#F3F0EA] transition-colors flex items-center gap-1"
                          >
                            <span>Reserve to taste</span>
                            <span aria-hidden="true">→</span>
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
