import { type MetaFunction } from "@remix-run/node"
import ProductNavbar from '~/components/product-navbar'
import { ArrowRight, ChartNetwork, GitPullRequestArrow, GitPullRequestCreateArrow, ImageUpscale, MapPinCheck, User } from "lucide-react"
import ProductHeader from "~/components/product-header"
import ServiceGrid from "~/components/service-grid"
import { MousePointerClick, CalendarClock, FileUser, ClipboardList } from 'lucide-react'
import PricingCard from "~/components/pricing-card"

export const meta: MetaFunction = () => {
  return [
    { title: "Help Desk | Civics Lab" },
    { name: "description", content: "Support When You Need It Most" },
  ]
}

export default function HelpDeskRoute() {

    const services = [
        {
            text: "1",
            heading: "Join the Community",
            body: "Sign up for free to connect with party leaders, candidates, and campaign staff across the country. Share advice, ask questions, and find support in a collaborative environment.",
            variant: "helpdesk" as const
        },
        {
            text: "2",
            heading: "Access Resources & Training",
            body: "Tap into a library of educational materials, attend training events, and learn practical strategies for running campaigns and managing operations effectively.",
            variant: "helpdesk" as const
        },
        {
            text: "3",
            heading: "Get Direct Support",
            body: "Upgrade to the Plus tier for exclusive training sessions and async direct message support to address your specific needs and challenges.",
            variant: "helpdesk" as const
        },
    ]

    const benefits = [
        {
            icon: ClipboardList,
            heading: "Nationwide Community",
            body: "Connect with party leaders, candidates, and campaign staff from across the country for advice, collaboration, and shared experiences.",
            variant: "helpdesk" as const
        },
        {
            icon: MapPinCheck,
            heading: "Expert Training",
            body: "Access training events led by experienced professionals to gain insights into campaign management and party operations.",
            variant: "helpdesk" as const
        },
        {
            icon: GitPullRequestCreateArrow,
            heading: "Comprehensive Resources",
            body: "Explore a library of educational materials designed to help you tackle challenges and streamline your efforts.",
            variant: "helpdesk" as const
        },
        {
            icon: ImageUpscale,
            heading: "Question Forums",
            body: "Participate in forums to get answers to your pressing questions and share your expertise with others.",
            variant: "helpdesk" as const
        },
        {
            icon: User,
            heading: "Exclusive Plus Tier Perks",
            body: "Enjoy enhanced benefits, including advanced training sessions and personalized support through async direct messaging.",
            variant: "helpdesk" as const
        },
        {
            icon: ChartNetwork,
            heading: "Affordable Access",
            body: "Choose from a free plan or an affordable Plus tier to get the level of support and resources that fit your needs.",
            variant: "helpdesk" as const
        },
    ]

  return (
    <div>
      <ProductNavbar
        product={{
          name: "Help Desk",
          iconSrc: "/images/help-desk.svg"
        }}
        navItems={[
          { label: "Service", to: "service" },
          { label: "Benefits", to: "benefits" },
          { label: "Pricing", to: "pricing" }
        ]}
        button={{
          text: "Join The Waitlist",
          type: "helpdesk",
          to: "/signup",
          trailingIcon: ArrowRight
        }}
      />
      <ProductHeader
        subheading={{
          text: "Support, Connection, and Guidance for Your Campaign",
          style: "text-violet-500"
        }}
        heading="A Community to Empower County Parties and Campaigns"
        body="Help Desk is your trusted hub for support, connection, and education. Designed for county parties and political campaigns, it offers a digital community, question forums, training events, and educational materials to help you thrive. Whether you’re seeking advice, learning new skills, or building connections, Help Desk ensures you have the tools and community you need to succeed."
        primaryButton={{
            text: "Join The Waitlist",
            type: "helpdesk",
            trailingIcon: ArrowRight
        }}
        image={{
            src: "/images/helpdesk-banner.jpg",
            alt: "Community Together"
        }}
        />
        <ServiceGrid 
            id="service"
            heading="How do our services work?" 
            services={services}
            variant="helpdesk"
        />
        <ServiceGrid 
            id="benefits"
            heading="Membership Benefits" 
            services={benefits}
            variant="helpdesk"
        />
        <section id="pricing" className="container mx-auto px-4 py-12 md:py-20">
            <div className='max-w-7xl mx-auto w-full flex flex-col gap-8'>
                <h2 className="text-4xl font-bold">Join Compass</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <PricingCard
                        variant="secondary"
                        title="Community"
                        productName="Help Desk"
                        text="Free"
                        includedItems={[
                            "Access to the digital community.",
                            "Participation in question forums",
                            "Basic educational materials and resources"
                        ]}
                        primaryButton={{
                            text: "Join The Waitlist",
                            type: "primary",
                            to: "/signup"
                        }}
                        secondaryButton={{
                            text: "Book A Call",
                            type: "secondary"
                        }}
                    />
                    <PricingCard
                        variant="primary"
                        title="Plus"
                        productName="Help Desk"
                        price={{
                            dollars: 49,
                            cents: 99,
                            period: "Monthly / Per Team"
                        }}
                        includedItems={[
                            "Exclusive access to advanced training events tailored to campaign needs.",
                            "Direct asynchronous messaging support for personalized help.",
                            "Premium educational materials with in-depth strategies and tools."
                        ]}
                        primaryButton={{
                            text: "Join The Waitlist",
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