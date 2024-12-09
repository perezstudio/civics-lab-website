import { FC } from 'react'
import Button, { ButtonType } from '~/components/ui/button'
import { cn } from '~/utils/cn'
import type { ServiceName } from '~/lib/services'

interface ButtonProps {
  text: string
  type?: ButtonType
  to?: string
  trailingIcon?: React.ComponentType
}

interface PricingCardProps {
  title: string
  variant?: 'primary' | 'secondary'
  productName: ServiceName
  price: {
    dollars: number
    cents: number
    period: string
  }
  includedItems?: string[]
  features?: string[]
  primaryButton?: ButtonProps
  secondaryButton?: ButtonProps
}

const PricingCard: FC<PricingCardProps> = ({
  title,
  variant = 'secondary',
  productName,
  price,
  includedItems,
  features,
  primaryButton,
  secondaryButton
}) => {
  const variantStyles: Record<'primary' | 'secondary', Record<ServiceName, string>> = {
    primary: {
      'Compass': 'border-cyan-500 bg-cyan-500 text-white',
      'Help Desk': 'border-violet-500 bg-violet-500 text-white',
      'Engage': 'border-teal-500 bg-teal-500 text-white',
      'Pathway': 'border-lime-500 bg-lime-500 text-white',
      'Advocacy Ink': 'border-amber-500 bg-amber-500 text-white'
    },
    secondary: {
      'Compass': 'border-cyan-200 bg-cyan-100 text-cyan-950',
      'Help Desk': 'border-violet-200 bg-violet-100 text-violet-950',
      'Engage': 'border-teal-200 bg-teal-100 text-teal-950',
      'Pathway': 'border-lime-200 bg-lime-100 text-lime-950',
      'Advocacy Ink': 'border-amber-200 bg-amber-100 text-amber-950'
    }
  }

  return (
    <div className={cn(
      'rounded-xl border-2 p-8 flex flex-col gap-7',
      variantStyles[variant][productName]
    )}>
      {/* Title */}
      <h3 className="text-4xl font-bold">{title}</h3>

      {/* Price Section */}
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-2">
          <div className="flex items-top gap-0.5">
            <span className="text-base">$</span>
            <span className="text-6xl font-bold">{price.dollars}</span>
            <span className="text-base">.{price.cents}</span>
          </div>
          <span className="text-xs font-semibold">{price.period}</span>
        </div>
      </div>

      {/* What's Included Section */}
      {includedItems && includedItems.length > 0 && (
        <div className="flex flex-col gap-1">
          <h4 className="font-bold text-sm">What's included</h4>
          <ul className="flex flex-col gap-1">
            {includedItems.map((item, index) => (
              <li key={index} className="text-sm flex items-center gap-2">
                <span className="text-[0.6rem]">★</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Features Section */}
      {features && features.length > 0 && (
        <div className="flex flex-col gap-1">
          <h4 className="font-bold text-sm">Features</h4>
          <ul className="flex flex-col gap-1">
            {features.map((feature, index) => (
              <li key={index} className="text-sm flex items-center gap-2">
                <span className="text-[0.6rem]">★</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Buttons */}
      <div className="flex flex-col xl:flex-row gap-3 mt-auto">
        {primaryButton && (
          <Button
            type={primaryButton.type || 'primary'}
            to={primaryButton.to}
            TrailingIcon={primaryButton.trailingIcon}
          >
            {primaryButton.text}
          </Button>
        )}
        {secondaryButton && (
          <Button
            type={secondaryButton.type || 'secondary'}
            to={secondaryButton.to}
            TrailingIcon={secondaryButton.trailingIcon}
          >
            {secondaryButton.text}
          </Button>
        )}
      </div>
    </div>
  )
}

export default PricingCard 