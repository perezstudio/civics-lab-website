import { FC, memo } from 'react'
import { cn } from '~/utils/cn'

type ProductVariant = 'global' | 'compass' | 'helpdesk' | 'engage' | 'pathway' | 'advocacyink'

interface DetailCardProps {
  icon?: React.ComponentType<{ className?: string }>
  text?: string
  variant?: ProductVariant
  heading: string
  body: string
}

const variantStyles: Record<ProductVariant, string> = {
    global: 'text-blue-500 bg-blue-100 border-blue-500',
    compass: 'text-cyan-500 bg-cyan-100 border-cyan-500',
    helpdesk: 'text-violet-500 bg-violet-100 border-violet-500',
    engage: 'text-teal-500 bg-teal-100 border-teal-500',
    pathway: 'text-lime-500 bg-lime-100 border-lime-500',
    advocacyink: 'text-amber-500 bg-amber-100 border-amber-500',
}

const DetailCard = memo<DetailCardProps>(({
    icon: Icon,
    text,
    variant = 'compass',
    heading,
    body
}) => {
  return (
    <div className="flex flex-col gap-2">
        <div className={cn(
            'border-2 rounded-lg p-4 w-14 h-14 flex items-center justify-center',
            variantStyles[variant]
        )}>
            {Icon && <Icon className="w-7 h-7" />}
            {text && <span className="text-2xl font-bold">{text}</span>}
        </div>
        <h3 className="text-2xl font-bold">{heading}</h3>
        <p className="text-base text-slate-500 font-medium">{body}</p>
    </div>
  )
})

DetailCard.displayName = 'DetailCard'

export default DetailCard 