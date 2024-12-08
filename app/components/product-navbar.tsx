import { FC, useEffect, useState } from 'react'
import Button from '~/components/ui/button'
import { cn } from '~/utils/cn'
import { Link } from '@remix-run/react'
import { type ServiceName } from '~/lib/services'

interface NavItem {
  label: string
  to: string
}

interface ProductNavbarProps {
  product: {
    name: ServiceName
    iconSrc: string
  }
  navItems: NavItem[]
  button: {
    text: string
    to?: string
    type?: 'primary' | 'secondary' | 'tertiary' | 'compass' | 'helpdesk'
    trailingIcon?: React.ComponentType
  }
}

const ProductNavbar: FC<ProductNavbarProps> = ({
  product,
  navItems,
  button
}) => {
  const [isSticky, setIsSticky] = useState(false)

  // Handle scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      setIsSticky(offset > 100) // Adjust this value based on your needs
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Smooth scroll to section
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={cn(
      'bg-white border-b border-gray-200 transition-all duration-200 px-4 sm:px-6 lg:px-8',
      isSticky ? 'fixed top-0 left-0 right-0 z-50 shadow-sm' : ''
    )}>
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex items-center justify-between h-16">
          {/* Left - Product Info */}
          <div className="flex items-center gap-3">
            <img 
              src={product.iconSrc} 
              alt={product.name}
              className="w-6 h-6"
            />
            <span className="font-semibold text-gray-900">
              {product.name}
            </span>
          </div>

          {/* Right - Nav Items & Button */}
          <div className="flex flex-row items-center gap-8">
            {/* Nav Items */}
            <div className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <button
                  key={item.to}
                  onClick={() => scrollToSection(item.to)}
                  className="text-sm text-gray-500 hover:text-gray-900"
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* CTA Button */}
            <Button
              type={button.type || 'primary'}
              to={button.to}
              TrailingIcon={button.trailingIcon}
            >
              {button.text}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default ProductNavbar 