export interface AirportGuideData {
  slug: string;
  terminalCode: string;
  name: string;
  shortTitle: string;
  metaTitle: string;
  metaDescription: string;
  badge: string;
  headline: string;
  subheadline: string;
  meetingPoint: {
    location: string;
    description: string;
    stepByStep: string[];
    tips: string[];
  };
  airlinesServed: string[];
  facilities: string[];
  distanceToDowntown: string;
  distanceToPyramids: string;
  faqs: Array<{ q: string; a: string }>;
}

export const airportGuides: AirportGuideData[] = [
  {
    slug: "cairo-international-airport",
    terminalCode: "CAI Hub",
    name: "Cairo International Airport (CAI) - Complete Guide",
    shortTitle: "Cairo Airport (CAI) Overview",
    metaTitle: "Cairo International Airport (CAI) Guide | Terminals & Transfers",
    metaDescription: "Comprehensive Cairo International Airport guide (CAI). Learn about Terminals 1, 2, and 3, immigration, SIM cards, currency exchange, and private transfers.",
    badge: "Official Airport Guide",
    headline: "Cairo International Airport (CAI) Passenger & Transfer Guide",
    subheadline: "Everything you need to navigate Egypt's primary aviation gateway: Terminals 1, 2, and 3, arrivals procedures, baggage reclaim, and verified private taxi transfers.",
    meetingPoint: {
      location: "Public Arrival Halls (All Terminals)",
      description: "Chauffeurs greet travelers inside the designated public arrivals greeting hall immediately after customs and baggage claim with a personalized name board.",
      stepByStep: [
        "Disembark and proceed through international quarantine and health counters.",
        "Purchase your Egypt Visa-on-Arrival at the official bank counters ($25 USD) before passport control if required.",
        "Pass through Egyptian immigration and enter the baggage claim carousel hall.",
        "Collect your checked luggage and walk through the customs screening checkpoint.",
        "Enter the public arrival lounge where your designated driver is holding your name board."
      ],
      tips: [
        "Official SIM card booths (Vodafone, Orange, WE, e&) operate 24/7 inside the arrivals lounges.",
        "Complimentary 60 minutes waiting time begins only from flight landing time.",
        "Free Automated People Mover (APM) train connects Terminal 1, Terminal 2, and Terminal 3."
      ]
    },
    airlinesServed: [
      "EgyptAir", "British Airways", "Emirates", "Air France", "Lufthansa", 
      "Saudia", "Qatar Airways", "Turkish Airlines", "Flydubai", "Air Arabia"
    ],
    facilities: [
      "24/7 Bank ATMs & Currency Exchange",
      "Official Egyptian Telecom Kiosks (Vodafone / Orange / WE / e&)",
      "Automated People Mover (APM) Inter-terminal Train",
      "Duty-Free Shops (Within 48h of arrival)",
      "Luggage Storage & Wrapping Services",
      "Executive VIP & Star Alliance Lounges"
    ],
    distanceToDowntown: "21 km (35–45 mins)",
    distanceToPyramids: "38 km (50–70 mins)",
    faqs: [
      {
        q: "How many terminals are there at Cairo International Airport?",
        a: "CAI has three primary passenger commercial terminals (Terminal 1, Terminal 2, and Terminal 3) connected by an Automated People Mover (APM) and free shuttle buses."
      },
      {
        q: "How far is Cairo Airport from central Cairo and the Pyramids?",
        a: "The airport is located 21 km northeast of Downtown Cairo (approx. 40 minutes drive) and 38 km from the Giza Pyramids (approx. 50–70 minutes via the Ring Road)."
      },
      {
        q: "Can I buy a local Egyptian SIM card upon arrival?",
        a: "Yes, official telecom booths from Vodafone, Orange, WE, and e& are situated right in the arrivals hall after baggage reclaim and remain open 24/7."
      }
    ]
  },
  {
    slug: "cairo-airport-terminal-3",
    terminalCode: "Terminal 3",
    name: "Cairo Airport Terminal 3 Guide (EgyptAir & Star Alliance)",
    shortTitle: "Terminal 3 (EgyptAir / Star Alliance)",
    metaTitle: "Cairo Airport Terminal 3 Guide | EgyptAir Arrivals & Transfers",
    metaDescription: "Guide to Cairo Airport Terminal 3 (CAI T3). Dedicated to EgyptAir and Star Alliance flights. Customs instructions, arrival meeting point, and pre-booked transfers.",
    badge: "Flagship Terminal",
    headline: "Cairo Airport Terminal 3 (T3) Arrivals & Transfers Guide",
    subheadline: "Serving EgyptAir, Turkish Airlines, Lufthansa, Swiss, Ethiopian, and Star Alliance members. Learn where to meet your private chauffeur after customs.",
    meetingPoint: {
      location: "Terminal 3 Public Arrival Hall (Curbside Barrier)",
      description: "Directly opposite the customs sliding glass exit doors at the designated passenger greeting barrier.",
      stepByStep: [
        "Exit the aircraft through the modern passenger jetbridge into Terminal 3 concourse.",
        "Clear Passport Control and collect your baggage at carousels 1 through 7.",
        "Pass through Customs inspection scanners.",
        "Walk straight out into the main Terminal 3 greeting hall.",
        "Your chauffeur will be waiting directly by the barrier holding a clear white board with your name."
      ],
      tips: [
        "Terminal 3 is directly connected to the luxury Le Méridien Cairo Airport hotel via an enclosed pedestrian footbridge.",
        "If you have excess baggage, airport luggage carts are available for free in the carousel area."
      ]
    },
    airlinesServed: [
      "EgyptAir", "Lufthansa", "Turkish Airlines", "Swiss International", 
      "Austrian Airlines", "Ethiopian Airlines", "Aegean Airlines", "LOT Polish Airlines"
    ],
    facilities: [
      "EgyptAir Alioth & Golden Lounge",
      "Direct pedestrian link to Le Méridien Hotel",
      "Telecom Kiosks (Vodafone / Orange / WE)",
      "24/7 National Bank of Egypt Currency Exchange",
      "Duty Free Arrival Concourse"
    ],
    distanceToDowntown: "20 km (35–45 mins)",
    distanceToPyramids: "37 km (50–65 mins)",
    faqs: [
      {
        q: "Which airlines fly into Cairo Airport Terminal 3?",
        a: "Terminal 3 is the dedicated hub for EgyptAir (both domestic and international) as well as all Star Alliance member airlines such as Lufthansa, Swiss, Turkish Airlines, and Ethiopian Airlines."
      },
      {
        q: "Where will my driver be waiting at Terminal 3?",
        a: "Your driver will be positioned inside the air-conditioned arrival greeting lounge right after you exit the customs doors, holding a personalized name board."
      }
    ]
  },
  {
    slug: "cairo-airport-terminal-2",
    terminalCode: "Terminal 2",
    name: "Cairo Airport Terminal 2 Guide (SkyTeam, oneworld, Gulf Airlines)",
    shortTitle: "Terminal 2 (International Flag Carriers)",
    metaTitle: "Cairo Airport Terminal 2 Guide | Emirates, BA, Saudia Transfers",
    metaDescription: "Cairo Airport Terminal 2 guide (CAI T2). Find arrivals instructions for British Airways, Emirates, Air France, Saudia, and book direct private hotel transfers.",
    badge: "Modern International Hub",
    headline: "Cairo Airport Terminal 2 (T2) Arrivals & Transfers Guide",
    subheadline: "Home to premier international flag carriers: British Airways, Emirates, Air France, Saudia, and Gulf airlines. Step-by-step arrivals and transfer pickup.",
    meetingPoint: {
      location: "Terminal 2 Arrival Lobby (Near Bank & Telecom Counters)",
      description: "Inside the primary Terminal 2 arrivals hall, positioned directly past the customs declaration gates by the info kiosk.",
      stepByStep: [
        "Follow the elevated moving walkways to Terminal 2 immigration counters.",
        "Collect your baggage from the baggage hall.",
        "Pass customs inspection and step into the public reception lounge.",
        "Locate your driver holding your name placard near the center information display."
      ],
      tips: [
        "Terminal 2 is adjacent to Terminal 3 and shares convenient covered bridge access.",
        "Several ATMs offering cash withdrawal in Egyptian Pounds (EGP) are located directly inside the greeting area."
      ]
    },
    airlinesServed: [
      "Emirates", "British Airways", "Air France", "Saudia", "Qatar Airways", 
      "Etihad Airways", "Kuwait Airways", "Royal Jordanian", "Gulf Air", "Oman Air"
    ],
    facilities: [
      "Emirates Dedicated Business Lounge",
      "SkyTeam & oneworld Partner Lounges",
      "24/7 International Banking & Currency Counters",
      "High-speed Airport Wi-Fi Zone",
      "Starbucks & Food Court Area"
    ],
    distanceToDowntown: "21 km (35–45 mins)",
    distanceToPyramids: "38 km (50–70 mins)",
    faqs: [
      {
        q: "Which airlines arrive at Cairo Airport Terminal 2?",
        a: "Terminal 2 serves major international European and Middle Eastern airlines including Emirates, British Airways, Air France, Saudia, Qatar Airways, and Etihad."
      },
      {
        q: "How do I transfer between Terminal 2 and Terminal 3?",
        a: "Terminal 2 and Terminal 3 are directly connected via a modern enclosed pedestrian walkway; you can walk between them in less than 5 minutes without taking a taxi."
      }
    ]
  },
  {
    slug: "cairo-airport-terminal-1",
    terminalCode: "Terminal 1",
    name: "Cairo Airport Terminal 1 Guide (Budget & Regional Flights)",
    shortTitle: "Terminal 1 (Regional & Budget)",
    metaTitle: "Cairo Airport Terminal 1 Guide | Budget Airlines & Private Taxi",
    metaDescription: "Guide to Cairo Airport Terminal 1 ('Old Airport'). Airlines directory, arrivals pickup guide, and private taxi transfers to Downtown, Giza, and Alexandria.",
    badge: "Historic Hub",
    headline: "Cairo Airport Terminal 1 (T1) Passenger & Transfer Guide",
    subheadline: "Known locally as the 'Old Airport'. Serving budget, charter, domestic, and regional Middle Eastern carriers like Flydubai, Air Arabia, and Nile Air.",
    meetingPoint: {
      location: "Terminal 1 Outside Curbside Receiving Lane",
      description: "Immediately outside the main Terminal 1 glass sliding arrival doors at the private passenger transfer bay.",
      stepByStep: [
        "Exit through immigration and baggage reclaim.",
        "Pass through the customs scanning room.",
        "Exit through the automated glass sliding doors to the covered reception lane.",
        "Your chauffeur will meet you at the designated greeting station with your name sign."
      ],
      tips: [
        "Terminal 1 is located approximately 3 km from Terminals 2 and 3; use the free automated APM shuttle to connect between them.",
        "Pre-booking a transfer is strongly recommended at Terminal 1 to avoid high volumes of unmetered street taxi touts."
      ]
    },
    airlinesServed: [
      "Air Arabia", "Flydubai", "Flynas", "Nile Air", "Nesma Airlines", 
      "Air Cairo", "AlMasria Universal Airlines", "Tarco Aviation"
    ],
    facilities: [
      "ATM & Currency Exchange Centers",
      "Regional Airline Ticket Offices",
      "Free APM Train Station to T2/T3",
      "Public Cafeterias & Kiosks"
    ],
    distanceToDowntown: "22 km (35–45 mins)",
    distanceToPyramids: "39 km (50–70 mins)",
    faqs: [
      {
        q: "Is Terminal 1 the same as the Old Cairo Airport?",
        a: "Yes, Terminal 1 is historically known as the 'Old Airport' or 'Al Matar Al Qadeem' in Arabic. It is located 3 kilometers west of Terminals 2 and 3."
      },
      {
        q: "How do I get to Terminals 2 or 3 from Terminal 1?",
        a: "Take the free automated People Mover (APM) electric train, which runs every 5 to 10 minutes between Terminal 1, the AirMall, and Terminals 2 & 3."
      }
    ]
  },
  {
    slug: "sphinx-airport-transfers",
    terminalCode: "SPX Airport",
    name: "Sphinx International Airport (SPX) Transfers & Guide",
    shortTitle: "Sphinx Airport (SPX) Guide",
    metaTitle: "Sphinx Airport Transfers (SPX) | Private Taxi to Giza Pyramids",
    metaDescription: "Private airport transfers from Sphinx International Airport (SPX) directly to Giza Pyramids and West Cairo hotels. Fixed rates, Meet & Greet, and 24/7 dispatch.",
    badge: "West Cairo Gateway",
    headline: "Sphinx International Airport (SPX) Transfers & Passenger Guide",
    subheadline: "Located on the western outskirts of Cairo, only 25 minutes from the Giza Pyramids and Grand Egyptian Museum (GEM). Avoid downtown traffic entirely.",
    meetingPoint: {
      location: "SPX Main Terminal Arrival Concourse",
      description: "Directly outside the single-terminal arrivals baggage hall doors at the VIP pickup curb.",
      stepByStep: [
        "Disembark and enter Sphinx Airport's modern single-level terminal building.",
        "Clear passport control and collect baggage from the compact carousel hall.",
        "Exit through the customs inspection lane.",
        "Meet your designated chauffeur waiting outside with your name board."
      ],
      tips: [
        "SPX is the fastest airport for travelers visiting the Pyramids, Sheikh Zayed City, and 6th of October City.",
        "Traffic from SPX to Giza is significantly lighter than from Cairo International Airport (CAI)."
      ]
    },
    airlinesServed: [
      "Wizz Air", "easyJet", "Air Cairo", "Flynas", "Jazeera Airways", "Pegasus Airlines"
    ],
    facilities: [
      "Modern Single-Terminal Architecture",
      "Baggage Wrapping & Reclaim Hall",
      "Official Bank & Currency Exchange",
      "Telecom SIM Card Kiosk",
      "VIP Limousine Pickup Lanes"
    ],
    distanceToDowntown: "45 km (45–60 mins)",
    distanceToPyramids: "28 km (25–35 mins)",
    faqs: [
      {
        q: "Is Sphinx Airport closer to the Pyramids than Cairo Airport?",
        a: "Yes! Sphinx Airport (SPX) is located on the Cairo-Alexandria Desert Road in West Cairo, only 28 km (approx. 25–30 minutes) from the Giza Pyramids, compared to 38 km and heavier traffic from CAI."
      },
      {
        q: "Which airlines fly into Sphinx International Airport?",
        a: "SPX is primarily served by European budget carriers such as Wizz Air and easyJet, as well as regional carriers like Flynas and Air Cairo."
      }
    ]
  }
];
