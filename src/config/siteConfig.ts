export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  originalPrice?: string;
  tagline: string;
  badge?: string;
  isPopular?: boolean;
  features: string[];
  ctaText: string;
  whatsappMessage: string;
}

export interface PortfolioProject {
  id: string;
  name: string;
  tagline: string;
  category: string;
  badge: string;
  location: string;
  rating: string;
  reviewsCount: string;
  image: string;
  mapsImage?: string;
  liveUrl?: string;
  description: string;
  highlights: string[];
  ctaText: string;
  whatsappMessage: string;
}

export const siteConfig = {
  brandName: "SMR Solutions",
  tagline: "We Put Your Bengaluru Business on the Digital Map.",
  phone: "+91 6281975993",
  phoneRaw: "916281975993", // 91 + 10-digit number for WhatsApp wa.me link
  email: "smrsolutions3@gmail.com",
  city: "Bengaluru, Karnataka",
  whatsappDefaultMsg: "Hi SMR Solutions! I want to put my business on the digital map. Let's discuss.",

  getWhatsAppUrl: (customMessage?: string) => {
    const message = customMessage || siteConfig.whatsappDefaultMsg;
    return `https://wa.me/${siteConfig.phoneRaw}?text=${encodeURIComponent(message)}`;
  },

  // Active locations currently served
  activeLocations: [
    "Kengeri",
    "Rajarajeshwari Nagar",
    "Bengaluru, Karnataka"
  ],

  // Expanding soon locations
  upcomingLocations: [
    "Koramangala",
    "Indiranagar",
    "HSR Layout",
    "Whitefield",
    "Jayanagar",
    "Electronic City",
    "JP Nagar"
  ],

  services: [
    {
      id: "maps",
      icon: "MapPin",
      emoji: "🗺️",
      title: "The Complete Google Mapping",
      shortDesc: "Rank #1 on Google Local 3-Pack when customers search 'near me'.",
      benefits: [
        "Google Business Profile (GBP) creation & verification support",
        "Hyper-local geo-tagging & category optimization for Kengeri, RR Nagar & Bengaluru",
        "5-Star review generation QR kit for countertops",
        "High-intent local customer call & direction tracking"
      ],
      deliverableTime: "3-5 Days"
    },
    {
      id: "website",
      icon: "Globe",
      emoji: "🌐",
      title: "Modern Ultra-Fast Websites",
      shortDesc: "Sub-second load times that convert visitors into direct WhatsApp inquiries.",
      benefits: [
        "100/100 Google Lighthouse performance score",
        "Mobile-first design built specifically for smartphone shoppers",
        "One-click WhatsApp and Direct Call floating triggers",
        "Free SSL certificate, custom domain setup & lightning CDN hosting"
      ],
      deliverableTime: "3-5 Days"
    },
    {
      id: "pwa",
      icon: "Smartphone",
      emoji: "📱",
      title: "Custom Business PWAs",
      shortDesc: "App-like experience directly on your customer's home screen with zero app store fees.",
      benefits: [
        "Direct 'Add to Home Screen' without 30% Google/Apple store commission",
        "Works offline and loads instantly even on weak 4G/5G connections",
        "Custom branded app icon on client's smartphone home screen",
        "Push notification ready for special discounts & announcements"
      ],
      deliverableTime: "3-5 Days"
    }
  ],

  // Real businesses built online by SMR Solutions
  portfolio: [
    {
      id: "nani-pg",
      name: "Nani PG for Gents",
      tagline: "Top-Ranked Student & Professional Hostel",
      category: "Google Maps + PWA Web App",
      badge: "4.2 ★ (26+ Reviews)",
      location: "Near JSS College & Arts College, Srinivasapura, Bengaluru",
      rating: "4.2",
      reviewsCount: "26+ Google Reviews",
      image: "/portfolio/nani-pg-app.jpg",
      mapsImage: "/portfolio/nani-pg-maps.jpg",
      liveUrl: "https://pg-eg-web.vercel.app",
      description: "Complete Google Maps local optimization & custom PG-EG profile. Features direct WhatsApp enquiry, rent breakdown from ₹8,500, room photo gallery, and 1-tap Google Maps directions for students.",
      highlights: [
        "Google Maps verified & ranked for JSS College area",
        "Rent calculator & sharing filter (1/2/3/4-sharing)",
        "Zero broker commissions direct student bookings",
        "Print-ready 5-Star Google Review QR card"
      ],
      ctaText: "Check Nani PG Live",
      whatsappMessage: "Hi SMR Solutions! I saw your work on Nani PG for Gents. I want a similar Google Maps & online setup for my PG/hostel."
    },
    {
      id: "prasad-electrical",
      name: "Prasad Electrical Works",
      tagline: "Best Electrician in Srinivasapura & RR Nagar",
      category: "Google Maps + High-Speed Website",
      badge: "5.0 ★ (16+ Reviews)",
      location: "YGR Signature Mall, RR Nagar & Srinivasapura, Bengaluru",
      rating: "5.0",
      reviewsCount: "16+ Google Reviews",
      image: "/portfolio/prasad-electrical-site.jpg",
      mapsImage: "/portfolio/prasad-electrical-maps.jpg",
      liveUrl: "https://prasad-electricalworks.vercel.app",
      description: "Turnkey digital presence for a licensed electrical contractor. High-converting mobile landing page featuring prominent 1-tap 'Call Now' (+91 91488 42696) and 'WhatsApp Us' buttons with Google Business Profile ranking.",
      highlights: [
        "5.0 Star rated Google Business Profile",
        "Sub-second load speed with 100/100 Lighthouse",
        "1-Tap emergency direct calling & WhatsApp flow",
        "Service area coverage: RR Nagar, Kengeri & Yelahanka"
      ],
      ctaText: "View Prasad Electrical Site",
      whatsappMessage: "Hi SMR Solutions! I saw your work on Prasad Electrical Works. I want a fast website and Google Maps ranking for my service business."
    },
    {
      id: "pg-eg",
      name: "PG-EG (Find PGs Near You)",
      tagline: "Student & Working Professional PG Discovery PWA",
      category: "Custom PWA + Landing Platform",
      badge: "🚀 Custom Student App",
      location: "Bengaluru College Belts (JSS, RVCE, RR Nagar, Kengeri)",
      rating: "4.9",
      reviewsCount: "Campus Favorite",
      image: "/portfolio/nani-pg-app.jpg",
      liveUrl: "https://pg-eg-web.vercel.app",
      description: "A specialized Progressive Web App engineered to help students and working professionals find verified PGs near their colleges without paying high brokerage fees. Works offline and installs like a native app.",
      highlights: [
        "Installable on home screen in 1 click (PWA)",
        "Real exterior, room & street photo galleries",
        "Filter by sharing type, food menu & budget",
        "Direct owner contact without middleman fees"
      ],
      ctaText: "Explore PG-EG App",
      whatsappMessage: "Hi SMR Solutions! I want to build a custom PWA like PG-EG for my business."
    },
    {
      id: "student-store",
      name: "StudentStore (Campus Marketplace)",
      tagline: "Buy & Sell Student Essentials with 'Seconds' Feature",
      category: "Custom Campus PWA + Marketplace",
      badge: "💡 'Seconds' Feature",
      location: "Bengaluru College Campuses",
      rating: "5.0",
      reviewsCount: "High-Engagement PWA",
      image: "/portfolio/prasad-electrical-site.jpg",
      description: "An innovative student PWA helping college students buy and sell essentials online. Features a dedicated 'Seconds Feature' where senior students can upload unused textbooks, Casio scientific calculators, lab coats, shoes, jackets, and drafting tools to sell to juniors and earn cash.",
      highlights: [
        "Dedicated 'Seconds Feature' for senior-to-junior sales",
        "Sell unused engineering books, Casio calculators, jackets",
        "Instant WhatsApp buyer-seller chat connection",
        "Installs as a standalone mobile app without Play Store fees"
      ],
      ctaText: "Discuss StudentStore App",
      whatsappMessage: "Hi SMR Solutions! I'm interested in building a student marketplace or eCommerce PWA like StudentStore."
    }
  ],

  pricing: [
    {
      id: "starter",
      name: "The Complete Google Mapping",
      price: "₹5,000",
      originalPrice: "₹10,000",
      tagline: "Get verified and ranked on Google Maps so local customers find and call your business first.",
      badge: "⭐ STARTER • GOOGLE MAPS",
      isPopular: true,
      features: [
        "Complete Google Business Profile Setup & Optimization",
        "Geo-targeted local keywords for Kengeri, RR Nagar & Bengaluru",
        "Direct 1-Tap WhatsApp Lead Capture Integration",
        "Print-ready QR Code for collecting 5-Star Google Reviews",
        "Turnaround in just 3-5 days"
      ],
      ctaText: "Claim ₹5,000 Google Mapping Offer",
      whatsappMessage: "Hi SMR Solutions! I want to claim the ₹5,000 Complete Google Mapping offer for my business."
    },
    {
      id: "growth",
      name: "Google Mapping + Website & Custom PWA",
      price: "₹9,999",
      originalPrice: "₹20,000",
      tagline: "The complete digital package: Google Maps ranking plus an ultra-fast website and installable app.",
      badge: "🚀 COMPLETE DIGITAL COMBO",
      isPopular: false,
      features: [
        "Everything in the ₹5,000 Complete Google Mapping Plan",
        "1-Page Ultra-Fast High-Converting PWA Website",
        "Custom Business PWA ('Add to Home Screen' app experience)",
        "Free Hosting Setup on High-Speed Global CDN",
        "Google Maps & Local Search Schema Markup (JSON-LD)",
        "Turnaround in just 3-5 days"
      ],
      ctaText: "Get Complete Maps + Web Combo",
      whatsappMessage: "Hi SMR Solutions! I'm interested in the ₹9,999 Google Mapping + Website & Custom PWA Combo. Please share details."
    }
  ],

  faqs: [
    {
      q: "Why do I need Google Maps optimization if I already have Instagram/Facebook?",
      a: "Social media is great for browsing, but Google Maps is where people go with immediate buying intent. When someone searches for an electrician or PG in Kengeri, RR Nagar, or Bengaluru, they are ready to call or visit right now. Ranking in the Top 3 Google Map pack captures those high-intent paying customers before your competitors do."
    },
    {
      q: "What is a PWA (Progressive Web App) and why is it better than a Play Store app?",
      a: "A PWA gives your website the exact look and feel of a native mobile app. Customers can tap 'Install Web App' and an icon appears directly on their phone. It loads instantly, works offline, and requires NO download from the Google Play Store or Apple App Store—saving you lakhs in app development and recurring store fees."
    },
    {
      q: "What is the difference between the ₹5,000 and ₹9,999 plans?",
      a: "The ₹5,000 plan is 'The Complete Google Mapping'—ideal if you need your Google Business Profile verified, geo-optimized, and ranking on Google Maps with a 5-star review QR kit (like we did for Nani PG & Prasad Electrical). The ₹9,999 plan adds a complete 1-page ultra-fast modern website and an installable custom PWA with free global hosting."
    },
    {
      q: "How fast will my project be completed?",
      a: "We deliver in 3-5 days. That's it! This allows us to properly configure your geo-tags, setup verification, and thoroughly test everything without compromising on quality."
    },
    {
      q: "Can I update my phone number, prices, or photos later?",
      a: "Yes! We build our code and assets clean and modular. We also provide full guidance on how to manage your Google Business Profile directly from your phone."
    }
  ]
};
