export interface FleetVehicle {
  id: string;
  name: string;
  category: string;
  tag: string;
  image: string;
  maxPax: number;
  maxLuggageLarge: number;
  maxLuggageCabin: number;
  models: string[];
  features: string[];
  samplePriceCairo: number;
  samplePriceGiza: number;
  samplePriceAlexandria: number;
  bestFor: string;
  description: string;
}

export const fleetVehicles: FleetVehicle[] = [
  {
    id: "standard-sedan",
    name: "Standard Private Sedan",
    category: "Economy & Solo Travel",
    tag: "Budget Friendly",
    image: "/images/cairo-downtown.jpg",
    maxPax: 3,
    maxLuggageLarge: 2,
    maxLuggageCabin: 2,
    models: ["Toyota Corolla", "Hyundai Elantra", "Nissan Sentra"],
    features: [
      "High-output air conditioning",
      "Free flight delay tracking",
      "Complimentary inside Meet & Greet",
      "Bottled mineral water",
      "Clean, non-smoking interior"
    ],
    samplePriceCairo: 24,
    samplePriceGiza: 32,
    samplePriceAlexandria: 89,
    bestFor: "Solo travelers, couples, light packers, and business day-trippers.",
    description: "Our modern, air-conditioned private sedans offer reliable, cost-effective door-to-door transport from Cairo Airport directly to any hotel in Cairo or Giza. Perfect for travelers with up to two standard checked suitcases."
  },
  {
    id: "private-minivan",
    name: "Spacious Private Minivan",
    category: "Families & Small Groups",
    tag: "Most Popular",
    image: "/images/hero-banner.jpg",
    maxPax: 7,
    maxLuggageLarge: 6,
    maxLuggageCabin: 6,
    models: ["Toyota HiAce Combi", "Hyundai H1", "Mercedes-Benz Vito"],
    features: [
      "Generous cargo hold for multiple oversized bags",
      "Child & baby booster seats on request",
      "Dual-zone front & rear climate control",
      "Spacious legroom & tinted privacy windows",
      "Dedicated baggage assistance"
    ],
    samplePriceCairo: 38,
    samplePriceGiza: 48,
    samplePriceAlexandria: 129,
    bestFor: "Families traveling with children, groups with heavy overseas baggage, and golf enthusiasts.",
    description: "The ideal solution for families landing at Cairo Airport with multiple checked suitcases, strollers, or sports gear. Our spacious private minivans ensure comfortable seating without luggage encroaching on leg space."
  },
  {
    id: "executive-vip",
    name: "Executive VIP Luxury Sedan",
    category: "Business & Premium Comfort",
    tag: "VIP Luxury",
    image: "/images/giza-pyramids.jpg",
    maxPax: 3,
    maxLuggageLarge: 3,
    maxLuggageCabin: 3,
    models: ["Mercedes-Benz E-Class", "BMW 5-Series", "Audi A6"],
    features: [
      "Suited, English-speaking executive chauffeur",
      "High-speed onboard 4G Wi-Fi hotspot",
      "Premium leather seating with seat climate control",
      "Chilled mineral water & USB charging ports",
      "Priority VIP curbside express pickup"
    ],
    samplePriceCairo: 65,
    samplePriceGiza: 75,
    samplePriceAlexandria: 195,
    bestFor: "Diplomats, corporate executives, VIP guests, and luxury anniversary trips.",
    description: "Travel in uncompromised sophistication with our executive Mercedes-Benz chauffeur service. Ideal for international executives attending conferences in New Cairo or guests staying at 5-star Nile-front resorts."
  },
  {
    id: "private-minibus",
    name: "Group Transport Minibus",
    category: "Tour Groups & Delegations",
    tag: "Group Saver",
    image: "/images/alexandria-coast.jpg",
    maxPax: 16,
    maxLuggageLarge: 16,
    maxLuggageCabin: 16,
    models: ["Toyota Coaster", "Mercedes-Benz Sprinter"],
    features: [
      "High roof with walk-through aisle",
      "Separate rear luggage storage compartment",
      "Individual overhead reading lights & AC vents",
      "PA audio system for group leaders/guides",
      "Direct group hotel check-in transit"
    ],
    samplePriceCairo: 95,
    samplePriceGiza: 110,
    samplePriceAlexandria: 240,
    bestFor: "Tour groups, university delegations, wedding parties, and event attendees.",
    description: "Designed for organized tour groups and large families landing together at Cairo Airport. Keep your entire party in one vehicle with ample room for all checked bags and carry-ons."
  }
];
