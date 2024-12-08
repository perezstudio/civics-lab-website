import { type MetaFunction } from "@remix-run/node"
import ProductNavbar from '~/components/product-navbar'
import { ArrowRight } from "lucide-react"
import ProductHeader from "~/components/product-header"
import ServiceGrid from "~/components/service-grid"
import { MousePointerClick, CalendarClock, FileUser } from 'lucide-react'

export const meta: MetaFunction = () => {
  return [
    { title: "Compass | Civics Lab" },
    { name: "description", content: "Guiding Smaller Campaigns to Bigger Wins" },
  ]
}

export default function CompassRoute() {

    const services = [
        {
            text: "1",
            heading: "Subscribe to Your Plan",
            body: "Choose a subscription plan that fits your campaign’s needs and get instant access to expert support.",
            variant: "compass" as const
        },
        {
            text: "2",
            heading: "One-on-One Onboarding",
            body: "Kick off your journey with a personalized onboarding call with a campaign specialist to align on your goals.",
            variant: "compass" as const
        },
        {
            text: "3",
            heading: "Custom Campaign Strategy",
            body: "Work with us to craft a winning campaign strategy, then submit requests as needed while we handle the execution.",
            variant: "compass" as const
        },
    ]

    const benefits = [
        {
            text: "1",
            heading: "Subscribe to Your Plan",
            body: "Choose a subscription plan that fits your campaign’s needs and get instant access to expert support.",
            variant: "compass" as const
        },
        {
            text: "2",
            heading: "One-on-One Onboarding",
            body: "Kick off your journey with a personalized onboarding call with a campaign specialist to align on your goals.",
            variant: "compass" as const
        },
        {
            text: "3",
            heading: "Custom Campaign Strategy",
            body: "Work with us to craft a winning campaign strategy, then submit requests as needed while we handle the execution.",
            variant: "compass" as const
        },
    ]

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
          text: "Join The Waitlist",
          type: "compass",
          to: "/signup",
          trailingIcon: ArrowRight
        }}
      />
      <ProductHeader
        subheading={{
          text: "Navigate Your Campaign to Success",
          style: "text-cyan-500"
        }}
        heading="Guiding Smaller Campaigns to Bigger Wins"
        body="Compass is your partner for campaign success. Designed for smaller campaigns, it offers expert planning, strategy, and a la carte services."
        primaryButton={{
            text: "Join The Waitlist",
            type: "compass",
            trailingIcon: ArrowRight
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
        <ServiceGrid 
            heading="How do our services work?" 
            services={services} 
        />
        <ServiceGrid 
            heading="Membership Benefits" 
            services={benefits}
        />
    </div>
  )
} 