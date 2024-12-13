import { useState } from 'react'
import { Link } from '@remix-run/react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Button from './ui/button'
import { navigationItems } from '../lib/navigation'

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed w-full z-50 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
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
              {/* Products Dropdown */}
              <div className="relative group">
                <button className="font-semibold text-slate-950 hover:text-slate-600 px-3 py-2">
                  Products
                </button>
                <div className="absolute left-0 mt-2 w-max min-w-[320px] max-w-[600px] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="px-6 py-6 space-y-6">
                    {navigationItems.products.map((product) => (
                      <Link
                        key={product.name}
                        to={product.href}
                        className="block p-3 hover:bg-gray-100 rounded-lg"
                      >
                        <div className="flex items-start space-x-4">
                          <img 
                            src={product.icon} 
                            alt="" 
                            className="flex-shrink-0 w-10 h-10"
                          />
                          <div className="flex-shrink-0">
                            <div className="font-inter font-bold text-slate-950">{product.name}</div>
                            <p className="font-inter font-medium text-sm text-slate-500 whitespace-nowrap">{product.description}</p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Solutions Dropdown
              <div className="relative group">
                <button className="font-semibold text-slate-950 hover:text-slate-600 px-3 py-2">
                  Solutions
                </button>
                <div className="absolute left-0 mt-2 w-[600px] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="p-6">
                    {navigationItems.solutions.map((section) => (
                      <div key={section.heading} className="mb-8 last:mb-0">
                        <h3 className="font-semibold text-sm uppercase text-slate-800 px-3 mb-3">
                          {section.heading}
                        </h3>
                        <div className="grid grid-cols-2 gap-3">
                          {section.items.map((item) => (
                            <Link
                              key={item.name}
                              to={item.href}
                              className="flex items-center space-x-4 px-3 py-2 hover:bg-gray-50 rounded-lg"
                            >
                              <img 
                                src={item.icon} 
                                alt="" 
                                className="w-6 h-6"
                              />
                              <span className="text-slate-900 font-bold text-base">{item.name}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div> */}

              {/* Resources Dropdown
              <div className="relative group">
                <button className="font-semibold text-slate-950 hover:text-slate-600 px-3 py-2">
                  Resources
                </button>
                <div className="absolute left-0 mt-2 w-[600px] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="p-6">
                    <div className="grid grid-cols-2 gap-3">
                      {navigationItems.resources.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className="flex items-center space-x-4 px-3 py-2 hover:bg-gray-50 rounded-lg"
                        >
                          <img 
                            src={item.icon} 
                            alt="" 
                            className="w-6 h-6"
                          />
                          <span className="text-slate-900 font-bold text-base">{item.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>

          {/* Desktop Navigation - Right Side */}
          <div className="hidden md:flex items-center space-x-4">
            {/* <Button type="secondary" to="/login">Login</Button> */}
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
            <div className="px-4 pt-16 pb-6 space-y-6">
              {/* Mobile Products Menu */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Products</h3>
                <div className="space-y-2">
                  {navigationItems.products.map((product) => (
                    <Link
                      key={product.name}
                      to={product.href}
                      className="flex items-start space-x-4 p-3 hover:bg-gray-50 rounded-lg"
                    >
                      <img 
                        src={product.icon} 
                        alt="" 
                        className="w-6 h-6 mt-1"
                      />
                      <div>
                        <div className="font-medium text-gray-900">{product.name}</div>
                        <p className="text-sm text-gray-500">{product.description}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile Solutions Menu */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Solutions</h3>
                <div className="space-y-2">
                  {navigationItems.solutions.map((section) => (
                    <div key={section.heading} className="mb-6 last:mb-0">
                      <h3 className="font-semibold text-gray-900 px-3 mb-2">
                        {section.heading}
                      </h3>
                      <div className="space-y-1">
                        {section.items.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            className="flex items-center space-x-3 px-3 py-2 hover:bg-gray-50 rounded-lg"
                          >
                            <img 
                              src={item.icon} 
                              alt="" 
                              className="w-5 h-5"
                            />
                            <span className="text-gray-700">{item.name}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

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
