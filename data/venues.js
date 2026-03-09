// ===== Kalyan Mantap — Mock Data =====
// OYO-style: Venues have halls, add-ons are separate picks

export const cities = [
  'Hyderabad', 'Bangalore', 'Chennai', 'Coimbatore', 'Mysore', 'Vizag', 'Kochi', 'Madurai'
];

export const venues = [
  {
    id: 'v1',
    name: 'Sri Lakshmi Convention Hall',
    city: 'Hyderabad',
    area: 'Banjara Hills',
    address: 'Road No. 12, Banjara Hills, Hyderabad',
    rating: 4.8,
    reviews: 234,
    vegOnly: false,
    amenities: ['AC', 'Parking', 'Valet', 'Bridal Room', 'Generator', 'DJ Setup'],
    images: [
      'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800',
      'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800',
      'https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800',
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800',
    ],
    description: 'A grand convention hall in the heart of Banjara Hills, known for opulent interiors and seamless wedding execution. Trusted by 500+ families.',
    featured: true,
    halls: [
      { id: 'h1a', name: 'Padmavathi Hall', capacity: 300, price: 120000, hours: 8, type: 'AC Indoor', image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=600' },
      { id: 'h1b', name: 'Annapurna Ballroom', capacity: 600, price: 220000, hours: 12, type: 'AC Indoor', image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600' },
      { id: 'h1c', name: 'Full Venue + Lawn', capacity: 1200, price: 380000, hours: 24, type: 'Indoor + Outdoor', image: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=600' },
    ],
    availability: generateAvailability(),
    reviewsList: [
      { name: 'Priya & Rahul', date: '2024-12-15', rating: 5, comment: 'The Annapurna Ballroom was stunning. Food from the Hyderabadi caterer was 10/10.' },
      { name: 'Sneha & Arun', date: '2024-11-20', rating: 4, comment: 'Great hall, smooth coordination. Parking could be closer.' },
    ]
  },
  {
    id: 'v2',
    name: 'Vasantha Mahal Gardens',
    city: 'Bangalore',
    area: 'Whitefield',
    address: 'Whitefield Main Road, Bangalore',
    rating: 4.6,
    reviews: 189,
    vegOnly: false,
    amenities: ['Parking', 'Lawn', 'Pool', 'Bridal Room', 'Generator'],
    images: [
      'https://images.unsplash.com/photo-1510076857177-7470076d4098?w=800',
      'https://images.unsplash.com/photo-1507504031003-b417219a0fde?w=800',
      'https://images.unsplash.com/photo-1478146059778-26028b07395a?w=800',
      'https://images.unsplash.com/photo-1529636798458-92182e662485?w=800',
    ],
    description: 'A lush green garden venue in Whitefield. The open-air mandap by the lake is an Instagram favorite among Bangalore couples.',
    featured: true,
    halls: [
      { id: 'h2a', name: 'Garden Mandap', capacity: 200, price: 85000, hours: 6, type: 'Open Air', image: 'https://images.unsplash.com/photo-1510076857177-7470076d4098?w=600' },
      { id: 'h2b', name: 'Lakeside Banquet', capacity: 500, price: 175000, hours: 12, type: 'AC Indoor', image: 'https://images.unsplash.com/photo-1507504031003-b417219a0fde?w=600' },
      { id: 'h2c', name: 'Full Resort', capacity: 800, price: 300000, hours: 24, type: 'Indoor + Outdoor', image: 'https://images.unsplash.com/photo-1478146059778-26028b07395a?w=600' },
    ],
    availability: generateAvailability(),
    reviewsList: [
      { name: 'Kavitha & Suresh', date: '2024-11-28', rating: 5, comment: 'The lakeside setting at sunset was pure magic!' },
      { name: 'Meera & Karthik', date: '2024-10-12', rating: 4, comment: 'Beautiful venue, loved the garden mandap setup.' },
    ]
  },
  {
    id: 'v3',
    name: 'Arunachala Convention Centre',
    city: 'Chennai',
    area: 'ECR',
    address: 'East Coast Road, Neelankarai, Chennai',
    rating: 4.5,
    reviews: 201,
    vegOnly: false,
    amenities: ['AC', 'Parking', 'Lawn', 'Generator', 'DJ Setup', 'Bridal Room'],
    images: [
      'https://images.unsplash.com/photo-1507504031003-b417219a0fde?w=800',
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800',
      'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800',
      'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800',
    ],
    description: 'A beachfront convention hall along ECR. Sea-facing lawns and modern interiors perfect for Tamil weddings & receptions.',
    featured: false,
    halls: [
      { id: 'h3a', name: 'Marina Hall', capacity: 400, price: 95000, hours: 8, type: 'AC Indoor', image: 'https://images.unsplash.com/photo-1507504031003-b417219a0fde?w=600' },
      { id: 'h3b', name: 'Beach Lawn + Hall', capacity: 700, price: 180000, hours: 12, type: 'Indoor + Outdoor', image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600' },
      { id: 'h3c', name: 'Full Venue', capacity: 1000, price: 280000, hours: 24, type: 'Indoor + Outdoor', image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=600' },
    ],
    availability: generateAvailability(),
    reviewsList: [
      { name: 'Deepika & Aravind', date: '2024-11-15', rating: 5, comment: 'Our beach wedding was a dream. Filter coffee counter was a big hit!' },
    ]
  },
  {
    id: 'v4',
    name: 'Nandi Hills Resort',
    city: 'Mysore',
    area: 'Chamundi Hill Road',
    address: 'Near Chamundi Temple, Mysore',
    rating: 4.9,
    reviews: 156,
    vegOnly: true,
    amenities: ['Parking', 'Lawn', 'Palace View', 'Bridal Room', 'Generator'],
    images: [
      'https://images.unsplash.com/photo-1583037189850-1921ae7c6c22?w=800',
      'https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=800',
      'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800',
      'https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800',
    ],
    description: 'A heritage resort near Chamundi Temple with Mysore Palace views. Ideal for traditional Kannada weddings with royal ambience.',
    featured: true,
    halls: [
      { id: 'h4a', name: 'Courtyard', capacity: 250, price: 110000, hours: 8, type: 'Open Air', image: 'https://images.unsplash.com/photo-1583037189850-1921ae7c6c22?w=600' },
      { id: 'h4b', name: 'Durbar Hall', capacity: 450, price: 200000, hours: 12, type: 'AC Indoor', image: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=600' },
      { id: 'h4c', name: 'Full Estate', capacity: 600, price: 340000, hours: 24, type: 'Indoor + Outdoor', image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600' },
    ],
    availability: generateAvailability(),
    reviewsList: [
      { name: 'Ritu & Manish', date: '2024-11-10', rating: 5, comment: 'A fairy tale wedding with Chamundi Temple backdrop!' },
    ]
  },
  {
    id: 'v5',
    name: 'Kongu Thirumana Mahal',
    city: 'Coimbatore',
    area: 'RS Puram',
    address: 'Avanashi Road, RS Puram, Coimbatore',
    rating: 4.4,
    reviews: 167,
    vegOnly: true,
    amenities: ['AC', 'Parking', 'Generator', 'Kitchen', 'Bridal Room'],
    images: [
      'https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?w=800',
      'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800',
      'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=800',
      'https://images.unsplash.com/photo-1510076857177-7470076d4098?w=800',
    ],
    description: 'A well-known marriage hall in RS Puram trusted by Kongu families. Clean, spacious, and affordable with on-site kitchen.',
    featured: false,
    halls: [
      { id: 'h5a', name: 'Main Hall', capacity: 500, price: 65000, hours: 8, type: 'AC Indoor', image: 'https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?w=600' },
      { id: 'h5b', name: 'Hall + Dining', capacity: 800, price: 110000, hours: 12, type: 'AC Indoor', image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600' },
    ],
    availability: generateAvailability(),
    reviewsList: [
      { name: 'Preethi & Senthil', date: '2024-10-22', rating: 4, comment: 'Great value. Clean venue and perfect for our traditional Kongu wedding.' },
    ]
  },
  {
    id: 'v6',
    name: 'Sagarika Beach Resort',
    city: 'Vizag',
    area: 'RK Beach',
    address: 'Beach Road, Visakhapatnam',
    rating: 4.7,
    reviews: 143,
    vegOnly: false,
    amenities: ['AC', 'Parking', 'Beach Access', 'Pool', 'Generator', 'DJ Setup'],
    images: [
      'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800',
      'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=800',
      'https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800',
      'https://images.unsplash.com/photo-1478146059778-26028b07395a?w=800',
    ],
    description: 'A premium beachfront resort on RK Beach. Perfect for Telugu pelli (wedding) celebrations with sea breeze and sunset views.',
    featured: true,
    halls: [
      { id: 'h6a', name: 'Sea View Hall', capacity: 350, price: 100000, hours: 8, type: 'AC Indoor', image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=600' },
      { id: 'h6b', name: 'Beach Lawn + Ballroom', capacity: 600, price: 195000, hours: 14, type: 'Indoor + Outdoor', image: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=600' },
      { id: 'h6c', name: 'Full Resort', capacity: 1000, price: 350000, hours: 24, type: 'Indoor + Outdoor', image: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=600' },
    ],
    availability: generateAvailability(),
    reviewsList: [
      { name: 'Swathi & Venkat', date: '2024-12-01', rating: 5, comment: 'Sunset pelli was breathtaking. The biryani counter was legendary!' },
    ]
  },
  {
    id: 'v7',
    name: 'Guruvayur Kalyana Mandapam',
    city: 'Kochi',
    area: 'Edappally',
    address: 'NH 66, Edappally, Kochi',
    rating: 4.6,
    reviews: 178,
    vegOnly: true,
    amenities: ['AC', 'Parking', 'Generator', 'Kitchen', 'Bridal Room', 'Temple Access'],
    images: [
      'https://images.unsplash.com/photo-1510076857177-7470076d4098?w=800',
      'https://images.unsplash.com/photo-1529636798458-92182e662485?w=800',
      'https://images.unsplash.com/photo-1507504031003-b417219a0fde?w=800',
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800',
    ],
    description: 'Traditional Kerala-style kalyana mandapam with temple architecture. Popular for Nair and Menon family weddings.',
    featured: false,
    halls: [
      { id: 'h7a', name: 'Mandapam Hall', capacity: 300, price: 75000, hours: 8, type: 'AC Indoor', image: 'https://images.unsplash.com/photo-1510076857177-7470076d4098?w=600' },
      { id: 'h7b', name: 'Full Mandapam + Garden', capacity: 500, price: 140000, hours: 14, type: 'Indoor + Outdoor', image: 'https://images.unsplash.com/photo-1529636798458-92182e662485?w=600' },
    ],
    availability: generateAvailability(),
    reviewsList: [
      { name: 'Anjali & Anil', date: '2024-10-05', rating: 5, comment: 'Authentic Kerala wedding setup. The Sadya catering was extraordinary.' },
    ]
  },
  {
    id: 'v8',
    name: 'Meenakshi Marriage Palace',
    city: 'Madurai',
    area: 'Anna Nagar',
    address: 'Bypass Road, Anna Nagar, Madurai',
    rating: 4.3,
    reviews: 198,
    vegOnly: false,
    amenities: ['AC', 'Parking', 'Generator', 'Kitchen', 'DJ Setup'],
    images: [
      'https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?w=800',
      'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800',
      'https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=800',
      'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800',
    ],
    description: 'A spacious marriage palace near Meenakshi Temple. Known for affordable pricing and handling large-scale Tamil weddings with 1000+ guests.',
    featured: false,
    halls: [
      { id: 'h8a', name: 'Meenakshi Hall', capacity: 500, price: 55000, hours: 8, type: 'AC Indoor', image: 'https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?w=600' },
      { id: 'h8b', name: 'Grand Hall + Dining', capacity: 1000, price: 95000, hours: 12, type: 'AC Indoor', image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600' },
      { id: 'h8c', name: 'Full Palace', capacity: 1500, price: 150000, hours: 24, type: 'Indoor + Outdoor', image: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=600' },
    ],
    availability: generateAvailability(),
    reviewsList: [
      { name: 'Geetha & Murugan', date: '2024-09-15', rating: 4, comment: 'Handled our 1200 guest wedding smoothly. Great value for Madurai!' },
    ]
  }
];

// ===== ADD-ONS PER REGION =====
// These appear based on the venue's city

export const decorOptions = {
  Hyderabad: [
    { id: 'd-hyd-1', name: 'Traditional Telugu', price: 75000, description: 'Marigold mandap, banana leaf entrance, traditional kolam rangoli', includes: ['Mandap Decor', 'Entrance Arch', 'Stage Flowers', '50 Table Pieces', 'Kolam Art'] },
    { id: 'd-hyd-2', name: 'Royal Nizam', price: 135000, description: 'Opulent drapes, LED panels, chandelier rentals, fog entry', includes: ['Designer Stage', 'LED Backdrop', 'Drape Corridors', 'Fog Machine Entry', 'Photo Booth', '100 Table Pieces'] },
    { id: 'd-hyd-3', name: 'Modern Minimal', price: 95000, description: 'Clean whites, statement florals, geometric arches', includes: ['Minimal Stage', 'Geometric Arch', 'White Drapes', 'Spotlight Setup', '60 Table Pieces'] },
  ],
  Bangalore: [
    { id: 'd-blr-1', name: 'Garden Fresh', price: 65000, description: 'Natural flowers, fairy lights, rustic wooden accents', includes: ['Floral Mandap', 'Fairy Light Canopy', 'Wooden Signs', '40 Table Arrangements'] },
    { id: 'd-blr-2', name: 'Rustic Elegance', price: 110000, description: 'Wooden arches, hanging florals, vintage elements', includes: ['Designer Mandap', 'Hanging Installations', 'Photo Corner', 'Aisle Decor', '80 Table Pieces'] },
    { id: 'd-blr-3', name: 'Grand Floral', price: 160000, description: 'Premium imported flowers, bespoke installations', includes: ['Bespoke Mandap', 'Full Venue Theming', 'Floral Ceiling', 'LED Pathway', '120 Table Pieces'] },
  ],
  Chennai: [
    { id: 'd-chn-1', name: 'Traditional Tamil', price: 55000, description: 'Banana leaf styling, mango leaf torans, brass lamps', includes: ['Traditional Mandap', 'Mango Leaf Entrance', 'Brass Lamp Decor', '40 Table Pieces'] },
    { id: 'd-chn-2', name: 'Temple Gold', price: 100000, description: 'Gold-themed decor inspired by Dravidian temple architecture', includes: ['Gold Mandap', 'Temple Pillar Props', 'LED Stage Backdrop', 'Entrance Gopuram', '70 Table Pieces'] },
    { id: 'd-chn-3', name: 'Coastal Dream', price: 85000, description: 'Beach-inspired decor with shells, pastels, and fairy lights', includes: ['Beach Mandap', 'Shell Art', 'Pastel Drapes', 'Tiki Torches', '50 Table Pieces'] },
  ],
  Mysore: [
    { id: 'd-mys-1', name: 'Royal Mysore', price: 90000, description: 'Palace-inspired decor with vintage Mysore silk elements', includes: ['Royal Mandap', 'Silk Drapes', 'Palace Lighting', 'Vintage Props', '60 Table Pieces'] },
    { id: 'd-mys-2', name: 'Traditional Kannada', price: 60000, description: 'Simple elegant decor with jasmine and marigold', includes: ['Floral Mandap', 'Jasmine Strings', 'Entrance Decor', '40 Table Pieces'] },
  ],
  Coimbatore: [
    { id: 'd-cbe-1', name: 'Kongu Traditional', price: 45000, description: 'Traditional Kongu Nadu wedding decor', includes: ['Simple Mandap', 'Mango Leaf Torans', 'Brass Accents', '30 Table Pieces'] },
    { id: 'd-cbe-2', name: 'Modern South', price: 80000, description: 'Contemporary South Indian with floral focus', includes: ['Designer Mandap', 'Floral Installations', 'LED Mood Lighting', '50 Table Pieces'] },
  ],
  Vizag: [
    { id: 'd-viz-1', name: 'Telugu Traditional', price: 55000, description: 'Classic Telugu pelli pandiri with banana stems and mango leaves', includes: ['Pandiri Mandap', 'Banana Stem Decor', 'Entrance Arch', '40 Table Pieces'] },
    { id: 'd-viz-2', name: 'Beach Boho', price: 95000, description: 'Beachside bohemian decor with macrame and drift wood', includes: ['Boho Mandap', 'Macrame Backdrop', 'Lantern Path', 'Driftwood Props', '60 Table Pieces'] },
  ],
  Kochi: [
    { id: 'd-kch-1', name: 'Kerala Traditional', price: 50000, description: 'Nilavilakku, banana leaf, and jasmine themed decor', includes: ['Traditional Mandap', 'Nilavilakku Setup', 'Banana Leaf Entrance', '30 Table Pieces'] },
    { id: 'd-kch-2', name: 'Backwater Elegance', price: 90000, description: 'Kerala backwater inspired with brass and greenery', includes: ['Elegant Mandap', 'Brass Uruli Decor', 'Tropical Greenery', 'Hanging Lamps', '50 Table Pieces'] },
  ],
  Madurai: [
    { id: 'd-mdu-1', name: 'Temple Town Classic', price: 40000, description: 'Simple traditional decor inspired by Meenakshi temple style', includes: ['Classic Mandap', 'Flower Kolam', 'Brass Lamps', '30 Table Pieces'] },
    { id: 'd-mdu-2', name: 'Grand Tamil', price: 75000, description: 'Large scale traditional Tamil wedding decor', includes: ['Grand Mandap', 'Gopuram Entrance', 'LED Stage', 'Flower Walls', '60 Table Pieces'] },
  ],
};

export const cateringOptions = {
  Hyderabad: [
    { id: 'c-hyd-1', name: 'Hyderabadi Daawat', price: 750, priceType: 'per plate', minPlates: 200, type: 'Veg + Non-Veg', highlights: ['Dum Biryani', 'Haleem', 'Double Ka Meetha', 'Live Chaat Counter'] },
    { id: 'c-hyd-2', name: 'Andhra Bhojanam', price: 550, priceType: 'per plate', minPlates: 150, type: 'Pure Veg', highlights: ['Pesarattu', 'Pulihora', 'Gutti Vankaya', 'Bobbatlu', 'Buttermilk'] },
    { id: 'c-hyd-3', name: 'Premium Multi-Cuisine', price: 1100, priceType: 'per plate', minPlates: 300, type: 'Multi-Cuisine', highlights: ['Biryani Counter', 'Pasta Station', 'Sushi Bar', 'Live Grills', 'Dessert Table'] },
  ],
  Bangalore: [
    { id: 'c-blr-1', name: 'Karnataka Oota', price: 500, priceType: 'per plate', minPlates: 150, type: 'Pure Veg', highlights: ['Bisi Bele Bath', 'Ragi Mudde', 'Mysore Pak', 'Filter Coffee'] },
    { id: 'c-blr-2', name: 'Garden City Feast', price: 800, priceType: 'per plate', minPlates: 200, type: 'Veg + Non-Veg', highlights: ['South Indian Spread', 'Live Dosa Station', 'BBQ Counter', 'Ice Cream Bar'] },
    { id: 'c-blr-3', name: 'IT City Premium', price: 1200, priceType: 'per plate', minPlates: 250, type: 'International', highlights: ['Asian Station', 'Mediterranean', 'Live Pasta', 'Molecular Desserts'] },
  ],
  Chennai: [
    { id: 'c-chn-1', name: 'Chettinad Virundhu', price: 600, priceType: 'per plate', minPlates: 200, type: 'Veg + Non-Veg', highlights: ['Chettinad Chicken', 'Appam & Stew', 'Payasam', 'Filter Coffee', 'Jigarthanda'] },
    { id: 'c-chn-2', name: 'Tamil Saapadu', price: 450, priceType: 'per plate', minPlates: 150, type: 'Pure Veg', highlights: ['Sambar Rice', 'Varieties Rice', 'Vadai', 'Payasam', 'Paneer Specials'] },
    { id: 'c-chn-3', name: 'ECR Premium Spread', price: 950, priceType: 'per plate', minPlates: 250, type: 'Multi-Cuisine', highlights: ['Seafood Counter', 'Live Dosa', 'Chinese', 'Dessert Buffet'] },
  ],
  Mysore: [
    { id: 'c-mys-1', name: 'Mysore Palace Feast', price: 650, priceType: 'per plate', minPlates: 200, type: 'Pure Veg', highlights: ['Mysore Masala Dosa', 'Bisi Bele Bath', 'Mysore Pak', 'Churmuri'] },
    { id: 'c-mys-2', name: 'Royal Karnataka', price: 900, priceType: 'per plate', minPlates: 250, type: 'Veg + Non-Veg', highlights: ['Ragi Mudde', 'Nati Chicken', 'Holige', 'Live Counters'] },
  ],
  Coimbatore: [
    { id: 'c-cbe-1', name: 'Kongu Samayal', price: 400, priceType: 'per plate', minPlates: 150, type: 'Pure Veg', highlights: ['Kongu Special Kozhambu', 'Thengai Burfi', 'Paruppu Urundai', 'Filter Coffee'] },
    { id: 'c-cbe-2', name: 'South Indian Grand', price: 700, priceType: 'per plate', minPlates: 200, type: 'Veg + Non-Veg', highlights: ['Biryani', 'Panneer Specials', 'Live Counters', 'Sweets Table'] },
  ],
  Vizag: [
    { id: 'c-viz-1', name: 'Andhra Bhojana Priya', price: 550, priceType: 'per plate', minPlates: 150, type: 'Veg + Non-Veg', highlights: ['Andhra Biryani', 'Gongura Chicken', 'Pesarattu', 'Pootharekulu'] },
    { id: 'c-viz-2', name: 'Coastal Feast', price: 850, priceType: 'per plate', minPlates: 200, type: 'Multi-Cuisine', highlights: ['Seafood Platter', 'Bamboo Chicken', 'Live Grills', 'Dessert Bar'] },
  ],
  Kochi: [
    { id: 'c-kch-1', name: 'Kerala Sadya', price: 500, priceType: 'per plate', minPlates: 150, type: 'Pure Veg', highlights: ['Full Sadya (28 items)', 'Payasam Trio', 'Banana Leaf Service', 'Chaaya'] },
    { id: 'c-kch-2', name: 'Malabar Feast', price: 800, priceType: 'per plate', minPlates: 200, type: 'Veg + Non-Veg', highlights: ['Malabar Biryani', 'Fish Curry', 'Appam', 'Pathiri', 'Sulaimani Tea'] },
  ],
  Madurai: [
    { id: 'c-mdu-1', name: 'Madurai Mess Style', price: 350, priceType: 'per plate', minPlates: 150, type: 'Veg + Non-Veg', highlights: ['Madurai Mutton', 'Kari Dosa', 'Jigarthanda', 'Banana Leaf Meals'] },
    { id: 'c-mdu-2', name: 'Temple City Grand', price: 600, priceType: 'per plate', minPlates: 200, type: 'Multi-Cuisine', highlights: ['South Indian Spread', 'North Indian', 'Chinese Corner', 'Sweets Counter'] },
  ],
};

export const photographyOptions = {
  Hyderabad: [
    { id: 'ph-hyd-1', name: 'Essential Coverage', price: 45000, team: '1 Photographer', deliverables: '300+ Photos, Online Gallery', includes: ['6-hour coverage', 'Candid + Traditional', 'Digital Delivery'] },
    { id: 'ph-hyd-2', name: 'Premium Studio', price: 95000, team: '2 Photographers + 1 Videographer', deliverables: '800+ Photos, Wedding Film', includes: ['Full Day', 'Pre-wedding Shoot', 'Cinematic Film', 'Drone Shots', 'Photo Album (30 pages)'] },
    { id: 'ph-hyd-3', name: 'Cinematic Package', price: 175000, team: '3 Photographers + 2 Videographers + Drone', deliverables: '1500+ Photos, Feature Film', includes: ['Multi-day Coverage', '4K Film', 'Same-day Edit', 'Instagram Reels', 'Premium Album (50 pages)', 'Parent Albums'] },
  ],
  Bangalore: [
    { id: 'ph-blr-1', name: 'Basic Coverage', price: 40000, team: '1 Photographer', deliverables: '250+ Photos', includes: ['5-hour coverage', 'Candid', 'Digital Gallery'] },
    { id: 'ph-blr-2', name: 'Pro Capture', price: 85000, team: '2 Photographers + 1 Videographer', deliverables: '700+ Photos, Highlight Film', includes: ['Full Day', 'Drone', 'Pre-wedding (2hrs)', 'Album (30 pages)'] },
    { id: 'ph-blr-3', name: 'Cinematic Pro', price: 160000, team: '4 Photographers + 2 Videographers', deliverables: '1200+ Photos, Feature Film', includes: ['Multi-day', '4K Film', 'Same-day Edit', 'Reels Package', 'Premium Album'] },
  ],
  Chennai: [
    { id: 'ph-chn-1', name: 'Simple Clicks', price: 35000, team: '1 Photographer', deliverables: '250+ Photos', includes: ['6-hour coverage', 'Traditional + Candid', 'Online Gallery'] },
    { id: 'ph-chn-2', name: 'Chennai Special', price: 80000, team: '2 Photographers + 1 Videographer', deliverables: '600+ Photos, Wedding Film', includes: ['Full Day', 'Muhurtham Coverage', 'Drone', 'Album (30 pages)'] },
    { id: 'ph-chn-3', name: 'Blockbuster Package', price: 150000, team: '3 Photographers + 2 Videographers', deliverables: '1200+ Photos, Cinematic Film', includes: ['Multi-day', '4K Film', 'Everything Covered', 'Premium Album', 'Parent Albums'] },
  ],
  Mysore: [
    { id: 'ph-mys-1', name: 'Heritage Capture', price: 50000, team: '2 Photographers', deliverables: '400+ Photos, Reel', includes: ['8-hour coverage', 'Heritage Backdrops', 'Candid', 'Online Gallery'] },
    { id: 'ph-mys-2', name: 'Royal Coverage', price: 120000, team: '3 Photographers + 1 Videographer', deliverables: '1000+ Photos, Film', includes: ['Full Day', 'Palace Shoot', 'Drone', '4K Film', 'Album (40 pages)'] },
  ],
  Coimbatore: [
    { id: 'ph-cbe-1', name: 'Basic Package', price: 30000, team: '1 Photographer', deliverables: '200+ Photos', includes: ['5-hour coverage', 'Traditional', 'Digital Delivery'] },
    { id: 'ph-cbe-2', name: 'Complete Coverage', price: 70000, team: '2 Photographers + 1 Videographer', deliverables: '500+ Photos, Film', includes: ['Full Day', 'Candid + Traditional', 'Highlight Film', 'Album'] },
  ],
  Vizag: [
    { id: 'ph-viz-1', name: 'Beach Clicks', price: 40000, team: '1 Photographer', deliverables: '300+ Photos', includes: ['6-hour coverage', 'Beach Shoot', 'Online Gallery'] },
    { id: 'ph-viz-2', name: 'Vizag Premium', price: 100000, team: '2 Photographers + 1 Videographer + Drone', deliverables: '800+ Photos, Sunset Film', includes: ['Full Day', 'Sunset Shoot', 'Drone Aerials', 'Cinematic Film', 'Album'] },
  ],
  Kochi: [
    { id: 'ph-kch-1', name: 'Kerala Clicks', price: 35000, team: '1 Photographer', deliverables: '250+ Photos', includes: ['5-hour coverage', 'Traditional', 'Digital Gallery'] },
    { id: 'ph-kch-2', name: 'Backwater Special', price: 85000, team: '2 Photographers + 1 Videographer', deliverables: '600+ Photos, Film', includes: ['Full Day', 'Backwater Shoot', 'Drone', 'Film + Reel', 'Album'] },
  ],
  Madurai: [
    { id: 'ph-mdu-1', name: 'Temple Town Basic', price: 25000, team: '1 Photographer', deliverables: '200+ Photos', includes: ['5-hour coverage', 'Traditional Photography', 'Digital Delivery'] },
    { id: 'ph-mdu-2', name: 'Madurai Premium', price: 65000, team: '2 Photographers + 1 Videographer', deliverables: '500+ Photos, Film', includes: ['Full Day', 'Temple Backdrop Shoot', 'Film', 'Album (30 pages)'] },
  ],
};

// Payment plans
export const paymentPlans = [
  { id: 'full', name: 'Pay in Full', description: 'Pay 100% now & get 5% off', discount: 0.05, installments: 1, icon: '💰' },
  { id: 'emi3', name: '3 Easy EMIs', description: '40% now → 30% in 30 days → 30% before event', discount: 0, installments: 3, icon: '📅' },
  { id: 'emi6', name: '6 Monthly EMIs', description: 'Split into 6 equal monthly payments', discount: 0, installments: 6, icon: '📊' },
];

// Utility: generate availability
function generateAvailability() {
  const availability = {};
  const today = new Date();
  for (let i = 0; i < 90; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    const key = d.toISOString().split('T')[0];
    const r = Math.random();
    availability[key] = r < 0.25 ? 'booked' : r < 0.35 ? 'tentative' : 'available';
  }
  return availability;
}

// Helpers
export function formatPrice(price) {
  if (price >= 100000) return `₹${(price / 100000).toFixed(price % 100000 === 0 ? 0 : 1)}L`;
  if (price >= 1000) return `₹${(price / 1000).toFixed(0)}K`;
  return `₹${price.toLocaleString('en-IN')}`;
}

export function formatPriceFull(price) {
  return `₹${price.toLocaleString('en-IN')}`;
}

export function getVenueById(id) {
  return venues.find(v => v.id === id);
}

export function getFeaturedVenues() {
  return venues.filter(v => v.featured);
}

export function getAddOns(city) {
  return {
    decor: decorOptions[city] || [],
    catering: cateringOptions[city] || [],
    photography: photographyOptions[city] || [],
  };
}

// Mock bookings for dashboard
export const mockBookings = [
  {
    id: 'b1',
    venueId: 'v1',
    venueName: 'Sri Lakshmi Convention Hall',
    hallName: 'Annapurna Ballroom',
    city: 'Hyderabad',
    date: '2025-04-15',
    guests: 500,
    status: 'confirmed',
    bookedOn: '2025-01-20',
    hall: { name: 'Annapurna Ballroom', price: 220000 },
    decor: { name: 'Royal Nizam', price: 135000 },
    catering: { name: 'Hyderabadi Daawat', price: 750, plates: 500, total: 375000 },
    photography: { name: 'Premium Studio', price: 95000 },
    totalAmount: 825000,
    paymentPlan: '3 Easy EMIs',
    paidAmount: 330000,
    nextPaymentDate: '2025-03-15',
    nextPaymentAmount: 247500,
  },
  {
    id: 'b2',
    venueId: 'v4',
    venueName: 'Nandi Hills Resort',
    hallName: 'Full Estate',
    city: 'Mysore',
    date: '2025-06-22',
    guests: 400,
    status: 'confirmed',
    bookedOn: '2025-01-05',
    hall: { name: 'Full Estate', price: 340000 },
    decor: { name: 'Royal Mysore', price: 90000 },
    catering: { name: 'Royal Karnataka', price: 900, plates: 400, total: 360000 },
    photography: { name: 'Royal Coverage', price: 120000 },
    totalAmount: 910000,
    paymentPlan: '6 Monthly EMIs',
    paidAmount: 303333,
    nextPaymentDate: '2025-03-05',
    nextPaymentAmount: 151667,
  }
];
