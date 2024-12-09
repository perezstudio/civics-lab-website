import { FC, useState } from 'react'
import { cn } from '~/utils/cn'
import LargePricingCard from './large-pricing-card'
import type { ServiceName } from '~/lib/services'
import { ArrowRight } from 'lucide-react'
import PricingInfoCard from './ui/pricing-info-card'
import Button from './ui/button'

interface PricingTier {
  description: string
  price: {
    dollars: number
    cents: number
    period: string
  }
  features: string[]
}

interface PricingTabsProps {
  productName: ServiceName
  tiers: {
    [key: string]: PricingTier
  }
}

const PricingSection: FC<PricingTabsProps> = ({ productName, tiers }) => {
  const [selectedTier, setSelectedTier] = useState(Object.keys(tiers)[0])

  const tabStyles: Record<ServiceName, string> = {
    'Compass': 'hover:text-cyan-500 data-[state=active]:text-cyan-500',
    'Help Desk': 'hover:text-violet-500 data-[state=active]:text-violet-500',
    'Engage': 'hover:text-teal-500 data-[state=active]:text-teal-500',
    'Pathway': 'hover:text-lime-500 data-[state=active]:text-lime-500',
    'Advocacy Ink': 'hover:text-amber-500 data-[state=active]:text-amber-500'
  }

  return (
    <div className="flex flex-col gap-8">
      {/* Tab Bar */}
      <div className="flex justify-center">
        <div className="p-1 bg-teal-100/40 rounded-full">
          <div className="flex gap-1">
            {Object.keys(tiers).map((tierName) => (
              <button
                key={tierName}
                onClick={() => setSelectedTier(tierName)}
                className={cn(
                  'px-6 py-2.5 text-base font-bold rounded-full transition-all duration-200',
                  selectedTier === tierName 
                    ? 'bg-white shadow-sm text-teal-950' 
                    : 'text-teal-700 hover:text-teal-900'
                )}
              >
                {tierName}
              </button>
            ))}
          </div>
        </div>
      </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Large Pricing Card - spans full width on first row */}
            <div className="col-span-1 lg:col-span-3">
                <LargePricingCard
                variant='primary'
                productName={productName}
                planName={selectedTier}
                description={tiers[selectedTier].description}
                price={tiers[selectedTier].price}
                features={tiers[selectedTier].features}
                primaryButton={{
                    text: "Join The Waitlist",
                    type: "primary",
                    trailingIcon: ArrowRight
                }}
                secondaryButton={{
                    text: "Book A Call",
                    type: "secondary"
                }}
                />
            </div>
            <PricingInfoCard variant="secondary">
                <h2 className="text-2xl font-bold">Behind Enemy Lines Discount</h2>
                <h3 className="text-4xl font-extrabold">50% Off</h3>
                <p className="text-sm text-slate-500">For campaigns that received under 40% in the last election cycle, making powerful tools accessible to those working in challenging districts.</p>
                <Button type="primary" className="w-full">Book a Call</Button>
            </PricingInfoCard>
            <PricingInfoCard variant="secondary">
                <h2 className="text-4xl font-bold">Bundle Pricing for County & State Parties</h2>
                <p className="text-sm text-slate-500">Maximize your impact and streamline operations with exclusive bundle pricing for county and state parties. Get access to our full suite of campaign services to support multiple candidates, coordinate outreach efforts, and ensure a unified strategy—all at a cost-effective rate designed for party leadership. Let us help you empower your team and win together.</p>
                <Button variant="primary" className="w-full">Book a Call</Button>
            </PricingInfoCard>
            <PricingInfoCard variant="primary">
                <h2 className="text-4xl font-bold">Book a 15 min Intro Call</h2>
                <p className="text-sm">Learn more about how Civics Lab Engage works and how it can help you.</p>
                <Button variant="secondary" className="w-full">Book a Call</Button>
            </PricingInfoCard>
        </div>
    </div>
  )
}

export default PricingSection 