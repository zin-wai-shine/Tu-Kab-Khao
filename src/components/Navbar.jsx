import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FiMenu, FiX } from 'react-icons/fi'
import logo from '../images/logo.svg'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  const isActive = (path) => location.pathname === path
  
  // All pages use the same dark navbar background behavior
  const isDarkPage = true

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/menu', label: 'Menu' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-[#00203A]/30 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 relative">
          {/* Logo - Left */}
          <Link to="/" className="flex items-center z-10">
            <img 
              src={logo} 
              alt="ตู้กับข้าว Tu Kab Khao" 
              className="h-40 w-auto"
              style={{ 
                filter: 'brightness(0) invert(1)'
              }}
            />
          </Link>

          {/* Desktop Navigation and Contact - Right */}
          <div className="hidden md:flex items-center gap-6 z-10">
              <div className="flex items-center space-x-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                  className={`px-4 py-2 font-normal text-sm transition-all duration-200 relative ${
                      isActive(link.path)
                      ? 'font-medium'
                      : 'hover:opacity-100'
                    }`}
                  style={{
                    color: isActive(link.path) ? '#FCFBF9' : '#FCFBF9',
                    opacity: isActive(link.path) ? 1 : 0.8
                  }}
                  >
                    {link.label}
                  {isActive(link.path) && (
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#FCFBF9' }}></span>
                  )}
                  </Link>
                ))}
            </div>
            <Link
              to="/contact"
              className="font-normal text-sm px-6 py-2.5 rounded-full transition-all duration-200 bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/30 hover:border-white/50"
              style={{ color: '#FCFBF9' }}
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden transition-colors z-10 hover:opacity-80"
            style={{ color: '#FCFBF9' }}
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </div>


      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden transition-all duration-300 bg-[#00203A]/30 backdrop-blur-md">
          <div className="px-4 pt-2 pb-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-full font-normal transition-all duration-200 ${
                  isActive(link.path)
                    ? 'text-lg font-medium'
                    : 'hover:opacity-100 hover:bg-white/10 text-base'
                }`}
                style={{
                  color: '#FCFBF9',
                  opacity: isActive(link.path) ? 1 : 0.8
                }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-full text-base font-normal transition-all duration-200 mt-2 bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/30 hover:border-white/50"
              style={{ color: '#FCFBF9' }}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
