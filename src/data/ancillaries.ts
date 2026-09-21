export interface AncillaryService {
  slug: string;
  title: string;
  arabicTitle: string;
  tag: string;
  badgeColor: string;
  priceUSD: number;
  priceUnit: string;
  image: string;
  alt: string;
  shortDescription: string;
  metaDescription: string;
  fullDescription: string;
  benefits: string[];
  howItWorks: Array<{ step: number; title: string; desc: string }>;
  terminalsAvailable: string[];
  faqs: Array<{ q: string; a: string }>;
}

export const ancillaryServices: AncillaryService[] = [
  {
    slug: "vip-fast-track",
    title: "Cairo Airport VIP Fast-Track & Ahlan Service",
    arabicTitle: "خدمة أهلاً والمسار السريع",
    tag: "Skip All Queues",
    badgeColor: "bg-amber-400 text-slate-950",
    priceUSD: 45,
    priceUnit: "per passenger",
    image: "/images/ancillaries/vip-fast-track.webp",
    alt: "Cairo International Airport VIP Fast Track Hostess and VIP Airport Ahlan Service",
    shortDescription: "Bypass long arrival queues. A dedicated VIP airport officer meets you at the jet bridge and expedites immigration, visa-on-arrival, and customs.",
    metaDescription: "Bypass queues at Cairo Airport (CAI). Dedicated VIP officer greets you at the gate for express passport control & visa assistance. From $45/person.",
    fullDescription: "Arriving at Cairo International Airport (CAI) after a long flight can mean enduring lengthy queues at visa counters, passport control, and baggage inspection. Our VIP Fast-Track (Ahlan Service) assigns a dedicated airport protocol representative who greets you right at the aircraft disembarkation gate or terminal entrance. You are guided through priority diplomatic/VIP lanes for rapid Egyptian visa stamping, accelerated passport clearance, and dedicated baggage assistance, whisking you effortlessly to your waiting chauffeur.",
    benefits: [
      "Personal protocol officer meets you directly at the aircraft jet bridge",
      "Expedited VIP priority lane through Egyptian Passport Control",
      "Assistance with purchasing the mandatory $25 USD Egypt Visa-on-Arrival",
      "Dedicated baggage porterage from carousel directly to vehicle trunk",
      "Seamless escort straight through customs screening to your chauffeur",
      "Available 24/7 across Terminal 1, Terminal 2, and Terminal 3"
    ],
    howItWorks: [
      {
        step: 1,
        title: "Jet Bridge Welcome",
        desc: "As you step off the plane, your uniformed Ahlan protocol host greets you holding a customized electronic tablet with your name."
      },
      {
        step: 2,
        title: "Express Visa & Passport Clearance",
        desc: "You are escorted directly to the dedicated VIP counter to finalize visa stamps and passport validation in under 5 minutes."
      },
      {
        step: 3,
        title: "Luggage Porterage & Direct Handover",
        desc: "Your porter collects all checked suitcases from the carousel and escorts you out to your waiting private chauffeur."
      }
    ],
    terminalsAvailable: ["Terminal 1", "Terminal 2", "Terminal 3", "Sphinx Airport (SPX)"],
    faqs: [
      {
        q: "What is the difference between standard transfer pickup and VIP Fast-Track?",
        a: "For standard transfers, your chauffeur waits right outside the arrival terminal exit doors holding your personalized name sign. VIP Fast-Track begins before passport control—right at the aircraft jet bridge—with an airport protocol host who escorts you through express immigration, visa processing, and baggage reclaim directly to your chauffeur."
      },
      {
        q: "Does the VIP Fast-Track price include the $25 Egypt entry visa fee?",
        a: "The service fee covers full personal escort, fast-track access, and assistance. The government entry visa ($25 USD per person) can either be paid in cash at the official bank window or charged to your booking package upon request."
      },
      {
        q: "Can I book Fast-Track for both arrivals and departures?",
        a: "Yes! We provide both Arrival Fast-Track and Departure VIP Escort (which includes priority check-in, fast-track security, and lounge access)."
      }
    ]
  },
  {
    slug: "child-safety-seats",
    title: "Certified Child & Infant Car Safety Seats",
    arabicTitle: "كراسي أمان الأطفال والرضع",
    tag: "Family Essential",
    badgeColor: "bg-indigo-600 text-white",
    priceUSD: 10,
    priceUnit: "per seat / transfer",
    image: "/images/ancillaries/child-safety-seat.webp",
    alt: "Certified European Standard ISOFIX Infant and Toddler Car Safety Seat in Cairo Airport Transfer",
    shortDescription: "Travel with peace of mind. European-certified (ECE R44/04 / i-Size) rear-facing infant capsules, toddler seats, and booster cushions pre-installed.",
    metaDescription: "Certified child, infant, and booster car seats for Cairo Airport transfers. ECE R44/04 compliant, professionally installed before pickup. From $10.",
    fullDescription: "Highway safety in Cairo is paramount, especially when traveling with newborn babies, toddlers, or young children. Unlike standard city taxis which lack child seats entirely, Cairo Airport Transfers provides pre-installed, sanitized, European-certified child safety seats fitted securely via ISOFIX anchors. Whether you need a rear-facing infant capsule (0-13 kg), a forward-facing toddler seat (9-18 kg), or a booster seat for older children, your chauffeur arrives with the seat securely installed and ready for immediate departure.",
    benefits: [
      "Certified to rigorous European safety standards (ECE R44/04 and i-Size)",
      "Rear-facing infant capsules (0–13 kg) & forward-facing seats (9–18 kg)",
      "Ergonomic booster cushions for children aged 4 to 11 years (15–36 kg)",
      "Secure ISOFIX click-in anchors with side-impact protection padding",
      "Thoroughly steam-sanitized, inspected, and fresh before every trip",
      "Seamlessly installed prior to vehicle arrival at airport pickup"
    ],
    howItWorks: [
      {
        step: 1,
        title: "Specify Age & Weight",
        desc: "During booking or over WhatsApp, simply tell us the age and weight of your child so our operations team allocates the correct seat type."
      },
      {
        step: 2,
        title: "Pre-Installation & Inspection",
        desc: "Your chauffeur securely mounts the seat via ISOFIX anchors and carries out safety harness checks prior to parking at the terminal."
      },
      {
        step: 3,
        title: "Relaxed Family Journey",
        desc: "Your little one rests comfortably in certified safety as you ride smoothly from Cairo Airport to your hotel or Nile resort."
      }
    ],
    terminalsAvailable: ["Terminal 1", "Terminal 2", "Terminal 3", "Sphinx Airport (SPX)"],
    faqs: [
      {
        q: "What types of child seats are available?",
        a: "We offer three certified options: Group 0+ rear-facing infant capsules (newborn to 13 kg), Group 1 toddler seats (9 to 18 kg), and Group 2/3 booster seats with backrests (15 to 36 kg)."
      },
      {
        q: "Can I request more than one child seat for twins or multiple children?",
        a: "Yes! Our Private Minivans and Minibuses can easily accommodate two or three child seats simultaneously. Please notify us during booking."
      },
      {
        q: "Are the seats clean and sanitized?",
        a: "All child car seats undergo steam-cleaning, antibacterial wipe-down, and strap inspection between every booking."
      }
    ]
  },
  {
    slug: "egypt-tourist-sim",
    title: "Egypt Tourist 4G/5G SIM & Data Package",
    arabicTitle: "شريحة إنترنت واتصالات سياحية",
    tag: "Instant 5G Data",
    badgeColor: "bg-emerald-600 text-white",
    priceUSD: 20,
    priceUnit: "per 30 GB package",
    image: "/images/ancillaries/egypt-tourist-sim.webp",
    alt: "Egypt Tourist Prepaid 4G 5G SIM Card and High Speed Mobile Data for Cairo Visitors",
    shortDescription: "Stay connected from the second you step out of customs. High-speed 30GB / 50GB prepaid data SIM pre-configured and handed directly to you by your driver.",
    metaDescription: "High-speed 30GB & 50GB Egypt 5G tourist SIM cards delivered by your chauffeur upon Cairo Airport arrival. Instant connectivity from $20 USD.",
    fullDescription: "Avoid standing in lengthy terminal telecom queues or struggling with passport registration kiosks after your flight. Pre-order an official Egyptian tourist prepaid SIM card with 30 GB or 50 GB high-speed 4G/5G data and local calling credit. Supported by Egypt's top national networks (Vodafone Egypt and Orange), your driver delivers the sealed card with a complimentary SIM ejection tool upon arrival, and assists you in popping it into your smartphone for instant navigation, WhatsApp, and family contact.",
    benefits: [
      "Avoid 30-45 minute waiting queues at crowded terminal telecom kiosks",
      "High-speed 4G / 5G nationwide coverage across Cairo, Giza, Alexandria & Red Sea",
      "30 GB to 50 GB generous data allowances valid for 30 full days",
      "Includes local voice minutes to contact hotels, tours, and tour guides",
      "Compatible with all unlocked iPhones, Android smartphones, and portable hotspots",
      "Comes complete with metal SIM-tray ejector tool and multi-size adapter"
    ],
    howItWorks: [
      {
        step: 1,
        title: "Select Data Size",
        desc: "Choose between our 30 GB ($20) or 50 GB ($30) tourist bundle when reserving your airport transfer."
      },
      {
        step: 2,
        title: "Direct Handover",
        desc: "Your chauffeur hands you your sealed, pre-activated official Egyptian SIM pack inside the arrival hall."
      },
      {
        step: 3,
        title: "Instant Connection",
        desc: "Insert the nano-SIM into your unlocked phone and enjoy immediate high-speed internet as you ride to your hotel."
      }
    ],
    terminalsAvailable: ["Terminal 1", "Terminal 2", "Terminal 3", "Sphinx Airport (SPX)"],
    faqs: [
      {
        q: "Will this SIM card work in my iPhone or Samsung device?",
        a: "Yes, as long as your phone is carrier-unlocked. The package includes a 3-in-1 SIM (Standard, Micro, and Nano sizes) that fits all modern smartphones."
      },
      {
        q: "Does the SIM include coverage in Alexandria, Hurghada, and Luxor?",
        a: "Yes. Our SIM packages operate on Vodafone Egypt and Orange, offering full 4G/5G high-speed coverage throughout Cairo, the Nile Valley, and Red Sea resort destinations."
      },
      {
        q: "Can I use mobile hotspot tethering to connect my laptop or iPad?",
        a: "Yes, personal hotspot and Wi-Fi tethering are fully enabled on all our data packages."
      }
    ]
  },
  {
    slug: "cairo-airport-lounges",
    title: "Cairo Airport VIP Executive Lounge Pass",
    arabicTitle: "دخول صالات كبار الزوار بالمطار",
    tag: "Executive Luxury",
    badgeColor: "bg-slate-900 text-amber-300",
    priceUSD: 38,
    priceUnit: "per passenger (3h access)",
    image: "/images/ancillaries/cairo-vip-lounge.webp",
    alt: "Cairo International Airport VIP Executive Lounge Ahlan and Pearl Lounge Pass Access",
    shortDescription: "Relax before your departure or transit flight. Gourmet hot buffet, chilled beverages, high-speed Wi-Fi, shower suites, and quiet resting pods in Terminals 1, 2, and 3.",
    metaDescription: "Book Cairo Airport VIP lounge access across T1, T2 & T3. Hot gourmet buffet, fast Wi-Fi, shower suites, and quiet resting pods. Passes from $38.",
    fullDescription: "Escape the noise and bustle of Cairo Airport's main departure concourses with a guaranteed pass to Cairo Airport's premier executive lounges (Ahlan VIP Lounge and Pearl Lounge). Available across Terminals 1, 2, and 3, guests enjoy up to 3 hours of peaceful comfort featuring panoramic runway views, complimentary fresh gourmet hot & cold buffet dining, premium coffee and chilled drinks, ultra-fast Wi-Fi, flight display screens, private business workstations, and luxury shower facilities.",
    benefits: [
      "Guaranteed entry to Ahlan and Pearl Executive VIP Lounges (T1, T2, and T3)",
      "Complimentary gourmet hot meals, fresh salads, pastries, and snacks",
      "Unlimited premium coffee, espresso, mineral water, and chilled refreshments",
      "Private high-speed fiber Wi-Fi network and international charging hubs",
      "Refreshing shower suites with luxury amenities and fresh towels",
      "Dedicated flight departure status monitors and silent resting zone"
    ],
    howItWorks: [
      {
        step: 1,
        title: "Digital Lounge Voucher",
        desc: "Receive your instant digital QR lounge voucher upon booking, valid for up to 3 hours of access."
      },
      {
        step: 2,
        title: "Seamless Reception Check-in",
        desc: "Show your digital boarding pass and voucher at the lounge reception desk in Terminals 1, 2, or 3."
      },
      {
        step: 3,
        title: "Dine & Unwind",
        desc: "Enjoy five-star hospitality, premium dining, and showers before your flight departure or connection."
      }
    ],
    terminalsAvailable: ["Terminal 1", "Terminal 2", "Terminal 3"],
    faqs: [
      {
        q: "Can I enter the lounge regardless of what airline or class I fly?",
        a: "Yes! Our VIP Lounge passes are 100% independent of your airline ticket. Whether you are flying Economy with a budget airline or a major international flag carrier, you receive full lounge privileges."
      },
      {
        q: "Are children allowed in the lounge?",
        a: "Yes, children under 2 years enter completely free of charge when accompanied by a paying adult pass holder."
      },
      {
        q: "Where are the lounges located in Cairo Airport?",
        a: "Lounges are located airside (after immigration and security screening) in Terminal 1, Terminal 2, and Terminal 3, within easy walking distance of departure boarding gates."
      }
    ]
  }
];
