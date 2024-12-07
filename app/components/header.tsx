import { FC } from 'react'
import Button from '~/components/ui/button'
import { ArrowDown } from 'lucide-react'

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
    <header className="px-8 py-20">
        <div className="h-full max-w-7xl mx-auto">
            <div className="h-full lg:grid lg:grid-cols-2 lg:gap-10 lg:items-center">
                {/* Content Section */}
                <div className="relative z-10">
                    <div className="flex flex-col gap-6 sm:text-center lg:text-left">
                        <span className="font-caveat font-bold text-blue-600 text-xl">
                            {subheading}
                        </span>
                        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                            {heading}
                        </h1>
                        <p className="text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto lg:mx-0">
                            {description}
                        </p>
                        <div className="">
                            <Button 
                            type="primary"
                            onClick={scrollToNextSection}
                            TrailingIcon={ArrowDown}
                            >
                            {buttonText}
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Image Section */}
                <div className="relative w-full h-[50vh] lg:h-full mt-8 lg:mt-0">
                    <img
                    className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                    src={imageSrc}
                    alt={imageAlt}
                    />
                </div>
            </div>
        </div>
    </header>
)
}

export default Header 