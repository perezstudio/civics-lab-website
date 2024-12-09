import { type MetaFunction } from "@remix-run/node"
import ProductNavbar from '~/components/product-navbar'
import { ArrowRight, ChartNetwork, GitPullRequestArrow, GitPullRequestCreateArrow, ImageUpscale, MapPinCheck, User } from "lucide-react"
import ProductHeader from "~/components/product-header"
import ServiceGrid from "~/components/service-grid"
import { MousePointerClick, CalendarClock, FileUser, ClipboardList } from 'lucide-react'
import PricingSection from "~/components/pricing-section"

export const meta: MetaFunction = () => {
  return [
    { title: "Engage | Civics Lab" },
    { name: "description", content: "Simplifying County Party Relationship Management" },
  ]
}

export default function EngageRoute() {

    const services = [
        {
            text: "1",
            heading: "Organize Your Data",
            body: "Use Engage to track contacts, donations, event attendance, and more. Keep all your essential information in one place for seamless management.",
            variant: "engage" as const
        },
        {
            text: "2",
            heading: "Streamline Your Operations",
            body: "Manage tasks, work plans, and budgets effortlessly. Create custom lists, sync data with NGP VAN, and generate reports to keep your team aligned and efficient.",
            variant: "engage" as const
        },
        {
            text: "3",
            heading: "Collaborate and Share",
            body: "Share contact files and event details with other county parties and candidates. Engage’s dynamic tools make collaboration and data sharing easy and secure.",
            variant: "engage" as const
        },
    ]

    const benefits = [
        {
            icon: ClipboardList,
            heading: "Contact Management",
            body: "Track donor pledges, contact details, interactions, and event attendance all in one organized platform.",
            variant: "engage" as const
        },
        {
            icon: MapPinCheck,
            heading: "Seamless Event Coordination",
            body: "Accept event submissions via dynamic forms, manage RSVPs, and streamline check-ins with QR codes.",
            variant: "engage" as const
        },
        {
            icon: GitPullRequestCreateArrow,
            heading: "Custom Data Insights",
            body: "Build custom lists, export CSV files, and sync data directly with NGP VAN for precise targeting and reporting.",
            variant: "engage" as const
        },
        {
            icon: ImageUpscale,
            heading: "Efficient Work Plan Tracking",
            body: "Assign tasks, monitor progress, and manage budgets with built-in project management tools.",
            variant: "engage" as const
        },
        {
            icon: User,
            heading: "Collaborative Data Sharing",
            body: "Share contact files and resources with other counties and candidates, fostering collaboration and mutual support.",
            variant: "engage" as const
        },
        {
            icon: ChartNetwork,
            heading: "Flexible and Affordable Pricing",
            body: "We have discounts for underperforming campaigns to support progress where it’s needed most.",
            variant: "engage" as const
        },
    ]

    const pricingTiers = {
        "Tiny": {
            description: "(District under 50k)",
            price: {
                dollars: 49,
                cents: 99,
                period: "Monthly / per Team"
            },
            features: [
                "Basic contact and donor tracking tools.",
                "Sync data with NGP VAN for streamlined operations.",
                "Budget tracking for effective financial management.",
                "Event management features like RSVP tracking and QR code sign-ins.",
                "Enhanced reporting tools for deeper insights.",
                "Dynamic form embeds for event submissions.",
                "Custom list creation and CSV export functionality.",
                "Advanced work plan and project tracking with task assignments.",
                "Integration with Mobilize for event promotion and RSVPs.",
                "Priority support and personalized onboarding.",
                "Comprehensive data-sharing tools for collaboration with other counties and candidates."
            ]
        },
        "Starter": {
            description: "(District under 100k)",
            price: {
                dollars: 99,
                cents: 99,
            period: "Monthly / per Team"
            },
            features: [
                "Basic contact and donor tracking tools.",
                "Sync data with NGP VAN for streamlined operations.",
                "Budget tracking for effective financial management.",
                "Event management features like RSVP tracking and QR code sign-ins.",
                "Enhanced reporting tools for deeper insights.",
                "Dynamic form embeds for event submissions.",
                "Custom list creation and CSV export functionality.",
                "Advanced work plan and project tracking with task assignments.",
                "Integration with Mobilize for event promotion and RSVPs.",
                "Priority support and personalized onboarding.",
                "Comprehensive data-sharing tools for collaboration with other counties and candidates."
            ]
        },
        "Pro": {
            description: "(District under 250k)",
            price: {
            dollars: 199,
            cents: 99,
            period: "Monthly / per Team"
            },
            features: [
                "Basic contact and donor tracking tools.",
                "Sync data with NGP VAN for streamlined operations.",
                "Budget tracking for effective financial management.",
                "Event management features like RSVP tracking and QR code sign-ins.",
                "Enhanced reporting tools for deeper insights.",
                "Dynamic form embeds for event submissions.",
                "Custom list creation and CSV export functionality.",
                "Advanced work plan and project tracking with task assignments.",
                "Integration with Mobilize for event promotion and RSVPs.",
                "Priority support and personalized onboarding.",
                "Comprehensive data-sharing tools for collaboration with other counties and candidates."
            ]
        },
        "Enterprise": {
            description: "(District over 250k)",
            price: {
            dollars: 299,
            cents: 99,
            period: "Monthly / per Team"
            },
            features: [
                "Basic contact and donor tracking tools.",
                "Sync data with NGP VAN for streamlined operations.",
                "Budget tracking for effective financial management.",
                "Event management features like RSVP tracking and QR code sign-ins.",
                "Enhanced reporting tools for deeper insights.",
                "Dynamic form embeds for event submissions.",
                "Custom list creation and CSV export functionality.",
                "Advanced work plan and project tracking with task assignments.",
                "Integration with Mobilize for event promotion and RSVPs.",
                "Priority support and personalized onboarding.",
                "Comprehensive data-sharing tools for collaboration with other counties and candidates."
            ]
        }
    }

  return (
    <div>
      <ProductNavbar
        product={{
          name: "Engage",
          iconSrc: "/images/engage.svg"
        }}
        navItems={[
          { label: "Service", to: "service" },
          { label: "Benefits", to: "benefits" },
          { label: "Pricing", to: "pricing" }
        ]}
        button={{
          text: "Join The Waitlist",
          type: "engage",
          to: "/signup",
          trailingIcon: ArrowRight
        }}
      />
      <ProductHeader
        subheading={{
          text: "Simplifying County Party Relationship Management",
          style: "text-teal-500"
        }}
        heading="The All-in-One CRM for Managing Community, Business, and Donor Relationships"
        body="Engage is a purpose-built CRM designed to help county parties efficiently manage relationships with community members, local businesses, and donors. With powerful tools for tracking contacts, donations, events, work plans, and budgets, Engage makes organization seamless. Its intuitive interface and data-sharing capabilities provide an easier, more collaborative alternative to traditional platforms like VoteBuilder/VAN. Whether you’re coordinating tasks, managing RSVPs, or generating custom reports, Engage keeps your operations running smoothly and effectively."
        primaryButton={{
            text: "Join The Waitlist",
            type: "engage",
            trailingIcon: ArrowRight
        }}
        image={{
            src: "/images/engage-banner.jpg",
            alt: "Teammates Handshake"
        }}
        />
        <ServiceGrid 
            id="service"
            heading="How do our services work?" 
            services={services}
            variant="engage"
        />
        <ServiceGrid 
            id="benefits"
            heading="Benefits" 
            services={benefits}
            variant="engage"
        />
        <section id="pricing" className="mx-auto px-4 py-12 md:py-20">
            <div className='max-w-7xl mx-auto w-full flex flex-col gap-8'>
                <h2 className="text-4xl font-bold">Join Engage</h2>
                
                <PricingSection 
                    productName="Engage"
                    tiers={pricingTiers}
                />
            </div>
        </section>
    </div>
  )
} 