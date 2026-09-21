export interface FleetRate {
  destination: string;
  priceUSD: number;
  time: string;
  distance: string;
}

export interface FleetModelBrand {
  brand: string;
  model: string;
  year: string;
  note: string;
}

export interface FleetVehicle {
  id: string;
  slug: string;
  title: string;
  name: string;
  category: string;
  tag: string;
  subtitle: string;
  image: string;
  alt: string;
  maxPax: number;
  maxLuggageLarge: number;
  maxLuggageCabin: number;
  capacity: string;
  models: string[];
  modelBrands: FleetModelBrand[];
  features: string[];
  samplePriceCairo: number;
  samplePriceGiza: number;
  samplePriceAlexandria: number;
  rates: FleetRate[];
  bestFor: string;
  description: string;
  fullDescription: string;
  luggageGuide: {
    checkedBags: string;
    handLuggage: string;
    stroller: string;
    specialBaggage: string;
  };
  faqs: { q: string; a: string }[];
}

export const fleetVehicles: FleetVehicle[] = [
  {
    id: "standard-sedan",
    slug: "private-taxi",
    title: "Private Taxi",
    name: "Standard Private Taxi Sedan",
    category: "Economy & Solo Travel",
    tag: "Most Popular",
    subtitle: "Ideal for solo travelers or couples with luggage",
    image: "/images/fleet/private-taxi.webp",
    alt: "Cairo Airport Private Taxi Sedan - Toyota Corolla / Hyundai Elantra Transfer",
    maxPax: 3,
    maxLuggageLarge: 2,
    maxLuggageCabin: 2,
    capacity: "Up to 3 passengers • 2 bags",
    models: ["Toyota Corolla", "Hyundai Elantra", "Nissan Sentra", "Skoda Octavia", "Kia Cerato"],
    modelBrands: [
      {
        brand: "Toyota",
        model: "Corolla / Belta",
        year: "2022 - 2025",
        note: "Egypt's benchmark for reliable, quiet, and smooth airport city transit."
      },
      {
        brand: "Hyundai",
        model: "Elantra CN7 / HD",
        year: "2022 - 2025",
        note: "Modern interior styling, exceptional rear legroom, and powerful A/C."
      },
      {
        brand: "Nissan",
        model: "Sentra / Sunny",
        year: "2021 - 2024",
        note: "Spacious trunk accommodating two standard 28-inch checked suitcases with ease."
      },
      {
        brand: "Skoda",
        model: "Octavia",
        year: "2021 - 2024",
        note: "Premium European build quality with an oversized liftback cargo area."
      }
    ],
    features: [
      "High-output dual air conditioning",
      "Free flight delay tracking & terminal monitoring",
      "Driver meets you outside arrival exit with personalized name sign",
      "Bottled chilled mineral water",
      "Clean, non-smoking, strictly inspected interior",
      "60 minutes complimentary waiting time after landing"
    ],
    samplePriceCairo: 24,
    samplePriceGiza: 32,
    samplePriceAlexandria: 89,
    rates: [
      { destination: "Downtown Cairo / Tahrir Square", priceUSD: 24, time: "35-45 mins", distance: "22 km" },
      { destination: "Giza Pyramids & Sphinx Area", priceUSD: 32, time: "50-65 mins", distance: "45 km" },
      { destination: "New Cairo & 5th Settlement", priceUSD: 28, time: "25-35 mins", distance: "18 km" },
      { destination: "6th of October City / Zayed", priceUSD: 36, time: "60-75 mins", distance: "55 km" },
      { destination: "Alexandria Mediterranean Coast", priceUSD: 89, time: "2.5 - 3 hours", distance: "220 km" },
      { destination: "Ain Sokhna Red Sea Resorts", priceUSD: 95, time: "1.5 - 2 hours", distance: "135 km" },
      { destination: "Hurghada & El Gouna", priceUSD: 195, time: "5 - 5.5 hours", distance: "470 km" }
    ],
    bestFor: "Solo travelers, couples, light packers, and business travelers arriving for short trips.",
    description: "Our modern, air-conditioned private sedans offer reliable, cost-effective door-to-door transport from Cairo Airport directly to any hotel in Cairo or Giza. Perfect for travelers with up to two standard checked suitcases.",
    fullDescription: "The Private Taxi class is the most economical and widely booked transfer choice at Cairo International Airport (CAI) and Sphinx Airport (SPX). Modeled after top European airport transfer platforms like KiwiTaxi, Mozio, and GetTransfer, you receive a guaranteed private modern sedan (Toyota Corolla, Hyundai Elantra, or similar) driven by an experienced, licensed chauffeur. Unlike haggling with street taxis outside arrival terminals, your rate is 100% fixed upfront, flight delays are tracked automatically, and your driver meets you right outside the arrival terminal holding a personalized name sign.",
    luggageGuide: {
      checkedBags: "Up to 2 standard checked suitcases (28 in / 70 cm, up to 23 kg each).",
      handLuggage: "Up to 2 standard carry-on bags or backpacks.",
      stroller: "One compact folding umbrella stroller fits alongside 2 suitcases.",
      specialBaggage: "For golf bags, oversized boxes, or wheelchairs, we strongly recommend our Private Minivan."
    },
    faqs: [
      {
        q: "What exact car brand will arrive for my Private Taxi booking?",
        a: "In the Private Taxi category, you will receive a late-model, clean, fully air-conditioned 4-door sedan such as a Toyota Corolla, Hyundai Elantra, Nissan Sentra, or Skoda Octavia. Exact vehicle assignment depends on real-time dispatch, but all vehicles are guaranteed to meet our strict cleanliness, safety, and model year standards."
      },
      {
        q: "Is the price per person or per car?",
        a: "All prices on CairoAirportTransfers.com are strictly per vehicle, NOT per person. A private sedan costs the same flat rate whether 1, 2, or 3 passengers are traveling."
      },
      {
        q: "Where will the driver meet me at Cairo Airport?",
        a: "Your chauffeur will wait right outside the arrival terminal exit doors holding an official sign with your name, ready to assist you directly to your car. You don't have to wander through parking lots or navigate taxi touts."
      },
      {
        q: "What if my flight arrives late?",
        a: "We continuously monitor your flight number in real time via live airport radar. If your flight is delayed or lands ahead of schedule, your driver's arrival time is adjusted automatically with zero extra charge."
      }
    ]
  },
  {
    id: "private-minivan",
    slug: "private-minivan",
    title: "Private Minivan",
    name: "Spacious Private Minivan",
    category: "Families & Small Groups",
    tag: "Family Choice",
    subtitle: "Spacious comfort for families and golf equipment",
    image: "/images/fleet/private-minivan.webp",
    alt: "Cairo Airport Private Minivan - Mercedes-Benz Vito / Toyota HiAce Combi Transfer",
    maxPax: 7,
    maxLuggageLarge: 6,
    maxLuggageCabin: 6,
    capacity: "Up to 7 passengers • 6 bags",
    models: ["Mercedes-Benz Vito", "Toyota HiAce Combi", "Hyundai H1", "Ford Transit Custom"],
    modelBrands: [
      {
        brand: "Mercedes-Benz",
        model: "Vito / V-Class Tourer",
        year: "2021 - 2025",
        note: "Luxurious German multi-passenger van with whisper-quiet ride and plush individual seats."
      },
      {
        brand: "Toyota",
        model: "HiAce Grand Luxury",
        year: "2022 - 2025",
        note: "Renowned worldwide for maximum reliability, elevated panoramic windows, and cavernous cargo capacity."
      },
      {
        brand: "Hyundai",
        model: "H1 / Staria",
        year: "2021 - 2025",
        note: "Futuristic comfort with flexible passenger rows and dual-zone roof-mounted cooling vents."
      },
      {
        brand: "Ford",
        model: "Transit Custom",
        year: "2021 - 2024",
        note: "Wide sliding side doors allowing effortless boarding for children and senior passengers."
      }
    ],
    features: [
      "Generous cargo hold for 6 oversized suitcases + strollers",
      "Child & baby booster seats provided free on request",
      "Dual-zone front & rear climate control with individual roof vents",
      "Spacious legroom & tinted privacy windows for desert sun protection",
      "Dedicated baggage porterage & chauffeur luggage assistance",
      "60 minutes complimentary waiting time from actual flight touchdown"
    ],
    samplePriceCairo: 38,
    samplePriceGiza: 48,
    samplePriceAlexandria: 129,
    rates: [
      { destination: "Downtown Cairo / Tahrir Square", priceUSD: 38, time: "35-45 mins", distance: "22 km" },
      { destination: "Giza Pyramids & Grand Egyptian Museum", priceUSD: 48, time: "50-65 mins", distance: "45 km" },
      { destination: "New Cairo & 5th Settlement", priceUSD: 42, time: "25-35 mins", distance: "18 km" },
      { destination: "6th of October City / Sheikh Zayed", priceUSD: 52, time: "60-75 mins", distance: "55 km" },
      { destination: "Alexandria Mediterranean Coast", priceUSD: 129, time: "2.5 - 3 hours", distance: "220 km" },
      { destination: "Ain Sokhna Beach Resorts", priceUSD: 139, time: "1.5 - 2 hours", distance: "135 km" },
      { destination: "Hurghada & Makadi Bay", priceUSD: 245, time: "5 - 5.5 hours", distance: "470 km" }
    ],
    bestFor: "Families traveling with children, groups with heavy overseas baggage, diving equipment, and golf trips.",
    description: "The ideal solution for families landing at Cairo Airport with multiple checked suitcases, strollers, or sports gear. Our spacious private minivans ensure comfortable seating without luggage encroaching on leg space.",
    fullDescription: "When landing at Cairo Airport with family, children, or bulky luggage, squeezing into a standard street cab or ordering two separate small rides is inconvenient and stressful. Our Private Minivan category (featuring Mercedes-Benz Vito, Toyota HiAce, and Hyundai H1) guarantees that your entire family travels together in pristine comfort. With high-roof headroom, dual-zone air conditioning that cools the rear cabin within seconds, and a massive dedicated boot space for up to 6 large checked bags, your holiday starts relaxed the moment you step outside Cairo customs.",
    luggageGuide: {
      checkedBags: "Up to 6 large suitcases (28–32 in / 23–32 kg).",
      handLuggage: "Up to 6 carry-ons, backpacks, or duty-free bags.",
      stroller: "Easily fits full-size foldable baby prams or dual strollers.",
      specialBaggage: "Can accommodate golf bags, folding wheelchairs, or scuba diving gear."
    },
    faqs: [
      {
        q: "Can we request child or infant safety seats?",
        a: "Yes! We provide clean, sanitized baby and booster seats upon request at no extra charge. Just mention the ages of your children in the booking notes or via WhatsApp."
      },
      {
        q: "Will all our 6 large suitcases fit without sitting on our laps?",
        a: "Absolutely. Our minivans are specially selected long-wheelbase models (like Mercedes Vito and Toyota HiAce) with dedicated rear cargo bays designed to carry 6 full-sized checked suitcases upright without touching passenger seating space."
      },
      {
        q: "What brands might pick us up?",
        a: "Our minivan fleet consists primarily of Mercedes-Benz Vito, Toyota HiAce Combi, and Hyundai H1/Staria. All vehicles are modern, fully insured, and equipped with high-performance rear climate control."
      }
    ]
  },
  {
    id: "executive-vip",
    slug: "executive-vip",
    title: "Executive / VIP",
    name: "Executive VIP Luxury Sedan",
    category: "Business & Premium Comfort",
    tag: "Premium",
    subtitle: "Luxury Mercedes-Benz sedans with Wi-Fi & water",
    image: "/images/fleet/executive-vip.webp",
    alt: "Cairo Airport VIP Executive Sedan - Mercedes-Benz E-Class Chauffeur Service",
    maxPax: 3,
    maxLuggageLarge: 3,
    maxLuggageCabin: 3,
    capacity: "Up to 3 passengers • 3 bags",
    models: ["Mercedes-Benz E-Class", "BMW 5-Series", "Audi A6", "Mercedes-Benz S-Class"],
    modelBrands: [
      {
        brand: "Mercedes-Benz",
        model: "E-Class (W213 / W214)",
        year: "2022 - 2025",
        note: "The international benchmark for executive business travel, featuring hand-crafted leather and acoustic glass."
      },
      {
        brand: "BMW",
        model: "5-Series (G30 / G60)",
        year: "2022 - 2025",
        note: "Dynamic executive luxury with active seat ventilation and supreme highway poise."
      },
      {
        brand: "Audi",
        model: "A6 Sedan",
        year: "2022 - 2024",
        note: "Understated elegance, cutting-edge suspension comfort, and seamless multi-zone climate control."
      },
      {
        brand: "Mercedes-Benz",
        model: "S-Class (Available on VIP Request)",
        year: "2022 - 2025",
        note: "Ultra-luxury flagship sedan for dignitaries, VIP delegations, and high-profile executives."
      }
    ],
    features: [
      "Suited, English-speaking executive chauffeur with discreet etiquette",
      "High-speed onboard 4G/5G Wi-Fi hotspot for business on the go",
      "Premium hand-stitched leather seating with multi-zone climate control",
      "Chilled Evian mineral water, fresh wet wipes & USB-C fast charging",
      "VIP curbside terminal coordination & priority terminal clearance",
      "90 minutes complimentary waiting time with real-time flight tracking"
    ],
    samplePriceCairo: 65,
    samplePriceGiza: 75,
    samplePriceAlexandria: 195,
    rates: [
      { destination: "Downtown Cairo & Nile Luxury Hotels", priceUSD: 65, time: "30-40 mins", distance: "22 km" },
      { destination: "Giza Pyramids & St. Regis / Four Seasons", priceUSD: 75, time: "45-60 mins", distance: "45 km" },
      { destination: "New Cairo Financial District & Dusit Thani", priceUSD: 70, time: "20-30 mins", distance: "18 km" },
      { destination: "6th of October & Smart Village", priceUSD: 85, time: "55-70 mins", distance: "55 km" },
      { destination: "Alexandria Four Seasons & Royal Coast", priceUSD: 195, time: "2.5 hours", distance: "220 km" },
      { destination: "Ain Sokhna Stella Di Mare & Resorts", priceUSD: 210, time: "1.5 hours", distance: "135 km" },
      { destination: "Hurghada & El Gouna VIP Chauffeur", priceUSD: 360, time: "4.5 - 5 hours", distance: "470 km" }
    ],
    bestFor: "Diplomats, corporate executives, VIP guests, honeymooners, and luxury hotel transfers.",
    description: "Travel in uncompromised sophistication with our executive Mercedes-Benz chauffeur service. Ideal for international executives attending conferences in New Cairo or guests staying at 5-star Nile-front resorts.",
    fullDescription: "For corporate travelers, international executives, and discerning visitors to Cairo, our Executive / VIP class delivers unmatched prestige and seamless discretion. Featuring obsidian black Mercedes-Benz E-Class and BMW 5-Series vehicles, you are received by a professional, immaculately suited chauffeur who assists with your luggage and coordinates directly with Cairo Airport VIP handling. Enjoy high-speed Wi-Fi, chilled mineral water, and whisper-quiet cabin insulation as you transition smoothly from your flight to your Nile-front hotel or boardroom.",
    luggageGuide: {
      checkedBags: "Up to 3 medium-to-large luxury suitcases (up to 28 in).",
      handLuggage: "Up to 3 laptop cases, garment bags, or designer carry-ons.",
      stroller: "Compact cabin-approved folding stroller fits in trunk.",
      specialBaggage: "Garment suit carriers can be hung in rear passenger hooks."
    },
    faqs: [
      {
        q: "What makes the Executive VIP tier different from a standard taxi?",
        a: "The Executive VIP tier guarantees a luxury German vehicle (principally Mercedes-Benz E-Class or BMW 5-Series) in immaculate showroom condition, piloted by a senior bilingual chauffeur in dark business suit and tie. Amenities include high-speed Wi-Fi, premium chilled water, smartphone charging, and 90 minutes of free terminal waiting time."
      },
      {
        q: "Can the chauffeur coordinate with Cairo Airport VIP Hall (Ahlan Service)?",
        a: "Yes. Our executive operations team works regularly with Cairo Airport Ahlan VIP lounges and Terminal 2/3 executive gates to ensure seamless curbside or lounge reception."
      },
      {
        q: "Can I book the car for a full day of meetings around Cairo?",
        a: "Certainly! We offer hourly and full-day executive chauffeur packages across Cairo, New Cairo, and Smart Village. Contact our VIP concierge team on WhatsApp for bespoke itineraries."
      }
    ]
  },
  {
    id: "private-minibus",
    slug: "airport-minibus",
    title: "Airport Shuttle & Minibus",
    name: "Group Transport Airport Shuttle & Minibus",
    category: "Tour Groups & Delegations",
    tag: "Group Saver",
    subtitle: "High capacity transport for large tour groups",
    image: "/images/fleet/airport-minibus.webp",
    alt: "Cairo Airport Shuttle & Minibus - Mercedes-Benz Sprinter / Toyota Coaster Group Transfer",
    maxPax: 16,
    maxLuggageLarge: 16,
    maxLuggageCabin: 16,
    capacity: "Up to 16 passengers • 16 bags",
    models: ["Mercedes-Benz Sprinter", "Toyota Coaster", "Toyota HiAce Extended 14-Seat"],
    modelBrands: [
      {
        brand: "Mercedes-Benz",
        model: "Sprinter Tourer (15-16 Pax)",
        year: "2021 - 2025",
        note: "Premium high-roof shuttle with reclining plush seats, individual reading lamps, and standing aisle."
      },
      {
        brand: "Toyota",
        model: "Coaster Luxury Minibus",
        year: "2020 - 2024",
        note: "The undisputed workhorse for organized Egyptian archaeological and tour group excursions."
      },
      {
        brand: "Toyota",
        model: "HiAce Super Long Wheelbase (13-14 Pax)",
        year: "2022 - 2025",
        note: "Compact agility through Cairo downtown traffic combined with generous group capacity."
      }
    ],
    features: [
      "High roof with comfortable walk-through aisle & standing height",
      "Separate rear luggage storage bay holding up to 16 full-size suitcases",
      "Individual overhead reading lights & high-capacity dual AC vents",
      "Public Address (PA) microphone system for tour guides & group leaders",
      "Full group airport curbside coordination & hotel check-in transit",
      "60 minutes complimentary waiting time for group passport collection"
    ],
    samplePriceCairo: 95,
    samplePriceGiza: 110,
    samplePriceAlexandria: 240,
    rates: [
      { destination: "Downtown Cairo / Nile Cruise Piers", priceUSD: 95, time: "40-50 mins", distance: "22 km" },
      { destination: "Giza Pyramids & Grand Egyptian Museum", priceUSD: 110, time: "60-75 mins", distance: "45 km" },
      { destination: "New Cairo Convention Center & Hotels", priceUSD: 90, time: "30-40 mins", distance: "18 km" },
      { destination: "6th of October City / Industrial Parks", priceUSD: 125, time: "70-85 mins", distance: "55 km" },
      { destination: "Alexandria Mediterranean Port & Hotels", priceUSD: 240, time: "3 hours", distance: "220 km" },
      { destination: "Ain Sokhna Red Sea Corporate Resorts", priceUSD: 250, time: "2 hours", distance: "135 km" },
      { destination: "Hurghada & Sharm El Sheikh Group Transit", priceUSD: 490, time: "5 - 6 hours", distance: "470 km" }
    ],
    bestFor: "Organized tour groups, university delegations, wedding parties, family reunions, and event attendees.",
    description: "Designed for organized tour groups and large families landing together at Cairo Airport. Keep your entire party in one vehicle with ample room for all checked bags and carry-ons.",
    fullDescription: "Organizing transportation for 8 to 16 passengers arriving at Cairo International Airport can easily become chaotic with multiple separate taxis. Our Airport Shuttle & Minibus service provides the ultimate stress-free group transfer. With high-roof Mercedes-Benz Sprinter and Toyota Coaster minibuses, your entire group stays together under the care of an experienced long-distance chauffeur. Every passenger enjoys a comfortable window or aisle seat, personalized air conditioning vents, and plenty of space in the dedicated rear luggage compartment for up to 16 large suitcases.",
    luggageGuide: {
      checkedBags: "Up to 16 standard large suitcases (28 in / 23 kg each) in dedicated rear cargo bay.",
      handLuggage: "16 overhead or underseat backpacks and carry-on bags.",
      stroller: "Multiple foldable strollers, wheelchairs, or expedition gear fit easily.",
      specialBaggage: "Custom luggage trailers available upon advance request for extra-large exhibitions."
    },
    faqs: [
      {
        q: "How does the driver coordinate with a group of 10 to 16 arriving passengers?",
        a: "Our dispatch team monitors the flight number and communicates with your group leader via WhatsApp prior to landing. Your chauffeur meets you right outside the baggage exit with an oversized company sign to assemble all passengers smoothly before escorting everyone directly to the designated minibus terminal bay."
      },
      {
        q: "Is there enough room for both 16 passengers AND all their suitcases?",
        a: "Yes. Our Mercedes Sprinter and Toyota Coaster shuttles are equipped with extended chassis and dedicated rear luggage partitions designed specifically for airport luggage transit."
      },
      {
        q: "Is an English-speaking driver provided?",
        a: "Yes, all our group minibus chauffeurs are fully licensed, experienced in Egyptian highway transit, and speak fluent conversational English."
      }
    ]
  }
];
