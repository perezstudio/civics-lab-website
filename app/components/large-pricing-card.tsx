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

interface LargePricingCardProps {
  variant?: 'primary' | 'secondary'
  productName: ServiceName
  planName: string
  description?: string
  price: {
    dollars: number
    cents: number
    period: string
  }
  features: string[]
  primaryButton?: ButtonProps
  secondaryButton?: ButtonProps
}

const LargePricingCard: FC<LargePricingCardProps> = ({
  variant = 'secondary',
  productName,
  planName,
  description,
  price,
  features,
  primaryButton,
  secondaryButton
}) => {
  const variantStyles: Record<'primary' | 'secondary', Record<ServiceName, string>> = {
    primary: {
      'Compass': 'bg-cyan-500 text-white',
      'Help Desk': 'bg-violet-500 text-white',
      'Engage': 'bg-teal-500 text-white',
      'Pathway': 'bg-lime-500 text-white',
      'Advocacy Ink': 'bg-amber-500 text-white'
    },
    secondary: {
      'Compass': 'bg-cyan-50 text-cyan-950',
      'Help Desk': 'bg-violet-50 text-violet-950',
      'Engage': 'bg-teal-50 text-teal-950',
      'Pathway': 'bg-lime-50 text-lime-950',
      'Advocacy Ink': 'bg-amber-50 text-amber-950'
    }
  }

  return (
    <div className={cn(
      'rounded-xl p-8',
      variantStyles[variant][productName]
    )}>
      <div className="flex flex-col lg:flex-row justify-between gap-8 mb-8">
        {/* Left Side - Plan Info */}
        <div className="flex flex-col gap-2">
          <h3 className="text-4xl font-bold">{planName}</h3>
          {description && <p className="text-sm opacity-80">{description}</p>}
        </div>

        {/* Right Side - Pricing */}
        <div className="flex flex-col items-end">
          <div className="flex items-start">
            <span className="text-base">$</span>
            <span className="text-6xl font-bold">{price.dollars}</span>
            <div className="flex flex-col items-start">
              <span className="text-base">.{price.cents}</span>
            </div>
          </div>
          <span className="text-xs font-semibold">{price.period}</span>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-1 mb-8">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center gap-2">
            <span className="text-[0.6rem]">★</span>
            <span className="text-sm">{feature}</span>
          </div>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-3">
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

export default LargePricingCard 