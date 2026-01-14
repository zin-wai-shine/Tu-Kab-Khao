import { FiMapPin, FiPhone, FiClock } from 'react-icons/fi'
import logo from '../images/logo.svg'

const Footer = () => {
  return (
    <footer className="relative overflow-hidden" style={{ backgroundColor: '#0F2148' }}>
      {/* Decorative gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/10"></div>
      
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-start">
            {/* Restaurant Info */}
            <div className="space-y-3">
              <div className="pt-1">
                <img 
                  src={logo} 
                  alt="ตู้กับข้าว Tu Kab Khao" 
                  className="h-40 w-auto mb-2"
                  style={{ 
                    filter: 'brightness(0) invert(1)',
                    opacity: 0.9 
                  }}
                />
                <div className="w-16 h-0.5 bg-gradient-to-r from-white to-transparent mb-2"></div>
                <p className="text-sm font-body leading-relaxed max-w-xs text-white" style={{ opacity: 0.9 }}>
                  Authentic Phuket Local & Southern Thai Cuisine
                </p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4 md:text-right md:ml-auto">
              <div>
                <h4 className="text-xl font-display font-semibold mb-4 tracking-wide text-white md:mt-0">
                  Contact Us
                </h4>
                <div className="space-y-3 md:flex md:flex-col md:items-end">
                  <div className="group flex items-center space-x-4 hover:translate-x-1 transition-transform duration-300 md:flex-row-reverse md:space-x-reverse md:space-x-4">
                    <div className="p-2 rounded-lg transition-colors duration-300" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
                      <FiMapPin className="flex-shrink-0 text-white" size={18} />
                    </div>
                    <p className="text-sm font-body leading-relaxed flex-1 transition-colors md:text-right text-white" style={{ opacity: 0.9 }}>
                      8 Phangnga Rd, Tambon Talat Yai,<br />
                      Mueang Phuket District, Phuket 83000
                    </p>
                  </div>
                  
                  <div className="group flex items-center space-x-4 hover:translate-x-1 transition-transform duration-300 md:flex-row-reverse md:space-x-reverse md:space-x-4">
                    <div className="p-2 rounded-lg transition-colors duration-300" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
                      <FiPhone className="flex-shrink-0 text-white" size={18} />
                    </div>
                    <a 
                      href="tel:+66076608888" 
                      className="text-sm font-body transition-colors duration-300 md:text-right text-white hover:opacity-80" 
                      style={{ opacity: 0.9 }}
                    >
                      +66 076608888
                    </a>
                  </div>
                  
                  <div className="group flex items-center space-x-4 hover:translate-x-1 transition-transform duration-300 md:flex-row-reverse md:space-x-reverse md:space-x-4">
                    <div className="p-2 rounded-lg transition-colors duration-300" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
                      <FiClock className="flex-shrink-0 text-white" size={18} />
                    </div>
                    <div className="text-sm font-body leading-relaxed transition-colors md:text-right text-white" style={{ opacity: 0.9 }}>
                      <p>Monday to Sunday<br />11 AM - 8:30 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-12 pt-6">
            <div className="h-px bg-white/30 mb-6"></div>
            <div className="text-center">
              <p className="text-sm font-body text-white" style={{ opacity: 0.8 }}>
                © {new Date().getFullYear()} <span className="font-elegant font-medium">ตู้กับข้าว</span> (Tu Kab Khao). All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
