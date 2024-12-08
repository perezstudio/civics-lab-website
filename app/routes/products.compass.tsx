import { type MetaFunction } from "@remix-run/node"
import ProductNavbar from '~/components/product-navbar'
import { ArrowRight, ChartNetwork, GitPullRequestArrow, GitPullRequestCreateArrow, ImageUpscale, MapPinCheck, User } from "lucide-react"
import ProductHeader from "~/components/product-header"
import ServiceGrid from "~/components/service-grid"
import { MousePointerClick, CalendarClock, FileUser, ClipboardList } from 'lucide-react'
import PricingCard from "~/components/pricing-card"

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
            icon: ClipboardList,
            heading: "Expert Guidance",
            body: "Partner with experienced campaign specialists who understand the challenges of running and winning elections.",
            variant: "compass" as const
        },
        {
            icon: MapPinCheck,
            heading: "Tailored Strategies",
            body: "Receive customized campaign plans designed to meet your unique goals, community needs, and resource levels.",
            variant: "compass" as const
        },
        {
            icon: GitPullRequestCreateArrow,
            heading: "Streamlined Operations",
            body: "Save time and effort by outsourcing planning and execution to a trusted team, so you can focus on voter outreach.",
            variant: "compass" as const
        },
        {
            icon: ImageUpscale,
            heading: "Scalable Support",
            body: "Whether you’re managing a local race or a county-wide effort, our services scale to fit campaigns of any size.",
            variant: "compass" as const
        },
        {
            icon: User,
            heading: "Proactive Problem-Solving",
            body: "Tackle challenges head-on with actionable insights and real-time solutions to keep your campaign on track.",
            variant: "compass" as const
        },
        {
            icon: ChartNetwork,
            heading: "Results-Oriented Approach",
            body: "Drive meaningful engagement and measurable success with proven strategies that prioritize voter connection and turnout.",
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
          { label: "Service", to: "service" },
          { label: "Benefits", to: "benefits" },
          { label: "Pricing", to: "pricing" }
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
            id="service"
            heading="How do our services work?" 
            services={services} 
        />
        <ServiceGrid 
            id="benefits"
            heading="Membership Benefits" 
            services={benefits}
        />
        <section id="pricing" className="container mx-auto px-4 py-12 md:py-20">
            <div className='max-w-7xl mx-auto w-full flex flex-col gap-8'>
                <h2 className="text-4xl font-bold">Join Compass</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <PricingCard
                        variant="secondary"
                        title="Starter"
                        productName="Compass"
                        price={{
                            dollars: 99,
                            cents: 99,
                            period: "Monthly / Per Team"
                        }}
                        includedItems={[
                            "Feature 1",
                            "Feature 2"
                        ]}
                        features={[
                            "Advanced Feature 1",
                            "Advanced Feature 2"
                        ]}
                        primaryButton={{
                            text: "Get Started",
                            type: "primary",
                            to: "/signup"
                        }}
                        secondaryButton={{
                            text: "Learn More",
                            type: "secondary"
                        }}
                    />
                    <PricingCard
                        variant="primary"
                        title="Advanced"
                        productName="Compass"
                        price={{
                            dollars: 199,
                            cents: 99,
                            period: "Monthly / Per Team"
                        }}
                        includedItems={[
                            "Feature 1",
                            "Feature 2"
                        ]}
                        features={[
                            "Advanced Feature 1",
                            "Advanced Feature 2"
                        ]}
                        primaryButton={{
                            text: "Get Started",
                            type: "primary",
                            to: "/signup"
                        }}
                        secondaryButton={{
                            text: "Learn More",
                            type: "secondary"
                        }}
                    />
                    <PricingCard
                        variant="secondary"
                        title="Pro"
                        productName="Compass"
                        price={{
                            dollars: 299,
                            cents: 99,
                            period: "Monthly / Per Team"
                        }}
                        includedItems={[
                            "Feature 1",
                            "Feature 2"
                        ]}
                        features={[
                            "Advanced Feature 1",
                            "Advanced Feature 2"
                        ]}
                        primaryButton={{
                            text: "Get Started",
                            type: "primary",
                            to: "/signup"
                        }}
                        secondaryButton={{
                            text: "Learn More",
                            type: "secondary"
                        }}
                    />
                </div>
            </div>
        </section>
    </div>
  )
} 