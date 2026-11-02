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
      a: "Social media is great for browsing, but Google Maps is where people go with immediate buying intent. When someone searches for services near Kengeri, RR Nagar, or Bengaluru, they are ready to call or visit right now. Ranking in the Top 3 Google Map pack captures those high-intent paying customers before your competitors do."
    },
    {
      q: "What is a PWA (Progressive Web App) and why is it better than a Play Store app?",
      a: "A PWA gives your website the exact look and feel of a native mobile app. Customers can tap 'Add to Home Screen' and an icon appears on their phone. It loads instantly, works offline, and requires NO download from the Google Play Store or Apple App Store—saving you lakhs in app development and recurring store fees."
    },
    {
      q: "What is the difference between the ₹5,000 and ₹9,999 plans?",
      a: "The ₹5,000 plan is 'The Complete Google Mapping'—ideal if you need your Google Business Profile verified, geo-optimized, and ranking on Google Maps with a 5-star review QR kit. The ₹9,999 plan adds a complete 1-page ultra-fast modern website and an installable custom PWA with free global hosting."
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
