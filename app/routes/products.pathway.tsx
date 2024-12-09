import { type MetaFunction } from "@remix-run/node"
import ProductNavbar from '~/components/product-navbar'
import { ArrowRight, ChartNetwork, GitPullRequestArrow, GitPullRequestCreateArrow, ImageUpscale, MapPinCheck, User } from "lucide-react"
import ProductHeader from "~/components/product-header"
import ServiceGrid from "~/components/service-grid"
import { MousePointerClick, CalendarClock, FileUser, ClipboardList } from 'lucide-react'
import PricingCard from "~/components/pricing-card"

export const meta: MetaFunction = () => {
  return [
    { title: "Pathway | Civics Lab" },
    { name: "description", content: "Educating Progressives, Empowering Change" },
  ]
}

export default function PathwayRoute() {

    const services = [
        {
            text: "1",
            heading: "Access Free Content",
            body: "Explore a wide range of progressive media content on platforms like YouTube and TikTok, designed to educate and inspire the public.",
            variant: "pathway" as const
        },
        {
            text: "2",
            heading: "Tailored Trainings",
            body: "Schedule per-session trainings for candidates, staffers, or county parties, customized to address specific needs and challenges.",
            variant: "pathway" as const
        },
        {
            text: "3",
            heading: "Integrated Support",
            body: "Seamlessly connect Pathway’s educational offerings with other Civics Lab services to create a comprehensive solution for your organization.",
            variant: "pathway" as const
        },
    ]

    const benefits = [
        {
            icon: ClipboardList,
            heading: "Free Progressive Media Content",
            body: "Access educational videos and materials on platforms like YouTube and TikTok to stay informed and engaged, all supported by advertisers.",
            variant: "pathway" as const
        },
        {
            icon: MapPinCheck,
            heading: "Custom Training Sessions",
            body: "Receive tailored, per-session training designed to empower candidates, staffers, and county parties with the skills they need to succeed.",
            variant: "pathway" as const
        },
        {
            icon: GitPullRequestCreateArrow,
            heading: "Educational Resources",
            body: "Benefit from a library of materials created specifically for progressive campaigns, providing actionable strategies and insights.",
            variant: "pathway" as const
        },
        {
            icon: ImageUpscale,
            heading: "Public Engagement Tools",
            body: "Leverage progressive media content to educate and mobilize your community effectively.",
            variant: "pathway" as const
        },
        {
            icon: User,
            heading: "Seamless Integration",
            body: "Combine Pathway services with other Civics Lab offerings for a vertically integrated solution that meets all your campaign needs.",
            variant: "pathway" as const
        },
        {
            icon: ChartNetwork,
            heading: "Affordable Options",
            body: "Enjoy free access to public content or opt for personalized training sessions to get exactly the support you need.",
            variant: "pathway" as const
        },
    ]

  return (
    <div>
      <ProductNavbar
        product={{
          name: "Pathway",
          iconSrc: "/images/pathway.svg"
        }}
        navItems={[
          { label: "Service", to: "service" },
          { label: "Benefits", to: "benefits" },
          { label: "Pricing", to: "pricing" }
        ]}
        button={{
          text: "Join The Waitlist",
          type: "pathway",
          to: "/signup",
          trailingIcon: ArrowRight
        }}
      />
      <ProductHeader
        subheading={{
          text: "Educating Progressives, Empowering Change",
          style: "text-lime-500"
        }}
        heading="Building the Next Generation of Leaders and Amplifying Progressive Voices"
        body="Pathway is a progressive educational hub dedicated to training the next generation of campaign staffers and providing impactful media content for progressives. From educational materials for county parties and candidates to media content that educates and mobilizes the public, Pathway bridges knowledge gaps and fosters civic engagement. With free, advertiser-supported content and tailored training sessions, Pathway empowers progressives to lead and inspire change."
        primaryButton={{
            text: "Join The Waitlist",
            type: "pathway",
            trailingIcon: ArrowRight
        }}
        image={{
            src: "/images/pathway-banner.jpg",
            alt: "Education Training Sessions"
        }}
        />
        <ServiceGrid 
            id="service"
            heading="How do our services work?" 
            services={services}
            variant="pathway"
        />
        <ServiceGrid 
            id="benefits"
            heading="Benefits" 
            services={benefits}
            variant="pathway"
        />
        <section id="pricing" className="mx-auto px-4 py-12 md:py-20">
            <div className='max-w-7xl mx-auto w-full flex flex-col gap-8'>
                <h2 className="text-4xl font-bold">Enjoy Pathways</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <PricingCard
                        variant="secondary"
                        title="Community"
                        productName="Pathway"
                        text="Free"
                        includedItems={[
                            "Access to progressive media content on platforms like YouTube and TikTok.",
                            "Educational materials and videos designed to inform and inspire the public.",
                            "Opportunities to engage with community-driven content and discussions."
                        ]}
                        primaryButton={{
                            text: "Join The Waitlist",
                            type: "primary",
                            to: "/signup"
                        }}
                    />
                    <PricingCard
                        variant="primary"
                        title="Custom Training Session"
                        productName="Pathway"
                        text="Contact Us"
                        includedItems={[
                            "Tailored training sessions for candidates, staffers, and county parties.",
                            "Expert-led workshops addressing specific challenges and goals.",
                            "Comprehensive materials and resources provided during the training."
                        ]}
                        primaryButton={{
                            text: "Contact Sales",
                            type: "primary",
                            to: "/signup"
                        }}
                    />
                </div>
            </div>
        </section>
    </div>
  )
} 