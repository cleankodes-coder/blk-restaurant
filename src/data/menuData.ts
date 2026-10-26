/**
 * Menu data derived from verified menu-reference.json (historical client reference).
 * Prices are intentionally omitted until confirmed with the restaurant.
 */

export interface MenuItem {
  id: string;
  name: string;
  category: MenuCategory;
  description: string;
  priceAED: number | null; // Omitted if null
  tag?: string;
  photoPath?: string;
  isSignature?: boolean;
}

export type MenuCategory =
  | 'Burgers'
  | 'Pasta & Mains'
  | 'Pizza'
  | 'Sliders'
  | 'Grill'
  | 'Desserts'
  | 'Mocktails'
  | 'Fresh Juices'
  | 'Coffee'
  | 'Soft Drinks';

export const MENU_CATEGORIES: MenuCategory[] = [
  'Burgers',
  'Pasta & Mains',
  'Pizza',
  'Sliders',
  'Grill',
  'Desserts',
  'Mocktails',
  'Fresh Juices',
  'Coffee',
  'Soft Drinks'
];

export const MENU_ITEMS: MenuItem[] = [
  // --- Burgers ---
  {
    id: 'b-1',
    name: 'BLK Special Burger',
    category: 'Burgers',
    description: 'Signature charcoal-seared prime beef patty, aged cheddar, caramelised onion reduction, house-crafted BLK glaze on brioche.',
    priceAED: null,
    tag: 'House Signature',
    photoPath: '/assets/food/blk-burger-closeup.jpg',
    isSignature: true
  },
  {
    id: 'b-2',
    name: 'Classic Beef',
    category: 'Burgers',
    description: 'Hand-pressed Angus beef patty, crisp iceberg, heirloom tomato, house-cured pickle, and signature burger relish.',
    priceAED: null,
    tag: 'Classic'
  },
  {
    id: 'b-3',
    name: 'Double Storm',
    category: 'Burgers',
    description: 'Double stacked prime beef patties, double smoked cheese, crispy fried shallots, and spicy pepper cream.',
    priceAED: null,
    tag: 'Double Patty',
    photoPath: '/assets/food/blk-burger-and-fries.jpg'
  },
  {
    id: 'b-4',
    name: 'Classic Chicken Burger',
    category: 'Burgers',
    description: 'Golden spiced buttermilk fried chicken breast, red cabbage slaw, herb mayonnaise, toasted butter bun.',
    priceAED: null
  },
  {
    id: 'b-5',
    name: 'The Boom',
    category: 'Burgers',
    description: 'Explosive flavour profile with melted spicy Monterey Jack, jalapeno compote, and smoky barbecue aioli.',
    priceAED: null,
    tag: 'Spicy'
  },
  {
    id: 'b-6',
    name: 'Truffle Burger',
    category: 'Burgers',
    description: 'Prime beef patty infused with wild black truffle paste, sauteed forest mushrooms, and Swiss gruyère.',
    priceAED: null,
    tag: 'Truffle Special',
    isSignature: true
  },
  {
    id: 'b-7',
    name: 'Creation Chicken Burger',
    category: 'Burgers',
    description: 'Artisanal grilled chicken cutlet with charred scallion chimichurri, melted provolone, and micro greens.',
    priceAED: null
  },
  {
    id: 'b-8',
    name: 'Creation Beef Burger',
    category: 'Burgers',
    description: 'Chef’s custom cut prime beef with balsamic braised mushrooms, garlic confit spread, and melted fontina.',
    priceAED: null
  },

  // --- Pasta & Mains ---
  {
    id: 'pm-1',
    name: 'Short Ribs',
    category: 'Pasta & Mains',
    description: 'Slow-braised beef short ribs with rich bone marrow reduction, silk potato purée, and glazed seasonal baby carrots.',
    priceAED: null,
    tag: 'Slow Braised',
    isSignature: true
  },
  {
    id: 'pm-2',
    name: 'Saffron Lobster Risotto',
    category: 'Pasta & Mains',
    description: 'Acquerello carnaroli rice simmered with Persian saffron, butter-poached lobster tail, and 24-month Parmigiano Reggiano.',
    priceAED: null,
    tag: 'Chef Select',
    isSignature: true
  },
  {
    id: 'pm-3',
    name: 'Healthy Bite',
    category: 'Pasta & Mains',
    description: 'Herb-roasted seasonal vegetables, warm quinoa, tender garden greens, and zesty citrus reduction.',
    priceAED: null,
    tag: 'Light & Green'
  },
  {
    id: 'pm-4',
    name: 'Mushroom Risotto',
    category: 'Pasta & Mains',
    description: 'Slow-stirred arborio rice with porcini, cremini, white truffle infusion, and shaved aged parmesan.',
    priceAED: null
  },
  {
    id: 'pm-5',
    name: 'Skinny Plants',
    category: 'Pasta & Mains',
    description: 'Artfully sautéed Mediterranean garden harvest with pressed virgin olive oil, garlic slivers, and fresh herbs.',
    priceAED: null
  },
  {
    id: 'pm-6',
    name: 'Funghi Pasta',
    category: 'Pasta & Mains',
    description: 'Handcrafted pasta ribbons tossed in a velvety wild mushroom velouté with fresh cracked pepper and chives.',
    priceAED: null
  },
  {
    id: 'pm-7',
    name: 'Bloom Stone',
    category: 'Pasta & Mains',
    description: 'Distinctive BLK culinary creation presenting layered textures and concentrated house herb seasoning.',
    priceAED: null
  },
  {
    id: 'pm-8',
    name: 'Spaghetti',
    category: 'Pasta & Mains',
    description: 'Al dente artisanal spaghetti prepared to preference with rich San Marzano pomodoro or garlic extra virgin olive oil.',
    priceAED: null
  },
  {
    id: 'pm-9',
    name: 'Penne Pasta',
    category: 'Pasta & Mains',
    description: 'Classic bronze-cut penne with choice of creamy white truffle parmesan sauce or spicy arrabbiata.',
    priceAED: null
  },
  {
    id: 'pm-10',
    name: 'Short Rib Fried Rice',
    category: 'Pasta & Mains',
    description: 'Wok-charred fragrant jasmine rice with shredded braised short rib, scallions, toasted sesame, and soy glaze.',
    priceAED: null,
    tag: 'Popular'
  },

  // --- Pizza ---
  {
    id: 'pz-1',
    name: 'Margherita Pizza',
    category: 'Pizza',
    description: 'Stone-baked thin crust, Italian San Marzano tomato sauce, fresh creamy fior di latte mozzarella, and torn sweet basil.',
    priceAED: null,
    tag: 'Classic'
  },
  {
    id: 'pz-2',
    name: 'Dark Forest Pizza',
    category: 'Pizza',
    description: 'Signature dark-baked crust with assorted wild forest mushrooms, truffle crema, fontina cheese, and thyme.',
    priceAED: null,
    tag: 'House Specialty',
    photoPath: '/assets/food/blk-pizza-hero.jpg',
    isSignature: true
  },
  {
    id: 'pz-3',
    name: 'Short Rib Pizza',
    category: 'Pizza',
    description: 'Blistered crust topped with tender pulled beef short rib, caramelized onions, smoked provolone, and herb drizzle.',
    priceAED: null,
    tag: 'Signature'
  },

  // --- Sliders ---
  {
    id: 'sl-1',
    name: 'Swiss Rock',
    category: 'Sliders',
    description: 'Twin prime beef sliders topped with melted Emmental Swiss cheese, mushroom duxelles, and truffle spread.',
    priceAED: null,
    tag: 'Duo'
  },
  {
    id: 'sl-2',
    name: 'Thunder',
    category: 'Sliders',
    description: 'Punchy mini burgers layered with crispy onions, melted spicy pepper cheese, and tangy house sauce.',
    priceAED: null
  },
  {
    id: 'sl-3',
    name: 'Classic Chicken',
    category: 'Sliders',
    description: 'Crisp golden chicken fillets, crisp lettuce, house pickles, and herb mayonnaise on soft toasted brioche buns.',
    priceAED: null
  },
  {
    id: 'sl-4',
    name: 'Black Stone',
    category: 'Sliders',
    description: 'BLK signature dark-infused mini brioche with seared beef, melted vintage cheddar, and black pepper aioli.',
    priceAED: null,
    tag: 'Signature'
  },

  // --- Grill ---
  {
    id: 'gr-1',
    name: 'Tenderloin Steak',
    category: 'Grill',
    description: 'Center-cut prime beef tenderloin char-grilled to order over natural wood embers, served with rosemary butter and sea salt flakes.',
    priceAED: null,
    tag: 'Prime Cut',
    isSignature: true
  },
  {
    id: 'gr-2',
    name: 'Ribeye Steak',
    category: 'Grill',
    description: 'Well-marbled prime ribeye steak flame-seared for exceptional depth of flavour, accompanied by house steak reduction.',
    priceAED: null,
    tag: 'Charcoal Grilled',
    isSignature: true
  },
  {
    id: 'gr-3',
    name: 'Lamb Rack',
    category: 'Grill',
    description: 'Herb-crusted tender lamb cutlets grilled over coals, served with mint infused pan reduction and garlic confit.',
    priceAED: null,
    tag: 'Specialty'
  },
  {
    id: 'gr-4',
    name: 'Grilled Salmon',
    category: 'Grill',
    description: 'Crispy skin Atlantic salmon fillet with lemon herb butter sauce, blistered cherry tomatoes, and tender greens.',
    priceAED: null,
    photoPath: '/assets/food/blk-plated-dish-06.jpg'
  },

  // --- Desserts ---
  {
    id: 'ds-1',
    name: 'Flora',
    category: 'Desserts',
    description: 'Delicate floral-scented cream composition paired with raspberry coulis, meringue crisps, and edible botanical petals.',
    priceAED: null
  },
  {
    id: 'ds-2',
    name: 'Rainforest',
    category: 'Desserts',
    description: 'Lush dessert creation featuring rich pistachio sponge, matcha mousse, and dark chocolate soil.',
    priceAED: null
  },
  {
    id: 'ds-3',
    name: 'Lotus Root',
    category: 'Desserts',
    description: 'Caramelized speculoos Lotus biscuit infused dessert with warm molten caramel and vanilla bean gelato.',
    priceAED: null
  },
  {
    id: 'ds-4',
    name: 'Black Moon',
    category: 'Desserts',
    description: 'Dark Belgian chocolate sphere presented dramatically with warm hot chocolate pour-over and roasted hazelnut core.',
    priceAED: null,
    tag: 'Showpiece',
    photoPath: '/assets/food/blk-dessert-presentation.jpg',
    isSignature: true
  },
  {
    id: 'ds-5',
    name: 'BLK Special Platter',
    category: 'Desserts',
    description: 'Chef’s grand degustation tasting board showcasing miniature portions of BLK’s pastry masterpieces.',
    priceAED: null,
    tag: 'For Sharing'
  },
  {
    id: 'ds-6',
    name: 'Chocolate Fondant',
    category: 'Desserts',
    description: 'Warm dark chocolate cake with rich liquid ganache center, paired with Madagascar bourbon vanilla ice cream.',
    priceAED: null
  },
  {
    id: 'ds-7',
    name: 'Fruit Pudding',
    category: 'Desserts',
    description: 'Warm steamed artisanal fruit pudding served with smooth English custard and fresh berries.',
    priceAED: null
  },

  // --- Mocktails ---
  {
    id: 'mk-1',
    name: 'Coconut Limeade',
    category: 'Mocktails',
    description: 'Chilled creamy coconut milk shaken with fresh kaffir lime juice, crushed ice, and toasted coconut rim.',
    priceAED: null,
    tag: 'Refreshing'
  },
  {
    id: 'mk-2',
    name: 'Mojitos',
    category: 'Mocktails',
    description: 'Hand-muddled fresh garden mint and Mexican lime wedges topped with sparkling soda and crushed ice. Available in Classic, Passionfruit, or Berry.',
    priceAED: null,
    tag: 'House Favourite'
  },
  {
    id: 'mk-3',
    name: 'Blue Lagoon',
    category: 'Mocktails',
    description: 'Vibrant non-alcoholic blue curaçao, fresh lemon cordial, and sparkling tonic over crystal clear ice.',
    priceAED: null
  },

  // --- Fresh Juices ---
  {
    id: 'fj-1',
    name: 'Watermelon Juice',
    category: 'Fresh Juices',
    description: 'Freshly cold-pressed sweet watermelon with a hint of fresh mint.',
    priceAED: null
  },
  {
    id: 'fj-2',
    name: 'Orange Juice',
    category: 'Fresh Juices',
    description: '100% freshly squeezed Valencia oranges, served chilled without additives.',
    priceAED: null
  },
  {
    id: 'fj-3',
    name: 'Mint Lemonade',
    category: 'Fresh Juices',
    description: 'Zesty crushed Mediterranean lemons blended with crisp garden mint and ice.',
    priceAED: null
  },

  // --- Coffee ---
  {
    id: 'cf-1',
    name: 'Espresso',
    category: 'Coffee',
    description: 'Single origin specialty coffee extract with rich golden crema and chocolate notes.',
    priceAED: null
  },
  {
    id: 'cf-2',
    name: 'Doppio',
    category: 'Coffee',
    description: 'Double shot of concentrated artisanal espresso.',
    priceAED: null
  },
  {
    id: 'cf-3',
    name: 'Cappuccino',
    category: 'Coffee',
    description: 'Equal parts rich espresso, steamed whole milk, and dense micro-foam.',
    priceAED: null
  },
  {
    id: 'cf-4',
    name: 'Americano',
    category: 'Coffee',
    description: 'Specialty espresso lengthened with pure hot mineral water.',
    priceAED: null
  },
  {
    id: 'cf-5',
    name: 'Cafe Latte',
    category: 'Coffee',
    description: 'Smooth double espresso combined with velvety steamed milk and subtle latte art.',
    priceAED: null
  },
  {
    id: 'cf-6',
    name: 'Flat White',
    category: 'Coffee',
    description: 'Double ristretto blended with thin textured micro-foam milk.',
    priceAED: null
  },
  {
    id: 'cf-7',
    name: 'Spanish Latte',
    category: 'Coffee',
    description: 'Espresso layered with steamed fresh milk and sweet condensed milk; served hot or iced.',
    priceAED: null,
    tag: 'Guest Favourite'
  },
  {
    id: 'cf-8',
    name: 'Piccolo',
    category: 'Coffee',
    description: 'Ristretto shot crowned with warm silky steamed milk in a small glass.',
    priceAED: null
  },

  // --- Soft Drinks ---
  {
    id: 'sd-1',
    name: 'Water',
    category: 'Soft Drinks',
    description: 'Premium still mineral water.',
    priceAED: null
  },
  {
    id: 'sd-2',
    name: 'Sparkling Water',
    category: 'Soft Drinks',
    description: 'Effervescent sparkling mineral water.',
    priceAED: null
  },
  {
    id: 'sd-3',
    name: 'Cola',
    category: 'Soft Drinks',
    description: 'Classic chilled cola with lemon slice and ice.',
    priceAED: null
  },
  {
    id: 'sd-4',
    name: 'Cola Light',
    category: 'Soft Drinks',
    description: 'Diet cola served with fresh citrus.',
    priceAED: null
  },
  {
    id: 'sd-5',
    name: 'Cola Zero',
    category: 'Soft Drinks',
    description: 'Zero calorie cola served chilled.',
    priceAED: null
  },
  {
    id: 'sd-6',
    name: 'Sprite',
    category: 'Soft Drinks',
    description: 'Crisp lemon-lime soda.',
    priceAED: null
  },
  {
    id: 'sd-7',
    name: 'Fanta Orange',
    category: 'Soft Drinks',
    description: 'Sparkling orange soda.',
    priceAED: null
  },
  {
    id: 'sd-8',
    name: 'Fanta Strawberry',
    category: 'Soft Drinks',
    description: 'Sweet sparkling strawberry soda.',
    priceAED: null
  }
];
