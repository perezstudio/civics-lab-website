import { FC, ReactNode } from 'react'
import Button from '~/components/ui/button'

interface ContentSectionProps {
  subheading?: string
  service?: {
    name: string
    icon: ReactNode
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
    <section className="relative overflow-hidden py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-12 lg:items-center">
          {/* Content Side */}
          <div className="max-w-xl">
            {/* Optional Subheading */}
            {subheading && (
              <span className="block text-blue-600 font-semibold tracking-wide uppercase text-sm mb-3">
                {subheading}
              </span>
            )}

            {/* Optional Service */}
            {service && (
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex-shrink-0 h-6 w-6 text-blue-600">
                  {service.icon}
                </div>
                <span className="text-gray-600 font-medium">
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
          <div className="mt-12 lg:mt-0">
            <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
              <img
                className="w-full h-full object-cover rounded-lg"
                src={image.src}
                alt={image.alt}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContentSection 