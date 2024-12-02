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
        description: "Coming Soon - Summer 2025",
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
      heading: "By Organization Type",
      items: [
        {
            name: "County Party",
            icon: "/icon/county-party-icon.svg",
            href: "/solutions/county-party"
        },
        {
            name: "State Party",
            icon: "/icon/county-party-icon.svg",
            href: "/solutions/state-party"
        },
        {
            name: "Political Campaign",
            icon: "/icon/political-campaign-icon.svg",
            href: "/solutions/political-campaign"
        },
        {
            name: "Non-Profit",
            icon: "/icon/non-profit-icon.svg",
            href: "/solutions/non-profit"
        },
        // Add more items...
      ]
    },
    {
      heading: "By Use Case",
      items: [
        {
            name: "Launching A Campaign",
            icon: "/icon/launching-campaign-icon.svg",
            href: "/solutions/launching-a-campaign"
        },
        {
            name: "Community Fundraising",
            icon: "/icon/community-fundraising-icon.svg",
            href: "/solutions/community-fundraising"
        },
        {
            name: "Training the Next Group of Campaign Staff",
            icon: "/icon/training-staff-icon.svg",
            href: "/solutions/training-staff"
        },
        {
            name: "Expanding Public Awareness",
            icon: "/icon/public-awareness-icon.svg",
            href: "/solutions/public-awareness"
        },
        {
            name: "Reinvigorating an Underserved District",
            icon: "/icon/underserved-district-icon.svg",
            href: "/solutions/underserved-district"
        },
        {
            name: "Multi-County Collaboration",
            icon: "/icon/collaboration-icon.svg",
            href: "/solutions/multi-county-collaboration"
        },
        // Add more items...
      ]
    },
    // Add more sections...
  ]
} as const; 