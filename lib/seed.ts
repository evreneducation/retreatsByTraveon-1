export type RetreatCategory = "Wellness" | "Corporate" | "Community" | "MICE";

export type MealPlan = {
  breakfast?: boolean;
  lunch?: boolean;
  dinner?: boolean;
};

export type ItineraryDay = {
  day: number;
  title: string;
  description: string;
  meals?: MealPlan;
  activities?: string[];
  stay?: string;
};

export type Departure = {
  startDate: string;
  endDate: string;
  availability: "Available" | "Limited" | "Sold Out";
  price?: number;
  ctaLabel?: string;
  isFeatured?: boolean;
};

export type PackagePricing = {
  singleOccupancy: number;
  doubleOccupancy: number;
  description?: string;
};

export type Package = {
  id: string;
  slug: string;
  title: string;
  category: RetreatCategory;
  summary: string;
  location: string;
  duration: number | string;
  basePrice: number;
  currency?: string;
  pricing?: PackagePricing;
  heroImage: string;
  gallery: string[];
  highlights: string[];
  amenities: string[];
  focusTags?: string[];
  inclusions: string[];
  exclusions: string[];
  itinerary: ItineraryDay[];
  departures: Departure[];
  rating?: number;
  leaders?: {
    name: string;
    bio: string;
    image: string;
    expertise: string[];
  }[];
  partner?: string;
  partnerLogo?: string;
  isFeatured?: boolean;
};

export const seedPackages: Package[] = [
  // --- Magical Muscat ---
  {
    id: "magical-muscat-5d",
    slug: "magical-muscat-5d4n",
    title: "Magical Muscat — 5 Days / 4 Nights",
    category: "Community",
    summary:
      "Experience Muscat's stunning mosques, souqs, wadis, dolphin watching, and desert adventures with curated luxury stays.",
    location: "Muscat, Oman",
    duration: 5,
    basePrice: 39999,
    currency: "INR",
    heroImage: "/muscat/1.jpg",
    gallery: [
      "/muscat/1.jpg",
      "/muscat/2.jpg",
      "/muscat/3.jpg",
      "/muscat/4.jpg",
      "/muscat/5.jpg",
      "/muscat/6.jpg",
      "/muscat/7.jpg",
    ],
    highlights: [
      "Muscat City Tour",
      "Nizwa Fort",
      "Al Hoota Cave",
      "Dolphin Watching",
      "Wadi Bani Khalid",
      "Desert Safari",
    ],
    amenities: ["4★ hotel stay", "Breakfasts", "Transfers", "Guided tours"],
    inclusions: [
      "4 nights accommodation at Royal Tulip or similar",
      "All transfers",
      "Breakfasts",
      "Half-day Muscat city tour",
      "Nizwa Fort & Al Hoota Cave entry",
      "2 hours Dolphin Watching tour",
    ],
    exclusions: [
      "Airfare",
      "Tips, drinks, minibar",
      "Room service, laundry, calls",
      "Early check-in / late check-out",
      "Anything not mentioned in inclusions",
      "GST 5% & TCS as per govt norms",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival & Muscat City Tour",
        description:
          "Morning: Airport pickup, hotel check-in. Afternoon: Muscat tour covering Qurum Park, Mutrah Souq, Corniche, National Museum.",
        meals: { breakfast: true },
      },
      {
        day: 2,
        title: "Nizwa Fort & Al Hoota Cave",
        description:
          "Breakfast at hotel, visit Nizwa Fort and Al Hoota Cave. Evening return to hotel.",
        meals: { breakfast: true },
      },
      {
        day: 3,
        title: "Dolphin Watching & Leisure",
        description:
          "Morning dolphin watching boat tour. Afternoon free for leisure.",
        meals: { breakfast: true },
      },
      {
        day: 4,
        title: "Leisure & Optional Tours",
        description:
          "Relax at hotel or choose optional tours (Wahiba Sands desert safari, Wadi Bani Khalid).",
        meals: { breakfast: true },
      },
      {
        day: 5,
        title: "Departure & Optional Activities",
        description:
          "Checkout and transfer to airport. Optional: Coastal tour to Sur or shopping.",
        meals: { breakfast: true },
      },
    ],
    departures: [
      {
        startDate: "2025-11-10",
        endDate: "2025-11-14",
        availability: "Available",
      },
      {
        startDate: "2025-12-05",
        endDate: "2025-12-09",
        availability: "Limited",
      },
    ],
    partner: "Retreats by Traveon",
    partnerLogo: "/logo/logo-sq.jpg",
    isFeatured: true,
  },

  // --- Nirvana with Arunanand Saraswati ---
  {
    id: "nirvana-arunanand-4d",
    slug: "nirvana-holistic-wellness-arunanand",
    title: "Nirvana — Anantam a Holistic Wellness Retreat",
    category: "Wellness",
    summary:
      "4 days of yoga, meditation, sound healing, and conscious living led by Arunanand Saraswati in the Himalayas.",
    location: "Phool Chatti Yoga Ashram, Rishikesh, Uttarakhand, India",
    duration: 4,
    basePrice: 30000,
    currency: "INR",
    pricing: {
      singleOccupancy: 30000,
      doubleOccupancy: 50000,
      description: "Inclusive off - meals, accommodation, activities",
    },
    heroImage: "/rishikesh/1.jpg",
    gallery: ["/rishikesh/2.jpg", "/rishikesh/3.jpg", "/rishikesh/4.jpg"],
    highlights: [
      "Daily yoga & pranayama",
      "Shatkriyas detox practices",
      "Sound healing journeys",
      "Vision board & Sankalpa",
      "Sacred Ganga Aarti",
      "Agni Hotra (fire ritual)",
    ],
    amenities: [
      "Ashram stay",
      "Sattvic meals",
      "Meditation hall",
      "Sacred river access",
    ],
    focusTags: ["yoga", "sound healing", "chakra work", "spirituality"],
    inclusions: [
      "3 nights stay",
      "All meals (sattvic)",
      "Workshops & guided meditations",
      "Nature walks",
      "Group ceremonies",
    ],
    exclusions: ["Flights", "Personal Reiki/Attunement sessions"],
    itinerary: [
      {
        day: 1,
        title: "Arrival & Grounding - Awaken",
        description:
          "12:00-2:00 PM: Arrival & Check-in with herbal welcome drink. 2:30-4:00 PM: Grounding Yoga + Breath Awareness Flow. 4:30-5:30 PM: Tea Break + Intention Setting Circle. 6:00-7:00 PM: Sound Healing Journey (Gong + Singing Bowls). 7:30-9:00 PM: Sattvic Dinner.",
        meals: {
          dinner: true,
        },
      },
      {
        day: 2,
        title: "Energy Alignment - Heal",
        description:
          "6:30-7:30 AM: Shatkriya (Jal Neti & Basti) + Pranayama + Yoga Flow. 8:00-9:00 AM: Conscious Breakfast. 10:00-11:30 AM: Nature Walk / Forest Bathing. 12:30-1:30 PM: Ayurvedic Lunch. 2:00-3:00 PM: Chakra & Energy Anatomy Workshop. 3:00-4:00 PM: Tea Break + Self-Reflection. 4:00-5:15 PM: Ananta Prana Sadhana. 5:15-5:45 PM: Silent Sitting + Soundscape. 6:00-6:30 PM: Ganga Aarti. 7:00-8:30 PM: Dinner + Optional Sharing Circle.",
        meals: {
          breakfast: true,
          lunch: true,
          dinner: true,
        },
      },
      {
        day: 3,
        title: "Expansion - Evolve",
        description:
          "6:30-7:30 AM: Shatkriya (Kapalbhati + Agnisar) + Tratak Meditation + Light Yoga. 8:00-9:00 AM: Breakfast. 9:30-12:30 PM: Optional Reiki Level 1 Attunement or Ganga dip / Self-time. 1:00-2:00 PM: Lunch. 3:00-4:00 PM: Cyclic Meditation. 4:30-6:00 PM: Sankalpa & Vision Board Creation. 6:30-7:30 PM: Agni Hotra Fire Ceremony. 8:00 PM: Closing Celebration Dinner with live music.",
        meals: {
          breakfast: true,
          lunch: true,
          dinner: true,
        },
      },
      {
        day: 4,
        title: "Integration & Farewell",
        description:
          "6:30-7:30 AM: Shatkriya (Nauli Demonstration) + Closing Meditation & Sharing Circle. 8:00-9:00 AM: Breakfast. 10:00 AM: Check-out + Farewell Gift Pack.",
        meals: {
          breakfast: true,
        },
      },
    ],
    departures: [
      {
        startDate: "2025-11-27",
        endDate: "2025-11-30",
        availability: "Available",
      },
    ],
    leaders: [
      {
        name: "Arunanand Saraswati",
        bio: "Spiritual practitioner, energy healer, Reiki Grand Master, Lama Fera practitioner, and author of 'Transform Lives with Energy Healing'.",
        image: "/rishikesh/arunanand.jpg",
        expertise: [
          "Ashtanga Yoga",
          "Kundalini Yoga",
          "Energy Healing",
          "Swar Yoga",
        ],
      },
    ],
    partner: "Arunanand Saraswati",
    partnerLogo: "/rishikesh/anantam.jpg",
    isFeatured: true,
  },

  // --- Nirvana Inner Journey ---
  {
    id: "nirvana-naad-wellness-4d",
    slug: "nirvana-inner-journey-naad-wellness",
    title: "Nirvana — Inner Journey Meditation & Healing",
    category: "Wellness",
    summary:
      "A 4-day retreat at Naad Wellness Sonipat led by Anant Gogia, blending yoga, sound healing, Mystic Rose meditation, and relaxation therapies.",
    location: "Naad Wellness Sonipat, Haryana, India",
    duration: 4,
    basePrice: 40000,
    currency: "INR",
    pricing: {
      singleOccupancy: 40000,
      doubleOccupancy: 56000,
      description: "Inclusive off - meals, accommodation, activities",
    },
    heroImage: "/nirvana/2.jpg",
    gallery: ["/nirvana/3.jpg", "/nirvana/4.jpg"],
    highlights: [
      "Daily yoga, pranayama & deep relaxation",
      "Special Mystic Rose Meditation for emotional healing",
      "2 Sound Healing sessions in nature",
      "Nights with music, dance & storytelling",
      "Delicious vegetarian meals",
      "Naad wellness activities",
    ],
    amenities: [
      "Nature-facing rooms",
      "Sattvic meals",
      "Group activities",
      "Naad activities",
      "Relaxation therapies",
    ],
    focusTags: [
      "meditation",
      "theta healing",
      "sound therapy",
      "spiritual growth",
      "emotional healing",
    ],
    inclusions: [
      "3 nights stay",
      "All meals (vegetarian)",
      "Daily yoga & meditation",
      "2 sound healing sessions",
      "Naad Activities",
      "Relaxation therapies",
      "Group ceremonies",
    ],
    exclusions: [
      "Personal therapies",
      "Flights",
      "Additional personal expenses",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival & Grounding",
        description:
          "Arrival at Retreat Centre with warm herbal tea & snacks welcome. Check-in to nature-facing rooms. Opening Circle with intention-setting ceremony. Evening Session with grounding meditation & group connection, Yoga & Pranayama. Dinner: Wholesome vegetarian meal with community sharing & conversations. Night Under The Sky: Live acoustic music under the stars. Optional Yoga Nidra for deep relaxation.",
        meals: {
          dinner: true,
        },
      },
      {
        day: 2,
        title: "Mystic Rose Meditation & Healing",
        description:
          "Morning Yoga & Breathwork session. Mystic Rose Meditation (2 hours) - a transformative practice of laughter, tears & silence. Breakfast. Late Morning Sound Healing Session 1 - Chakra-balancing with Tibetan singing bowls in nature. Lunch. Afternoon rest. Tea & Light Snacks. Yoga Nidra for nervous system reset. Dinner. Night Under The Sky: Storytelling, music, chanting, drumming, dance & open mic.",
        meals: {
          breakfast: true,
          lunch: true,
          dinner: true,
        },
      },
      {
        day: 3,
        title: "Naad & Sound Healing",
        description:
          "Morning Yoga & Meditation session. Breakfast. Naad Activities in the Resort. Lunch. Afternoon Return & Rest. Evening Sound Healing Session 2 in indoor space. Dinner.",
        meals: {
          breakfast: true,
          lunch: true,
          dinner: true,
        },
      },
      {
        day: 4,
        title: "Departure & Closure",
        description:
          "Early Morning Yoga & Gratitude Meditation. Light Breakfast. Closing Circle: Reflections, blessings & emotional closure. Departure by Noon.",
        meals: {
          breakfast: true,
        },
      },
    ],
    departures: [
      {
        startDate: "",
        endDate: "",
        availability: "Available",
        ctaLabel: "Inquire for Dates",
        isFeatured: true,
      },
    ],
    leaders: [
      {
        name: "Anant Gogia",
        bio: "Certified Theta Meditation Instructor, Past Life Regression Therapist, Sound Healer, Tarot & Astrology teacher.",
        image: "/anant/anant.jpg",
        expertise: [
          "Theta Meditation",
          "Past Life Regression",
          "Tarot & Astrology",
          "Sound Healing",
        ],
      },
    ],
    partner: "Anant Gogia",
    partnerLogo: "/anant/partnerlogo.jpg",
    isFeatured: true,
  },

  // --- 2 hrs Onsite healing session ---
  {
    id: "corporate-sound-healing-2hr",
    slug: "corporate-sound-healing-workshop",
    title: "2 Hrs Onsite Sound Healing Workshop for Corporates",
    category: "Wellness",
    summary:
      "A 2-hour onsite Sound Healing corporate wellness workshop designed to reduce stress, reset the nervous system, and elevate team well-being through powerful vibrational therapy.",
    location: "Delhi, Gurgaon, Noida, Faridabad, India",
    duration: "2 hours",
    basePrice: 3000,
    currency: "INR",
    heroImage: "/2hrs/1.jpg",
    gallery: ["/2hrs/3.jpg", "/2hrs/2.jpg"],
    highlights: [
      "Happier, more motivated employees",
      "Stronger team bonding and improved workplace culture",
      "Increased concentration and energy at work",
      "Help to improve commitment towards its people and clients",
      "Onsite convenience at your office location",
    ],
    amenities: [
      "Onsite session at your office",
      "All sound healing instruments",
      "Expert facilitators",
      "Group wellness activity",
    ],
    focusTags: [
      "corporate wellness",
      "stress reduction",
      "team building",
      "sound therapy",
      "workplace wellbeing",
    ],
    inclusions: [
      "15 Min knowledge session",
      "Sound Bath Therapy",
      "Deep Cleansing meditation",
      "All equipment and materials",
      "Expert facilitation by certified trainers",
    ],
    exclusions: [
      "Venue arrangement",
      "Travel beyond service areas",
      "Additional customization fees",
    ],
    itinerary: [
      {
        day: 1,
        title: "Sound Healing Workshop",
        description:
          "2-hour onsite session including 15-minute knowledge session, Sound Bath Therapy, deep cleansing meditation, and vibrational healing experience.",
        activities: [
          "Introduction to Sound Healing",
          "Breathing exercises & grounding",
          "Sound Bath immersion",
          "Deep cleansing meditation",
          "Group sharing & integration",
        ],
      },
    ],
    departures: [
      {
        startDate: "",
        endDate: "",
        availability: "Available",
        ctaLabel: "Inquire for Dates",
        isFeatured: true,
      },
    ],
    leaders: [
      {
        name: "Anant Gogia",
        bio: "Certified Theta Meditation Instructor, Past Life Regression Therapist, Sound Healer, Tarot & Astrology teacher.",
        image: "/anant/anant.jpg",
        expertise: [
          "Theta Meditation",
          "Sound Healing",
          "Corporate Wellness",
          "Stress Management",
        ],
      },
      {
        name: "Arunanand Saraswati",
        bio: "Spiritual practitioner, energy healer, Reiki Grand Master, Lama Fera practitioner, and author of 'Transform Lives with Energy Healing'.",
        image: "/rishikesh/arunanand.jpg",
        expertise: [
          "Energy Healing",
          "Sound Therapy",
          "Corporate Retreats",
          "Team Wellness",
        ],
      },
    ],
    partner: "Retreats by Traveon",
    partnerLogo: "/logo/logo-sq.jpg",
    isFeatured: true,
  },

  // --- Seychelles Group Tour ---
  {
    id: "seychelles-4d",
    slug: "seychelles-group-tour-4d3n",
    title: "Seychelles — Fixed Departure Group Tour",
    category: "Community",
    summary:
      "4 days of island-hopping in Seychelles with guided Mahé, Praslin, and La Digue tours, flights included.",
    location: "Mahé, Seychelles",
    duration: 4,
    basePrice: 130000,
    currency: "INR",
    heroImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    gallery: [
      "/seychelles/1.jpg",
      "/seychelles/2.jpg",
      "/seychelles/3.jpg",
      "/seychelles/4.jpg",
      "/seychelles/5.jpg",
      "/seychelles/6.jpg",
      "/seychelles/7.jpg",
      "/seychelles/8.jpg",
    ],
    highlights: [
      "Mahé Island guided tour",
      "Bel Ombre & Beau Vallon Beach",
      "Praslin Coco de Mer palms",
      "La Digue island cycling",
      "Victoria city shopping",
    ],
    amenities: [
      "Flights ex-Mumbai",
      "3★ hotel stay",
      "Airport transfers",
      "Daily breakfast",
    ],
    inclusions: [
      "Return flights (ex-Mumbai)",
      "3 nights stay in Mahé",
      "Breakfasts",
      "Guided Mahé island tour with lunch",
      "Full-day Praslin & La Digue tour with buffet lunch",
      "Speedboat transfers",
    ],
    exclusions: [
      "Personal expenses",
      "Early check-in / late check-out",
      "Meals not mentioned",
      "GST 5% & TCS as per govt rules",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival & Leisure",
        description: "Arrive Mahé, transfer to hotel, rest or explore.",
      },
      {
        day: 2,
        title: "Mahé Island Tour",
        description:
          "Bel Ombre, Beau Vallon, colonial landmarks, Venn's Town, Sauzier Waterfall, Creole lunch.",
      },
      {
        day: 3,
        title: "Praslin & La Digue",
        description:
          "Coco de Mer, Anse Lazio, La Digue cycling, beaches, giant tortoises.",
      },
      {
        day: 4,
        title: "Victoria City & Departure",
        description: "Shopping in Victoria markets, airport transfer.",
      },
    ],
    departures: [
      {
        startDate: "2025-10-02",
        endDate: "2025-10-06",
        availability: "Available",
        isFeatured: true,
      },
      {
        startDate: "2025-11-10",
        endDate: "2025-11-14",
        availability: "Limited",
      },
    ],
    partner: "Holiday Seychelles",
    partnerLogo: "/logo/hs-logo.jpg",
    isFeatured: true,
  },

  // --- Nirvana with Anant Gogia ---
    {
    id: "nirvana-anant-4d",
    slug: "nirvana-inner-journey-anant",
    title: "Nirvana — Inner Journey Meditation & Healing",
    category: "Wellness",
    summary:
      "A 4-day retreat in Rishikesh led by Anant Gogia, blending yoga, sound healing, Mystic Rose meditation, and sacred Himalayan rituals.",
    location: "Tapovan, Rishikesh, Uttarakhand, India",
    duration: 4,
    basePrice: 30000,
    currency: "INR",
    pricing: {
      singleOccupancy: 30000,
      doubleOccupancy: 50000,
      description: "Inclusive of - meals, accommodation, activities",
    },
    heroImage: "/anant/1.jpg",
    gallery: ["/anant/2.jpg", "/anant/3.jpg", "/anant/4.jpg", "/anant/5.jpg"],
    highlights: [
      "Yoga & Pranayama in nature",
      "Mystic Rose meditation",
      "Sound healing sessions",
      "Village trek & picnic",
      "Ganga Aarti at Rishikesh",
      "Bonfire storytelling nights",
    ],
    amenities: [
      "Nature-facing rooms",
      "Sattvic meals",
      "Group activities",
      "Forest walks",
    ],
    focusTags: [
      "meditation",
      "theta healing",
      "sound therapy",
      "spiritual growth",
    ],
    inclusions: [
      "3 nights stay",
      "All meals",
      "Daily yoga & meditation",
      "2 sound healing sessions",
      "Sunrise temple trip",
      "Village trek & Ganga Aarti",
    ],
    exclusions: ["Flights", "Personal therapies"],
    itinerary: [
      {
        day: 1,
        title: "Arrival & Grounding - Awaken",
        description:
          "12:00-2:00 PM: Arrival & Check-in with herbal welcome drink. 2:30-4:00 PM: Grounding Yoga + Breath Awareness Flow. 4:30-5:30 PM: Tea Break + Intention Setting Circle. 6:00-7:00 PM: Sound Healing Journey (Gong + Singing Bowls). 7:30-9:00 PM: Sattvic Dinner.",
        meals: {
          dinner: true,
        },
      },
      {
        day: 2,
        title: "Energy Alignment - Heal",
        description:
          "6:30-7:30 AM: Shatkriya (Jal Neti & Basti) + Pranayama + Yoga Flow. 8:00-9:00 AM: Conscious Breakfast. 10:00-11:30 AM: Nature Walk / Forest Bathing. 12:30-1:30 PM: Ayurvedic Lunch. 2:00-3:00 PM: Chakra & Energy Anatomy Workshop. 3:00-4:00 PM: Tea Break + Self-Reflection. 4:00-5:15 PM: Ananta Prana Sadhana. 5:15-5:45 PM: Silent Sitting + Soundscape. 6:00-6:30 PM: Ganga Aarti. 7:00-8:30 PM: Dinner + Optional Sharing Circle.",
        meals: {
          breakfast: true,
          lunch: true,
          dinner: true,
        },
      },
      {
        day: 3,
        title: "Expansion - Evolve",
        description:
          "6:30-7:30 AM: Shatkriya (Kapalbhati + Agnisar) + Tratak Meditation + Light Yoga. 8:00-9:00 AM: Breakfast. 9:30-12:30 PM: Optional Reiki Level 1 Attunement or Ganga dip / Self-time. 1:00-2:00 PM: Lunch. 3:00-4:00 PM: Cyclic Meditation. 4:30-6:00 PM: Sankalpa & Vision Board Creation. 6:30-7:30 PM: Agni Hotra Fire Ceremony. 8:00 PM: Closing Celebration Dinner with live music.",
        meals: {
          breakfast: true,
          lunch: true,
          dinner: true,
        },
      },
      {
        day: 4,
        title: "Integration & Farewell",
        description:
          "6:30-7:30 AM: Shatkriya (Nauli Demonstration) + Closing Meditation & Sharing Circle. 8:00-9:00 AM: Breakfast. 10:00 AM: Check-out + Farewell Gift Pack.",
        meals: {
          breakfast: true,
        },
      },
    ],
    departures: [
      {
        startDate: "",
        endDate: "",
        availability: "Available",
        ctaLabel: "Inquire for Dates",
        isFeatured: true,
      },
    ],
    leaders: [
      {
        name: "Anant Gogia",
        bio: "Certified Theta Meditation Instructor, Past Life Regression Therapist, Sound Healer, Tarot & Astrology teacher.",
        image: "/anant/anant.jpg",
        expertise: [
          "Theta Meditation",
          "Past Life Regression",
          "Tarot & Astrology",
          "Sound Healing",
        ],
      },
    ],
    partner: "Anant Gogia",
    partnerLogo: "/anant/partnerlogo.jpg",
    isFeatured: true,
  },
];

export function listPackages() {
  return seedPackages;
}

export function getPackageBySlug(slug: string) {
  return seedPackages.find((p) => p.slug === slug) || null;
}
