import menuBackImg from '../images/menu_back_img.png'
import menuPdf from '../menu/menu.pdf'

const Menu = () => {

  return (
    <div>
      <style>{`
        .hero-bg-mobile {
          background-position: center bottom;
          background-size: cover;
          background-attachment: scroll;
        }
        @media (min-width: 768px) {
          .hero-bg-mobile {
            background-position: center;
            background-size: cover;
            background-attachment: fixed;
          }
        }
      `}</style>
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center overflow-hidden hero-bg-mobile"
        style={{
          backgroundColor: '#00203A',
          backgroundImage: `url(${menuBackImg})`,
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Dark Overlay for Text Readability */}
        <div 
          className="absolute inset-0 z-10 pointer-events-none"
          style={{ backgroundColor: 'rgba(0, 32, 58, 0.3)' }}
        />
        
        <div className="relative z-20 text-center px-4">
          <h2 className="text-2xl md:text-3xl font-normal mb-8" style={{ fontFamily: 'PT Sans, sans-serif', wordSpacing: '0.2em', color: '#FCFBF9' }}>
            Tu Kab Khao –
          </h2>
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight" style={{ fontFamily: 'PT Sans, sans-serif', wordSpacing: '0.15em', color: '#FCFBF9' }}>
            The Menu
          </h1>
          <p className="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto" style={{ fontFamily: 'PT Sans, sans-serif', wordSpacing: '0.15em', color: '#FCFBF9', opacity: 0.9 }}>
            A curated selection of authentic Southern Thai and Phuket dishes, prepared with traditional recipes and local ingredients
          </p>
        </div>
      </section>

      {/* PDF Viewer Section */}
      <section className="py-20" style={{ backgroundColor: '#FCFBF9' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6 text-center">
            <a
              href={menuPdf}
              download="menu.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors shadow-sm"
              style={{ color: '#1A3A66' }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Full Menu (PDF)
            </a>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <iframe
              src={`${menuPdf}#toolbar=1&navpanes=1&scrollbar=1`}
              type="application/pdf"
              className="w-full h-screen min-h-[800px]"
              title="Menu PDF"
              style={{ border: 'none' }}
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Menu

