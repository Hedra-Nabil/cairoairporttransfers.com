export interface TransferRouteData {
  slug: string;
  destinationName: string;
  targetKeyword: string;
  metaTitle: string;
  metaDescription: string;
  heroHeadline: string;
  distanceKm: number;
  driveTimeMin: string;
  expressway: string;
  startingPriceUSD: number;
  featuredImage: string;
  overview: string;
  keyHotels: string[];
  pricing: {
    sedan: number;
    minivan: number;
    executive: number;
    minibus: number;
  };
  faqs: Array<{ q: string; a: string }>;
}

export const transferRoutes: TransferRouteData[] = [
  {
    slug: "cairo-airport-to-giza-pyramids",
    destinationName: "Giza Pyramids & Grand Egyptian Museum",
    targetKeyword: "cairo airport to giza pyramids transfer",
    metaTitle: "Cairo Airport to Giza Pyramids Transfer | Private Taxi & Rates",
    metaDescription: "Book a private transfer from Cairo Airport (CAI) to Giza Pyramids & GEM. Fixed fares from $32, flight delay protection, AC vehicles, and Meet & Greet included.",
    heroHeadline: "Private Transfer from Cairo Airport to Giza Pyramids",
    distanceKm: 38,
    driveTimeMin: "50 - 70 mins",
    expressway: "Ring Road West / Mehwar 26th July",
    startingPriceUSD: 32,
    featuredImage: "/images/giza-pyramids.jpg",
    overview: "Avoid chaotic cross-town traffic and street taxi haggling. Our private chauffeur greets you inside Cairo Airport arrivals and transports your party directly to your Giza plateau hotel in cool, air-conditioned comfort.",
    keyHotels: ["Marriott Mena House", "Steigenberger Pyramids", "Hyatt Regency West", "Pyramids View Inn", "Guardian Guest House"],
    pricing: { sedan: 32, minivan: 48, executive: 75, minibus: 110 },
    faqs: [
      {
        q: "How long does a transfer take from Cairo Airport to Giza?",
        a: "The drive typically takes between 50 to 70 minutes via the Cairo Ring Road, depending on traffic conditions and flight arrival time."
      },
      {
        q: "Can the driver drop us directly at our pyramid-view hotel or Airbnb?",
        a: "Yes, our drivers provide direct door-to-door service to any hotel, resort, or private residence across the Giza and Haram districts."
      },
      {
        q: "Is the Grand Egyptian Museum (GEM) along this route?",
        a: "Yes! Our chauffeurs pass right along the Alexandria Desert Road corridor where the new Grand Egyptian Museum is situated."
      }
    ]
  },
  {
    slug: "cairo-airport-to-downtown-cairo",
    destinationName: "Downtown Cairo & Tahrir Square",
    targetKeyword: "cairo airport to downtown transfer",
    metaTitle: "Cairo Airport to Downtown Cairo Transfer | Fixed Rate Taxi",
    metaDescription: "Reliable private transfer from Cairo Airport (CAI) to Downtown Cairo, Tahrir Square & Zamalek. Fixed fares from $24, inside Meet & Greet, and 24/7 dispatch.",
    heroHeadline: "Cairo Airport to Downtown Cairo & Tahrir Transfers",
    distanceKm: 21,
    driveTimeMin: "35 - 50 mins",
    expressway: "Salah Salem Highway / 6th October Bridge",
    startingPriceUSD: 24,
    featuredImage: "/images/cairo-downtown.jpg",
    overview: "Travel swiftly from Cairo Airport into the cultural heart of Cairo. Whether staying near the historic Egyptian Museum, Tahrir Square, or the Nile Corniche, arrive refreshed with fixed transparent rates and luggage assistance.",
    keyHotels: ["The Nile Ritz-Carlton", "Steigenberger Hotel El Tahrir", "InterContinental Semiramis", "Four Seasons at Nile Plaza"],
    pricing: { sedan: 24, minivan: 38, executive: 65, minibus: 95 },
    faqs: [
      {
        q: "Are parking and airport gate fees included in the price?",
        a: "Yes, all CAI terminal entry fees, airport parking, and highway tolls are 100% included in your quoted fare."
      },
      {
        q: "Will the driver assist with luggage to the hotel reception?",
        a: "Yes, your chauffeur will load your bags at the terminal and unload them directly at your hotel entrance curbside."
      }
    ]
  },
  {
    slug: "cairo-airport-to-new-cairo",
    destinationName: "New Cairo & 5th Settlement",
    targetKeyword: "cairo airport to new cairo taxi",
    metaTitle: "Cairo Airport to New Cairo (Tagamoa) Transfer | Private Car",
    metaDescription: "Fast private transfer from Cairo Airport (CAI) to New Cairo & the 5th Settlement. Clean AC cars, fixed rates from $22, flight tracking, and instant booking.",
    heroHeadline: "Private Transfer from Cairo Airport to New Cairo",
    distanceKm: 18,
    driveTimeMin: "20 - 30 mins",
    expressway: "Suez Road / Eastern Ring Road",
    startingPriceUSD: 22,
    featuredImage: "/images/cairo-downtown.jpg",
    overview: "New Cairo is only 20 minutes away from Cairo International Airport. Our private chauffeurs provide rapid transfers for business and leisure guests traveling to the 5th Settlement, 90th Street, and Cairo Festival City.",
    keyHotels: ["Dusit Thani LakeView", "Renaissance Cairo Mirage City", "Triumph Luxury Hotel", "Royal Maxim Palace Kempinski"],
    pricing: { sedan: 22, minivan: 34, executive: 60, minibus: 85 },
    faqs: [
      {
        q: "How fast can I reach New Cairo from Cairo Airport?",
        a: "Because New Cairo is located directly southeast of the airport, transit via the Suez Road corridor usually takes just 20 to 30 minutes."
      },
      {
        q: "Can I book a transfer to the New Administrative Capital?",
        a: "Yes, we provide ongoing transfers to the New Administrative Capital (NAC) directly connected through the Regional Ring Road."
      }
    ]
  },
  {
    slug: "cairo-airport-to-alexandria",
    destinationName: "Alexandria City & Mediterranean Coast",
    targetKeyword: "cairo airport to alexandria private transfer",
    metaTitle: "Cairo Airport to Alexandria Transfer | Private Long-Distance Taxi",
    metaDescription: "Direct door-to-door private transfer from Cairo Airport (CAI) to Alexandria. Fixed rates from $89, luxury AC vehicles, highway toll inclusion, and luggage room.",
    heroHeadline: "Cairo Airport to Alexandria Private Highway Transfer",
    distanceKm: 225,
    driveTimeMin: "2.5 - 3 hours",
    expressway: "Cairo-Alexandria Desert Road",
    startingPriceUSD: 89,
    featuredImage: "/images/alexandria-coast.jpg",
    overview: "Skip the crowded train stations and multiple taxi connections. Travel directly from Cairo Airport to Alexandria in a private, spacious vehicle with chilled mineral water, onboard Wi-Fi, and highway toll inclusion.",
    keyHotels: ["Four Seasons Hotel San Stefano", "Hilton Alexandria Corniche", "Steigenberger Cecil Hotel", "Alexandria Port Terminal"],
    pricing: { sedan: 89, minivan: 129, executive: 195, minibus: 240 },
    faqs: [
      {
        q: "Can the driver stop at rest stations along the Desert Road?",
        a: "Yes. Our drivers happily accommodate rest, restroom, and coffee breaks at modern, clean highway rest plazas along the route."
      },
      {
        q: "Are toll gate fees included in the price?",
        a: "Yes, all toll gates along the Cairo-Alexandria Desert Road and Alexandria entry points are fully covered in your booking."
      }
    ]
  },
  {
    slug: "cairo-airport-to-zamalek",
    destinationName: "Zamalek Island & Gezira",
    targetKeyword: "cairo airport to zamalek transfer",
    metaTitle: "Cairo Airport to Zamalek Transfer | Private Taxi & Chauffeur",
    metaDescription: "Pre-book a private transfer from Cairo Airport (CAI) to Zamalek Island. Safe AC vehicles, fixed rates from $26, inside terminal Meet & Greet, and 24/7 service.",
    heroHeadline: "Private Transfer from Cairo Airport to Zamalek Island",
    distanceKm: 24,
    driveTimeMin: "40 - 55 mins",
    expressway: "6th of October Bridge / 26th of July Corridor",
    startingPriceUSD: 26,
    featuredImage: "/images/cairo-downtown.jpg",
    overview: "Arrive seamlessly on Zamalek, Cairo's prestigious Nile island known for leafy embassies, boutique hotels, and premier fine dining. Avoid taxi route disputes with professional drivers who know every quiet residential street in Gezira.",
    keyHotels: ["Cairo Marriott Hotel & Omar Khayyam Casino", "Sofitel Cairo Nile El Gezirah", "Hilton Cairo Zamalek Residences", "Golden Tulip Flamenco"],
    pricing: { sedan: 26, minivan: 40, executive: 70, minibus: 100 },
    faqs: [
      {
        q: "How does the driver handle Zamalek's traffic and narrow streets?",
        a: "Our experienced chauffeurs use live traffic navigation to bypass bridge congestion and take you directly to your hotel entrance or residence."
      },
      {
        q: "Is pickup available for late-night flights into CAI?",
        a: "Yes, our dispatch and drivers operate 24 hours a day, 7 days a week, 365 days a year with real-time flight tracking."
      }
    ]
  },
  {
    slug: "cairo-airport-to-heliopolis",
    destinationName: "Heliopolis & Korba",
    targetKeyword: "cairo airport to heliopolis taxi",
    metaTitle: "Cairo Airport to Heliopolis Transfer | Quick Hotel Taxi",
    metaDescription: "Fast, reliable 15-minute transfer from Cairo Airport (CAI) to Heliopolis & Korba. Fixed fares from $18, clean modern cars, and personal Meet & Greet.",
    heroHeadline: "Cairo Airport to Heliopolis Private Hotel Transfers",
    distanceKm: 8,
    driveTimeMin: "10 - 18 mins",
    expressway: "Orouba St / Airport Access Corridor",
    startingPriceUSD: 18,
    featuredImage: "/images/cairo-downtown.jpg",
    overview: "Heliopolis is the closest historic district to Cairo International Airport. Perfect for flight layovers, transit hotel stays, or business appointments in Korba, our rapid transfer gets you checked in within minutes of clearing customs.",
    keyHotels: ["Le Méridien Cairo Airport", "Baron Hotel Heliopolis", "Radisson Blu Hotel Cairo Heliopolis", "Concorde El Salam Hotel"],
    pricing: { sedan: 18, minivan: 28, executive: 50, minibus: 75 },
    faqs: [
      {
        q: "How fast can I get to my hotel in Heliopolis?",
        a: "Most Heliopolis hotels are located within 5 to 8 kilometers of the terminals, taking only 10 to 18 minutes by private car."
      },
      {
        q: "Can I book a transfer if I have an 8-hour layover at Cairo Airport?",
        a: "Yes, we can take you to a local hotel in Heliopolis or provide a private round-trip layover transfer with scheduled return pickup."
      }
    ]
  },
  {
    slug: "cairo-airport-to-ain-sokhna",
    destinationName: "Ain Sokhna (Red Sea Coast)",
    targetKeyword: "cairo airport to ain sokhna transfer",
    metaTitle: "Cairo Airport to Ain Sokhna Transfer | Private Red Sea Taxi",
    metaDescription: "Direct private transfer from Cairo Airport (CAI) to Ain Sokhna Red Sea resorts. Door-to-door comfort from $75, highway tolls included, and spacious luggage room.",
    heroHeadline: "Private Transfer from Cairo Airport to Ain Sokhna Resorts",
    distanceKm: 130,
    driveTimeMin: "1 hour 45 mins",
    expressway: "Katameya-Ain Sokhna Highway",
    startingPriceUSD: 75,
    featuredImage: "/images/alexandria-coast.jpg",
    overview: "Escape directly from your flight to the sunny Red Sea shores of Ain Sokhna. Travel comfortably along the modern Katameya Highway straight to your beachfront resort, villa, or yacht marina with zero transfer hassle.",
    keyHotels: ["Mövenpick Resort El Sokhna", "Stella Di Mare Grand Hotel", "Porto Sokhna Beach Resort", "Cancún Sokhna Resort"],
    pricing: { sedan: 75, minivan: 110, executive: 165, minibus: 210 },
    faqs: [
      {
        q: "How long does it take from Cairo Airport to Ain Sokhna?",
        a: "The drive takes approximately 1 hour and 45 minutes on the smooth, multi-lane Katameya-Ain Sokhna Highway."
      },
      {
        q: "Are the highway tolls to the Red Sea included in the fare?",
        a: "Yes, all military highway toll gates and resort access fees are 100% included in the fixed price."
      }
    ]
  },
  {
    slug: "cairo-airport-to-hurghada",
    destinationName: "Hurghada & El Gouna",
    targetKeyword: "cairo airport to hurghada private transfer",
    metaTitle: "Cairo Airport to Hurghada Transfer | Private Long-Distance Car",
    metaDescription: "Direct door-to-door private transfer from Cairo Airport (CAI) to Hurghada & El Gouna. Safe highway vehicles, fixed rates from $180, and rest stop flexibility.",
    heroHeadline: "Cairo Airport to Hurghada & El Gouna Private Transfers",
    distanceKm: 465,
    driveTimeMin: "4.5 - 5.5 hours",
    expressway: "Galala Highway / Hurghada Coastal Road",
    startingPriceUSD: 180,
    featuredImage: "/images/alexandria-coast.jpg",
    overview: "Need direct private ground transportation between Cairo Airport and the premier dive resorts of Hurghada or El Gouna? Our certified highway chauffeurs provide door-to-door long-distance transit with clean rest stops and generous luggage space.",
    keyHotels: ["Steigenberger ALDAU Beach Hotel", "Rixos Premium Magawish", "The Chedi El Gouna", "Sheraton Miramar El Gouna"],
    pricing: { sedan: 180, minivan: 250, executive: 340, minibus: 420 },
    faqs: [
      {
        q: "Is it safe to drive from Cairo Airport to Hurghada?",
        a: "Yes, the route follows the newly engineered Galala Mountain Highway and Red Sea Coastal Expressway, which are modern, multi-lane divided toll roads."
      },
      {
        q: "Can we request rest stops along the 5-hour drive to Hurghada?",
        a: "Yes! Your private driver will stop at modern highway service plazas with air-conditioned cafes, clean restrooms, and refreshments as often as you wish."
      }
    ]
  }
];
