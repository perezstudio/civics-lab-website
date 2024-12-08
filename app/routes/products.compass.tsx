import { type MetaFunction } from "@remix-run/node"
import ProductNavbar from '~/components/product-navbar'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import ProductHeader from "~/components/product-header"

export const meta: MetaFunction = () => {
  return [
    { title: "Compass | Civics Lab" },
    { name: "description", content: "Guiding Smaller Campaigns to Bigger Wins" },
  ]
}

export default function CompassRoute() {
  return (
    <div>
      <ProductNavbar
        product={{
          name: "Compass",
          iconSrc: "/images/compass.svg"
        }}
        navItems={[
          { label: "Overview", to: "overview" },
          { label: "Features", to: "features" },
          { label: "Pricing", to: "pricing" },
          { label: "FAQ", to: "faq" }
        ]}
        button={{
          text: "Get Started",
          type: "compass",
          to: "/signup",
          trailingIcon: ArrowRightIcon
        }}
      />
      <ProductHeader
        product={{
            name: "Compass",
            iconSrc: "/images/compass.svg"
        }}
        subheading={{
          text: "Campaign Management",
          style: "text-cyan-500"
        }}
        heading="Guiding Smaller Campaigns to Bigger Wins"
        body="Compass is your partner for campaign success. Designed for smaller campaigns, it offers expert planning, strategy, and a la carte services."
        primaryButton={{
            text: "Get Started",
            type: "compass",
            trailingIcon: ArrowRightIcon
        }}
        secondaryButton={{
            text: "Contact Sales",
            type: "secondary"
        }}
        image={{
            src: "/images/compass-banner.jpg",
            alt: "Campaign Management Team"
        }}
        />
    </div>
  )
} 