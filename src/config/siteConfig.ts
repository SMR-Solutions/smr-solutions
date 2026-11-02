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
  phone: "+91 98765 43210", // Change this to your actual WhatsApp phone number
  phoneRaw: "919876543210", // Digits only with country code (91 for India)
  email: "contact@smrsolutions.in",
  city: "Bengaluru, Karnataka",
  whatsappDefaultMsg: "Hi SMR Solutions! I want to put my Bengaluru business on the digital map. Let's discuss.",

  getWhatsAppUrl: (customMessage?: string) => {
    const message = customMessage || siteConfig.whatsappDefaultMsg;
    return `https://wa.me/${siteConfig.phoneRaw}?text=${encodeURIComponent(message)}`;
  },

  serviceLocations: [
    "Koramangala",
    "Indiranagar",
    "HSR Layout",
    "Whitefield",
    "Jayanagar",
    "Electronic City",
    "JP Nagar",
    "BTM Layout",
    "Malleshwaram",
    "Marathahalli"
  ],

  services: [
    {
      id: "maps",
      icon: "MapPin",
      emoji: "🗺️",
      title: "Google Maps Optimization",
      shortDesc: "Rank #1 on Google Local 3-Pack when customers search 'near me'.",
      benefits: [
        "Google Business Profile (GBP) creation & verification support",
        "Bengaluru hyper-local geo-tagging & category optimization",
        "5-Star review generation QR kit for countertops",
        "High-intent local customer call & direction tracking"
      ],
      deliverableTime: "48 - 72 Hours"
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
      deliverableTime: "48 Hours"
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
      deliverableTime: "Included in Build"
    }
  ],

  pricing: [
    {
      id: "starter",
      name: "Bengaluru Starter Digital Launch",
      price: "₹5,000",
      originalPrice: "₹12,000",
      tagline: "The all-in-one launchpad to put your local business online and get found first.",
      badge: "⭐ MOST POPULAR • BEST VALUE",
      isPopular: true,
      features: [
        "Complete Google Business Profile Setup & Optimization",
        "Geo-targeted local keywords for your Bengaluru locality",
        "1-Page Ultra-Fast High-Converting PWA Website",
        "Direct 1-Tap WhatsApp Lead Capture Integration",
        "Print-ready QR Code for collecting 5-Star Google Reviews",
        "Free Hosting Setup on High-Speed Global CDN",
        "Google Maps & Local Search Schema Markup (JSON-LD)",
        "Turnaround in just 48 Hours"
      ],
      ctaText: "Claim ₹5,000 Launch Offer",
      whatsappMessage: "Hi SMR Solutions! I want to claim the ₹5,000 Bengaluru Starter Launch Offer for my business."
    },
    {
      id: "growth",
      name: "Bengaluru Local Dominator",
      price: "₹9,999",
      originalPrice: "₹22,000",
      tagline: "For aggressive businesses that want to dominate competitors across multiple localities.",
      badge: "🚀 FAST-TRACK GROWTH",
      isPopular: false,
      features: [
        "Everything in the ₹5,000 Starter Package",
        "Multi-section interactive PWA with services/menu showcase",
        "Top 3 Competitor local SEO analysis & outrank strategy",
        "Custom branded domain email setup (e.g. hello@yourbrand.in)",
        "Social media link-tree & WhatsApp automated greeting setup",
        "Priority Google Maps citation submission across 15+ local directories",
        "30 Days of dedicated post-launch maintenance & rank monitoring"
      ],
      ctaText: "Get Local Dominator Plan",
      whatsappMessage: "Hi SMR Solutions! I'm interested in the ₹9,999 Bengaluru Local Dominator Plan. Please share details."
    }
  ],

  faqs: [
    {
      q: "Why do I need Google Maps optimization if I already have Instagram/Facebook?",
      a: "Social media is great for browsing, but Google Maps is where people go with immediate buying intent. When someone searches 'dentist in Indiranagar' or 'best cafe near Koramangala', they are ready to spend money right now. Ranking in the Top 3 Google Map pack captures those high-intent paying customers before your competitors do."
    },
    {
      q: "What is a PWA (Progressive Web App) and why is it better than a Play Store app?",
      a: "A PWA gives your website the exact look and feel of a native mobile app. Customers can tap 'Add to Home Screen' and an icon appears on their phone. It loads instantly, works offline, and requires NO download from the Google Play Store or Apple App Store—saving you lakhs in app development and recurring store fees."
    },
    {
      q: "Are there any hidden costs with the ₹5,000 package?",
      a: "None! The ₹5,000 package is an all-inclusive setup fee for your complete Google Maps profile, high-converting one-page PWA website, WhatsApp integration, and review QR kit. We host your site on modern high-speed CDNs with free hosting tiers, so you don't have to pay expensive monthly server bills."
    },
    {
      q: "How fast can you launch my website and Google Maps profile?",
      a: "We work fast. Once you share your business details (name, photos, address, and service list), your site and Google Maps optimization will be ready within 48 to 72 hours."
    },
    {
      q: "Can I update my phone number, prices, or photos later?",
      a: "Yes! We build our code and assets clean and modular. We also provide full guidance on how to manage your Google Business Profile directly from your phone."
    }
  ]
};
