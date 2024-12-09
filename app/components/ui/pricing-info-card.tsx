import { FC, ReactNode } from 'react'
import { cn } from '~/utils/cn'

interface PricingInfoCardProps {
  children: ReactNode
  variant?: 'primary' | 'secondary'
  className?: string
}

const PricingInfoCard: FC<PricingInfoCardProps> = ({ 
  children, 
  variant = 'secondary',
  className 
}) => {
  const variantStyles = {
    primary: 'bg-slate-900 border-slate-900 text-white',
    secondary: 'bg-slate-100 border-slate-200'
  }

  return (
    <div className={cn(
      'rounded-2xl border p-8 shadow-sm flex flex-col gap-4 h-full justify-between',
      variantStyles[variant],
      className
    )}>
      {children}
    </div>
  )
}

export default PricingInfoCard 