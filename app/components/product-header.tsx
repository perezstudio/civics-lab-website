import { FC } from 'react'
import Button, { ButtonType } from '~/components/ui/button'
import { serviceColors, type ServiceName } from '~/lib/services'
import { cn } from '~/utils/cn'

interface ProductHeaderProps {
  product?: {
    name: ServiceName
    iconSrc: string
  }
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
    <div className="px-8 pt-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col items-center text-center gap-6">
          {/* Subheading */}
          <h2 className={cn("text-xl font-bold font-caveat", subheading.style)}>
            {subheading.text}
          </h2>

          {/* Heading */}
          <h1 className="text-6xl font-bold text-slate-950 max-w-4xl">
            {heading}
          </h1>

          {/* Body */}
          <p className="text-base font-semibold text-slate-600 max-w-2xl">
            {body}
          </p>

          {/* Buttons */}
          {(primaryButton || secondaryButton) && (
            <div className="flex flex-wrap justify-center gap-4">
              {primaryButton && (
                <Button
                  type={primaryButton.type || 'primary'}
                  to={primaryButton.to}
                  {...(primaryButton.trailingIcon && { TrailingIcon: primaryButton.trailingIcon })}
                >
                  {primaryButton.text}
                </Button>
              )}
              {secondaryButton && (
                <Button
                  type={secondaryButton.type || 'secondary'}
                  to={secondaryButton.to}
                  {...(secondaryButton.trailingIcon && { TrailingIcon: secondaryButton.trailingIcon })}
                >
                  {secondaryButton.text}
                </Button>
              )}
            </div>
          )}

          {/* Banner Image */}
          <div className="w-full max-h-[500px] rounded-2xl overflow-hidden">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-[500px] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductHeader 