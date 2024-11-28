import { useState } from 'react'
import { Link } from '@remix-run/react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Button from './ui/button'

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = {
    Products: ['Product 1', 'Product 2', 'Product 3'],
    Solutions: ['Solution 1', 'Solution 2', 'Solution 3'],
    Resources: ['Resource 1', 'Resource 2', 'Resource 3'],
  }

  return (
    <nav className="fixed w-full z-50 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Mobile Layout */}
          <div className="flex w-full items-center justify-between md:hidden">
            {/* Left: Login Button */}
            <Link
              to="/login"
              className="text-gray-800 hover:text-gray-600 px-3 py-2"
            >
              Login
            </Link>

            {/* Center: Logo */}
            <Link to="/" className="absolute left-1/2 -translate-x-1/2">
              <img src="/images/logo.svg" alt="Company Logo" className="h-8 w-auto" />
            </Link>

            {/* Right: Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 hover:text-gray-600"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/">
              <img src="/images/logo.svg" alt="Company Logo" className="h-8 w-auto" />
            </Link>
            
            {/* Desktop Navigation - Left Side */}
            <div className="flex items-center space-x-8">
              {Object.entries(menuItems).map(([category, items]) => (
                <div key={category} className="relative group">
                  <button className="text-gray-800 hover:text-gray-600 px-3 py-2">
                    {category}
                  </button>
                  <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <div className="py-1">
                      {items.map((item) => (
                        <Link
                          key={item}
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          {item}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Navigation - Right Side */}
          <div className="hidden md:flex items-center space-x-4">
            <Button type="ghost" to="/login">Login</Button>
            <Button type="primary" to="/contact">Contact Sales</Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="md:hidden fixed inset-0 bg-slate-900/80 backdrop-blur-sm"
          >
            {/* Close button positioned at the top-right */}
            <div className="absolute top-4 right-4">
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Menu content */}
            <div className="px-2 pt-16 pb-3 space-y-1"> {/* Added pt-16 to account for close button */}
              {Object.entries(menuItems).map(([category, items]) => (
                <div key={category} className="space-y-1">
                  <button className="w-full text-left text-white px-3 py-2">
                    {category}
                  </button>
                  <div className="pl-4 space-y-1">
                    {items.map((item) => (
                      <Link
                        key={item}
                        href="#"
                        className="block text-white px-3 py-2 text-base"
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
              <Button type="ghost" to="/login">Login</Button>
              <Button type="primary" to="/contact">Contact Sales</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default NavBar
