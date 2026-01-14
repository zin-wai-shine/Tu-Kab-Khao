import { FiMapPin, FiPhone, FiClock } from 'react-icons/fi'
import contactBackgroundImg from '../images/contact_background_img.png'

const Contact = () => {

  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundColor: '#00203A',
          backgroundImage: `url(${contactBackgroundImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Dark Overlay for Text Readability */}
        <div 
          className="absolute inset-0 z-10 pointer-events-none"
          style={{ backgroundColor: 'rgba(0, 32, 58, 0.4)' }}
        />
        
        <div className="relative z-20 text-center px-4">
          <h2 className="text-2xl md:text-3xl font-normal mb-8" style={{ fontFamily: 'PT Sans, sans-serif', wordSpacing: '0.2em', color: '#FCFBF9' }}>
            Tu Kab Khao –
          </h2>
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight" style={{ fontFamily: 'PT Sans, sans-serif', wordSpacing: '0.15em', color: '#FCFBF9' }}>
            Contact Us
          </h1>
          <p className="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto" style={{ fontFamily: 'PT Sans, sans-serif', wordSpacing: '0.15em', color: '#FCFBF9', opacity: 0.9 }}>
            Visit us or get in touch with us
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20" style={{ backgroundColor: '#FCFBF9' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            {/* Contact Information */}
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-4" style={{ color: '#1A3A66' }}>
                  Get in Touch
                </h2>
                <p className="text-base md:text-lg leading-relaxed font-light max-w-2xl mx-auto" style={{ color: '#1A3A66', opacity: 0.7 }}>
                  We'd love to hear from you. Visit us at our location in Phuket Town or reach out to us.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-gradient-to-br from-[#1A3A66] to-[#2F3E8F] p-5 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                    <FiMapPin className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-display font-semibold mb-3" style={{ color: '#1A3A66' }}>
                    Address
                  </h3>
                  <p className="text-base font-light leading-relaxed" style={{ color: '#1A3A66', opacity: 0.7 }}>
                    8 Phangnga Rd, Tambon Talat Yai,<br />
                    Mueang Phuket District, Phuket 83000
                  </p>
                </div>

                <div className="flex flex-col items-center text-center">
                  <div className="bg-gradient-to-br from-[#1A3A66] to-[#2F3E8F] p-5 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                    <FiPhone className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-display font-semibold mb-3" style={{ color: '#1A3A66' }}>
                    Phone
                  </h3>
                    <a
                      href="tel:+66076608888"
                      className="text-base font-light hover:opacity-80 transition-opacity"
                      style={{ color: '#1A3A66', opacity: 0.7 }}
                    >
                      +66 076608888
                    </a>
                </div>

                <div className="flex flex-col items-center text-center">
                  <div className="bg-gradient-to-br from-[#1A3A66] to-[#2F3E8F] p-5 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                    <FiClock className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-display font-semibold mb-3" style={{ color: '#1A3A66' }}>
                    Opening Hours
                  </h3>
                  <p className="text-base font-light leading-relaxed" style={{ color: '#1A3A66', opacity: 0.7 }}>
                    Monday to Sunday<br />
                    11 AM - 8:30 PM
                  </p>
                </div>

              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 text-center" style={{ color: '#1A3A66' }}>
              Find Us
            </h2>
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.109234109146!2d98.38796599999999!3d7.883638900000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x305031faf95129d7%3A0xbfbec4bec0cebdfe!2sTu%20Kab%20Khao%20Restaurant%20Phuket!5e0!3m2!1sen!2sth!4v1768420415330!5m2!1sen!2sth"
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
                title="Restaurant Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
