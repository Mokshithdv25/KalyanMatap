// ===== Mock Data: Venues, Packages, Availability =====

export const cities = [
  'Hyderabad', 'Bangalore', 'Chennai', 'Mumbai', 'Delhi', 'Jaipur', 'Pune', 'Kolkata'
];

export const amenities = [
  'AC Halls', 'Parking', 'Valet', 'Bridal Suite', 'Generator Backup',
  'DJ/Sound', 'Lawn Area', 'Swimming Pool', 'Helipad', 'Multiple Halls'
];

export const venues = [
  {
    id: 'v1',
    name: 'Rajmahal Grand Palace',
    city: 'Hyderabad',
    area: 'Banjara Hills',
    address: '8-2-682, Road No. 12, Banjara Hills, Hyderabad',
    capacity: { min: 200, max: 1500 },
    rating: 4.8,
    reviews: 234,
    vegOnly: false,
    amenities: ['AC Halls', 'Parking', 'Valet', 'Bridal Suite', 'Generator Backup', 'DJ/Sound', 'Lawn Area'],
    images: [
      'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800',
      'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800',
      'https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800',
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800',
    ],
    description: 'A magnificent palace-style venue in the heart of Banjara Hills. With sprawling lawns, opulent interiors, and royal Nizam-era architecture, Rajmahal Grand Palace is the epitome of grandeur for your special day.',
    featured: true,
    packages: [
      {
        id: 'p1-silver',
        tier: 'Silver',
        price: 450000,
        hall: { name: 'Durbar Hall', capacity: 500, hours: 8, description: 'Classic hall with chandeliers and AC' },
        decor: { theme: 'Traditional Floral', description: 'Marigold & jasmine stage decor, entrance gate, basic lighting', includes: ['Stage Decoration', 'Entrance Arch', 'Basic Lighting', '50 Table Centerpieces'] },
        catering: { type: 'Veg + Non-Veg', perPlate: 650, minPlates: 200, menu: ['4 Starters', '6 Main Course', '3 Desserts', 'Live Chaat Counter', 'Welcome Drinks'] },
        photography: { team: '2 Photographers', deliverables: '500+ Edited Photos, 1 Highlight Reel', includes: ['Pre-wedding shoot (2hrs)', 'Candid + Traditional', 'Online Gallery'] }
      },
      {
        id: 'p1-gold',
        tier: 'Gold',
        price: 850000,
        hall: { name: 'Nizam Ballroom', capacity: 800, hours: 12, description: 'Grand ballroom with stage and green rooms' },
        decor: { theme: 'Royal Mughal', description: 'Elaborate floral + drape decor with LED lighting', includes: ['Premium Stage Setup', 'LED Light Curtains', 'Entrance Corridor Decor', 'Photo Booth', '100 Table Centerpieces', 'Mandap Decoration'] },
        catering: { type: 'Multi-cuisine', perPlate: 950, minPlates: 300, menu: ['8 Starters', '10 Main Course', '5 Desserts', 'Live Biryani Counter', 'Live Pasta Counter', 'Ice Cream Bar', 'Welcome Drinks + Mocktails'] },
        photography: { team: '3 Photographers + 1 Videographer', deliverables: '1000+ Photos, Cinematic Film, Drone Shots', includes: ['Full Day Coverage', 'Pre-wedding shoot (4hrs)', 'Drone Aerial Shots', 'Same-day Edit Teaser', 'Coffee Table Book (30 pages)'] }
      },
      {
        id: 'p1-platinum',
        tier: 'Platinum',
        price: 1500000,
        hall: { name: 'Full Palace (All Halls + Lawns)', capacity: 1500, hours: 24, description: 'Exclusive access to entire venue for 24 hours' },
        decor: { theme: 'Destination Wedding Experience', description: 'Bespoke luxury decor with international floral arrangements', includes: ['Designer Stage', 'Full Venue Theming', 'Pyrotechnics', 'Hanging Floral Installations', 'LED Walls', 'Fog Entry', 'Personalized Monograms'] },
        catering: { type: 'International Buffet + Live Stations', perPlate: 1400, minPlates: 500, menu: ['12 Starters', '15 Main Course', '8 Desserts', '5 Live Counters', 'Cocktail Bar (Non-alcoholic)', 'Midnight Snack Buffet'] },
        photography: { team: '5 Photographers + 2 Videographers + Drone Operator', deliverables: '2000+ Photos, Feature Film, Same-day Edit', includes: ['Multi-day Coverage', 'Pre-wedding Film', '4K Cinematic Film', 'Instagram Reels Package', 'Premium Album (60 pages)', 'Parent Albums (2)', 'Live Streaming'] }
      }
    ],
    availability: generateAvailability(),
    paymentPlans: [
      { id: 'full', name: 'Full Payment', description: 'Pay 100% now', discount: '5% off', installments: 1 },
      { id: 'emi3', name: '3 Easy EMIs', description: '40% now + 30% in 30 days + 30% before event', discount: null, installments: 3 },
      { id: 'emi6', name: '6 Monthly EMIs', description: 'Split into 6 equal parts', discount: null, installments: 6 },
    ],
    reviewsList: [
      { name: 'Priya & Rahul', date: '2024-12-15', rating: 5, comment: 'Absolutely magical! The Gold package was worth every rupee. The decor was breathtaking and the food was outstanding.' },
      { name: 'Sneha & Arun', date: '2024-11-20', rating: 4, comment: 'Great venue, amazing staff. The Nizam Ballroom is stunning. Only wish parking was a bit closer.' },
      { name: 'Ananya & Vikram', date: '2024-10-05', rating: 5, comment: 'Our Platinum experience was beyond dreams. The fog entry and pyrotechnics made everyone gasp!' },
    ]
  },
  {
    id: 'v2',
    name: 'The Green Meadows Resort',
    city: 'Bangalore',
    area: 'Whitefield',
    address: 'Survey No. 45, Whitefield Main Road, Bangalore',
    capacity: { min: 100, max: 800 },
    rating: 4.6,
    reviews: 189,
    vegOnly: false,
    amenities: ['AC Halls', 'Parking', 'Lawn Area', 'Swimming Pool', 'Bridal Suite', 'Generator Backup'],
    images: [
      'https://images.unsplash.com/photo-1510076857177-7470076d4098?w=800',
      'https://images.unsplash.com/photo-1507504031003-b417219a0fde?w=800',
      'https://images.unsplash.com/photo-1478146059778-26028b07395a?w=800',
      'https://images.unsplash.com/photo-1529636798458-92182e662485?w=800',
    ],
    description: 'A lush green resort nestled in the IT hub of Whitefield. Perfect for couples who want a nature-inspired wedding with modern amenities. The open-air mandap by the lake is an Instagram favorite.',
    featured: true,
    packages: [
      {
        id: 'p2-silver',
        tier: 'Silver',
        price: 350000,
        hall: { name: 'Garden Pavilion', capacity: 300, hours: 8, description: 'Open-air pavilion surrounded by gardens' },
        decor: { theme: 'Garden Fresh', description: 'Natural floral decor with fairy lights', includes: ['Floral Mandap', 'Garden Lighting', 'Entrance Decor', '30 Table Arrangements'] },
        catering: { type: 'South Indian + North Indian', perPlate: 550, minPlates: 150, menu: ['3 Starters', '5 Main Course', '3 Desserts', 'Filter Coffee Station'] },
        photography: { team: '2 Photographers', deliverables: '400+ Photos, Highlight Video', includes: ['6-hour Coverage', 'Candid Photography', 'Online Gallery'] }
      },
      {
        id: 'p2-gold',
        tier: 'Gold',
        price: 700000,
        hall: { name: 'Lakeside Banquet', capacity: 600, hours: 12, description: 'Elegant banquet hall overlooking the resort lake' },
        decor: { theme: 'Rustic Elegance', description: 'Wooden arches, hanging florals, fairy light canopy', includes: ['Designer Mandap', 'Fairy Light Canopy', 'Photo Corner', 'Aisle Decor', '80 Table Centerpieces'] },
        catering: { type: 'Multi-cuisine', perPlate: 850, minPlates: 250, menu: ['6 Starters', '8 Main Course', '4 Desserts', 'Live Dosa Counter', 'Dessert Bar'] },
        photography: { team: '3 Photographers + 1 Videographer', deliverables: '800+ Photos, Cinematic Film', includes: ['Full Day Coverage', 'Pre-wedding Shoot', 'Drone Shots', 'Photo Album (40 pages)'] }
      },
      {
        id: 'p2-platinum',
        tier: 'Platinum',
        price: 1200000,
        hall: { name: 'Full Resort (Exclusive)', capacity: 800, hours: 24, description: 'Private access to entire resort with all amenities' },
        decor: { theme: 'Enchanted Forest', description: 'Thematic forest-inspired decor with custom installations', includes: ['Bespoke Installations', 'Full Venue Theming', 'Floating Candles on Lake', 'Fog Machines', 'LED Pathway'] },
        catering: { type: 'Global Cuisine + Live Stations', perPlate: 1200, minPlates: 400, menu: ['10 Starters', '12 Main Course', '6 Desserts', '4 Live Counters', 'Late Night Pizza & Chai'] },
        photography: { team: '4 Photographers + 2 Videographers', deliverables: '1500+ Photos, Feature Film, Reels', includes: ['Multi-day Coverage', 'Pre-wedding Film', '4K Video', 'Instagram Package', 'Premium Album'] }
      }
    ],
    availability: generateAvailability(),
    paymentPlans: [
      { id: 'full', name: 'Full Payment', description: 'Pay 100% now', discount: '5% off', installments: 1 },
      { id: 'emi3', name: '3 Easy EMIs', description: '40% now + 30% in 30 days + 30% before event', discount: null, installments: 3 },
      { id: 'emi6', name: '6 Monthly EMIs', description: 'Split into 6 equal parts', discount: null, installments: 6 },
    ],
    reviewsList: [
      { name: 'Kavitha & Suresh', date: '2024-11-28', rating: 5, comment: 'The lakeside setting was ethereal! Our guests are still talking about the floating candles.' },
      { name: 'Meera & Karthik', date: '2024-10-12', rating: 4, comment: 'Beautiful venue, great food. The dosa counter was a massive hit with all the uncles!' },
    ]
  },
  {
    id: 'v3',
    name: 'Shubh Mangal Convention Centre',
    city: 'Hyderabad',
    area: 'Gachibowli',
    address: 'Financial District, Gachibowli, Hyderabad',
    capacity: { min: 300, max: 2000 },
    rating: 4.5,
    reviews: 312,
    vegOnly: false,
    amenities: ['AC Halls', 'Parking', 'Valet', 'Multiple Halls', 'Generator Backup', 'DJ/Sound', 'Bridal Suite'],
    images: [
      'https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?w=800',
      'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800',
      'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=800',
      'https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=800',
    ],
    description: 'The largest convention centre in Gachibowli\'s Financial District. Modern, spacious, and designed for mega weddings. Three independent halls that can be combined for events of any scale.',
    featured: false,
    packages: [
      {
        id: 'p3-silver',
        tier: 'Silver',
        price: 380000,
        hall: { name: 'Hall A', capacity: 600, hours: 8, description: 'Modern AC hall with LED panel stage' },
        decor: { theme: 'Contemporary Minimal', description: 'Clean modern decor with statement pieces', includes: ['LED Stage Backdrop', 'Entrance Decor', 'Basic Florals', '40 Table Pieces'] },
        catering: { type: 'Veg + Non-Veg', perPlate: 600, minPlates: 200, menu: ['4 Starters', '6 Main Course', '3 Desserts', 'Hyderabadi Biryani Counter'] },
        photography: { team: '2 Photographers', deliverables: '500+ Photos, Teaser Video', includes: ['8-hour Coverage', 'Traditional + Candid', 'Digital Gallery'] }
      },
      {
        id: 'p3-gold',
        tier: 'Gold',
        price: 750000,
        hall: { name: 'Hall A + B Combined', capacity: 1200, hours: 12, description: 'Combined mega hall for grand celebrations' },
        decor: { theme: 'Grand Indian', description: 'Traditional Indian grandeur with modern touches', includes: ['Grand Stage with LED Wall', 'Corridor Decor', 'Photo Booth', 'Hanging Installations', '100 Table Pieces'] },
        catering: { type: 'Multi-cuisine Buffet', perPlate: 900, minPlates: 400, menu: ['8 Starters', '10 Main Course', '5 Desserts', '3 Live Counters', 'Paan Counter'] },
        photography: { team: '4 Photographers + 1 Videographer', deliverables: '1200+ Photos, Cinematic Film', includes: ['Full Day Coverage', 'Same-day Edit', 'Drone Coverage', 'Photo Album 40 pages'] }
      },
      {
        id: 'p3-platinum',
        tier: 'Platinum',
        price: 1400000,
        hall: { name: 'All 3 Halls + Terrace', capacity: 2000, hours: 24, description: 'Complete venue takeover with terrace access' },
        decor: { theme: 'Bollywood Spectacular', description: 'Cinematic-level production with special effects', includes: ['360° Stage', 'Pyrotechnics', 'LED Dance Floor', 'Theme Corridors', 'Fog Entry', 'Cold Sparklers'] },
        catering: { type: 'Premium International', perPlate: 1300, minPlates: 600, menu: ['12 Starters', '15 Main Course', '8 Desserts', '6 Live Counters', 'Midnight Buffet', 'Molecular Desserts'] },
        photography: { team: '6 Photographers + 3 Videographers + Drone', deliverables: '2500+ Photos, Feature Film, Live Stream', includes: ['Multi-day Coverage', 'Jib Camera', '4K Feature Film', 'Live Streaming', '2 Premium Albums', 'Instagram Reels'] }
      }
    ],
    availability: generateAvailability(),
    paymentPlans: [
      { id: 'full', name: 'Full Payment', description: 'Pay 100% now', discount: '5% off', installments: 1 },
      { id: 'emi3', name: '3 Easy EMIs', description: '40% now + 30% + 30%', discount: null, installments: 3 },
      { id: 'emi6', name: '6 Monthly EMIs', description: 'Split into 6 equal parts', discount: null, installments: 6 },
    ],
    reviewsList: [
      { name: 'Divya & Ravi', date: '2024-12-01', rating: 5, comment: 'Handled our 1500-guest wedding flawlessly! The Bollywood theme was insane.' },
      { name: 'Lakshmi & Sai', date: '2024-09-18', rating: 4, comment: 'Great for large weddings. Biryani counter was the star!' },
      { name: 'Pooja & Arjun', date: '2024-08-25', rating: 5, comment: 'The LED dance floor had everyone dancing all night. Amazing experience!' },
    ]
  },
  {
    id: 'v4',
    name: 'Heritage Haveli',
    city: 'Jaipur',
    area: 'Amer',
    address: 'Near Amer Fort, Jaipur',
    capacity: { min: 100, max: 600 },
    rating: 4.9,
    reviews: 156,
    vegOnly: true,
    amenities: ['Parking', 'Lawn Area', 'Bridal Suite', 'Generator Backup', 'Helipad'],
    images: [
      'https://images.unsplash.com/photo-1583037189850-1921ae7c6c22?w=800',
      'https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=800',
      'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800',
      'https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800',
    ],
    description: 'A restored 200-year-old haveli near Amer Fort, offering an authentic Rajasthani wedding experience. Hand-painted frescoes, mirror work walls, and a sprawling courtyard make this a photographer\'s dream.',
    featured: true,
    packages: [
      {
        id: 'p4-silver',
        tier: 'Silver',
        price: 500000,
        hall: { name: 'Courtyard', capacity: 300, hours: 10, description: 'Open-air courtyard with heritage architecture' },
        decor: { theme: 'Rajasthani Traditional', description: 'Authentic Rajasthani decor with folk elements', includes: ['Bandhani Drapes', 'Marigold Decor', 'Clay Pot Lighting', 'Phoolon ki Chaadar'] },
        catering: { type: 'Pure Vegetarian Rajasthani', perPlate: 700, minPlates: 150, menu: ['5 Starters', '8 Main Course (Dal Baati, Gatte)', '4 Desserts', 'Lassi Counter'] },
        photography: { team: '2 Photographers', deliverables: '500+ Photos, Short Film', includes: ['Heritage Backdrop Shoot', 'Candid Coverage', 'Online Gallery'] }
      },
      {
        id: 'p4-gold',
        tier: 'Gold',
        price: 900000,
        hall: { name: 'Full Haveli', capacity: 500, hours: 16, description: 'Complete haveli access with courtyard and terraces' },
        decor: { theme: 'Royal Rajputana', description: 'Lavish royal decor with vintage elements', includes: ['Royal Mandap', 'Elephant Entrance (decorative)', 'Vintage Lighting', 'Mirror Work Panels', 'Royal Seating'] },
        catering: { type: 'Royal Rajasthani Feast', perPlate: 1000, minPlates: 250, menu: ['8 Starters', '12 Main Course', '6 Desserts', 'Live Churma Counter', 'Masala Chai Bar'] },
        photography: { team: '3 Photographers + 1 Videographer', deliverables: '900+ Photos, Cinematic Film', includes: ['Full Day Coverage', 'Heritage Photo Tour', 'Drone Shots', 'Photo Book 50 pages'] }
      },
      {
        id: 'p4-platinum',
        tier: 'Platinum',
        price: 1800000,
        hall: { name: 'Exclusive Haveli + Fort View Terrace', capacity: 600, hours: 24, description: '24-hour exclusive access with Amer Fort views' },
        decor: { theme: 'Maharaja Destination Wedding', description: 'No-expense-spared royal wedding experience', includes: ['Custom Mandap Design', 'Full Venue Transformation', 'Fireworks', 'Baraat Procession Setup', 'Vintage Car', 'Rose Petal Pathways'] },
        catering: { type: 'Multi-day Royal Spread', perPlate: 1500, minPlates: 300, menu: ['15 Starters', '20 Main Course', '10 Desserts', '6 Live Counters', 'Midnight Feast', 'Morning Breakfast'] },
        photography: { team: '5 Photographers + 2 Videographers + Drone', deliverables: '2000+ Photos, Feature Film, Daily Highlights', includes: ['3-Day Coverage', 'Fort Background Shoot', '4K Film', 'Live Stream', 'Luxury Album', 'Parent Albums'] }
      }
    ],
    availability: generateAvailability(),
    paymentPlans: [
      { id: 'full', name: 'Full Payment', description: 'Pay 100% now', discount: '7% off', installments: 1 },
      { id: 'emi3', name: '3 Easy EMIs', description: '50% now + 25% + 25%', discount: null, installments: 3 },
      { id: 'emi6', name: '6 Monthly EMIs', description: 'Split into 6 equal parts', discount: null, installments: 6 },
    ],
    reviewsList: [
      { name: 'Ritu & Manish', date: '2024-11-10', rating: 5, comment: 'A fairy tale wedding! The haveli at sunset with Amer Fort in the background — no words.' },
      { name: 'Swati & Deepak', date: '2024-10-28', rating: 5, comment: 'The Rajasthani food was the best we\'ve ever had. Our NRI guests were in tears of joy!' },
    ]
  },
  {
    id: 'v5',
    name: 'Sea Breeze Convention Hall',
    city: 'Chennai',
    area: 'ECR',
    address: 'East Coast Road, Neelankarai, Chennai',
    capacity: { min: 150, max: 1000 },
    rating: 4.4,
    reviews: 201,
    vegOnly: false,
    amenities: ['AC Halls', 'Parking', 'Lawn Area', 'Generator Backup', 'DJ/Sound', 'Bridal Suite'],
    images: [
      'https://images.unsplash.com/photo-1507504031003-b417219a0fde?w=800',
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800',
      'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800',
      'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800',
    ],
    description: 'A beachfront convention hall along the scenic East Coast Road. Sea-facing lawns and modern interiors provide the perfect blend of nature and luxury for your celebration.',
    featured: false,
    packages: [
      {
        id: 'p5-silver',
        tier: 'Silver',
        price: 320000,
        hall: { name: 'Ocean View Hall', capacity: 400, hours: 8, description: 'AC hall with large windows facing the sea' },
        decor: { theme: 'Coastal Charm', description: 'Beach-inspired decor with shells and soft colors', includes: ['Beachside Mandap', 'Fairy Lights', 'Entrance Arch', '40 Table Pieces'] },
        catering: { type: 'South Indian + Chinese', perPlate: 500, minPlates: 200, menu: ['4 Starters', '6 Main Course', '3 Desserts', 'Filter Coffee & Jigarthanda'] },
        photography: { team: '2 Photographers', deliverables: '400+ Photos, Beach Shoot', includes: ['Beach Photos', '6-hour Coverage', 'Online Gallery'] }
      },
      {
        id: 'p5-gold',
        tier: 'Gold',
        price: 650000,
        hall: { name: 'Grand Ballroom + Beach Lawn', capacity: 700, hours: 12, description: 'Indoor-outdoor combo with beach access' },
        decor: { theme: 'Tropical Paradise', description: 'Lush tropical decor with beach elements', includes: ['Beach Mandap', 'Tropical Flower Arrangements', 'Tiki Torches', 'Photo Booth', '80 Table Centerpieces'] },
        catering: { type: 'Multi-cuisine', perPlate: 800, minPlates: 300, menu: ['7 Starters', '9 Main Course', '4 Desserts', 'Live Seafood Counter', 'Ice Cream Bar'] },
        photography: { team: '3 Photographers + 1 Videographer', deliverables: '900+ Photos, Sunset Film', includes: ['Full Day', 'Sunset Beach Shoot', 'Drone Shots', 'Photo Album'] }
      },
      {
        id: 'p5-platinum',
        tier: 'Platinum',
        price: 1100000,
        hall: { name: 'Full Venue (Exclusive Beach Wedding)', capacity: 1000, hours: 24, description: 'Complete beach wedding experience' },
        decor: { theme: 'Sunset Beach Destination', description: 'Magazine-worthy beach wedding setup', includes: ['Beach Mandap with Drapes', 'Bonfire Setup', 'Lantern Pathway', 'Floating Florals', 'Sand Art'] },
        catering: { type: 'Coastal Grand Feast', perPlate: 1100, minPlates: 400, menu: ['10 Starters', '12 Main Course', '6 Desserts', '4 Live Counters', 'Beach BBQ Station'] },
        photography: { team: '4 Photographers + 2 Videographers', deliverables: '1500+ Photos, Cinematic Film', includes: ['Multi-event Coverage', 'Sunset Shoot', '4K Film', 'Instagram Package', 'Premium Album'] }
      }
    ],
    availability: generateAvailability(),
    paymentPlans: [
      { id: 'full', name: 'Full Payment', description: 'Pay 100% now', discount: '5% off', installments: 1 },
      { id: 'emi3', name: '3 Easy EMIs', description: '40% now + 30% + 30%', discount: null, installments: 3 },
      { id: 'emi6', name: '6 Monthly EMIs', description: 'Split into 6 equal parts', discount: null, installments: 6 },
    ],
    reviewsList: [
      { name: 'Deepika & Aravind', date: '2024-11-15', rating: 5, comment: 'Sunset wedding on the beach — it was a dream come true!' },
      { name: 'Janani & Prasanth', date: '2024-09-20', rating: 4, comment: 'Amazing venue. The seafood counter was incredible. Slightly windy but manageable.' },
    ]
  },
  {
    id: 'v6',
    name: 'The Grand Mahal',
    city: 'Mumbai',
    area: 'Andheri West',
    address: 'Lokhandwala Complex, Andheri West, Mumbai',
    capacity: { min: 200, max: 1200 },
    rating: 4.7,
    reviews: 278,
    vegOnly: false,
    amenities: ['AC Halls', 'Valet', 'Multiple Halls', 'Generator Backup', 'DJ/Sound', 'Bridal Suite', 'Parking'],
    images: [
      'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800',
      'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=800',
      'https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800',
      'https://images.unsplash.com/photo-1478146059778-26028b07395a?w=800',
    ],
    description: 'Mumbai\'s most sought-after wedding venue in the heart of Andheri. Known for its Bollywood-worthy interiors, celebrity-approved catering, and seamless event execution.',
    featured: true,
    packages: [
      {
        id: 'p6-silver',
        tier: 'Silver',
        price: 550000,
        hall: { name: 'Crystal Hall', capacity: 500, hours: 8, description: 'Crystal chandeliers and marble flooring' },
        decor: { theme: 'Modern Classic', description: 'Clean, contemporary decor with crystal accents', includes: ['Crystal Mandap', 'Entrance Decor', 'Mood Lighting', '50 Table Pieces'] },
        catering: { type: 'Maharashtrian + North Indian', perPlate: 750, minPlates: 250, menu: ['5 Starters', '7 Main Course', '4 Desserts', 'Pav Bhaji Live Counter'] },
        photography: { team: '2 Photographers', deliverables: '600+ Photos, Reel', includes: ['8-hour Coverage', 'Candid + Posed', 'Online Gallery', 'Instagram Reel'] }
      },
      {
        id: 'p6-gold',
        tier: 'Gold',
        price: 1000000,
        hall: { name: 'Imperial Ballroom', capacity: 800, hours: 14, description: 'The signature imperial ballroom with 40-ft ceilings' },
        decor: { theme: 'Bollywood Glam', description: 'Red carpet, spotlights, and cinematic staging', includes: ['Red Carpet Entry', 'LED Stage with Screens', 'Spotlight Setup', 'Themed Photo Corners', '100 Table Centerpieces'] },
        catering: { type: 'Premium Multi-cuisine', perPlate: 1100, minPlates: 350, menu: ['8 Starters', '12 Main Course', '6 Desserts', '4 Live Counters', 'Cocktail Hour Bites'] },
        photography: { team: '4 Photographers + 2 Videographers', deliverables: '1200+ Photos, Film + Reels', includes: ['Full Day Coverage', 'Same-day Edit', 'Drone', 'Jib Camera', 'Photo Album 50 pages'] }
      },
      {
        id: 'p6-platinum',
        tier: 'Platinum',
        price: 2000000,
        hall: { name: 'The Grand Mahal (Complete)', capacity: 1200, hours: 24, description: 'Full venue with all 3 halls, terrace, and lounge' },
        decor: { theme: 'Celebrity Wedding', description: 'Planner-curated, magazine-worthy decor', includes: ['Custom Design Consultation', 'Full Venue Theming', 'Fireworks & Cold Sparks', 'Luxury Lounge Setup', 'After-party Decor'] },
        catering: { type: 'Celebrity Chef Curated', perPlate: 1600, minPlates: 500, menu: ['15 Starters', '18 Main Course', '10 Desserts', '8 Live Counters', 'Molecular Mixology Bar', 'After-party Snacks'] },
        photography: { team: '6 Photographers + 3 Videographers + Drone', deliverables: '2500+ Photos, Feature Film, Daily Content', includes: ['Multi-day Coverage', '4K Feature Film', 'Daily Instagram Stories', 'Live Streaming', 'Luxury Coffee Table Book', 'Parent Albums'] }
      }
    ],
    availability: generateAvailability(),
    paymentPlans: [
      { id: 'full', name: 'Full Payment', description: 'Pay 100% now', discount: '5% off', installments: 1 },
      { id: 'emi3', name: '3 Easy EMIs', description: '40% now + 30% + 30%', discount: null, installments: 3 },
      { id: 'emi6', name: '6 Monthly EMIs', description: 'Split into 6 equal parts', discount: null, installments: 6 },
    ],
    reviewsList: [
      { name: 'Nisha & Raj', date: '2024-12-08', rating: 5, comment: 'Felt like a Bollywood movie set! The Grand Mahal team made everything perfect.' },
      { name: 'Tara & Sameer', date: '2024-11-02', rating: 5, comment: 'The 40-ft ceiling ballroom took everyone\'s breath away. Worth every penny.' },
      { name: 'Komal & Amit', date: '2024-10-18', rating: 4, comment: 'Incredible venue in the heart of Mumbai. Valet service was super smooth.' },
    ]
  },
  {
    id: 'v7',
    name: 'Saptapadi Gardens',
    city: 'Pune',
    area: 'Hinjewadi',
    address: 'Near Rajiv Gandhi Infotech Park, Hinjewadi, Pune',
    capacity: { min: 100, max: 500 },
    rating: 4.3,
    reviews: 145,
    vegOnly: true,
    amenities: ['Parking', 'Lawn Area', 'Generator Backup', 'DJ/Sound'],
    images: [
      'https://images.unsplash.com/photo-1510076857177-7470076d4098?w=800',
      'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800',
      'https://images.unsplash.com/photo-1529636798458-92182e662485?w=800',
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800',
    ],
    description: 'A charming garden venue popular with Pune\'s young IT crowd. Affordable packages without compromising on beauty. The open-air mandap under a canopy of fairy lights is magical.',
    featured: false,
    packages: [
      {
        id: 'p7-silver',
        tier: 'Silver',
        price: 250000,
        hall: { name: 'Garden Mandap', capacity: 200, hours: 6, description: 'Open-air mandap with natural surroundings' },
        decor: { theme: 'Simple Elegance', description: 'Minimal yet beautiful garden decor', includes: ['Floral Mandap', 'Entrance Gate', 'String Lights', '20 Table Pieces'] },
        catering: { type: 'Pure Veg Maharashtrian', perPlate: 450, minPlates: 100, menu: ['3 Starters', '5 Main Course', '2 Desserts', 'Solkadhi & Kokum Drink'] },
        photography: { team: '1 Photographer', deliverables: '300+ Photos', includes: ['5-hour Coverage', 'Candid Photography', 'Digital Delivery'] }
      },
      {
        id: 'p7-gold',
        tier: 'Gold',
        price: 480000,
        hall: { name: 'Grand Garden + Tent', capacity: 400, hours: 10, description: 'Large garden with luxury tent setup' },
        decor: { theme: 'Maharashtrian Heritage', description: 'Traditional Marathi wedding decor', includes: ['Heritage Mandap', 'Marigold Corridors', 'Tulsi Vrindavan Setup', 'Photo Corner', '50 Table Pieces'] },
        catering: { type: 'Maharashtrian Grand Thali', perPlate: 700, minPlates: 200, menu: ['5 Starters', '8 Main Course', '4 Desserts', 'Puran Poli Station', 'Masala Doodh Counter'] },
        photography: { team: '2 Photographers + 1 Videographer', deliverables: '700+ Photos, Wedding Film', includes: ['Full Day Coverage', 'Pre-wedding Shoot', 'Cinematic Film', 'Photo Album'] }
      },
      {
        id: 'p7-platinum',
        tier: 'Platinum',
        price: 800000,
        hall: { name: 'Exclusive Garden Estate', capacity: 500, hours: 16, description: 'Private garden estate with premium tent and lounge' },
        decor: { theme: 'Grand Maharashtrian Royal', description: 'Opulent Marathi royal wedding theme', includes: ['Custom Mandap', 'Full Garden Theming', 'Palanquin (Palki) Setup', 'Traditional Lamps', 'Rangoli Art'] },
        catering: { type: 'Royal Maharashtrian + North Indian', perPlate: 950, minPlates: 300, menu: ['8 Starters', '12 Main Course', '6 Desserts', '3 Live Counters', 'Midnight Misal Station'] },
        photography: { team: '3 Photographers + 2 Videographers', deliverables: '1200+ Photos, Full Film', includes: ['Full Day + Evening Coverage', 'Drone Shots', '4K Film', 'Same-day Edit', 'Premium Album'] }
      }
    ],
    availability: generateAvailability(),
    paymentPlans: [
      { id: 'full', name: 'Full Payment', description: 'Pay 100% now', discount: '5% off', installments: 1 },
      { id: 'emi3', name: '3 Easy EMIs', description: '40% + 30% + 30%', discount: null, installments: 3 },
    ],
    reviewsList: [
      { name: 'Shraddha & Omkar', date: '2024-11-22', rating: 4, comment: 'Great value for money! The garden setup was beautiful and food was home-style delicious.' },
      { name: 'Aditi & Sachin', date: '2024-10-05', rating: 5, comment: 'Perfect intimate wedding venue. The Puran Poli station was everyone\'s favorite!' },
    ]
  },
  {
    id: 'v8',
    name: 'Royal Bengal Banquets',
    city: 'Kolkata',
    area: 'Salt Lake',
    address: 'Sector V, Salt Lake City, Kolkata',
    capacity: { min: 200, max: 1000 },
    rating: 4.6,
    reviews: 198,
    vegOnly: false,
    amenities: ['AC Halls', 'Parking', 'Generator Backup', 'DJ/Sound', 'Bridal Suite', 'Multiple Halls'],
    images: [
      'https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?w=800',
      'https://images.unsplash.com/photo-1507504031003-b417219a0fde?w=800',
      'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=800',
      'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800',
    ],
    description: 'Kolkata\'s premier wedding destination in the heart of Salt Lake\'s IT sector. Bengali weddings reimagined with contemporary luxury while maintaining every cherished tradition.',
    featured: false,
    packages: [
      {
        id: 'p8-silver',
        tier: 'Silver',
        price: 300000,
        hall: { name: 'Tagore Hall', capacity: 400, hours: 8, description: 'Elegant hall inspired by Bengali renaissance' },
        decor: { theme: 'Bengali Classic', description: 'Traditional Bengali wedding decor', includes: ['Topor & Mukut Display', 'Shola Art Decor', 'Alpona (Floor Art)', 'Entrance Gate', '30 Table Pieces'] },
        catering: { type: 'Bengali + North Indian', perPlate: 550, minPlates: 200, menu: ['4 Starters (incl. Fish Fry)', '6 Main Course', '3 Desserts (incl. Mishti Doi)', 'Rosogolla Counter'] },
        photography: { team: '2 Photographers', deliverables: '500+ Photos, Highlights', includes: ['8-hour Coverage', 'Candid + Traditional', 'Digital Gallery'] }
      },
      {
        id: 'p8-gold',
        tier: 'Gold',
        price: 600000,
        hall: { name: 'Grand Bengal Ballroom', capacity: 700, hours: 12, description: 'Spacious ballroom with heritage Bengali motifs' },
        decor: { theme: 'Royal Bengal', description: 'Grand Bengali decor with modern aesthetics', includes: ['Designer Mandap', 'Shola Art Installations', 'LED Panels', 'Photo Booth', 'Dhaak Player Setup', '70 Table Pieces'] },
        catering: { type: 'Bengali Grand Feast', perPlate: 850, minPlates: 300, menu: ['7 Starters', '10 Main Course (incl. Doi Maach, Kosha Mangsho)', '5 Desserts', 'Live Luchi-Alur Dom Counter', 'Paan Counter'] },
        photography: { team: '3 Photographers + 1 Videographer', deliverables: '1000+ Photos, Wedding Film', includes: ['Full Day Coverage', 'Pre-wedding Shoot', 'Drone', 'Photo Album 40 pages'] }
      },
      {
        id: 'p8-platinum',
        tier: 'Platinum',
        price: 1000000,
        hall: { name: 'Royal Bengal (Complete Venue)', capacity: 1000, hours: 24, description: 'Full venue for the complete Bengali wedding experience' },
        decor: { theme: 'Grand Bengali Heritage', description: 'Magazine-worthy traditional Bengali luxury', includes: ['Bespoke Mandap', 'Full Venue Bengali Theming', 'Shankh Blowing Ceremony Setup', 'Dhunuchi Naach Stage', 'Vintage Bengal Setup'] },
        catering: { type: 'Ultimate Bengali Feast', perPlate: 1200, minPlates: 500, menu: ['12 Starters', '15 Main Course', '8 Desserts', '5 Live Counters', 'Midnight Kathi Roll Station', 'Morning Luchi Breakfast'] },
        photography: { team: '4 Photographers + 2 Videographers', deliverables: '1800+ Photos, Feature Film', includes: ['Multi-day Coverage', '4K Film', 'Sindoor Khela Special Coverage', 'Live Streaming', 'Premium Album'] }
      }
    ],
    availability: generateAvailability(),
    paymentPlans: [
      { id: 'full', name: 'Full Payment', description: 'Pay 100% now', discount: '5% off', installments: 1 },
      { id: 'emi3', name: '3 Easy EMIs', description: '40% + 30% + 30%', discount: null, installments: 3 },
      { id: 'emi6', name: '6 Monthly EMIs', description: 'Split into 6 equal parts', discount: null, installments: 6 },
    ],
    reviewsList: [
      { name: 'Moumita & Sourav', date: '2024-12-12', rating: 5, comment: 'The Shola art decor and Dhaak players made it the most authentic Bengali wedding ever!' },
      { name: 'Arpita & Debajyoti', date: '2024-11-05', rating: 4, comment: 'Incredible food — the Kosha Mangsho and Luchi counter were legendary.' },
    ]
  }
];

// Generate random availability for next 3 months
function generateAvailability() {
  const availability = {};
  const today = new Date();
  
  for (let i = 0; i < 90; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    const key = date.toISOString().split('T')[0];
    
    // ~30% chance booked, ~10% tentative, rest available
    const rand = Math.random();
    if (rand < 0.3) {
      availability[key] = 'booked';
    } else if (rand < 0.4) {
      availability[key] = 'tentative';
    } else {
      availability[key] = 'available';
    }
  }
  
  return availability;
}

// Helper functions
export function formatPrice(price) {
  if (price >= 100000) {
    return `₹${(price / 100000).toFixed(price % 100000 === 0 ? 0 : 1)}L`;
  }
  return `₹${price.toLocaleString('en-IN')}`;
}

export function formatPriceExact(price) {
  return `₹${price.toLocaleString('en-IN')}`;
}

export function getVenueById(id) {
  return venues.find(v => v.id === id);
}

export function getFeaturedVenues() {
  return venues.filter(v => v.featured);
}

export function filterVenues({ city, minBudget, maxBudget, minCapacity, rating, vegOnly }) {
  return venues.filter(v => {
    if (city && v.city !== city) return false;
    if (minBudget && v.packages[0].price < minBudget) return false;
    if (maxBudget && v.packages[0].price > maxBudget) return false;
    if (minCapacity && v.capacity.max < minCapacity) return false;
    if (rating && v.rating < rating) return false;
    if (vegOnly && !v.vegOnly) return false;
    return true;
  });
}

// Mock bookings for dashboard
export const mockBookings = [
  {
    id: 'b1',
    venueId: 'v1',
    venueName: 'Rajmahal Grand Palace',
    city: 'Hyderabad',
    date: '2025-04-15',
    packageTier: 'Gold',
    packagePrice: 850000,
    paymentPlan: '3 Easy EMIs',
    paymentStatus: 'partial',
    paidAmount: 340000,
    totalAmount: 850000,
    guests: 500,
    status: 'confirmed',
    bookedOn: '2025-01-20',
    nextPaymentDate: '2025-03-15',
    nextPaymentAmount: 255000,
  },
  {
    id: 'b2',
    venueId: 'v4',
    venueName: 'Heritage Haveli',
    city: 'Jaipur',
    date: '2025-06-22',
    packageTier: 'Platinum',
    packagePrice: 1800000,
    paymentPlan: '6 Monthly EMIs',
    paymentStatus: 'partial',
    paidAmount: 600000,
    totalAmount: 1800000,
    guests: 400,
    status: 'confirmed',
    bookedOn: '2025-01-05',
    nextPaymentDate: '2025-03-05',
    nextPaymentAmount: 300000,
  }
];
