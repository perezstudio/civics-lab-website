import { FC } from 'react'
import Button, { ButtonType } from '~/components/ui/button'
import { serviceColors, type ServiceName } from '~/lib/services'
import { cn } from '~/utils/cn'

interface ProductHeaderProps {
  subheading: {
    text: string
    style?: string
  }
  heading: string
  body: string
  primaryButton?: {
    text: string
    to?: string
    type?: ButtonType
    trailingIcon?: React.ComponentType
  }
  secondaryButton?: {
    text: string
    to?: string
    type?: ButtonType
    trailingIcon?: React.ComponentType
  }
  image: {
    src: string
    alt: string
  }
}

const ProductHeader: FC<ProductHeaderProps> = ({
  product,
  subheading,
  heading,
  body,
  primaryButton,
  secondaryButton,
  image
}) => {
  return (
    <div className="px-4 sm:px-8 pt-12 sm:pt-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col items-center text-center gap-4 sm:gap-6">
          {/* Product Info */}
          {product && (
            <div className="flex items-center gap-3">
              <img 
                src={product.iconSrc} 
                alt=""
                className="w-6 sm:w-8 h-6 sm:h-8" 
              />
              <span className={`text-lg sm:text-xl font-bold font-caveat ${serviceColors[product.name]}`}>
                {product.name}
              </span>
            </div>
          )}

          {/* Subheading */}
          <h2 className={cn("text-lg sm:text-xl font-bold font-caveat", subheading.style)}>
            {subheading.text}
          </h2>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-950 max-w-4xl">
            {heading}
          </h1>

          {/* Body */}
          <p className="text-sm sm:text-base font-semibold text-slate-500 max-w-2xl">
            {body}
          </p>

          {/* Buttons */}
          {(primaryButton || secondaryButton) && (
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 w-full sm:w-auto">
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
          )}

          {/* Banner Image */}
          <div className="w-full h-[250px] sm:h-[300px] md:h-[400px] rounded-xl sm:rounded-2xl overflow-hidden">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-[250px] sm:h-[300px] md:h-[400px] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductHeader 