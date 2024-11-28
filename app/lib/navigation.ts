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
      name: "Analytics Platform",
      description: "Get a better understanding of your traffic",
      icon: "/images/analytics-icon.svg",
      href: "/products/analytics"
    },
    {
      name: "Engagement Suite",
      description: "Speak directly to your customers",
      icon: "/images/engagement-icon.svg",
      href: "/products/engagement"
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