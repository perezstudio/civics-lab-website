import { FC, ReactNode } from 'react'
import { Link } from '@remix-run/react'
import { cn } from '~/utils/cn'  // We'll create this utility

// Define the available button types
export type ButtonType = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'compass' | 'helpdesk' | 'engage' | 'pathway' | 'advocacyink'

// Define the props interface
interface ButtonProps {
  children?: ReactNode
  leadingIcon?: ReactNode
  TrailingIcon?: React.ComponentType
  to?: string
  type?: ButtonType
  className?: string
  onClick?: () => void
}

const buttonStyles: Record<ButtonType, string> = {
  primary: 'bg-slate-950 text-slate-50 hover:bg-slate-800 border border-transparent',
  secondary: 'bg-slate-100 text-slate-950 hover:bg-slate-200 border border-transparent',
  outline: 'bg-transparent border border-gray-300 text-gray-700 hover:bg-gray-50',
  ghost: 'bg-transparent text-gray-700 hover:bg-gray-100 border border-transparent',
  danger: 'bg-red-600 text-white hover:bg-red-700 border border-transparent',
  compass: 'bg-cyan-500 text-white hover:bg-cyan-600 border border-transparent',
  helpdesk: 'bg-violet-500 text-white hover:bg-violet-600 border border-transparent',
  engage: 'bg-teal-500 text-white hover:bg-teal-600 border border-transparent',
  pathway: 'bg-lime-500 text-white hover:bg-lime-600 border border-transparent',
  advocacyink: 'bg-amber-500 text-white hover:bg-amber-600 border border-transparent',
}

const Button: FC<ButtonProps> = ({
  children,
  leadingIcon,
  TrailingIcon,
  to,
  type = 'primary',
  className,
  onClick,
}) => {
  // Base button styles
  const baseStyles = 'inline-flex items-center justify-center px-4 py-2 text-sm font-semibold rounded-full transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed'

  // Combine base styles with type-specific styles and any custom classes
  const combinedStyles = cn(baseStyles, buttonStyles[type], className)

  // Content of the button including icons and text
  const content = (
    <>
      {leadingIcon && <span className="mr-2">{leadingIcon}</span>}
      {children}
      {TrailingIcon && <span className="ml-2"><TrailingIcon /></span>}
    </>
  )

  // If 'to' is provided, render as Link, otherwise as button
  if (to) {
    return (
      <Link to={to} className={combinedStyles}>
        {content}
      </Link>
    )
  }

  return (
    <button className={combinedStyles} onClick={onClick}>
      {content}
    </button>
  )
}

export default Button 