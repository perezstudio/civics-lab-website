import { FC, useState } from 'react'
import { cn } from '~/utils/cn'
import LargePricingCard from './large-pricing-card'
import type { ServiceName } from '~/lib/services'
import { ArrowRight } from 'lucide-react'

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
      <div className="flex justify-center border-b">
        <div className="flex gap-8">
          {Object.keys(tiers).map((tierName) => (
            <button
              key={tierName}
              onClick={() => setSelectedTier(tierName)}
              className={cn(
                'pb-4 text-sm font-medium text-slate-500 border-b-2 border-transparent -mb-[2px]',
                tabStyles[productName],
                selectedTier === tierName && 'border-current'
              )}
              data-state={selectedTier === tierName ? 'active' : 'inactive'}
            >
              {tierName}
            </button>
          ))}
        </div>
      </div>

      {/* Pricing Card */}
      <LargePricingCard
        variant={selectedTier === Object.keys(tiers)[1] ? 'primary' : 'secondary'}
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
  )
}

export default PricingSection 