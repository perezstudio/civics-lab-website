import { FC } from 'react'
import DetailCard from './detail-card'
import { Icon } from 'lucide-react'

interface Service {
  icon?: React.ComponentType<{ className?: string }>
  text?: string
  heading: string
  body: string
  variant?: 'global' | 'compass' | 'helpdesk' | 'engage' | 'pathway' | 'advocacyink'
}

interface ServiceGridProps {
  id?: string
  heading: string
  services: Service[]
  variant?: 'global' | 'compass' | 'helpdesk' | 'engage' | 'pathway' | 'advocacyink'
}

const ServiceGrid: FC<ServiceGridProps> = ({ heading, services, id, variant }) => {
  return (
    <section id={id} className="mx-auto px-4 py-12 md:py-20">
      <div className='max-w-7xl mx-auto w-full flex flex-col gap-8'>
        <h2 className="text-4xl font-bold">{heading}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
            <DetailCard
                key={index}
                icon={service.icon}
                text={service.text}
                heading={service.heading}
                body={service.body}
                variant={variant || service.variant}
            />
            ))}
        </div>
      </div>
    </section>
  )
}

export default ServiceGrid 