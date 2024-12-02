import { FC } from 'react'
import Button from '~/components/ui/button'
import { serviceColors, type ServiceName } from '~/lib/services'

interface ContentSectionProps {
  subheading?: string
  service?: {
    name: ServiceName
    iconSrc: string
  }
  heading: string
  body: string
  primaryButton?: {
    text: string
    to?: string
    onClick?: () => void
  }
  secondaryButton?: {
    text: string
    to?: string
    onClick?: () => void
  }
  image: {
    src: string
    alt: string
  }
}

const ContentSection: FC<ContentSectionProps> = ({
  subheading,
  service,
  heading,
  body,
  primaryButton,
  secondaryButton,
  image,
}) => {
  return (
    <section className="relative overflow-hidden px-8 py-20">
      <div className="mx-auto max-w-7xl w-full">
        <div className="lg:grid lg:grid-cols-2 lg:gap-10 lg:items-center">
          {/* Content Side */}
          <div className="max-w-xl">
            {/* Optional Subheading */}
            {subheading && (
              <span className="block text-blue-600 font-caveat font-bold text-xl">
                {subheading}
              </span>
            )}

            {/* Optional Service */}
            {service && (
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex-shrink-0 h-7 w-7">
                  <img 
                    src={service.iconSrc}
                    alt=""
                    className="h-full w-full object-contain"
                  />
                </div>
                <span className={`font-caveat font-bold text-xl ${serviceColors[service.name]}`}>
                  {service.name}
                </span>
              </div>
            )}

            {/* Heading */}
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {heading}
            </h2>

            {/* Body Content */}
            <p className="mt-4 text-lg text-gray-500">
              {body}
            </p>

            {/* Buttons */}
            {(primaryButton || secondaryButton) && (
              <div className="mt-8 flex flex-wrap gap-4">
                {primaryButton && (
                  <Button
                    type="primary"
                    to={primaryButton.to}
                    onClick={primaryButton.onClick}
                  >
                    {primaryButton.text}
                  </Button>
                )}
                {secondaryButton && (
                  <Button
                    type="secondary"
                    to={secondaryButton.to}
                    onClick={secondaryButton.onClick}
                  >
                    {secondaryButton.text}
                  </Button>
                )}
              </div>
            )}
          </div>

          {/* Image Side */}
          <div className="relative w-full h-[50vh] lg:min-h-[500px] lg:h-full mt-8 lg:mt-0 overflow-hidden rounded-2xl">
            <img
              className="absolute inset-0 w-full h-full object-cover"
              src={image.src}
              alt={image.alt}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContentSection 