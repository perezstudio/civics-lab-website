export interface ProductItem {
  name: string;
  description: string;
  icon: string; // path to icon in public/images
  href: string;
}

export interface SolutionSection {
  heading: string;
  items: {
    name: string;
    icon: string; // path to icon in public/images
    href: string;
  }[];
}

export const navigationItems = {
  products: [
    {
        name: "Compass",
        description: "Campaign Manager Service",
        icon: "/images/compass.svg",
        href: "/products/compass"
    },
    {
        name: "Help Desk",
        description: "Community & Aid Service",
        icon: "/images/help-desk.svg",
        href: "/products/help-desk"
    },
    {
        name: "Pathway",
        description: "Education & Training Service",
        icon: "/images/pathway.svg",
        href: "/products/pathway"
    },
    {
        name: "Engage",
        description: "CRM & Engagement Service",
        icon: "/images/engage.svg",
        href: "/products/engage"
    },
    {
        name: "Advocacy Ink",
        description: "Printing & Promotional Products Service",
        icon: "/images/advocacy-ink.svg",
        href: "/products/advocacy-ink"
    },
    {
        name: "Progressive Pixels",
        description: "Coming Soon - Fall 2025",
        icon: "/images/pixels.svg",
        href: "/products/progressive-pixels"
    },
    // Add more products...
  ],
  solutions: [
    {
      heading: "By Industry",
      items: [
        {
          name: "Healthcare",
          icon: "/images/healthcare-icon.svg",
          href: "/solutions/healthcare"
        },
        {
          name: "Education",
          icon: "/images/education-icon.svg",
          href: "/solutions/education"
        },
        // Add more items...
      ]
    },
    {
      heading: "By Team Size",
      items: [
        {
          name: "Enterprise",
          icon: "/images/enterprise-icon.svg",
          href: "/solutions/enterprise"
        },
        {
          name: "Small Business",
          icon: "/images/small-business-icon.svg",
          href: "/solutions/small-business"
        },
        // Add more items...
      ]
    },
    // Add more sections...
  ]
} as const; 