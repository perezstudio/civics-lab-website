import { FC } from 'react'
import Button from '~/components/ui/button'
import { ArrowDownIcon } from '@heroicons/react/24/outline'

interface HeaderProps {
  subheading: string
  heading: string
  description: string
  buttonText: string
  imageSrc: string
  imageAlt: string
  nextSectionId: string
}

const Header: FC<HeaderProps> = ({
  subheading,
  heading,
  description,
  buttonText,
  imageSrc,
  imageAlt,
  nextSectionId,
}) => {
  const scrollToNextSection = () => {
    const element = document.getElementById(nextSectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:pb-28 lg:w-full">
          <div className="pt-16 mx-auto max-w-7xl px-4 sm:pt-24 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
              {/* Content Section */}
              <div className="sm:text-center lg:text-left">
                <div className="mt-24 lg:mt-16">
                  <span className="inline-block text-blue-600 font-semibold tracking-wide uppercase">
                    {subheading}
                  </span>
                  <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                    {heading}
                  </h1>
                  <p className="mt-6 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto lg:mx-0">
                    {description}
                  </p>
                  <div className="mt-8 sm:mt-10">
                    <Button 
                      type="primary"
                      onClick={scrollToNextSection}
                      trailingIcon={<ArrowDownIcon className="h-4 w-4" />}
                    >
                      {buttonText}
                    </Button>
                  </div>
                </div>
              </div>

              {/* Image Section */}
              <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0">
                <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
                  <img
                    className="w-full h-full object-cover rounded-lg"
                    src={imageSrc}
                    alt={imageAlt}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header 